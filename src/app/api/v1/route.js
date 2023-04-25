const http = require('http');
const { parse } = require('url');
const { createProxyMiddleware } = require('http-proxy-middleware');
const io = require('socket.io');

const dev = process.env.NODE_ENV !== "production";
const next = require('next')({ dev }); 
const handle = next.getRequestHandler();

const apiProxyProbet = createProxyMiddleware("/api", {
  target: "https://probet.tips",
  changeOrigin: true,
  pathRewrite: { "^/api": "/api" },
});

const apiProxyHoloduke = createProxyMiddleware("/api2", {
  target: "https://static.holoduke.nl",
  changeOrigin: true,
  pathRewrite: { "^/api2": "/footapi" },
});

const apiProxyExtra = createProxyMiddleware("/api3", {
  target: "http://extrawebservice.com",
  changeOrigin: true,
  pathRewrite: { "^/api3": "/sportus/webservice" },
});

next.prepare().then(() => {
  const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname.startsWith("/api")) {
      if (pathname.startsWith("/api2")) {
        apiProxyHoloduke(req, res);
      } else if (pathname.startsWith("/api3")) {
        apiProxyExtra(req, res);
      } else {
        apiProxyProbet(req, res);
      }
    } else {
      handle(req, res, parsedUrl);
    }
  });

  // Create a new WebSocket server
  const websocketServer = io(server);

  websocketServer.on("connection", (socket) => {
    console.log("WebSocket connection established");

    // Send live score updates to the client every 5 seconds
    setInterval(() => {
      const liveFeedData = fetch('https://static.holoduke.nl/footapi/fixtures/feed_livenow.json?lang=gh')
      .then(response => response.json())
      .then(data => socket.emit('liveScoreUpdate', data))
      .catch(error => console.error(error));
    }, 5000);

    // Handle WebSocket disconnection
    socket.on("disconnect", () => {
      console.log("WebSocket connection closed");
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

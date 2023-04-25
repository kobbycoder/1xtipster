const { createServer } = require('http');
const { parse } = require('url');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { Server } = require('socket.io');
const next = require('next');
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
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
app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        if (pathname.startsWith("/api")) {
            if (pathname.startsWith("/api2")) {
                apiProxyHoloduke(req, res);
            }
            else if (pathname.startsWith("/api3")) {
                apiProxyExtra(req, res);
            }
            else {
                apiProxyProbet(req, res);
            }
        }
        else {
            handle(req, res, parsedUrl);
        }
    });
    // Create a new WebSocket server
    const websocketServer = new Server(server);
    websocketServer.on("connection", (socket) => {
        console.log("WebSocket connection established");
        // Send live score updates to the client every 5 seconds
        setInterval(async () => {
            try {
                const response = await fetch('https://static.holoduke.nl/footapi/fixtures/feed_livenow.json?lang=gh');
                const data = await response.json();
                socket.emit('liveScoreUpdate', data);
            }
            catch (error) {
                console.error(error);
            }
        }, 5000);
        // Handle WebSocket disconnection
        socket.on("disconnect", () => {
            console.log("WebSocket connection closed");
        });
    });
    server.listen(port, (err) => {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:3000");
    });
});

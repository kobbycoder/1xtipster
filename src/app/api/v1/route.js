const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiProxyProbet = createProxyMiddleware('/api', {
  target: 'https://probet.tips',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api' },
});

const apiProxyHoloduke = createProxyMiddleware('/api2', {
  target: 'https://static.holoduke.nl',
  changeOrigin: true,
  pathRewrite: { '^/api2': '/footapi' },
});

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname.startsWith('/api')) {
      if (pathname.startsWith('/api2')) {
        apiProxyHoloduke(req, res);
      } else {
        apiProxyProbet(req, res);
      }
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});


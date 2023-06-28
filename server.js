const express = require('express')
const http = require('http')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()

app.use(express.static(path.join(__dirname, '/')))

// Proxy endpoints
app.use('/tipc', createProxyMiddleware({
  target: 'http://127.0.0.1:5000',
  changeOrigin: true,
  // pathRewrite: {
  //     [`^/my-service`]: '',
  // },
}));


http.createServer(app).listen(3000, () => {
  console.log(`server is running on ${3000} port`)
})

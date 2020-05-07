const http = require('http')
// 创建服务器实例
const app = http.createServer()
// 获取控制台参数2输入的端口号
const port = process.argv[2]
if (!port) {
	console.log('请在控制台中输入要绑定的端口号!')
	return false
}
// 监听请求
app.on('request', function (req, res) {
	console.log(req.url)
	var path = req.url
	if (path === '/') {
		res.setHeader('Content-Type', 'text/html;charset=utf-8')
		res.write(`<!DOCTYPE html>
        <html lang="zh-CN">
        <head><link rel="stylesheet" href="/style"></head>
        <body><h1>你好，世界！</h1></body>
        </html>`)
		res.end()
	} else if (path === '/style') {
		res.setHeader('Content-Type', 'text/css;charset=utf-8')
		res.write(`h1{color:red;}`)
		res.end()
	} else {
		res.statusCode = 404
		res.setHeader('Content-Type', 'text/html;charset=utf-8')
		res.write('你要访问的页面不存在!')
		res.end()
	}
})

app.listen(port)
console.log(`服务器启动成功！正在监听${port}端口`)

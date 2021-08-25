const http = require('http');
const fs = require('fs/promises');

http.createServer(async (req, res) => {
  const isFile = req.url.match(/.+\.(jpg|jpeg|png|gif|mp3|svg|css|js)$/);
  
  if (isFile) {
    const file = await fs.readFile(`${__dirname}/dist/${req.url}`)
    
    if (req.url.match(/.+\.js$/)) {
      res.setHeader('Content-Type', 'text/javascript');
    } else if (req.url.match(/.+\.css$/)) {
      res.setHeader('Content-Type', 'text/css');
    }
    
    return res.end(file);
  }
  
  const html = await fs.readFile(`${__dirname}/dist/index.html`);
  
  return res.end(html);
}).listen(3000);
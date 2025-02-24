const http=require('http');
const fs=require('fs/promises');

const server=http.createServer(async (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode=200;
    const myhtml=await fs.readFile('./index.html');
    res.end(myhtml)
});

server.listen(9000,(err)=>{
  if(err)
    console.log("Error ",err);
 else
    console.log("Server running")
})
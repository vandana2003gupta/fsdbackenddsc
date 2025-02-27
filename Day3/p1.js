const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/home'){
        res.end(`<h1>Welcome to Home Page</h1>`);
    }
    else if(req.url==='/about'){
        res.end(`<h1>About Page</h1>`);
    }
    else if(req.url==='/contact'){
        res.end(`<h1>Welocme to Contact Page</h1>`);
    }
    else{
        res.end(`<h1>Page not found</h1>`);
    }
});

server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err);
    else
        console.log("Server started on port 9000");
 
});
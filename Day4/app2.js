const express = require('express');
const fs = require('fs/promises');
const app= express();
app.use(express.json());
let users=[];
const readdata=async ()=>{
    usersdata=await fs.readFile('./data.json','utf8');
    users=JSON.parse(usersdata);
}
const writedata=async ()=>{
    await fs.writeFile('./data.json',JSON.stringify(users));
}

readdata();
app.get('/users',(req,res) =>{
    readdata();
    res.json(users);
})
app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.post('/users',(req,res)=>{
    const {name,age}=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    const newuser={id:newid,name,age}
    users.push(newuser);
    writedata();
    res.status(200).json({message: 'data received!',data:newuser});
});
app.listen(9000,()=>{
    console.log("Server started on port 9000");
    
})
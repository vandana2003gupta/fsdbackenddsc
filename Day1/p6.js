const fs = require('fs');

const write=(data)=>{
    
    fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("Error Writing File",err);
        else
        console.log("File Written Successfully");
    });
}
console.log("before Write")
write("I amd new data");
console.log("after writing")
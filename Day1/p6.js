const fs = require('fs');

const write=(data)=>{
    
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err)
            console.log("Error Writing File",err);
        else
        console.log("File Written Successfully");
    });
}

write("Abhishek");

const fs = require('fs');

fs.unlink("./mydir/data.txt",(err)=>{
    if(err)
        console.log("Err",err)
    console.log("File deleted successfully.");
})
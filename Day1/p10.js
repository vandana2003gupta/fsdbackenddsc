const fs =require('fs');

fs.rmdir("mydir",(err) => {
    if (err)
        console.log(err);
    console.log("Directory deleted successfully.");
 });
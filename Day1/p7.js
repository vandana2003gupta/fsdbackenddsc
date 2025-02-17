const fs=require('fs');
const data="I am appended data"
fs.appendFile("./data.txt",data,(err) => {
    if (err)
        console.log(err);
    console.log("Data appended!");

});



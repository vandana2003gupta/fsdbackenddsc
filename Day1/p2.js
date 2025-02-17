const fs=require('fs');

const data="I am  new file"
fs.writeFileSync("./data.txt",data);
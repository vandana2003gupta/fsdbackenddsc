const fs = require('fs/promises');

const read=async ()=>{
    const data= await fs.readFile('./data.txt', 'utf8');
    console.log(data);
}

read();
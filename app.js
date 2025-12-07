const express =require('express');
const cors=require('cors');
const file=require('fs');
const app=express();
const path=require('path');
app.use(cors());
// console.log(__dirname)
app.use('/images',express.static(path.join(__dirname,'public','images')));
app.get('/',(req,res)=>{
    const filePath=file.readFile('./data.json','utf-8',(err,data)=>{
        res.send(data);
    }
)
})
module.exports=app;
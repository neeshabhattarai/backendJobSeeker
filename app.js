const express =require('express');
const cors=require('cors');
const file=require('fs');
const app=express();
const path=require('path');
app.use(cors());
// console.log(__dirname)
app.use('/images',express.static(path.join(__dirname,'public','images')));
app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, "data.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "File read failed" });
    res.json(JSON.parse(data));
  }
)
})
module.exports=app;
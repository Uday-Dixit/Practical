const http = require('http');
const fs = require('fs');
const a = http.createServer(req, res=>{
    if(req=='/updateuser'){
        const time = new Date();
        fs.writeFile(visitor.log,DataTransfer,(err)=>{
            if(err){
                res.readableEnded('error')
            }
            else{
                date=time;
            }
        })
    }
    else if(req=='/savelog'){
        fs.copyFile('visitor.log','save.log',(err)=>{
            if(err){
                res.end('error')
            }
            else{
                res.end(saved)
            }
        })
    }
    else if(req.method==='GET' && req.url==='/clear.log'){
        fs.writeFile('visitor.log','',(err)=>{
            if(err){
                res.end('error')
            }
            else{
                res.end('all cleared')
            }
        })
    }
}).listen(3000,()=>{
    console.log('Server is running on Port 3000')
})
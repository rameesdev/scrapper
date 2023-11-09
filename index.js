const ytdl = require('ytdl-core');
const fs = require("fs")
const app = require("express")();
const requestOptions = {
  filter: 'audioonly',
  headers: {
    'User-Agent': 'Your App Name',
    'Accept-Language': 'en-IN', // Set the preferred language to English (India)
    'X-Forwarded-For': '103.22.201.23', // Replace with a valid IP address from India
    'X-Geo-IP': 'IN', // Simulate a request from India
  },
};

app.get("/:id",(req,res)=>{
    ytdl(req.params.id, requestOptions)
  .pipe(res);
  const headers = {
    'Content-Type': 'video/mp4',
  };

  res.writeHead(200, headers);
})
app.listen(3000,()=>console.log("SEVER ON AT PORT 80"))


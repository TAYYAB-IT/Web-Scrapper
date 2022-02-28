const express = require('express')
const app=express();
const axios = require('axios')
const cheerio=require('cheerio');
const website="https://www.thenews.com.pk/";

app.get('/',async(req,res)=>{
    axios.get(website).then(async result=>{
        const links=[];
        const $=await cheerio.load(result.data)
       // console.log(result.data)
       
        $('a:contains("Sports")').each((index,element)=>{
          // console.log($(element).text())
           const Title=$(element).text()
           const URL=$(element).attr('href')
            links.push({Title,URL});
        })
        res.json(links);
    })
    
    
})
const port=process.env.PORT ||3000;
app.listen(port,()=>{
    console.log(`Server is listening at PORT ${port}!`)
})

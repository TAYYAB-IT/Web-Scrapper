const express = require('express')
const app=express();
const axios = require('axios')
const cheerio=require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const website="https://www.thenews.com.pk/";

app.get('/news',async(req,res)=>{
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
app.listen(3000,()=>{
    console.log("Server is listening!")
})
//npm i body-parser --look through body of document to fetch the data

const express=require("express");//mpm i express---to install

//native node http module
const https=require("https");//no need to install as its native


const app=express();
const bodyParser=require("body-parser");
const { log } = require("console");
app.use(bodyParser.urlencoded({extended:true}));




// app.get("/",function(req,res){
     
//     //modifying api link according to our use
//     const query="London"
//     const apiKey="8d46343b28b77f685d6f7de3d07f3cdc"
//     const unit="metric"
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid="+apiKey +"&units="+unit //api link
    
//     //getting data from api
    
    
    
//     // const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=8d46343b28b77f685d6f7de3d07f3cdc"  //api link
    
//     https.get(url,function(response){
//         // console.log(response);
//         console.log(response.statusCode);

//         response.on("data",function(data){
//             // console.log(data)              //getting data from api in hex format

//             const weatherData=JSON.parse(data); //to get data in JSON format
//             console.log(weatherData);

//             // const object={
//             //     name: "kumar",
//             //     favfood:"abc",
//             // }

//             // console.log(JSON.stringify(object)) //convert Json to string
            
//              //accessing specific elements from data
//             const temp=weatherData.main.temp
//             console.log(temp);
//              //we can have only 0ne res.send but multiple res.write
//             // res.send("<h1>temp is "+ temp+ "degree</h1>")  //will crash bcz we can have only one res.send request but here is 2.

//             //res.write

//             const weatherDescription=weatherData.weather[0].description
//             const icon=weatherData.weather[0].icon;
//             const imageUrl="https://openweathermap.org/img/wn/" +icon +"@2x.png"

//             res.write("<p> the weather is currently" +weatherDescription+"</p>");
//             res.write("<h1>temp is "+ temp+ "degree</h1>");
            
//             //adding image to website through api
//             res.write("<img src=" +imageUrl+">");
//             res.send();
//         })
//     })
//     // res.send("Server is running up")
// })


app.get("/",function(req,res){
    res.sendFile(__dirname +  "/index.html")
});

app.post("/",function(req,res){
    // console.log(req.body.cityName);
    // console.log("post is received");
    console.log(req.body.cityName);

        //modifying api link according to our use
    const query=req.bodycityName
    const apiKey="8d46343b28b77f685d6f7de3d07f3cdc"
    const unit="metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid="+apiKey +"&units="+unit //api link
    
    //getting data from api
    
    
    
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=8d46343b28b77f685d6f7de3d07f3cdc"  //api link
    
    https.get(url,function(response){
        // console.log(response);
        console.log(response.statusCode);

        response.on("data",function(data){
            // console.log(data)              //getting data from api in hex format

            const weatherData=JSON.parse(data); //to get data in JSON format
            console.log(weatherData);

            // const object={
            //     name: "kumar",
            //     favfood:"abc",
            // }

            // console.log(JSON.stringify(object)) //convert Json to string
            
             //accessing specific elements from data
            const temp=weatherData.main.temp
            console.log(temp);
             //we can have only 0ne res.send but multiple res.write
            // res.send("<h1>temp is "+ temp+ "degree</h1>")  //will crash bcz we can have only one res.send request but here is 2.

            //res.write

            const weatherDescription=weatherData.weather[0].description
            const icon=weatherData.weather[0].icon;
            const imageUrl="https://openweathermap.org/img/wn/" +icon +"@2x.png"

            res.write("<p> the weather is currently" +weatherDescription+"</p>");
            res.write("<h1>temp in " +cityName+ "is" +  temp+ "degree</h1>");
            
            //adding image to website through api
            res.write("<img src=" +imageUrl+">");
            res.send();
        })
    })
    // res.send("Server is running up")
})







app.listen(3000,function(){
    console,console.log("Server is running");
})
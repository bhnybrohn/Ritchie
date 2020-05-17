const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/admin');
//const script = require('./public/script')



const app = express()
const stackPost = [];
//app.use('/', postRoutes);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')))

app.post('/', async(req,res, next)=>{

  // const error =()=>{
  //    script.error;
  // }

 const post = {
     Fullname: req.body.Fullname,
    Mail : req.body.Mail
  }
  try{
    if(Fullname ==='' || Mail ===''){

    }
  const jsonParams = JSON.stringify(post)
  const sentPosts = await jsonParams;
  res.send(sentPosts)
  console.log(sentPosts)
  }
  catch(err){
     res.send({message:err})
  }

})
app.use('/',(req,res,next)=>{
  res.redirect('/success.html')
})


const PORT = process.env.PORT || 3000

app.listen(PORT , console.log(`server started at ${PORT}`) )
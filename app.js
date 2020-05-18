const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
// const postRoutes = require('./routes/admin');
//app.use('/', postRoutes);
// const stackPost = [];

// setting template engine
app.set('view engine', 'ejs');


// configuring the body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

// public folder for static asserts e,g css and images
app.use(express.static(path.join(__dirname, 'public')))

// Post route for the form submission
app.post('/', (req,res)=>{

  // const error =()=>{
  //    script.error;
  // }
  // parsing the form data from the req.body
    const fullname = req.body.fullname
    const mail = req.body.mail

    // you can do you form validation here if invalid trybthrow error
    if(fullname ==='' || mail ===''){
      // throw Error;
    }

    // passing the form data into a post obj
    const post = { fullname,mail}
    
    // trying to pasre strings to JSON
    const jsonParams = JSON.stringify(post)
    
  // after finishing your manipulation with the user data you can render the admin page as you requested or any 
  // page of your liken
  res.render("pages/admin",{...post})
  console.log(jsonParams)
})
// it renders the index page on /index route
app.use('/index',(req,res)=>{
  res.render('pages/index')
});

// it renders the admin page on /admin route
app.use('/admin',(req,res)=>{
  res.render('pages/admin')

});
// it renders the success page on /success route
app.use('/success',(req,res)=>{
  res.render('pages/success')

});

// it renders the 404 page on /404 route
app.use('/404-page',(req,res)=>{
  res.render('pages/404-page')

});
const PORT = process.env.PORT || 3000

app.listen(PORT , console.log(`server started at ${PORT}`) )
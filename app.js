const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')




let opts = {
  "origin": "*",
}

const stackPost = [];
//app.use('/', postRoutes);
app.use(cors(opts))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')))

app.post('/post', async (req, res, next) => {


  res.send("Hello")
  const post = {
    Fullname: req.body.Fullname,
    Mail: req.body.mail
  }
  try {

    console.log(post);

  } catch (err) {
    console.log(err);
  }

})
// app.use('/', (req, res, next) => {
//   res.redirect('/success.html')
// })


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server started at ${PORT}`))
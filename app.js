const express=require("express");
const app =express();
const path=require('path');
const bodyparser=require("body-parser"); 
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const port=8000;

//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
  const contact= mongoose.model('Contact', contactSchema);

//EXPRESS SPECIPIC STUFF
app.use('/static',express.static('static'))
app.use(express.urlencoded())



//PUG SPECIPIC STUFF
app.set('view engine','pug'); //set the tremplate engin as pug
app.set('views',path.join(__dirname,'views')) //set the vikews directory
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug', params)
})

app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug', params)
})

app.post('/contact',(req,res)=>{
    var myData=new contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(404).send("Item was not send to the database")
    });
  
})


app.listen(port,()=>{
    console.log(` the application started successfully on port ${port}`)
})
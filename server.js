require('dotenv').config()//accesing our .env which is accesing our mongodb

const express = require("express")

const app = express()
const PORT = 3000

// const Fruit = require('./models/fruits')//requiring our fruits modele
const Vegetable = require('./models/vegetables')

const reactViews = require('express-react-views')
const mongoose = require ('mongoose')
const methodOverride = require('method-override')
const fruitsController = require("./controllers/fruitController")


// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI,{//connecting to the database
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true
})
mongoose.connection.once("open",() => {
  console.log("connected to mongo")
})



//Engine declaration
app.set('view engine', 'jsx')//giving the extention for the view engine .jsx
app.engine('jsx', reactViews.createEngine())



//Middle Ware
app.use((req,res,next)=>{//uses only for middleware
  console.log("I'm running for all routes")
  console.log('1. MIDDLEWARE');
  next()
})

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//Routes
app.use('/fruits',fruitsController)


app.get("/vegetables", (req, res) => {
    Vegetable.find({},(error, allVegetables)=>{
      if(!error){
        res
          .status(200)
          .render('./vegetables/Index',{
            vegetables:allVegetables
          })
      }else{
        res.status(400).send(error)
      }
    })
    console.log('2.controller');
  })


app.get('/vegetables/new', (req,res)=>{
  res.render('VgNew')
  console.log('2.controller');
})




app.post('/vegetables',(req,res)=>{
  console.log('2.controller');
  //console.log(req.body);//everytime we use 'post' data saves in req.body
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  }else{
    req.body.readyToEat = false
  }
  req.body.new = 'test'

  console.log(req.body);
  
  Vegetable.create(req.body,(error,createdVegetable)=>{
    if(!error){
      res.status(200).redirect('/vegetables')
    }else{
      res.status(400).send(error)
    }
  })

})





//Show
app.get("/vegetables/:id", (req, res) => {
  //   res.send(fruits[req.params.indexOfFruit])

  Vegetable.findById(req.params.id, (error,foundVegetable)=>{
    if(!error){
      res
        .status(200)
        .render('VgShow',{
          vegetable:foundVegetable
        })
    }else{
      res 
          .status(200)
          .send(error)
    }
  })
      // res.render('Show',  vegetables[req.params.indexOfVegetable] )  //.render automaticaly looks to views folder looking for the engine(Show) 
  })



  

app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 

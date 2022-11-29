const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruits')


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

//routes
//Seed Route
router.get('/seed', (req,res)=>{
  Fruit.create([
    {
      name:'grapefruit',
      color:'pink',
      readyToEat:true
  },
  {
      name:'grape',
      color:'purple',
      readyToEat:false
  },
  {
      name:'avocado',
      color:'green',
      readyToEat:true
  }
  
], (err, data)=>{
  res.redirect('/fruits');
})
  
})

//INDEX
router.get("/", (req, res) => {
    // Query model to return all fruits,so we can map around them
    Fruit.find({},(error,allFruits)=>{
      if(!error){
        res.status(200).render('fruits/Index',{
          fruits:allFruits
        })
        console.log(allFruits);
      }else{
        res.status(400).send(error)
      }
    })
    // res.render("./fruits/Index",{fruits})
    console.log('2.controller');
  })
  
  
  //NEW
  router.get('/new', (req,res)=>{
    res.render('fruits/New')
    console.log('2.controller');
  })
  
  
  //Delete
  router.delete("/:id",(req,res)=>{
    Fruit.findByIdAndDelete(req.params.id,(err,data)=>{
      res.redirect("/fruits")
    })
  })


  //Update
  router.put("/:id", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
      if(!err){
        res.status(200).redirect(`/fruits/${req.params.id}`)
      } else {
        res.status(400).send(err)
      }
    })
  })

  
  
  //Create
  //post request('NEW' template)
  router.post('/',(req,res)=>{
    console.log('2.controller');
    //console.log(req.body);//everytime we use 'post' data saves in req.body
    if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true
    }else{
      req.body.readyToEat = false
    }
    // fruits.push(req.body)

    // This does the same thing as the if statement above but with a one line ternary
  //req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

    // Create 1st arg: the actual object we want to insert inside our database
    // Callback 1st arg: error
    // Callback 2nd arg: the newly created object

    Fruit.create(req.body,(error, createdFruit)=>{
      if(!error){
        res.status(200).redirect('/fruits')
      }else{
        res.status(400).send(error)
      }
    })
    // res.redirect('/fruits')
  })


  
  
  
  //EDIT
  router.get('/:id/edit',(req,res)=>{
    Fruit.findById(req.params.id,(err,foundFruit)=>{
      if(!err){
        res.status(200).render('fruits/Edit',{fruit: foundFruit})
      }else{
        res.status(200).send(err)
      }
    })
  })
  

  //Show
  router.get("/:id", (req, res) => {
    //   res.send(fruits[req.params.indexOfFruit])
     // findById 1st arg: the id of the fruit we want to find 
    // Callback 1st arg: error
    // Callback 2nd arg: the found fruit object
        Fruit.findById(req.params.id,(error,foundFruit)=>{
          if(!error){
            res
              .status(200)
              .render('fruits/Show',{
                fruit:foundFruit
              })
        }else{
          res 
            .status(400)
            .send(error)
        }
        // res.render('Show',  Fruit[req.params.id] )  //.render automaticaly looks to views folder looking for the engine(Show) 
      })
    })

    module.exports = router
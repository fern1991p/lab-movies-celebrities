const router = require("express").Router();
const celebrityModel = require("../models/Celebrity.model")
// all your routes here
router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
 });

 router.post("/celebrities/create", (req,res,next)=>{
    let {name, occupation, catchPhrase} = req.body
    celebrityModel.create({name, occupation, catchPhrase})

    //let {name, occupation, catchPhrase} = req.body
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
    res.render("celebrities/new-celebrities");
    }) 
 })
 //create 2 routes
 // POST /GET /movies/new??
 router.get("/movies/new", (req, res, next) =>{
   res.render("movies/new");


 })
 //POST /movies
 router.post("/movies/create", (req, res, next) =>{
   console.log(req.body)
   const {title, genre, plot, cast} = req.body

   MovieModel.create(title, genre, plot, cast)
   .then(() => {
       res.redirect("/movies")
     })
     .catch(() => {
     next("movies/new-movie")
     }) 
     


})
module.exports = router;
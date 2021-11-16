const router = require("express").Router();
const MovieModel = require("../models/Celebrity.model")
// all your routes here
router.get("/movies/create", (req, res, next) => {
    let {title, genre, plot, cast: {types}} = req.body


MovieModel.create( {title, genre, plot, cast: {types}} )
    .then(() => {
      res.redirect("/movies");
    })
    .catch(() => {
    res.render("movies/new-movies");
    })
})

router.get("/movies", (req, res, next) =>{
        movieModel.find()
        .then((movie) => {
            res.render("movies/movies.hbs", {movie})
          })
          
        .catch((err) => {
          next("Failed to find movie", err)
          }) 
    
    })

router.get("/movies/create", (req, res, next) =>{
        CelebrityModel.find()
        .then((celebrities) => {
            res.render("movies/movies.hbs", {celebrities})
          })
          
        .catch((err) => {
          next("Failed to find movie", err)
          }) 
    
    })
//post

router.post("/movies/create", (req,res, next) => {
    console.log(req.body)
    const {title, genre, plot, cast} = req.body
    MovieModel.create ({title,genre, plot, cast})
    .then(()=>{
        res.redirect("/movies")
    })
    .catch(()=>{
        res.render("movies/new-movie")
    })
})

router.get("/movies/:id", (req,res,next)=>{
    let id = req.params.id
    
    MovieModel.findmyId(id)
    .populate("cast")
    .then((movie)=> {
        res.render("movies/movies-details", {movie})
    })
    .catch((err) => {
        next(err)
    })

})











module.exports = router;
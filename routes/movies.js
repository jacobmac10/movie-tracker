var express = require('express');
var router = express.Router();

const {Movie} = require('./../models/movie')

/* GET movies listing. */
router.get('/', function(req, res, next) {
    //let movies = [
      //  {name: 'harry potter'},
        //{name: 'nacho libre'},
        //{name: 'great gatsby'}
    //];

    Movie.findAll()
           .then((movies)=>{
            res.render('movies/index', {
                movies: movies
            });
           })
           .catch((err) =>{
              Console.error('error trying to query movies: ', err);
              res.render('movies/index', {
                  movies : []
              });
           });
   // console.log(movies);

  //res.render('movies/index', {
      //movies: movies
 // });

});

router.post('/delete/:id', (req, res, next)=>{
       let id =req.params.id;

       Movie.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/movies/');
    }).catch((err) => {
        console.error('Error trying to delete Movie', err);
        res.redirect('/movies/');
    });
    //TODO: Handle promise
});
router.get('/create', (req, res, next) => {
    console.log(req.query);

    res.render('movies/form');
});

router.post('/create', (req, res, next) => {
    console.log(req.body);
    let name = req.body.name;

    if (name === undefined || name === null || name === '') {
         return res.render('movies/form', {errorMessage: 'hay campos vacios!'});
    }

    let movie = {
        name,
    };
    Movie.create(movie)
    //caso de exito
    .then(()=>{
        res.redirect("/movies");
    })
    //caso de error
    .catch((err)=>{
        console.error('error trying to create Movie', err);
        //volver a enviar el formulario como html
        res.render('movies/form');
    });
    //res.send('hola');
});
router.get('/update/:id', (req, res, next) => {
    let id = req.params.id;

    Movie.findAll({
        where: {
            id: id
        }
    }).then((movies) => {
        let movie = movies[0];
        res.render('movies/form',{
            movie: movie,
            title: 'update movie'
            });

    }).catch(() => {

    });

    
});

module.exports = router;

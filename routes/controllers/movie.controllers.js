let controller = {};


controller.read = function(req, res, next) {
//   res.send('respond with a resource');

    // let games = [
    //     {name: 'Bloodborne'},
    //     {name: 'Dark Souls 3'},
    //     {name: 'Monster Hunter World'}
    // ];
    // console.log(games);
    // res.render('games/index', {
    //     games: games
    // });

    console.log('Hello World!');

    //SELECT * FROM games;
    Game.findAll()
        .then((games) => {

            // console.log(games);

            //views/games/index.ejs
            res.render('games/index', {
                games: games
            });
        })
        .catch((err) => {
            console.error('Error trying to query games: ', err);
            res.render('games/index', {
                games: []
            });
        });
    
};
module.exports = controller
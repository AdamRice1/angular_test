var users_controller = require('../controllers/controller');
var path = require("path");

module.exports = function(app) {
    app.get('/welcome', users_controller.home);
    app.get('/all_users', users_controller.all_users);
    app.post('/creating', users_controller.create_user)
    app.post('/new', users_controller.create);
    app.get('/product/:id', users_controller.one)
    app.put('/update/:id', users_controller.update);
    app.delete('/product/:id', users_controller.delete);
    app.all('*',(req,res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    })
    }




   
   
    

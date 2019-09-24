var Surveys = require('../models/models').survey;
var Users = require('../models/models').users;
var bcrypt = require('bcryptjs');
module.exports = {

      home: function(req, res){
          Surveys.find()
          .then((data) => {
            res.json(data)
          })
        },
      create_user: function(req, res){
        console.log(req.body)
        const user = new Users();
        user.name = req.body.name;
        user.save()
        .then(data => { res.json(data),
        console.log(data)
        })
        .catch(err => {
          res.json(err)
        })
      },
      create: function(req, res){
        const item = new Surveys();
        console.log(req.body.human)
        console.log(req.body.question)
        //item.human = req.body.human;
        item.question = req.body.question;
        item.option_one = req.body.option_one;
        item.option_two = req.body.option_two;
        item.option_three = req.body.option_three;
        item.option_four = req.body.option_four;
        item.save()
        .then(item => res.json(item),
        console.log(item))
        .catch(err => {
          res.json(err)
        })
      },
      update: function(req, res){
        const { id } = req.params;
        Surveys.findOne({_id: id})
        .then((data) => {
          data.votes = data.votes + 1;
          data.save()
          .then(data => res.json(data))
          .catch(err => {
            res.json(err)
          })
        });
      },
      one: function(req, res){
        const { id } = req.params;
        console.log("This is in the controller", id)
        Surveys.findOne({_id: id})
        .then((data) => {
          console.log(data)
          res.json(data)
        });
      },
      delete: function(req, res){
        const { id } = req.params;
        Surveys.findOne({_id: id})
        .then((data) => {
          data.remove()
          res.json(data)
        });
      },
      all_users: function(req, res){
        Users.find()
        .then((data) => {
          res.json(data)
        });
      },
}


var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
    name: {type: String, minlength: [3, "Not Long Enough!"]},
}, {timestamps: true})

var Survey_Schema = new mongoose.Schema ({
    human: {type: String, default: "Adam"},
    question: {type: String, minlength: [4, "Not Long Enough!"]},
    option_one: {type: String, required: [true, "Option One is Required!"]},
    option_two: {type: String, required: [true, "Option Two is Required!"]},
    option_three: {type: String, required: [true, "Option Three is Required!"]},
    option_four: {type: String, required: [true, "Option Four is Required!"]},
    votes: {type: Number, default: 0},
}, {timestamps: true})

var Surveys = mongoose.model('Surveys', Survey_Schema);
var Users = mongoose.model('Users', UserSchema);



module.exports = {survey: Surveys, users: Users};

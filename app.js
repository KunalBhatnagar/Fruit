//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true ,useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  score: 7,
  review: "Great fruit!!!!!!"
});

const kiwi = new Fruit({
  name: "Kiwi",
  score: 5,
  review: "okok"
});
const orange = new Fruit({
  name: "orange",
  score: 8,
  review: "good"
});
const banana = new Fruit({
  name: "banana",
  score: 6,
  review: "yellow"
});
//Fruit.insertMany([kiwi, orange, banana]);
//fruit.save();
/* Fruit.deleteOne({name:"Apple"},function(err,result){
    console.log(result);
  });*/

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();
  fruits.forEach(function(fruit){
    console.log(fruit.name);
  });
}
});

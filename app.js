const express = require("express");

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose
.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true});


const fruitSchema  = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating: 7,
    review:"Pretty solid as a fruit"
})

fruit.save()
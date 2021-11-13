const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./cities')
const { places, descriptors} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const images1 = [
    {
        url: 'https://res.cloudinary.com/coenscloud/image/upload/v1636739774/YelpCamp/download_4_ryodsy.jpg',
        filename: 'YelpCamp/download_4_ryodsy'
    },
    {
        url: 'https://res.cloudinary.com/coenscloud/image/upload/v1636739774/YelpCamp/download_yq26eb.jpg',
        filename: 'YelpCamp/download_yq26eb'
    }
]

const images2 = [
    {
        url: 'https://res.cloudinary.com/coenscloud/image/upload/v1636739774/YelpCamp/download_3_mpwh9v.jpg',
        filename: 'YelpCamp/download_3_mpwh9v'
    },
    {
        url: 'https://res.cloudinary.com/coenscloud/image/upload/v1636739774/YelpCamp/download_1_pffady.jpg',
        filename: 'YelpCamp/download_1_pffady'
    }
]

const images3 = [
    {
        url: 'https://res.cloudinary.com/coenscloud/image/upload/v1636739774/YelpCamp/download_5_ieu9ub.jpg',
        filename: 'YelpCamp/download_5_ieu9ub'
    }
]

const images4 = [
    {
        url: 'https://res.cloudinary.com/coenscloud/image/upload/v1636739774/YelpCamp/download_2_icjglu.jpg',
        filename: 'YelpCamp/download_2_icjglu'
    }
]

const seedDB = async() => {
    await Campground.deleteMany({})
    let images = []
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        if (Math.floor(Math.random() * 3) + 1 === 1) {
            images = images1
        } else if (Math.floor(Math.random() * 3) + 1 === 2) {
            images = images2
        } else if (Math.floor(Math.random() * 3) + 1 === 3) {
            images = images3
        } else {
            images = images4
        }
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: images,
            price: price,
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            author: '618c11a5b353093930421b61', // Hardcoded to author
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque libero consequatur dolor doloribus non et minima distinctio laborum recusandae dolore, sit enim atque nobis sunt, ad debitis beatae iste?'
        })
        camp.save()
    }
}

seedDB()
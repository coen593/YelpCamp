# YelpCamp
---
YelpCamp is an application where people can upload, view and review information on campsites throughout the world. By default, any visitor can view all campgrounds and reviews visible on the website. After registering (and being logged in) the user can moreover:
- Create new campgrounds, uploading various pieces of information as well as images;
- Edit their own campgrounds, including deleting images and/or uploading new ones;
- Delete their own campgrounds and all information associated with it (i.e. reviews);
- Write reviews on campgrounds
- Delete their own reviews
YelpCamp was created as part of the Web Development Bootcamp by Colt Steele on Udemy.
---
## Run it locally
1. Install MongoDB
2. Create a Cloudinary account and get the API, secret code and cloud name
3. Create a Mapbox account and acquire the Mapbox token
4. Clone repository and install dependencies
`git clone https://github.com/coen593/yelpcamp.git
cd yelpcamp
npm install`
5. Create a .env file and provide:
`SECRET=thisistopsecret
CLOUDINARY_NAME=<cloud name>
CLOUDINARY_KEY=<key>
CLOUDINARY_SECRET=<secret>
MAPBOX_TOKEN=<mapboxtoken>
DB_URL=<mongoDBURL>`
6. Run MongoDB
7. Run `node app.js` in the terminal
8. Go to localhost:3000
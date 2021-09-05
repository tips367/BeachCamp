# BeachCamp

> A Fullstack web app (MongoDB, Express, NodeJS) from the Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp/)

## Live Demo

To see the app in action, go to [http://beachcamp.herokuapp.com/](http://beachcamp.herokuapp.com/)

## Features

* Authentication:
  
  * User / Admin signup

  * User / Admin login

* Authorization:

  * User cannot create new posts without being authenticated

  * One cannot edit or delete posts and comments created by other users

  * Admin can manage all posts and comments

* Manage campground posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload photos for campground (uploaded to the cloudinary)

  * Display campground location on Google Maps
  
* Security:

  * Encrypt passwords and reset tokens
  
  * Prevent NoSQL injections
  
  * Add headers for security (helmet)
  
  * Prevent cross site scripting - XSS

* Flash messages responding to users' interaction with the app

* Responsive web design

### Custom Enhancements

* Update campground photos when editing campgrounds

* Use Helmet to strengthen security
 
## Built with

### Front-end
* HTML5
* CSS3
* [ejs](http://ejs.co/)
* [Google Maps APIs](https://developers.google.com/maps/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [crypto](https://nodejs.org/api/crypto.html#crypto_crypto)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [cloudinary](https://cloudinary.com/)
* [geocoder](https://github.com/wyattdanger/geocoder#geocoder)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms

* [Cloudinary](https://cloudinary.com/)
* [Heroku](https://www.heroku.com/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

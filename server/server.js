const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
// const checkForSession = require('./middlewares/checkForSession');

const connectionString = "postgres://ughesungcupzrr:462f86f32d4fc5bb02c36546fece7ca8c51e00aa6fa3a6f5a740fcf5e42535eb@ec2-54-221-234-62.compute-1.amazonaws.com:5432/deh1lq2hc3henk?ssl=true";

const app = express();
app.use(bodyParser.json());

app.use( session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
// app.use( checkForSession );

const port = 3000;

massive(connectionString).then(db =>{
  app.set("db",db);
  app.listen(port, () => {
    console.log('Started server on port', port);
  });
});
  
  // app.get('/listings', (req, res) => {
  //   const db = req.app.get("db");
  //   const rent = req.query.rent;
  //   console.log(rent)
  //   if(rent < inputedRent){
  //     db.read_listing().then(listings =>{
  //       res.send(listings);
  //     })
  //   }
  //   else {
  //     db.read_listings().then(listings=>{
  //       res.send(listings);
  //     })
  //   }
  // });
  
  app.post('/listings', (req, res) => {
    const newListing = req.body;
    const db = req.app.get("db");
    db.create_listing([
      newListing.propertyName,
      newListing.descripion,
      newListing.address,
      newListing.city,
      newListing.state,
      newListing.zip,
      newListing.img_url,
      newListing.loan,
      newListing.morgage,
      newListing.rent
    ]).then(result=>{
      res.send(result);
    })
  });

  app.post("/signout",(req,res)=>{
    req.session.destroy()
    console.log(req.session)
  })

  app.post("/register", (req,res) => {
    req.session.user = {
      username: req.body.username,
      password: req.body.password
    }
    console.log(req.session)
  })
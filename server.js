
const express = require("express");
// const stripe = require('stripe');
const mongoose = require("mongoose");
const routes = require("./backend/routes");
const app = express();
const PORT = process.env.PORT || 5000;
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const CORS_WHITELIST = require('./backend/constants/frontend.js');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// mongoose.set('debug', function(coll, method, query, doc, options) {
//   let set = {
//       coll: coll,
//       method: method,
//       query: query,
//       doc: doc,
//       options: options
//   };

//   log.info({
//       dbQuery: set
//   });
// });
// Connect to the Mongo DB
console.log(`mongo uri: ${process.env.MONGODB_URI}`)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blockGames" , function(err, db) {
  if (err) {
      console.log('Unable to connect to the mongo server. Please start the server. Error:', err);
  } else {
      console.log('Connected to Server successfully!');
  }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

// const paymentApi = stripe => {
//   app.get('/stripe', (req, res) => {
//     res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//   });

//   app.post('/stripe', (req, res) => {
//     stripe.charges.create(req.body, postStripeCharge(res));
//   });

//   return stripe;
// };

// module.exports = paymentApi;
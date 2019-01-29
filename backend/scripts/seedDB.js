const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/blockGames"
);

const gameSeed = [
 
  {
      
    "title": "Torn Tales",
    "developer": "Unknown",
    "description": "Lead your party of 3 heroes on their quest to repair the torn pages of folklore. Evil has destroyed the tales you love. Hack monsters and slash enemies throughout the Torn Tales in this real time squad based RPG.",
    "image":
      "https://hb.imgix.net/9c5ee6bd2f3919971429c3f93f2cd3d60a9f9535.jpg?auto=compress,format&fit=crop&h=353&w=616&s=7f1ee2f3c5c892a7d4799105184a51ef",
    "key": "9ZNP3-W7X3N-290LW",
    "rating": "T",
    "date": new Date(Date.now())
    
   
  },
  {
    
    "title": "Nihilumbra",
    "developer":"Unknown",
    "description": "Discover the beautiful world of Nihilumbra and join Born on his adventure to find himself whilst trying to escape from his inevitable curse. Born was created from the absolute nothingness: The Void. But somehow he separates himself from the black emptiness and appears in the world.",
    "image":
      "https://nindienexus.net/wp-content/uploads/2018/05/NihilumbraFeatured-1024x576.jpg",
    "key": "RDM2W-Y6J2M-MZIRK",
    "rating":"T",
    "date": new Date(Date.now())
    
  }
];

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

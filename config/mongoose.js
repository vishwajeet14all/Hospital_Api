const mongoose = require('mongoose');

const  db = async () => {
  try {
     const conn = await mongoose.connect("mongodb+srv://new_CSV:new_CSV@cluster0.gbjrkub.mongodb.net/hospital?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

     console.log("MongoDB Connection Established");
  } catch (error) {
     console.log(error);
     process.exit(1);
  }
};

module.exports = db;
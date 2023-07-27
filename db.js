// 1 Import the mongoose module
let mongoose = require("mongoose");

// 2 Setup default mongoose connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// console.log(mongoose.connection.readyState);

module.exports = mongoose;

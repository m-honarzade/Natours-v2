/* eslint-disable prettier/prettier */
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log('db connection successfull');
  });

// const testTour = new Tour({
//   name: 'The Forest Hike',
//   rat: 7.4,
//   price: 200,
// });

// testTour
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log('error occured!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('serveer is runing');
});

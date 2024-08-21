/* eslint-disable prettier/prettier */

const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// *************************************************FIRST Learn
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from server.', app: 'Natours' });
// });
// app.post('/', (req, res) => {
//   res.status(200).send('You can not post to the server');
// });
// ***************************************************** FROM NATOURS API : ROUTES HANDLER
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// // ************* READ TOURS

// const getTours = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     result: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// };

// // *************** READ A TOUR

// const getTour = (req, res) => {
//   console.log(req.params);
//   const id = req.params.id * 1;
//   console.log(typeof id);
//   console.log(id);
//   const tourSelected = tours.find((tour) => tour.id === id);
//   if (!tourSelected)
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid Id',
//     });

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tourSelected,
//     },
//   });
// };

// // ************ UPDATE

// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length)
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid Id',
//     });

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: 'update',
//     },
//   });
// };
// // ************ Delete
// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length)
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid Id',
//     });

//   res.status(204).json({
//     status: 'success',
//     data: {
//       tour: null,
//     },
//   });
// };

// // ************ CREATE
// const createTour = (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   tours.push(newTour);
//   // res.send('done');
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };
// *********************** USER ROUTE HANDLER
// const getUsers = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'this route is not yet defined',
//   });
// };
// const createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'this route is not yet defined',
//   });
// };
// const updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'this route is not yet defined',
//   });
// };
// const getUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'this route is not yet defined',
//   });
// };
// const deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'this route is not yet defined',
//   });
// };
// **************************************************** ROUTE
// app.get('/api/v1/tours', getTours);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
// app.post('/api/v1/tours', createTour);

// const userRouter = express.Router();
// const tourRouter = express.Router();

// // ********* TOUR
// tourRouter.route('/').get(getTours).post(createTour);
// tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

// ********* USER
// userRouter.route('/').get(getUsers).post(createUser);
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
// ************

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// ******************************************************

// const port = 3000;
// app.listen(port, () => {
//   console.log('serveer is runing');
// });

module.exports = app;

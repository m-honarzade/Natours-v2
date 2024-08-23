const mongoose = require('mongoose');
// const dotenv = require('dotenv');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'tour should have a name'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'a Tour must have a duration.'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'a tour must have a group size.'],
  },
  difficulty: {
    type: String,
    required: [true, 'a tour must have a difficulty.'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: { type: Number, default: 0 },
  price: { type: Number, required: [true, 'tour should have a price'] },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'a tour must have a summary.'],
  },
  description: { type: String, trim: true },
  imageCover: {
    type: String,
    required: [true, 'a tour must have a cover Image.'],
  },
  images: [String],
  createdAt: { type: Date, default: Date.now(), select: false },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

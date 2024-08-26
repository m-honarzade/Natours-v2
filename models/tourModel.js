const mongoose = require('mongoose');
const slugify = require('slugify');
// const dotenv = require('dotenv');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'tour should have a name'],
      unique: true,
      maxlength: [40, 'A tour must have less than 40 characters.'],
      minlength: [10, 'A tour must have more than 10 characters.'],
    },
    slug: String,
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
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: ['difficulty must be either: EASY | MEDIUM | DIFFICULT'],
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'rating must be above 1'],
      max: [5, 'rating must be below 5'],
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE : run before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next(); //this refere to document process
});

// tourSchema.pre('save', function (next) {
//   console.log('the document will save');
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

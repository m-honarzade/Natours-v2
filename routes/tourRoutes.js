// const fs = require('fs');
const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkID);

// ********* TOUR
router
  .route('/top-5-bestcheap')
  .get(tourController.aliasTopTours, tourController.getTours);
router.route('/tour-status').get(tourController.getTourStatus);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router.route('/').get(tourController.getTours).post(tourController.createTour);
// .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;

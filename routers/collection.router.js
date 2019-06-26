const express = require('express');
const router = express.Router();

// Controllers
const collectionController = require('../controllers/collection.controller');

router.route('/:id')
  .get(collectionController.getCollectionForID);

router.route('/:id/images')
  .get(collectionController.getImageCollectionForId);

router.route('/:id/translations')
  .get(collectionController.getTranslationsCollectionForId);
module.exports = router;
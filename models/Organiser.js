// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const organiserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
});

// module.exports = mongoose.model('Organiser', organiserSchema);

const Organiser = mongoose.model('Organiser', organiserSchema);

export default Organiser;

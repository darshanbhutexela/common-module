'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  displayName:{
    type: String,
    required : false
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);

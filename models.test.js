const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Food = require('./food');

const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

describe('Food', () => {
  describe('#getName()', () =>{
    it('')
  });
});
const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  }
});
/* methods =  instance of one thing*/
FoodSchema.methods.getName = function() {
  return this.name;
};
/* statics = return every instance of something */
FoodSchema.statics.getAllFoods = function(cb) {
  Food.find({}, (err, food) => {
    if (err) return cb(err);
    cb(food);
  });
};

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
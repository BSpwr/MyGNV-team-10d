const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  subcategory_of: {
    required: true,
    type: [mongoose.Types.ObjectId],
  },
  icon_name: {
    required: true,
    type: String,
  },
  is_lowest_level: {
    required: true,
    type: Boolean,
  },
});

categorySchema.pre('save', function(next) {
  const currDate = new Date();
  // Update the updated_at property
  /* eslint-disable babel/no-invalid-this */
  this.updated_at = currDate;
  // If created_at is not present then create it
  /* eslint-disable babel/no-invalid-this */
  if (!this.created_at) this.created_at = currDate;
  next();
});

module.exports = mongoose.model('Category', categorySchema);

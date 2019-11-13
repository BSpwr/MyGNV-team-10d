const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Create your schema */
const providerSchema = new Schema({
  'Provider Name': String,
  'Services Provided': String,
  'Child & Families': {
    'Adoption': String,
    'Domestic Violence/ Abuse': String,
    'Elder Services': String,
    'Infants': String,
  },
  'Education': String,
  'Financial': {
    'Eviction/ Foreclosure': String,
    'Social Security': String,
    'Utilities': String,
  },
  'Health & Wellness': {
    'Acupuncture': String,
    'Cancer-Related': String,
    'Dental': String,
    'Disability': String,
    'HIV-Related': String,
    'Massage Therapy': String,
    'Medical': String,
    'Mental Health': String,
    'Occupational Therapy': String,
    'Pharmacy': String,
    'Physical Therapy': String,
    'Substance Abuse': String,
    'Vision Care': String,
  },
  'Job': String,
  'Legal': {
    'Civil Liberties/ Social Justice': String,
    'Immigration': String,
    'Law Enforcement': String,
    'Photo Identification': String,
    'Voter Registration': String,
  },
  'Crisis Events': {
    'Crisis Counseling': String,
    'Disaster': String,
    'Shelters': String,
    'Victim Services': String,
  },
  'Transportation': String,
  'Basic Needs': {
    'Clothing': String,
    'Food Assistance': String,
    'Housing': String,
  },
  'Other': {
    'Burial': String,
    'Computer': String,
    'Information and Referral': String,
    'Veterans': String,
    'Veterinary': String,
  },
  'Provider Info': {
    'Eligibility Criteria': String,
    'Address 1': String,
    'Address 2': String,
    'City': String,
    'State': String,
    'Zipcode': String,
    'Contact Name': String,
    'Phone 1 Name': String,
    'Phone 1': String,
    'Phone 2 Name': String,
    'Phone 2': String,
    'Email Address': String,
    'Bus Routes': String,
    'Website': String,
    'Walk in': String,
    'Hours Open': {
      Monday: String,
      Tuesday: String,
      Wednesday: String,
      Thursday: String,
      Friday: String,
      Saturday: String,
      Sunday: String,
    },
    'Appointment Needed': String,
    'Appointment Phone': String,
    'Appointment URL': String,
    'Walk In OK': String,
    'Service Area': String,
    'Application Needed': String,
    'Application Online': String,
    'Application In Person': String,
    'Cost': String,
    'Translation Available': String,
    'United Way Approval': String,
    'Additional Information': String,
    'Year data was last updated': String,
  },
  'Minimum Age': String,
  'Maximum Age': String,
  'Low-Income Household': String,
  'Employment / Education': String,
  'Homelessness': String,
  'City of Gainesville Resident': String,
  'Alachua County Resident': String,
  'Veteran': String,
  'Disaster, Crime and/or Abuse Victim': String,
  'Uninsured': String,
  'Female': String,
  'Male': String,
});

providerSchema.pre('save', function(next) {
  // Sanity check to make sure at least name is provided
  // TODO: Add error checking as needed
  /* eslint-disable babel/no-invalid-this */
  if (this['Provider Name'] === undefined) {
    throw new Error('[DB]: name not provided');
  }

  // Get date object
  const currDate = new Date();
  // Update the updated_at property
  /* eslint-disable babel/no-invalid-this */
  this.updated_at = currDate;
  // If created_at is not present then create it
  /* eslint-disable babel/no-invalid-this */
  if (!this.created_at) this.created_at = currDate;
  // Pass onto next middleware
  next();
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

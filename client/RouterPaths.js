const cleanPath = (path) => {
  return path.replace(/[^a-zA-Z0-9-_]/g, '');
};

const mainPath = '/';
const searchPath = '/search';
const adminPath = '/admin';
const displayProvidersPath = '/providers';

const topLevelCategoriesPath = '/categories';

const basicNeedsPath = topLevelCategoriesPath + '/' + cleanPath('Basic Needs');
const crisisServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Crisis Services');
const familyServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Family Services');
const financePath = topLevelCategoriesPath + '/' + cleanPath('Finance');
const healthServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Health Services');
const legalServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Legal Services');
const otherPath = topLevelCategoriesPath + '/' + cleanPath('Other');

/* eslint-disable no-unused-vars */
const paths = {
  mainPath,
  searchPath,
  adminPath,
  displayProvidersPath,

  topLevelCategoriesPath,

  familyServicesPath,
  financePath,
  healthServicesPath,
  legalServicesPath,
  crisisServicesPath,
  basicNeedsPath,
  otherPath,
};

export default paths;

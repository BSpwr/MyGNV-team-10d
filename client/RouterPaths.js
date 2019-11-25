const cleanPath = (path) => {
  return path.replace(/[^a-zA-Z0-9-_]/g, '');
};

// Given a category, generate a path
const generateCategoryPath = (category, endPath = '') => {
  if (category.subcategory_of.length > 0) {
    return generateCategoryPath(
      category.subcategory_of[0],
      cleanPath(category.name),
    );
  } else {
    return (
      topLevelCategoriesPath + '/' + cleanPath(category.name) + '/' + endPath
    );
  }
};

const mainPath = '/';
const searchPath = '/search';
const adminPath = '/admin';
const displayProvidersPath = '/providers';
const topLevelCategoriesPath = '/categories';

/* eslint-disable no-unused-vars */
const paths = {
  mainPath,
  searchPath,
  adminPath,
  displayProvidersPath,
  topLevelCategoriesPath,

  generateCategoryPath,
};

export default paths;

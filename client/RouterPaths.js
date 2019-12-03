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
const login = '/login';
const register = '/register';
const individualProviderPath = '/provider';
const adminPath = '/admin';
const displayProvidersPath = '/providers';
const topLevelCategoriesPath = '/categories';
const individualPath = '/provider';
const search = '/search';

/* eslint-disable no-unused-vars */
const paths = {
  mainPath,
  login,
  register,
  individualProviderPath,
  adminPath,
  displayProvidersPath,
  topLevelCategoriesPath,
  individualPath,
  generateCategoryPath,
  search,
};

export default paths;

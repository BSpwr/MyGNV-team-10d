import paths from '../../RouterPaths';

const topLevelCategories = [
  {
    categoryName: 'Family\nServices',
    iconName: 'child',
    path: paths.familyServicesPath,
  },
  {
    categoryName: 'Education',
    iconName: 'book',
    path: paths.mainPath,
  },
  {
    categoryName: 'Finance',
    iconName: 'money-check-edit-alt',
    path: paths.financePath,
  },
  {
    categoryName: 'Health\nServices',
    iconName: 'medkit',
    path: paths.healthServicesPath,
  },
  {
    categoryName: 'Jobs',
    iconName: 'clipboard',
    path: paths.mainPath,
  },
  {
    categoryName: 'Legal\nServices',
    iconName: 'clipboard',
    path: paths.legalServicesPath,
  },
  {
    categoryName: 'Crisis\nServices',
    iconName: 'clipboard',
    path: paths.crisisServicesPath,
  },
  {
    categoryName: 'Transport',
    iconName: 'bus-alt',
    path: paths.mainPath,
  },
  {
    categoryName: 'Basic\nNeeds',
    iconName: 'utensils-alt',
    path: paths.basicNeedsPath,
  },
  {
    categoryName: 'Other',
    iconName: 'ellipsis-v',
    path: paths.otherPath,
  },
];

export default topLevelCategories;

const pluginName = 'curriculum';

const permissionNames = {
  curriculumMenu: `${pluginName}.curriculum-menu`,
  curriculum: `${pluginName}.curriculum`,
};

const permissions = [
  {
    permissionName: permissionNames.curriculumMenu,
    actions: ['view'],
    localizationName: { es: 'Curriculum Menu', en: 'Curriculum Menu' },
  },
  {
    permissionName: permissionNames.curriculum,
    actions: ['view', 'update', 'create', 'delete', 'admin'],
    localizationName: { es: 'Curriculum', en: 'Curriculum' },
  },
];

const menuItems = [
  {
    item: {
      key: 'curriculum',
      order: 300,
      iconSvg: '/public/curriculum/menu-icon.svg',
      activeIconSvg: '/public/curriculum/menu-icon.svg',
      label: {
        en: 'Curriculum',
        es: 'Curriculum',
      },
    },
    permissions: [
      {
        permissionName: `${pluginName}.curriculum-menu`,
        actionNames: ['view'],
      },
    ],
  },
  {
    item: {
      key: 'curriculum-new',
      parentKey: `${pluginName}.curriculum`,
      url: '/private/curriculum/new',
      label: {
        en: 'New curriculum',
        es: 'Nuevo curriculum',
      },
    },
    permissions: [
      {
        permissionName: `${pluginName}.curriculum`,
        actionNames: ['create', 'update', 'admin'],
      },
    ],
  },
  {
    item: {
      key: 'curriculum-library',
      parentKey: `${pluginName}.curriculum`,
      url: '/private/curriculum/list',
      label: {
        en: 'Library',
        es: 'Biblioteca',
      },
    },
    permissions: [
      {
        permissionName: `${pluginName}.curriculum-menu`,
        actionNames: ['view'],
      },
    ],
  },
];

module.exports = {
  pluginName,
  permissions: {
    permissions,
    names: permissionNames,
  },
  menuItems,
};

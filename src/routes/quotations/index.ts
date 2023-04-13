export default [
  {
    icon: 'AccountBookOutlined',
    name: '报价中心',
    title: '报价管理',
    path: '/quotations',
    routes: [
      {
        path: 'list',
        name: '报价管理',
        title: '报价管理',
        component: './quotations',
      },
      {
        path: 'edit/:id',
        name: '报价编辑',
        title: '报价编辑',
        component: './quotations/edit',
        hideInMenu: true,
      },
      {
        path: 'editBoom/:id',
        name: '报价编辑',
        title: '报价编辑',
        component: './quotations/editBoom',
        hideInMenu: true,
      },
    ],
  },
];

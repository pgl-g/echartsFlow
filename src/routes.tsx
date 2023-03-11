const routes = [
  {
    path: '/',
    redirect: '/goods/list',
  },
  // {
  //   name: '权限演示',
  //   path: '/access',
  //   component: './Access',
  // },
  {
    name: '商品管理',
    path: '/goods',
    icon: 'https://s.xinc818.com/files/webcila0pxx6pzc2vi7/外围投诉@2x.png',
    routes: [
      {
        name: '供应商商品列表',
        path: '/goods/list',
        component: './goods',
      },
      {
        name: '样衣列表',
        path: '/goods/sample',
        component: './sample',
      },
    ],
  },
  {
    name: '报价中心',
    path: '/quotation',
    icon: 'https://s.xinc818.com/files/webcila0pxx6pzc2vi7/外围投诉@2x.png',
    routes: [
      {
        name: '报价管理',
        path: '/quotation/list',
        component: './quotation',
        // hideChildrenInMenu:true,
      },
      {
        name: '报价编辑',
        path: '/quotation/edit',
        hideInMenu: true,
        component: './quotation/edit',
      },
      {
        name: '报价编辑',
        path: '/quotation/editBoom',
        hideInMenu: true,
        component: './quotation/editBoom',
      },
    ],
  },
  {
    name: '订单管理',
    path: '/order',
    icon: 'https://s.xinc818.com/files/webcila0pxx6pzc2vi7/外围投诉@2x.png',
    routes: [
      {
        name: '销售订单列表',
        path: '/order/sales',
        component: './orderManagement',
      },
      {
        name: '售后订单列表',
        path: '/order/after-sales',
        component: './afterSales',
      },
      {
        name: '采购订单列表',
        path: '/order/purchase',
        component: './purchase',
      },
      {
        name: '采购订单详情',
        hideInMenu: true,
        path: '/order/purchase-detail',
        component: './purchase/detail',
      },
    ],
  },
];

export { routes };

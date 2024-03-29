// 运行时配置
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { Link } from 'umi'
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useState } from 'react';
import './global.less';
import { errorConfig } from './requestErrorConfig';

dayjs.locale('zh-cn');

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate



const { Header } = Layout;

export const layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return {
    // title: '德力西电气监控视频汇聚平台',
    navTheme: 'light',
    headerTheme: 'light',
    token: {
      sider: {
        colorMenuBackground: '#001529',
        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenu: 'rgba(255,255,255,0.75)',
        colorTextMenuSelected: '#fff',
      },
      header: {
        colorBgHeader: '#fff',
      },
      pageContainer: {
        colorBgPageContainer: '#fff',
      },
    },
    // menuHeaderRender: () => (
    //   <Link to={'/nationalOverview'}>
    //     <div className="u-f__center">
    //       Logo
    //     </div>
    //   </Link>
    // ),
    menu: {
      locale: false,
    },
    collapsed: collapsed,
    collapsedButtonRender: () => (
      <div
        className="u-c__gray u-f__end u-cr__p u-mr8"
        onClick={() => setCollapsed(!collapsed)}
      >
        {/* {!collapsed ? (
          <>
            <span className="u-fs12 u-mr5">收起</span>
            <MenuFoldOutlined style={{ color: '#C9CDD4' }} />
          </>
        ) : (
          <>
            <span className="u-fs12 u-mr5">展开</span>
            <MenuUnfoldOutlined style={{ color: '#C9CDD4' }} />
          </>
        )} */}
      </div>
    ),
    siderWidth: 200,
    // disableMobile: true, //禁止自动切换到移动页面
    // contentStyle: {
    //   minHeight: '100vh',
    // },

    // menuExtraRender: false,
    // rightContentRender: false,
    // menuFooterRender: false,
    // footerRender: false,
    // headerRender: () => <span>headerRender</span>,
    // headerContentRender: false,
    // childrenRender: (children: any) => {
    //   // const location = useLocation();
    //   // const isHome = location.pathname === '/home';
    //   return (
    //     <div>
    //       <PageContainer className="PageContainer">
    //         <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    //       </PageContainer>
    //     </div>
    //   );
    // },
  };
};

export const request = {
  ...errorConfig,
};

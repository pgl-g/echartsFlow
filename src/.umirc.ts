import { defineConfig } from '@umijs/max';
// import {routes} from './src/routes';
import zhCN from 'antd/lib/locale/zh_CN';
import routes from './src/routes';
import path from 'path'

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  model: {},
  initialState: {},
  devtool: 'source-map',
  request: {},
  locale: {
    default: 'zh-CN', // 工程默认语言
    antd: true,
    // 默认为true。为true时，会使用`navigator.language`覆盖默认。为false时，则使用默认语言
    baseNavigator: false,
  },
  externals: {
    'AMap': 'AMap',
    'Loca': 'Loca',
    'AMapUI': 'AMapUI',
  },
  antd: {
    configProvider: {
      locale: zhCN,
    },
  },
  alias: {
    dayjs: path.join(__dirname, './node_modules/dayjs'),
  },
  layout: {
    title: '德力西电气监控视频汇聚平台',
    logo: '',
  },
  history: { type: 'hash' },
  routes,
  npmClient: 'yarn',
  chainWebpack: function (config, { env, webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
  proxy: {
    '/api': {
      'target': 'http://192.168.18.46:9366',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    }
  }
});

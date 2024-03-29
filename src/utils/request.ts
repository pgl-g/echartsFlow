import { request as axios, RequestOptions } from '@umijs/max';

export const request = {
  get(url: string, params?: Recordable<any>, options?: RequestOptions) {
    return axios(url, {
      ...options,
      params,
      method: 'GET',
    });
  },
  post(url: string, data?: Recordable<any>, options?: RequestOptions) {
    return axios(url, {
      ...options,
      data,
      method: 'POST',
    });
  },
};

// export const httpRequest = {
//   get(url: string, params?: Recordable<any>, options?: RequestOptions) {
//     return axios(url, {
//       ...options,
//       hasGateway: true,
//       params,
//       method: 'GET',
//     });
//   },
//   post(url: string, data?: Recordable<any>, options?: RequestOptions) {
//     return axios(url, {
//       ...options,
//       hasGateway: true,
//       data,
//       method: 'POST',
//     });
//   },
// };

// import config from '@/config';
// import { navigateToLogin } from '@/utils';
// import type { KunlunResponseProps } from '@xc/kunlun-request';
// import { WebRequest } from '@xc/kunlun-request';
// import { message, notification } from 'antd';
// import Cookies from 'js-cookie';
// const { ajaxBaseUrlKI } = config;

// const codeMessage: any = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

// export const httpRequest = new WebRequest({
//   interceptors: {
//     requestInterceptor(config) {
//       const token =
//         Cookies.get('supplier-token') || localStorage.getItem('supplier-token');

//       if (token) {
//         config.headers = {
//           ...config.headers,
//           token,
//         };
//       }

//       return { ...config };
//     },
//     responseInterceptor(response: KunlunResponseProps) {
//       const { data } = response;
//       if (data.code === 401) {
//         message.error(data.message);
//       }

//       if (data.code === 1000010001 || data.code === 1000010031) {
//         navigateToLogin();
//       }

//       return response.data;
//     },
//     responseInterceptorCatch(error: any, opts: any) {
//       if (opts?.skipErrorHandler) throw error;
//       // 我们的 errorThrower 抛出的错误。
//       if (error.response && error.response.status) {
//         const errorText =
//           codeMessage[error.response.status] || error.response.statusText;
//         const {
//           status,
//           data: { path },
//         } = error.response;
//         notification.error({
//           message: `请求错误 ${status}: ${ajaxBaseUrlKI}${path}`,
//           description: errorText,
//         });
//       } else if (!error.response) {
//         notification.error({
//           description: '您的网络发生异常，无法连接服务器',
//           message: '网络异常',
//         });
//       }
//     },
//   },
// });

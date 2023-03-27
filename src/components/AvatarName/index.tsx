import {Avatar, Dropdown, Menu, message} from 'antd';
import './index.less';
import { history } from 'umi';
import Cookies from "js-cookie";

export default function () {
  const info: any = window.localStorage.getItem('info') || '';
  const JSONInfo = JSON.parse(info || '{}');
  console.log(JSONInfo,'Json')
  return (
    <div className={'avatar-name'}>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu
            items={[
              {
                label: '退出登陆',
                key: 'logout',
                onClick: () => {
                  Cookies.remove('token')
                  Cookies.remove('local_token')
                  localStorage.clear()
                  history.push('/login');
                  console.log('已经退出！！！');
                },
              },
            ]}
          />
        }
        placement="bottom"
      >
        <div>
          <Avatar
            size={'default'}
            // src={'https://hbimg.huabanimg.com/b886a3bc5dc7c0b8863f48b1b062fe15d582dc102633f-NnXKGZ_fw658'}
            // className={styles.user_img}
          />
          <span style={{ color: '#4E5969', marginLeft: 10, fontSize: 14 }}>
            {JSONInfo.supplierName}
          </span>
        </div>
      </Dropdown>
    </div>
  );
}

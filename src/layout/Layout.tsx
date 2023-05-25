import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Layout.scss';
import { useEffect, useState } from 'react';
import { 树格式转换平铺格式 } from '../utils/utils';
import { 路由数组 } from '../route';

const Layout = () => {
  const 路由跳转 = useNavigate();
  const 颜色 = ['#ff5500', ' #2db7f6', '#87d068', '#108ee9', '#1d39c4', 'd4380d'];
  // Math.floor(Math.random()*6)
  const [路由导航数据, 设置路由导航数据] = useState<any[]>([]);
  useEffect(() => {
    const 数据 = 树格式转换平铺格式({
      原始数据: 路由数组,
    });
    设置路由导航数据(数据.filter((item: any) => item.name));
  }, []);

  return (
    <div className={'layout'}>
      <div className={'layout-head'}>
        {树格式转换平铺格式({
          原始数据: 路由数组,
        }).map((item: any) => {
          if (!item.name) {
            return null;
          }
          return <span key={item.path} style={{
            background: 颜色[Math.floor(Math.random() * 颜色.length)],
          }} className={'layout-tag'} onClick={() => {
            路由跳转(item.path);
          }}>
                        {item.name}
            {/*<Link to={item.path}>{item.name}</Link>*/}
            </span>;
        })}

      </div>

      <div className={'layout-content'}>
        <Outlet />
      </div>
    </div>
  );

};
export default Layout;

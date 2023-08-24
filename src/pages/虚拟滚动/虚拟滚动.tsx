import React from 'react';
import './虚拟滚动样式.scss';

const 虚拟滚动 = () => {
  return <div className={'virtual-scrolling'}>
    {new Array(10000).join(',').split(',').map((item, index) => {
      return <div key={index + '11'} className={"card"}> 123</div>;
    })}
  </div>;
};

export default 虚拟滚动;
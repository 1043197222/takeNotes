import React from 'react';
import './动画效果.scss';

const 动画效果 = () => {
  return <div className={'transition-main'}>
    <div>
      <div className={'title'}>1. 背景缓慢变色</div>
      <div className={'case-1'}>123</div>
      <div className={'divider'}></div>
    </div>
    <div>
      <div className={'title'}>2. 背景缓慢变色</div>
      <div className={'case-2'}>
        <div className='ease move'>ease 慢速开始，然后变快，然后慢速结束(默认)</div>
        <div className='liner move'>linear 以相同速度开始至结束</div>
        <div className='ease-in move'>ease-in 以慢速开始的过渡</div>
        <div className='ease-out move'>ease-out 以慢速结束的过渡</div>
        <div className='ease-in-out move'>Ease-In-Out 以慢速开始和结束的过渡</div>
      </div>
    </div>
    <div>
      <div className={'title'}>3. 背景、字体颜色、圆角结合案例2缓慢变色</div>
      <div className={'case-3'}>123</div>

      <div className={'divider'}></div>
    </div>
    <div>
      <div className={'title'}>4. 背景、字体颜色、圆角一起缓慢变色</div>
      <div className={'case-4'}>123</div>

      <div className={'divider'}></div>
    </div>

    <div>
      <div className={'title'}>5. 缩小</div>
      <div className={'case-5'}></div>
      <div className={'divider'}></div>
    </div>
    <div>
      <div className={'title'}>6. 放大</div>
      <div className={'case-6'}></div>
      <div className={'divider'}></div>
    </div>

    <div>
      <div className={'title'}>7. 旋转</div>
      <div className={'case-7'}></div>
      <div className={'divider'}></div>
    </div>
    <div>
      <div className={'title'}>8. 倾斜</div>
      <div className={'case-8'}></div>
      <div className={'divider'}></div>
    </div>
    <div>
      <div className={'title'}>9. 以某个点旋转</div>
      <div className={'case-9'}></div>
      <div className={'divider'}></div>
    </div>

    <div>
      <div className={'title'}>10. 背景旋转覆盖</div>
      <div className={'case-10'}>123</div>
      <div className={'divider'}></div>
    </div>
  </div>;
};

export default 动画效果;
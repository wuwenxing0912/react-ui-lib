import React from 'react';
import ReactDOM from 'react-dom';

import Icon from './icon/icon';

const fn: React.MouseEventHandler = (ele) => {
  console.log(ele)
}

ReactDOM.render(
  <div>
    <Icon name="wechat" className='wechat' 
                        onClick={fn} 
                        onMouseEnter={()=>console.log('enter')}
                        onMouseLeave={()=>console.log('leave')}
                        onTouchStart={()=>console.log('touch')}
                        />
    <Icon name="disable" />
    <Icon name="prohibit" />
    <Icon name="alipay" />
  </div>,
  document.querySelector('#root')
);
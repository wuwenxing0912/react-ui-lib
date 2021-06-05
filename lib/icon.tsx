import React from 'react';
import './importIcons';
import './icon.scss'

interface iconProps {
  name: string;
};

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <svg className='icon'>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
}

export default Icon;
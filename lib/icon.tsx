import React from 'react';
import './importIcons';

interface iconProps {
  name: string;
};

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  );
}

export default Icon;
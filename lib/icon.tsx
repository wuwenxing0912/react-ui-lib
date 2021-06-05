import React from 'react';

interface iconProps {
  name: string;
};

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <span>{props.name}</span>
  );
}

export default Icon;
import React from 'react';

import {Container, Text} from './styles';

type Props = {
  text: string;
  color?: string;
  textColor?: string;
};

const Button: React.FC<Props> = ({text, textColor, ...props}) => {
  return (
    <Container {...props} activeOpacity={0.88}>
      <Text color={textColor}>{text}</Text>
    </Container>
  );
};

export default Button;

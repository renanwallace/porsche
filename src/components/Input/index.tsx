import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TextInput} from './styles';

type Props = {
  iconName?: string;
  path?: string;
};

const getIcon = async (path?: string) => {
  return await import(`react-native-vector-icons/${path}`);
};

const Input = ({iconName, path}: Props) => {
  const Icon = getIcon(path);

  return (
    <Container>
      {iconName && <Icon name={iconName} size={28} ellipsizeMode="tail" />}
      <TextInput />
    </Container>
  );
};

export default Input;

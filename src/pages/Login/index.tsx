import React from 'react';
import {StatusBar} from 'react-native';
import Input from '../../components/Input';

import {Container, SubTitle, Title} from './styles';

const Login: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Container>
        <Title>Welcome Back!</Title>
        <SubTitle>Please enter your account here</SubTitle>
        <Input iconName="email" path="MaterialIcons" />
      </Container>
    </>
  );
};

export default Login;

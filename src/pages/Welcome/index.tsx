import React from 'react';
import {Dimensions, StatusBar} from 'react-native';

import Button from '../../components/Button';

import HeroImage from '../../assets/variety-foods.svg';

import {Container, Title, SubTitle, InfoContainer} from './styles';

const Welcome: React.FC = () => {
  const dimensions = Dimensions.get('window');

  const heroDimensions = {
    width: dimensions.width + (dimensions.width / 100) * 40,
    height: dimensions.height / 2,
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Container>
        <HeroImage
          width={heroDimensions.width}
          height={heroDimensions.height}
        />
        <InfoContainer>
          <Title>Start Cooking</Title>
          <SubTitle>Let’s join our community to cook better food!</SubTitle>
          <Button text={'Get Started'} color={'#1FCC79'} />
        </InfoContainer>
      </Container>
    </>
  );
};

export default Welcome;

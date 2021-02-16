import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.Text`
  margin-vertical: 16px;
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryText};
  text-align: center;
`;

export const SubTitle = styled.Text`
  margin-vertical: 16px;
  font-size: ${(props) => props.theme.fontSize.subTitle};
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondaryText};
  text-align: center;
`;

export const InfoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-horizontal: ${(props) => props.theme.spacing.md};
`;

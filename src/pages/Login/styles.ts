import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${(props) => props.theme.spacing.md};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.title};
  margin-vertical: 5px;
  color: ${(props) => props.theme.colors.primaryText};
  font-weight: bold;
`;

export const SubTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSize.subTitle};
  color: ${(props) => props.theme.colors.secondaryText};
  font-weight: 400;
`;

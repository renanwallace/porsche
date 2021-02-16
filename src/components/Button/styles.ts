import styled from 'styled-components/native';

type ContainerProps = {
  color?: string;
};

type TextProps = {
  color?: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : 'green')};
  border-radius: 32px;
`;

export const Text = styled.Text<TextProps>`
  font-size: ${(props) => props.theme.fontSize.button};
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
`;

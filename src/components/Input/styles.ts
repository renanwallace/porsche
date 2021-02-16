import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding-horizontal: 3px;
  border-radius: 32px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs(() => ({}))`
  height: 50px;
  flex-grow: 1;
`;

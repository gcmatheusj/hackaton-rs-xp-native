import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background: #d8a537;
`;

export const ButtonTheme = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #666;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  height: 46px;
  width: 90%;
  margin-bottom: 10px;
`;

export const ButtonThemeText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;

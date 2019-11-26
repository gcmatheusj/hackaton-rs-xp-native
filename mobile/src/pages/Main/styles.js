import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonTeacher = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  height: 46px;
  width: 90%;
  margin-bottom: 10px;
`;

export const ButtonTeacherText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

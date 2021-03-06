import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Activity = styled.View`
  align-self: stretch;
  height: 65px;
  border-radius: 4px;
  margin-bottom: 20px;
  background: #666;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  color: #fff;
`;

export const ActivityDate = styled.Text`
  color: #fff;
`;

export const AddExercice = styled(RectButton)`
  background: #228b22;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 4px;
`;

export const AddExerciceText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

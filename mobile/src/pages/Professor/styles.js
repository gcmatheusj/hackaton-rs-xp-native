import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #d8a537;
  padding: 20px;
`;

export const ActivityListText = styled.Text`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Lista = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Atividade = styled.View`
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

export const Data = styled.Text`
  color: #fff;
`;

export const AddExercice = styled(RectButton)`
  background: #228b22;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  height: 60px;
  border-radius: 4px;
`;

export const AddExerciceText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

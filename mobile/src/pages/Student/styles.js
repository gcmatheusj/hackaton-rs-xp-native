import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #d8a537;
  padding: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Activity = styled.TouchableOpacity`
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

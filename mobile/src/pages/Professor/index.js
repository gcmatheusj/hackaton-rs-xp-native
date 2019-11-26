import React from 'react';

import { Container, Lista, Atividade, Name, Data } from './styles';

const activity = [
  {
    id: 1,
    name: 'Atividade 1',
    data: '2019-11-26',
  },
  {
    id: 2,
    name: 'Atividade 2',
    data: '2019-11-27',
  },
  {
    id: 3,
    name: 'Atividade 3',
    data: '2019-11-28',
  },
];

export default function Professor({ navigation }) {
  return (
    <Container>
      <Lista
        data={activity}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Atividade onPress={() => navigation.navigate('Detalhes')}>
            <Name>{item.name}</Name>
            <Data>{item.data}</Data>
          </Atividade>
        )}
      />
    </Container>
  );
}

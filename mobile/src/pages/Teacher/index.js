import React from 'react';

import {
  Container,
  List,
  Activity,
  Name,
  ActivityDate,
  AddExercice,
  AddExerciceText,
} from './styles';

const activity = [
  {
    id: 1,
    name: 'Atividade 1',
    date: '2019-11-26',
    teste: 'gostoso',
  },
  {
    id: 2,
    name: 'Atividade 2',
    date: '2019-11-27',
  },
  {
    id: 3,
    name: 'Atividade 3',
    date: '2019-11-28',
  },
  {
    id: 4,
    name: 'Atividade 4',
    date: '2019-11-29',
  },
  {
    id: 5,
    name: 'Atividade 5',
    date: '2019-11-30',
  },
  {
    id: 6,
    name: 'Atividade 6',
    date: '2019-12-01',
  },
];

export default function Teacher({ navigation }) {
  return (
    <Container>
        <List
          data={activity}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Activity onPress={() => navigation.navigate('Detail')}>
              <Name>{item.name}</Name>
              <ActivityDate>{item.data}</ActivityDate>
            </Activity>
          )}
        />
        <AddExercice>
          <AddExerciceText>Adicionar atividade nova</AddExerciceText>
        </AddExercice>
    </Container>
  );
}

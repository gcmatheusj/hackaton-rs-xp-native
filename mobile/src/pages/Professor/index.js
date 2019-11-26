import React from 'react';

import {Container, Lista, Atividade, Nome, Data} from './styles';

const atividades = [
  {
    id: 1,
    nome: 'Atividade 1',
    data: '2019-11-26',
  },
  {
    id: 2,
    nome: 'Atividade 2',
    data: '2019-11-27',
  },
  {
    id: 3,
    nome: 'Atividade 3',
    data: '2019-11-28',
  },
];

export default function Professor({navigation}) {
  return (
    <Container>
      <Lista
        data={atividades}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Atividade onPress={() => navigation.navigate('Detalhes')}>
            <Nome>{item.nome}</Nome>
            <Data>{item.data}</Data>
          </Atividade>
        )}
      />
    </Container>
  );
}

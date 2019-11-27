import React from 'react';
import PropTypes from 'prop-types';

import { Container, List, Activity, Name } from './styles';

const activity = [
  {
    id: 1,
    name: 'HTML/CSS',
  },
  {
    id: 2,
    name: 'JavaScript',
  },
  {
    id: 3,
    name: 'ReactJS',
  },
  {
    id: 4,
    name: 'NodeJS',
  },
  {
    id: 5,
    name: 'React Native',
  },
];

export default function Material({ navigation }) {
  return (
    <Container>
      <List
        data={activity}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Activity onPress={() => navigation.navigate('Detail')}>
            <Name>{item.name}</Name>
          </Activity>
        )}
      />
    </Container>
  );
}

Material.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};


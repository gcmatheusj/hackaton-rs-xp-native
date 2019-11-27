import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonTheme, ButtonThemeText } from './styles';

export default function New({ navigation }) {
  return (
    <Container>
      <ButtonTheme onPress={() => navigation.navigate('Game')}>
        <ButtonThemeText>Jogos</ButtonThemeText>
      </ButtonTheme>

      <ButtonTheme onPress={() => navigation.navigate('Quiz')}>
        <ButtonThemeText>Quiz</ButtonThemeText>
      </ButtonTheme>
    </Container>
  );
}

New.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

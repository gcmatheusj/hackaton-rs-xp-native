import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonTeacher, ButtonTeacherText } from './styles';

export default function Main({ navigation }) {
  return (
    <Container>
      <ButtonTeacher onPress={() => navigation.navigate('Teacher')}>
        <ButtonTeacherText>Professor</ButtonTeacherText>
      </ButtonTeacher>

      <ButtonTeacher onPress={() => navigation.navigate('Student')}>
        <ButtonTeacherText>Aluno</ButtonTeacherText>
      </ButtonTeacher>
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

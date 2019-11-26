import React, {Component} from 'react';

import {Container, ButtonTeacher, ButtonTeacherText } from './styles';

export default class Main extends Component {
  render() {
    return (<Container>
      <ButtonTeacher>
        <ButtonTeacherText>Professor</ButtonTeacherText>
      </ButtonTeacher>
    </Container>);
  }
}

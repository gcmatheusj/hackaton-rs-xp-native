import React from 'react';
import { ListItem, Text, Radio, Right, Left } from 'native-base';
import { Container } from './styles';

export default function Detail() {
  return (
    <Container>
      <ListItem>
        <Left>
          <Text>Daily Stand Up</Text>
        </Left>
        <Right>
          <Radio selected={false} />
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>Discussion with Client</Text>
        </Left>
        <Right>
          <Radio selected />
        </Right>
      </ListItem>
    </Container>
  );
}

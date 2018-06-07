const fs = require('fs');
const { render, components, createElement } = require('../eml');
// import { render, components } from '../eml';

const {
  Eml,
  Flex,
  FlexItem
} = components;

const eml = (
  <Eml>
    <Flex direction='column' gap={20}>
      <FlexItem background={{ color: 'lightblue' }}>
        1234
      </FlexItem>
      <FlexItem background={{ color: 'lightgreen' }}>
        4566
      </FlexItem>
    </Flex>
  </Eml>
);

fs.writeFileSync('./eml.html', render(eml), 'utf8');

console.log(render(eml));
const fs = require('fs');
const { render, components, createElement } = require('../eml');
// import { render, components } from '../eml';

const {
	AutoGrid,
	Eml,
	Flex,
	FlexItem
} = components;

// const eml = (
//   <Eml>
//     <Flex direction='column' gap={20}>
//       <FlexItem background={{ color: 'lightblue' }}>
//         1234
//       </FlexItem>
//       <FlexItem background={{ color: 'lightgreen' }}>
//         4566
//       </FlexItem>
//     </Flex>
//   </Eml>
// );

const eml = (
	<div>
		<AutoGrid>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
		</AutoGrid>
	</div>
);

fs.writeFileSync('./eml.html', render(eml), 'utf8');

console.log(render(eml));
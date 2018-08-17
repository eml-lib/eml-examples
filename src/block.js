const { render, components, createElement } = require('../eml');

const {
	Eml,
	Block,
	Link,
	Flex,
	Image
} = components;

export default (
	<Eml fontFamily="Lato" previewText="Новое письмо!!!" backgroundColor="#ebecee">
		<Block padding={10} backgroundColor="lightblue">
			123
		</Block>
	</Eml>
);

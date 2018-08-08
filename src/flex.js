const { render, components, createElement } = require('../eml');

const {
	Block,
	Link,
	Image,
	AutoGrid,
	AutoGridItem,
	Eml,
	Flex
} = components;

export default (
	<Eml>

		<p>Row</p>

		<Flex>
			<div flex={1}>1</div>
			<div>2</div>
			3
		</Flex>

		<Flex gap={20} background="yellow" padding={20}>
			<Block flex={1} background="red">
				1
			</Block>
			<Block flex={2} background="green" flexAlignSelf="start">
				2
			</Block>
			<Block flex={2} background="blue" flexAlignSelf="end">
				3
			</Block>
			<Block flex={3} background="cyan">
				4
				<br/>
				5
			</Block>
		</Flex>

		<p>Column</p>

		<Flex direction="column">
			<div>1</div>
			2
			<div>3</div>
		</Flex>

		<Flex direction="column" gap={20}>
			<Block background="red">1</Block>
			<Block background="green" flexAlignSelf="start">2</Block>
			<Block background="blue" flexAlignSelf="end">3</Block>
			<Block background="cyan">4</Block>
		</Flex>

	</Eml>
);
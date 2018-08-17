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
		<Flex>
			<Block width={20} height={20} backgroundColor="lightblue">1</Block>
			<Block flex={1} height={40} backgroundColor="pink">2</Block>
			<Block flexAlignSelf="end" width={40} height={20} backgroundColor="lightgreen">3</Block>
		</Flex>

		<p>&nbsp;</p>

		<Flex gap={2}>
			<Block width={20} height={20} backgroundColor="lightblue">1</Block>
			<Block width={20} height={40} backgroundColor="pink">2</Block>
			<Block flexAlignSelf="end" width={20} height={20} backgroundColor="lightgreen">3</Block>
		</Flex>

		<p>&nbsp;</p>

		<Flex gap={12} justifyContent="center">
			<Block width={20} height={20} backgroundColor="lightblue">1</Block>
			<Block width={20} height={40} backgroundColor="pink">2</Block>
			<Block flexAlignSelf="end" width={20} height={20} backgroundColor="lightgreen">3</Block>
		</Flex>

		<p>&nbsp;</p>

		<Flex gap={2} direction="column" alignItems="start">
			<Block width={20} height={20} backgroundColor="lightblue">1</Block>
			<Block flexAlignSelf="end" width={20} height={40} backgroundColor="pink">2</Block>
			<Block flexAlignSelf="stretch" width={20} height={20} backgroundColor="lightgreen">3</Block>
		</Flex>

		<p>&nbsp;</p>

		<Flex gap={20}>
			<Block flex={1} backgroundColor="rgb(250, 250, 250)">1</Block>
			<Block flex={2} backgroundColor="rgb(200, 200, 200)">2</Block>
			<Block flex={3} backgroundColor="rgb(150, 150, 150)">3</Block>
			<Block flex={4} backgroundColor="rgb(100, 100, 100)">4</Block>
			<Block flex={5} backgroundColor="rgb(50, 50, 50)">5</Block>
		</Flex>

		<p>&nbsp;</p>

		<Flex gap={20} direction="column">
			<Block flex={1} backgroundColor="rgb(250, 250, 250)">1</Block>
			<Block flex={2} backgroundColor="rgb(200, 200, 200)">2</Block>
			<Block flex={3} backgroundColor="rgb(150, 150, 150)">3</Block>
			<Block flex={4} backgroundColor="rgb(100, 100, 100)">4</Block>
			<Block flex={5} backgroundColor="rgb(50, 50, 50)">5</Block>
		</Flex>

		<p>&nbsp;</p>

		<Flex gap={20}>
			<Flex gap={20} flex={1} flexAlignSelf="center">
				<Block flex={1} backgroundColor="lightblue">123</Block>
				<Block backgroundColor="pink">123</Block>
			</Flex>
			<Flex gap={20} flex={2} direction="column">
				<Block flex={1} backgroundColor="lightblue">123</Block>
				<Block backgroundColor="pink">123</Block>
			</Flex>
			<Flex gap={20} flex={3} flexAlignSelf="end">
				<Block flex={1} backgroundColor="lightblue">123</Block>
				<Block backgroundColor="pink">123</Block>
			</Flex>
		</Flex>

	</Eml>
);
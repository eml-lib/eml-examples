const { render, components, createElement } = require('../eml');

const {
	Link,
	Image,
	AutoGrid,
	AutoGridItem,
	Eml,
	Flex
} = components;

export default (
	<Eml backgroundColor="#ebecee" foregroundColor="#ffffff">
		<Link to="https://ya.ru" background="red">
			Test0
		</Link>

		<Link to="https://ya.ru">
			Test1
		</Link>

		<Link to="https://ya.ru" noUnderline>
			Test2
		</Link>

		<Link to="https://ya.ru" padding={10} background="cyan">
			Test3
		</Link>

		<Link
			to="https://ya.ru"
			width={200}
			height={100}
			background="blanchedalmond"
			color="red"
			noUnderline
		>
			Test4
		</Link>
	</Eml>
)
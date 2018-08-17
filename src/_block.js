const { render, components, createElement } = require('../eml');

const {
	Eml,
	Block,
	Link,
	Flex,
	Image
} = components;

export default (
	<Eml
		// align="center"
		// maxWidth={780}
		fontFamily="Lato"
		previewText="Новое письмо!!!"
		backgroundColor="#ebecee"
		// foregroundColor="white"
	>
		<Block padding={[15, 70]}>
			<Image src="https://www.avito.ru/files/avito/company/logos/Logo-Avito.png" width={100} height={28} />
		</Block>
		<Flex
			direction="column"
			alignItems="start"
			justifyContent="stretch"
			padding={[40, 70]}
			gap={30}
			background="#344968"
			color="#ffffff"
		>
			Приближается важный праздник
			<Link
				to="https://ya.ru"
				padding={[20, 50]}
				backgroundColor="#feb020"
				color="#ffffff"
				noUnderline
			>
				Урвать скидон
			</Link>
		</Flex>
		<Block padding={[40, 70]}>
			<Flex direction="column" gap={30}>
				В дни, когда принято поздравлять ветеранов и радоваться мирному небу, у вас наверняка будет много дел. Но найдите минуточку, чтобы заглянуть в личный кабинет на Авито. Для чего?
				<Block backgroundColor="#f8f5e2" padding={[20, 30]}>
					Чтобы использовать акцию по-максимому, добавьте объявление прямо сейчас, а 8 или 9 мая подключите «усилители». Действуйте!
				</Block>
				<Link
					to="https://ya.ru"
					padding={[20, 50]}
					backgroundColor="#feb020"
					color="white"
					noUnderline
				>
					Урвать скидон
				</Link>
			</Flex>
		</Block>
	</Eml>
);

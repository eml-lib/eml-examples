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
	<Eml
		align="center"
		maxWidth={780}
		fontFamily="Roboto"
		previewText="Новое письмо!!!"
		backgroundColor="#ebecee" foregroundColor="#ffffff"
	>
		<Flex direction="column" justifyContent="stretch">
			<Block padding={[15, 70]}>
				<Image src="https://www.avito.st/s/build/resources/4e2318cccaff.svg" width={100} height={28} />
			</Block>
		</Flex>

	</Eml>
);

export default (
	<Eml backgroundColor="#ebecee" foregroundColor="#ffffff">
		<Flex
			direction="column"
			justifyContent="stretch"
		>
			<Block padding={[15, 70]}>
				<Image src="logo.jpg" width={100} height={28} />
			</Block>
			<Block flexAlignSelf="stretch">
				<Flex
					direction="column"
					alignItems="start"
					justifyContent="stretch"
					padding={[40, 70]}
					gap={30}
					background="#344968"
					color="white"
				>
					Приближается важный праздник
					<Link
						to="https://ya.ru"
						padding={[20, 50]}
						background="#feb020"
						color="white"
						noUnderline
					>
						Урвать скидон
					</Link>
				</Flex>
			</Block>
			<Block padding={[40, 70]}>
				<Flex direction="column" gap={30}>
					В дни, когда принято поздравлять ветеранов и радоваться мирному небу, у вас наверняка будет много дел. Но найдите минуточку, чтобы заглянуть в личный кабинет на Авито. Для чего?
					<Block background="#f8f5e2" padding={[20, 30]}>
						Чтобы использовать акцию по-максимому, добавьте объявление прямо сейчас, а 8 или 9 мая подключите «усилители». Действуйте!
					</Block>
					<Link
						// flexAlignSelf="start"
						to="https://ya.ru"
						padding={[20, 50]}
						background="#feb020"
						color="white"
						noUnderline
					>
						Урвать скидон
					</Link>
				</Flex>
			</Block>
		</Flex>
	</Eml>
);
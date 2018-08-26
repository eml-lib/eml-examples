const { render, components, createElement } = require('../eml');

const image = fileName => `https://raw.githubusercontent.com/eml-lib/eml-examples/v1.0.0/images/${fileName}`;
// const image = fileName => `./images/${fileName}`;

const {
	Eml,
	Block,
	Link,
	Flex,
	Image
} = components;

export default (
	<Eml fontFamily="Lato" previewText="Новое письмо!!!" backgroundColor="#ebecee">
		<Flex justifyContent="center">
			<Block width={800} backgroundColor="#fff">
				<Block padding={[15, 70]}>
					<Image src={image('logo.jpg')} width={100} height={28} />
				</Block>
				<Flex
					direction="column"
					alignItems="start"
					justifyContent="stretch"
					padding={[40, 70]}
					gap={30}
					backgroundColor="#344968"
					backgroundImage={image('discount-bg.jpg')}
					backgroundPosition="center right"
					backgroundRepeat="no-repeat"
					color="#fff"
				>
					<div>Приближается важный праздник1</div>
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
					<Flex direction="column" gap={30} alignItems="start">
						<div>В дни, когда принято поздравлять ветеранов и радоваться мирному небу, у вас наверняка будет много дел. Но найдите минуточку, чтобы заглянуть в личный кабинет на Авито. Для чего?</div>
						<Block backgroundColor="#f8f5e2" padding={[20, 30]}>
							Чтобы использовать акцию по-максимому, добавьте объявление прямо сейчас, а 8 или 9 мая подключите «усилители». Действуйте!
						</Block>
						<Link
							alignSelf="start"
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
			</Block>
		</Flex>
	</Eml>
);

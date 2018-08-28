const { render, components, createElement } = require('../eml');

const image = fileName => `https://raw.githubusercontent.com/eml-lib/eml-examples/v1.0.0/images/${fileName}`;
// const image = fileName => `./images/${fileName}`;

const {
	Eml,
	Text,
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
					color="#fff"
				>
					<div>Приближается важный праздник</div>
					<Link
						to="https://ya.ru"
						padding={[20, 50]}
						backgroundColor="#feb020"
						color="#fff"
						textDecoration={false}
						borderRadius={3}
					>
						Урвать скидон
					</Link>
				</Flex>
				<Flex direction="column" alignItems="start" gap={30} padding={[40, 70]} borderBottom="1px solid #ebecee">
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
						textDecoration={false}
						borderRadius={3}
					>
						Урвать скидон
					</Link>
				</Flex>
				<Flex direction="column" alignItems="start" gap={20} padding={[30, 70]} fontSize="13px" lineHeight="22px" color="#6e6e6e">
					<Block>Установите мобильное приложение Avito</Block>
					<Flex gap={20}>
						<Link to="https://apple.com">
							<Image src={image('app-store.jpg')} width={151} height={45} />
						</Link>
						<Link to="https://google.com">
							<Image src={image('google-play.jpg')} width={138} height={45} />
						</Link>
					</Flex>
					<Block>
						<Block>Возрастное ограничение 16+</Block>
						<Block>
							Вы получили это письмо, потому что являетесь <Link to="http://ya.ru" color="black">зарегистрированным пользователем</Link> сайта Avito.
						</Block>
						<Block>
							Если у вас возникли вопросы, <Link to="http://ya.ru" color="black">попробуйте найти ответы</Link> в разделе Помощь.
						</Block>
					</Block>
					<Link to="http://ya.ru" color="black" backgroundColor="lightblue">Отписаться от рассылки</Link>
				</Flex>
			</Block>
		</Flex>
	</Eml>
);

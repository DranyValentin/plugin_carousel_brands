# Plugin: carousel_brands
## Плагин делает прямолинейное горизонтальное движение картинок (от 2 до бесконечности)
### Подключение плагина
	1. Подключаем файл carouselbrands.js в HTML код. Например, <script src="/js/carouselbrands.js" async></script>
	2. Вставляем класс, контейнер картинок, .carousel.
	3. Запускаем.

### Структура HTML

	<div class="carousel">
		<img src="imegas_1" alt="#">
		...
		<img src="imegas_n" alt="#">
	</div>
	
### Основные классы
	.carousel - класс контейнер для ваших картинок
	
### Стили
	Используется подход Flexbox.
	Если картинки не движутся они распределяются как: justify-content: 'space-around'.
	Иначе в скрипте устанавливается justify-content: 'flex-start'.

## Plugin make tape the pictures on the move


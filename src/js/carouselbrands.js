(function()
{
	"use strict"

	console.log("File 'carouselBrands.js' work!!! ")

	var step = 0.5,					//Скорость анимации
		currentLeft = [],			//Текущее положение картинок
		startPositionLeft = 0,		//Начальная позиция картинок
		timeAnim = 0,				//Время анимации
		widthImgs = 0,				//Ширина всех картинок
		carouselMove = false,  		//Движение анимации
		initialImgs = []			//Начальное кол-во картинок
	
	var $carousel = document.querySelector('.carousel')
	var $imgs = $carousel.querySelectorAll('img')

	$imgs.forEach(function($el, index) //Определяем макс длину картинок и начальные картинки сохраняем
	{
		widthImgs += $el.clientWidth
		initialImgs[index] = $el.cloneNode()
	})

	function move_carousel() //Запускает анимацию
	{
		// добавляем две первые картинку в конец
		var $img = $carousel.querySelector('img')
		var $imgCloneFirst = $img.cloneNode()
		var $imgCloneSecond = $img.nextElementSibling.cloneNode()
		$carousel.appendChild($imgCloneFirst)
		$carousel.appendChild($imgCloneSecond)
		
		$imgs = $carousel.querySelectorAll('img')

		// выставляем позицию картинок по левому краю
		$imgs.forEach(function($el, index)
		{
			$el.style.left = startPositionLeft + 'px'
			currentLeft[index] = startPositionLeft
		})

		// Анимация
		var requestAnimationFrameCarousel = requestAnimationFrame(doAnim)
		function doAnim()
		{
			if ( $img.offsetLeft <= -$img.clientWidth )
			{
				for (var i = 0; i < currentLeft.length; i++) 
				{
				 	currentLeft[i] = startPositionLeft
				} 

		// Вставляем первый элемент в конец
				$imgCloneFirst = $img.cloneNode()
				$imgCloneFirst.style.left = startPositionLeft + 'px' 
				$carousel.appendChild($imgCloneFirst)

		// Удаляем первый элемент
				$img = $carousel.removeChild($carousel.firstElementChild)
	 		 	$img = $carousel.querySelector('img')

	 	// выстраиваем элементы заново	 		
				$imgs = $carousel.querySelectorAll('img')
				$imgs.forEach(function($el)
				{
					$el.style.left = startPositionLeft + 'px'
				})
			}

			if (  widthImgs < $carousel.clientWidth )
			{
				cancelAnimationFrame(requestAnimationFrameCarousel)
				return
			}

			$imgs.forEach(function($el, index)
			{
				currentLeft[index] -= step
				$el.style.left = currentLeft[index] + 'px'
			})

			timeAnim++

			requestAnimationFrameCarousel = requestAnimationFrame(doAnim)
		}
	}

	function check_relevance_carousel() //Проверяем на необходимость движения анимации
	{
		if ( widthImgs > $carousel.clientWidth )
		{
			$carousel.style.justifyContent = 'flex-start'


			if (!carouselMove)
			{
				move_carousel()
				carouselMove = true
			}
		}
		else
		{
			if (carouselMove)
			{
				$imgs = $carousel.querySelectorAll('img')
				$imgs.forEach(function($el)
				{
					$carousel.removeChild($el)
				})

				for (var i = 0; i < initialImgs.length; i++)
				{
					initialImgs[i].style.left = startPositionLeft
					$carousel.appendChild(initialImgs[i])
				}

				carouselMove = false
			}

			$carousel.style.justifyContent = 'space-around'
		}
	}

	check_relevance_carousel()

	window.addEventListener('resize', function()
	{
		check_relevance_carousel()
	})

})()



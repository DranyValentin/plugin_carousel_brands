(function()
{
	"use strict"

	console.log("file 'index.js' work!!! ")

	var step = 0.5,
		currentLeft = [],
		i = 0
	
	var $carousel = document.querySelector('.carousel')
	var $img = $carousel.querySelector('img')
	var $imgCloneFirst = $img.cloneNode()
	var $imgCloneSecond = $img.nextElementSibling.cloneNode()

	$carousel.appendChild($imgCloneFirst)
	$carousel.appendChild($imgCloneSecond)
	
	var $imgs = $carousel.querySelectorAll('img')

	var startPositionLeft = 0
	var imgWidth = $img.clientWidth
	$imgs.forEach(function($el, index)
	{
		$el.style.left = -$el.offsetLeft + startPositionLeft + 'px'
		currentLeft[index] = startPositionLeft
		startPositionLeft += imgWidth
		console.log($el.style.left)
	})


	var i = 0
	var requestAnimationFrameCarousel = requestAnimationFrame(doAnim)

	function doAnim()
	{
		if ( $img.offsetLeft <= -$img.clientWidth )
		{
			for (var i = 0; i < currentLeft.length-1; i++) {
			 	currentLeft[i] = i * imgWidth
			 } 

			//currentLeft = 0
			startPositionLeft = 0
			$img = $carousel.removeChild($carousel.firstElementChild)
 		 	$img = $carousel.querySelector('img')
 		// 	$imgCloneFirst = $img.cloneNode()
			// $imgCloneSecond = $img.nextElementSibling.cloneNode()

// 			$carousel.appendChild($imgCloneFirst)

// 			//$carousel.firstElementChild.style.left = -$carousel.firstElementChild.offsetLeft + 'px'
 			$imgs = $carousel.querySelectorAll('img')
// 			$imgs.forEach(function($el)
// 			{
// 		//		console.log('До: Left - ' + $el.style.left + '; Offset - ' + $el.offsetLeft)
// 				$el.style.left = startPositionLeft + 'px'
// 				startPositionLeft += imgWidth
// 		//		console.log('После: Left - ' + $el.style.left + '; Offset - ' + $el.offsetLeft)
// 			})
// //			console.log('-----')
		
		}


		if ( i > 500 )
		{
			cancelAnimationFrame(requestAnimationFrameCarousel)
			return
		}

		console.log('-----')
		$imgs.forEach(function($el, index)
		{
			$el.style.left = currentLeft[index] + 'px'
			currentLeft[index] -= step
			console.log($el.style.left)
		})

		i++

		requestAnimationFrameCarousel = requestAnimationFrame(doAnim)

	}



})()



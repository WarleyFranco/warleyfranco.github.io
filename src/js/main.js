// Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-90407813-1', 'auto');
ga('send', 'pageview');

// main Functions
(function() {
	var WTK = {};

	// Utils
	WTK.mobileCheck = function() {
		var el = document.querySelector('body');
		if(el.offsetWidth <= 768) {
			return true;
		} else {
			return false;
		}
	};

	WTK.ityped = function() {
		ityped.init('.ityped', {
			strings: ['HTML5', 'CSS3', 'JavaScript', 'Ecommerce Vtex', 'WordPress', 'Apps Híbridos', 'Sistemas', 'Soluções para web'],
			typeSpeed: 150,
			pause: 1500,
			backDelay: 1000,
			loop: true
		});
	}

	// Verify if is Desktop to get video element.
	WTK.videoSwitch = function() {
		if (!WTK.mobileCheck()) {
			var request = new XMLHttpRequest();
			request.open('GET', '/video-section.html', true);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					document.querySelector('.video-section').innerHTML = request.responseText;
					WTK.ityped();

				} else {
					console.log('Reached the server, but has an error');

				}
			};

			request.onerror = function() {
			  console.log('Request Error')
			};

			request.send();
			
		} else {
			WTK.ityped();
		}
	}

	WTK.headroom = function() {
		var el = document.querySelector('header');
		var headroom = new Headroom(el);
		headroom.init();
	}

	WTK.menuClick = function() {
		var itens = document.querySelectorAll('.menu-link');
		for (var i = 0; i < itens.length; i++) {
			itens[i].addEventListener('click', function() {
				document.getElementById('menu-toggle').checked = false;
			});
		}
	}

	// WTK INIT
	WTK.init = function() {
		console.log('WTK Initialized');
		WTK.videoSwitch();
		WTK.headroom();
		WTK.menuClick();
	};

	WTK.init();

})();

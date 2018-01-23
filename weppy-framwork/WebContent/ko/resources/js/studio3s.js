
!window.STUDIO3S && $(function() {

	var $window = $(window),
		$html = $('html'),
		$body = $('body'),

		$wrap = $('#wrap'),
		$header = $('#header'),

		$navbutton = $header.find('button.btn-menu'),

		$spotarea = $('.contents-inner .spot'),

		$topbutton = $('.btn-go-top'),

		areawidth = 0,
		areaheight = 0,

		isie = $.browser.ie,
		iswebkit = $.browser.webkit,
		ismobileview = false,
		isindex = false,

		resizefunctions = [];


	// index
	if ($('.page-navigation').length) {
		isindex = true;
		indexcontrol = indexcontrol();
	}

	// block scrolling via gesture event
	$html.on({'gesturestart': function() {}});

	// initialize header
	headercontrol = headercontrol();

	$topbutton.on({click: function(e) {
		smoothscrolltop(0);
		e.preventDefault();
	}});

	// business > solutions slider
	$('.solution-list').each(function() {

		var $box = $(this),
			$sliderbox = $('<div class="slider" />'),
			$listbox = $box.find('.list').detach(),
			$items = $listbox.children(),
			$prevbutton = $box.find('.btn-prev'),
			$nextbutton = $box.find('.btn-next'),
			$pagingbox = $box.find('.page-navigation-horizon ul'),
			numdisplay = 0, numitems = $items.length;

		$sliderbox.insertBefore($pagingbox.parent());
		$prevbutton.on({click: function(e) {
			$sliderbox.xlider('prev');
			e.preventDefault();
		}});
		$nextbutton.on({click: function(e) {
			$sliderbox.xlider('next');
			e.preventDefault();
		}});
		$pagingbox.on('click', 'a', function(e) {
			$sliderbox.xlider('change', parseInt(this.innerHTML)-1);
			e.preventDefault();
		});
		resizefunctions.push(resize);

		function getnumdisplay() {
			var boxwidth, itemwidth;
			$listbox.appendTo($sliderbox);
			boxwidth = $listbox[0].offsetWidth;
			itemwidth = $items[0].offsetWidth;
			$listbox.detach();
			return Math.min(10, Math.floor(boxwidth/(itemwidth+4))*2);
		}

		function onsliderchange(page) {
			$prevbutton.decideClass('on', page != 0);
			$nextbutton.decideClass('on', Math.ceil(numitems/numdisplay)-1 > page);
			$paging.removeClass('on').eq(page).addClass('on');
		}

		function resetlist() {
			var _$listbox, paginghtml = [], i, j = 0;
			$sliderbox.trigger('xlider-remove').empty();
			for (i = 0; i < numitems; i++) {
				if (i%numdisplay == 0) {
					_$listbox = $('<ul class="list" />').appendTo($sliderbox);
					paginghtml.push('<li><a href="#">'+ (++j) +'</a></li>');
				} else if (i%(numdisplay/2) == 0) {
					$('<br>').appendTo(_$listbox);
				}
				$($items[i].cloneNode(true)).appendTo(_$listbox);
			}
			$pagingbox[0].innerHTML = paginghtml.join('');
			$paging = $pagingbox.find('a');
			$sliderbox.xlider({onChange: onsliderchange});
			onsliderchange(0);
		}

		function resize() {
			var _numdisplay = !ismobileview ? 10 : getnumdisplay();
			if (numdisplay != _numdisplay) {
				numdisplay = _numdisplay;
				resetlist();
			}
		}

	});

	$window.on({scroll: scroll, resize: resize});

	resize();


	function headercontrol() {

		var $inner = $header.find('.header-inner'),
			$closebutton = $header.find('.btn-menu-close'),
			$dimmed = $header.find('.dimmed');


		$navbutton.on({click: function() {
			$inner.addClass('open');
			$dimmed.addClass('show');
		}});

		$closebutton.on({click: function() {
			$inner.removeClass('open');
			$dimmed.removeClass('show');
		}});


		function scroll(scrolltop, maxscrolltop) {
			if (!isindex) {
				if (scrolltop > 295 && !$header.hasClass('fixed')) {
					$header.addClass('fixed');
				} else if (295 > scrolltop && $header.hasClass('fixed')) {
					$header.removeClass('fixed');
				}
			}
		}

		function resize(index) {
		}

		return {
			resize: resize,
			scroll: scroll
		};

	};

	function indexcontrol() {

		var $contents = $('#contents'),
			$articles = $contents.find('> article'),

			$pagelinkbox = $wrap.find('.page-navigation'),
			$pagelinks = $pagelinkbox.find('a'),

			darkarticles = [0, 1, 1],

			pagepositiontimer = null,
			ismoving = false,
			scrollbargrabbing = false,

			currentindex = 0,
			numarticles = $articles.length;



		$header.find('h1 a').on({click: function(e) {
			smoothscrolltop(0);
			e.preventDefault();
		}});

		$articles.each(function(i) {
			var $article = $(this);
			$articles[i] = $article;
		});

		$contents.find('.page-article1 .img1 img').wrap('<span />');
		$contents.find('.page-article1 h2').each(function() {
			var texts = this.innerHTML.split(''),
				html = [], pass = false, i = 0;
			for (; i < texts.length; i++) {
				if (texts[i] == '<') {
					pass = true;
				}
				html.push(pass || texts[i] == ' ' ? texts[i] : '<span><span>'+ texts[i] +'</span></span>');
				if (texts[i] == '>') {
					pass = false;
				}
			}
			this.innerHTML = html.join('');
			$(this).find('span span').each(function(i) {
				this.style.transitionDelay = i*0.015 +'s';
			})
		});

		$contents.find('.page-article4').each(function() {

			var $article = $(this),
				$slider = $article.find('.inner > ul'),
				$paging = $article.find('.page-navigation-horizon a');

			$paging.on({click: function(e) {
				$slider.trigger('xlider-change', {to: $paging.index(this)});
				e.preventDefault();
			}});

			$slider.xlider({
				onChange: function(page) {
					$paging.removeClass('on').eq(page).addClass('on');
				}
			});

		});

		$pagelinks.on('click', changepage);

		$body.on((function() {

			var e, deltax, deltay,
				lastmovedtime = 0;

			function wheel(_e) {
				if (!ismobileview) {
					e = _e.originalEvent,
					deltax = e.deltaX !== undefined ? e.deltaX : e.wheelDeltaX || 0,
					deltay = e.deltaY !== undefined ? e.deltaY : e.wheelDeltaY !== undefined ? e.wheelDeltaY : e.detail || e.wheelDelta*-1;
					if (!ismoving && Math.abs(deltay) > 5 && new Date().getTime()-lastmovedtime > 100) {
						deltay != 0 && changepage(Math.max(0, Math.min(numarticles-1, currentindex+(deltay > 0 ? 1 : -1))));
						lastmovedtime = new Date().getTime();
					}
					_e.preventDefault();
				}
			}

			return 'onwheel' in document ? {'wheel': wheel} : {'mousewheel DOMMouseScroll': wheel};

		})());

		$window.on({
			mousedown: function(e) {
				if (e.clientX > $wrap[0].offsetWidth) {
					scrollbargrabbing = true;
				}
			},
			mouseup: function() {
				scrollbargrabbing = false;
				!ismobileview && setpageposition();
			}
		});


		function changepage(e) {
			var index = typeof(e) == 'number' ? e : $pagelinks.index(this);
			currentindex = index;
			setpageposition();
			e.preventDefault && e.preventDefault();
		}

		function focuspagelink(index) {
			if (currentindex != index) {
				$pagelinks.removeClass('on').eq(index).addClass('on');
				currentindex = index;
			}
		}

		function setvisible($article, visibility, show) {
			if (visibility && !$article.hasClass('visible')) {
				$article.addClass('visible').trigger('visible');
			} else if (!visibility && $article.hasClass('show')) {
				$article.removeClass('visible').removeClass('show').trigger('invisible');
			}
			if (show && !$article.hasClass('show')) {
				$article.addClass('show').trigger('show');
			}
		}

		function setpageposition() {
			var newscrolltop = !ismobileview ? areaheight*currentindex : Math.min(getscrollheight()-areaheight, $articles[currentindex][0].offsetTop);
			if (getscrolltop() != newscrolltop) {
				ismoving = true;
				if (ismobileview) {
					smoothscrolltop(newscrolltop, 1500, function() {
						ismoving = false;
					});
				} else {
					$wrap._animate({y: -newscrolltop, duration: 1500, easing: 'easeInOutQuart', force3D: true,
						step: function() {
							scrolltop = -$wrap._css('y') || 0;
							(iswebkit ? $body : $html)[0].scrollTop = scrolltop;
							onscroll(scrolltop);
						},
						complete: function() {
							ismoving = false;
						}
					});
				}
			}
		}

		function setpagepositiontimer() {
			clearpagepositiontimer();
			if (!ismobileview) {
				pagepositiontimer = setTimeout(setpageposition, 500);
			}
		}

		function clearpagepositiontimer() {
			clearTimeout(pagepositiontimer);
		}

		function onscroll(scrolltop, maxscrolltop) {

			var _currentindex = Math.floor((scrolltop+areaheight/2)/areaheight),
				showbase = areaheight-areaheight*0.33, blocktop, i = 0;

			for (; i < numarticles; i++) {
				blocktop = $articles[i][0].getBoundingClientRect().top;
				!isie && $articles[i].children().eq(0)._css({y: -blocktop/2, force3D: true});
				if ((0 >= blocktop && blocktop > -showbase) || (blocktop > 0 && showbase > blocktop)) {
					$articles[i].addClass('show');
				} else if ((0 >= blocktop && -areaheight >= blocktop) || (blocktop > 0 && blocktop >= areaheight)) {
					$articles[i].removeClass('show');
				}
			}

			if (!isie) {
				//$header._css('y', scrolltop);
				$pagelinkbox._css('y', scrolltop);
			}

			focuspagelink(_currentindex);

			$body.decideClass('bg-dark', darkarticles[_currentindex]);

			!scrollbargrabbing && setpagepositiontimer();

		}

		function onmscroll(scrolltop, maxscrolltop) {

			var blocktop, blockheight,
				visiblepercent, visibleheight, visiblebase,
				_currentindex = 0, toparticleindex = 0, i = 0;

			for (; i < numarticles; i++) {

				blockheight = $articles[i][0].offsetHeight;

				if (i == 0) {
					blocktop = $articles[i][0].offsetTop-scrolltop;
					visiblepercent = 1-((blockheight+blocktop)/blockheight);
				} else {
					blocktop = $articles[i][0].getBoundingClientRect().top;
					visiblepercent = -(blocktop-areaheight)/(areaheight+blockheight);
				}
				if (areaheight/2 > blocktop) {
					_currentindex = i;
				}
				if (0 >= blocktop) {
					toparticleindex = i;
				}

				visiblebase = Math.min(blockheight*0.33, areaheight*0.33);
				visibleheight = Math.min(areaheight, 0 >= blocktop ? blockheight+blocktop : Math.min(blockheight, areaheight-blocktop));
				setvisible($articles[i], ((i == 0 && visiblepercent >= 0) || visiblepercent > 0) && 1 > visiblepercent, visibleheight >= visiblebase);

			}

			focuspagelink(_currentindex);

			$body.decideClass('bg-dark', darkarticles[toparticleindex]);

		}

		function resize() {
			$body.css('height', areaheight*numarticles);
			ismoving = false;
			clearpagepositiontimer();
		}

		return {
			scroll: function(scrolltop, maxscrolltop) {
				if (ismobileview) {
					onmscroll(scrolltop, maxscrolltop);
				} else {
					if (!ismoving) {
						$wrap._stop()._css({y: -scrolltop});
						onscroll(scrolltop);
					}
				}
			},
			resize: resize
		}

	};


	function getscrolltop() {
		return $html[0].scrollTop || $body[0].scrollTop || 0;
	}

	function getscrollheight() {
		return Math.max($body[0].scrollHeight, $html[0].scrollHeight);
	}

	function smoothscrolltop(v, time, callback) {
		$('html, body')._animate({scrollTop: v}, {queue: false, duration: time || 1000, easing: 'easeInOutQuart', complete: callback || function() {}});
	}

	function scroll() {

		var scrolltop = getscrolltop(),
			maxscrolltop = getscrollheight()-areaheight;

		headercontrol.scroll && headercontrol.scroll(scrolltop, maxscrolltop);
		indexcontrol.scroll && indexcontrol.scroll(scrolltop, maxscrolltop);

		if (ismobileview && !isindex && $spotarea.length) {
			$topbutton.decideClass('show', scrolltop > $spotarea[0].offsetHeight);
		}

	}

	function resize(isinitialize) {

		ismobileview = !!$navbutton[0].offsetWidth;
		$html.decideClass('mobile-view', ismobileview);

		areawidth = $wrap[0].offsetWidth;
		areaheight = $window.height();

		headercontrol.resize && headercontrol.resize();
		indexcontrol.resize && indexcontrol.resize();

		$.each(resizefunctions, function() {
			this();
		});

		scroll();

	}

	$header.find('select').on({change: function() {
		var url = this.value;
		$(this).val("");
		window.location.href = url;
	}});

	window.STUDIO3S = {};

});
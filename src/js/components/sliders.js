import Swiper, { Navigation, Pagination, FreeMode} from "swiper"; 
Swiper.use([Navigation, Pagination, FreeMode]); 



const partnersSlider = new Swiper(".partners__slider", { 
  speed: 600,
  slidesPerView: 1, 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  navigation: {
    nextEl: '.partners__btn--next',
    prevEl: '.partners__btn--prev',
  },
  breakpoints: {
    1034: {
      slidesPerView: 4, 
    },
    792: {
      slidesPerView: 3, 
    },
    576: {
      slidesPerView: 2,
    }
  }
});

const homeSlider = new Swiper(".home__slider", { 
    speed: 600,
    slidesPerView: 1, 
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    }
});

const tariffsSlider = new Swiper(".tariffs__slider", { 
  speed: 600,
  slidesPerView: 1.5, 
  slidesPerGroup: 1,
  spaceBetween: 13,
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  breakpoints: {
    1034: {
      slidesPerView: 5,
      slidesPerGroup: 5, 
      freeMode: true,
    },
    792: {
      slidesPerView: 3, 
      slidesPerGroup: 3, 
    },
    576: {
      slidesPerView: 2,
    }
  }
});

const homeTariffsSlider = new Swiper(".home-tariffs__slider", { 
  speed: 600,
  slidesPerView: 1.5, 
  slidesPerGroup: 1,
  spaceBetween: 13,
  loop: true,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  breakpoints: {
    1034: {
      slidesPerView: 5,
      slidesPerGroup: 5, 
      freeMode: true,
    },
    792: {
      slidesPerView: 3, 
      slidesPerGroup: 3, 
    },
    576: {
      slidesPerView: 2,
    }
  }
});

const businessTariffsSlider = new Swiper(".business-tariffs__slider", { 
  speed: 600,
  slidesPerView: 1.5, 
  slidesPerGroup: 1,
  spaceBetween: 13,
  loop: true,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  breakpoints: {
    1034: {
      slidesPerView: 5,
      slidesPerGroup: 5, 
      freeMode: true,
    },
    792: {
      slidesPerView: 3, 
      slidesPerGroup: 3, 
    },
    576: {
      slidesPerView: 2,
    }
  }
});

/* const mobSlider = document.querySelector('.news__inner');

let myMobSwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && mobSlider.dataset.mobile == 'false') {
		myMobSwiper = new Swiper(mobSlider, {
			slidesPerView: 1.1,
      freeMode: true,
			slideClass: 'news__item',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      }
		});

		mobSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		mobSlider.dataset.mobile = 'false';
		if (mobSlider.classList.contains('swiper-initialized')) {
			myMobSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
}); */
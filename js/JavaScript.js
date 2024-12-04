document.addEventListener("DOMContentLoaded", () => {
    // Função para configurar os carrosséis
    const initializeCarousel = (selector, prevBtnSelector, nextBtnSelector) => {
      const emblaNode = document.querySelector(selector);
      const embla = EmblaCarousel(emblaNode, {
        align: 'center',
        skipSnaps: false,
        slidesToScroll: 4,
      });
  
      const prevButton = document.querySelector(prevBtnSelector);
      const nextButton = document.querySelector(nextBtnSelector);
  
      prevButton.addEventListener('click', embla.scrollPrev);
      nextButton.addEventListener('click', embla.scrollNext);
    };
  
    // Inicializar o primeiro carrossel
    initializeCarousel('.embla--one', '.carousel--one .carousel__button--prev', '.carousel--one .carousel__button--next');
  
    // Inicializar o segundo carrossel
    initializeCarousel('.embla--two', '.carousel--two .carousel__button--prev', '.carousel--two .carousel__button--next');
  });
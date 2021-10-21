var barrainicio = basicScroll.create({
  elem: document.querySelector('.barra-inicio'),
  from: 'top-top',
  to: 'bottom-top',
  props: {
    '--opacidad-nav': {
      from: 1,
      to: 0
    },
  }
});
barrainicio.start();
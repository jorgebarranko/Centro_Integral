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

  // var botonPF = basicScroll.create({
  //   elem: document.querySelector('.est-boton-agendacita-pf-pp'),
  //   from: 'bottom-bottom',
  //   to: 'bottom-bottom',
  //   props: {
  //     '--boton-mov': {
  //       from: '100%',
  //       to: '0'
  //     },
  //     '--boton-opacity': {
  //       from: 0,
  //       to: 1
  //     }
  //   }
  // });
  // botonPF.start();
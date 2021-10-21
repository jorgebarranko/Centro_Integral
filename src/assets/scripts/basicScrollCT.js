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

  var frase4 = basicScroll.create({
    elem: document.querySelector('.titulo-bloque-center'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--frase-bloque4': {
        from: '10%',
        to: '0'
      },
      '--frase-opacidad4': {
        from: 0,
        to: 1
      }
    }
  });
  frase4.start();

  var frase6 = basicScroll.create({
    elem: document.querySelector('.titulo-completo-maps'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--frase-bloque6': {
        from: '10%',
        to: '0'
      },
      '--frase-opacidad6': {
        from: 0,
        to: 1
      }
    }
  });
  frase6.start();

  var frase5 = basicScroll.create({
    elem: document.querySelector('.titulo-bloque-form'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--frase-bloque5': {
        from: '40%',
        to: '0'
      },
      '--frase-opacidad5': {
        from: 0,
        to: 1
      }
    }
  });
  frase5.start();


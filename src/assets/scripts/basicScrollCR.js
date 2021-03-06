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

  var frase3 = basicScroll.create({
    elem: document.querySelector('.titulo-blq-aseguradoras'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--frase-bloque3': {
        from: '10%',
        to: '0'
      },
      '--frase-opacidad3': {
        from: 0,
        to: 1
      }
    }
  });
  frase3.start();

  var botonCR = basicScroll.create({
    elem: document.querySelector('.est-boton-agendacita-cr'),
    from: 'bottom-bottom',
    to: 'bottom-bottom',
    props: {
      '--boton-mov': {
        from: '100%',
        to: '0'
      },
      '--boton-opacity': {
        from: 0,
        to: 1
      }
    }
  });
  botonCR.start();
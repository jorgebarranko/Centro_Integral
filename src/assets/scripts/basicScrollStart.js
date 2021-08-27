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

  var afecciones = basicScroll.create({
    elem: document.querySelector('.move-afecciones'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--afecciones-mov': {
        from: '25%',
        to: '0'
      },
      '--afecciones-opacity': {
        from: 0,
        to: 1
      }
    }
  });
  afecciones.start();

  var cabecera = basicScroll.create({
    elem: document.querySelector('.texto-grande-cabecera'),
    from: 'middle-middle',
    to: 'bottom-top',
    props: {
      '--position': {
        from: '0',
        to: '-60%'
      },
      '--home-title-opacity': {
        from: 1,
        to: 0
      }
    }
  });
  cabecera.start();

  var frase1 = basicScroll.create({
    elem: document.querySelector('.titulo-blq-neq'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--frase-bloque1': {
        from: '10%',
        to: '0'
      },
      '--frase-opacidad1': {
        from: 0,
        to: 1
      }
    }
  });
  frase1.start();

  var frase2 = basicScroll.create({
    elem: document.querySelector('.titulo-blq-saludvisual'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--frase-bloque2': {
        from: '10%',
        to: '0'
      },
      '--frase-opacidad2': {
        from: 0,
        to: 1
      }
    }
  });
  frase2.start();
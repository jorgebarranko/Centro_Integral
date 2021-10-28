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
  
  var cabecera = basicScroll.create({
    elem: document.querySelector('.cabecera-pantalla-grande'),
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

  var frase3 = basicScroll.create({
    elem: document.querySelector('.titulo-blq-serv'),
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

  var iconopacityne = basicScroll.create({
    elem: document.querySelector('.icon-ne-scroll'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--icon-opacity1': {
        from: 0,
        to: .9
      },
      '--icon-opacity2': {
        from: .9,
        to: 0
      }
    }
  });
  iconopacityne.start();

  var iconopacitysv = basicScroll.create({
    elem: document.querySelector('.icon-sv-scroll'),
    from: 'top-bottom',
    to: 'middle-middle',
    props: {
      '--icon-opacity3': {
        from: 0,
        to: .9
      },
      '--icon-opacity4': {
        from: .9,
        to: 0
      }
    }
  });
  iconopacitysv.start();
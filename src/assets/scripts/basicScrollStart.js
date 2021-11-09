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

  var GOTCIO = basicScroll.create({
    elem: document.querySelector('.contenedor-nosotros'),
    from: 'top-bottom',
    to: 'bottom-bottom',
    props: {
      '--position-left': {
        from: '-60%',
        to: '0'
      },
      '--letters-group-opacity': {
        from: 0,
        to: 1
      }
    }
  });
  GOTCIO.start();

  var GOTNE = basicScroll.create({
    elem: document.querySelector('.contenedor-index-ne'),
    from: 'top-bottom',
    to: 'bottom-bottom',
    props: {
      '--position-right': {
        from: '60%',
        to: '0'
      },
      '--letters-group-opacity-ne': {
        from: 0,
        to: 1
      }
    }
  });
  GOTNE.start();

  var GOTCR = basicScroll.create({
    elem: document.querySelector('.contenedor-cr'),
    from: 'top-bottom',
    to: 'bottom-bottom',
    props: {
      '--position-left-cr': {
        from: '-60%',
        to: '0'
      },
      '--letters-group-opacity-cr': {
        from: 0,
        to: 1
      }
    }
  });
  GOTCR.start();
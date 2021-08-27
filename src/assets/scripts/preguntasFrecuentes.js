const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;

        if(!respuesta.style.maxHeight){
            //Si esta vacio el maxHeight ponemos un valor.
            respuesta.style.maxHeight = alturaRealRespuesta + '1px';
        } else{
            respuesta.style.maxHeight = null;
        }

        //[opcional] Reiniciamos las demas preguntas.
        preguntas.forEach((elemento) => {
            //Solamente queremos ejecutar el codigo para las preguntas que no
            //sean la pregunta a la que le dimos click.
            if(pregunta !== elemento){
                  elemento.classList.remove('activa');
                  elemento.querySelector('.respuesta').style.maxHeight = null;
            }
            
        });
    });
});
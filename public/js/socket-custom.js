var socket = io();
//Conexión entre el front-end y el servidor por socket
//Aquí el front-end establece una conexión con el servidor
//Los on son para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Cuando el front-end pierde la conexión con el servidor
socket.on('disconnect', function() {
    console.log('Hemos perdido la conexión con el servidor');
});

// Los emits se utilizan para enviar información al servidor (sólo al servidor)
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensajeRecibido) {
    console.log('Servidor: ', mensajeRecibido);
});
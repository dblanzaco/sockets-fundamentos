const { io } = require('../server');


//Conexión entre el backend y el cliente (desde el navegador)
//Aquí el servidor estable una conexión con el cliente (navegador) (por ejemplo pinta por consola si un usuario se ha conectado al servidor)
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //Aquí el servidor avisa de que se ha desconectado un cliente, por ejemplo si se cierra el navegador.
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //Envia a todos los clientes el mensaje recibido
        client.broadcast.emit('enviarMensaje', data);



        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {

            callback({
                resp: 'TODO SALIO MAL'
            });
        } */
    });

});
const { io } = require('../server');

io.on('connection', (client) => {
    console.log("usuario conectado");

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar al cliente

    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);


        client.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo ha salido mal!'
        //     })
        // }

    });

});
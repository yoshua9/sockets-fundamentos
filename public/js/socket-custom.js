var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on sirve para escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//emit sirven para enviar información
socket.emit('enviarMensaje', {
        usuario: 'Yoshua',
        mensaje: 'Hola Mundo'
    },
    function(resp) {
        console.log('respuesta server: ', resp);
    })

// escuchar la información del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);



})
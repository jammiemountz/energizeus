console.log('hello');

socket.on('energy', function(energy){
    $('.energy').append(energy);
});

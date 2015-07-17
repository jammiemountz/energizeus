var socket = io();

socket.on('energy', function(energy){
  console.log('energy in appjs', energy)
    $('.energy').text(energy.total);
});

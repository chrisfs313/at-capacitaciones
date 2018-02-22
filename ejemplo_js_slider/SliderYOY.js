
$( ".selector" ).on( "slidechange", function( event, ui ) {
    alert('ss');
} );

$(document).ready(function() {
    var boton = $("#btnAviso");
    boton.on('click', function() {
    $( ".selector" ).slider( "value", 30 );
    alert('yyyy');
    });
});
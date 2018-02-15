/*global $*/
/*global Persona*/

$(document).ready(function() {
    var boton = $("#btnComida");
    boton.on('click', function() {
        
        //$(".mi_clase").css('background-color', 'red');
        
        var html = "";
        html += "<tr>";
        html += "    <td>Eduardo</td>";
        html += "    <td>SHUTE</td>";
        html += "    <td>20</td>";
        html += "</tr>";
        
        $("#table_personas").append(html);
    });
    
    var instancia = new Persona();
    instancia.Initialize();
    
    //<alert("Nombres: " + instancia.GetNombre() + " " + 
    //    instancia.GetApellido() + " calza: " + 
    //    instancia.calza);
});
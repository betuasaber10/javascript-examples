$(document).ready(function() {
	var Cnt = 0;
	// Crear un elemento div añadiendo estilos CSS
	var container = $(document.createElement('div')).css({
		padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
		borderTopColor: '#999', borderBottomColor: '#999',
		borderLeftColor: '#999', borderRightColor: '#999'
	});
	 
	$('#btAdd').click(function() {
		if (Cnt <= 19) {
			Cnt = Cnt + 1;
			// Añadir caja de texto

			var txtValor = document.getElementById("Txtboton").value;
			$(container).append('<input type=button class="input" id=tb' + Cnt + ' onclick="borrarBoton(this)"' +
			'value=' + txtValor + ' />');

			if (Cnt == 1) {
				var divSubmit = $(document.createElement('div'));
			}
			$('#main').after(container, divSubmit);
		}
		else { //se establece un limite para añadir elementos, 20 es el limite
			
			alert("Limite Alcanzado");
			$('#btAdd').attr('class', 'bt-disable');
			$('#btAdd').attr('disabled', 'disabled');
		}
	});
});

function borrarBoton(comp){
	$('#' + comp.id).remove();
	$('#btAdd').removeAttr('disabled');
}


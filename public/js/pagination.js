$( document ).ready(function() {
	
	pagination();
	
	setEvents();

	setEntries();

	$('.item-page-number').first().addClass('active');
});



function pagination(items = 50)
{
	var amountItems = 325;
	
	if(amountItems%items != 0)
		numberPages = Math.floor(amountItems/items)+1;
	else
		numberPages = Math.floor(amountItems/items);

	for (var i = 1; i <= numberPages; i++) {

		$('.pagination').append(
			'<li class="page-item item-page-number"><a class="page-link" href="#">'+i+'</a></li>'
		);
	}

	fetchBeers(1, items);
}

function fetchBeers(pageNumber = 1, perPage = 50)
{
	$.get('https://api.punkapi.com/v2/beers?page='+pageNumber+'&per_page='+ perPage, function(data){
		data.forEach(function(item){
			$('#tbody')
				.append(
					'<tr><td>'+
					'<a data-toggle="modal" data-target="#itemModalScrollable" class="item-page-id" href="#">'+
					item.id+'</a></td>'+
					'<td>'+item.name+'</td>'+
					'<td>'+item.first_brewed+'</td></tr>'
				);
		});
	}).done(function(){
	
		setEvents();
	
	}).fail(function(){
		$('#tbody')
				.append(
					'<tr><td colspan="3" style="text-align: center">'+
						'Não foi possível buscar os dados.'+
					'</td>'
				);
	});
}

function beerModal(id)
{
	$.get('https://api.punkapi.com/v2/beers/'+id, function(dados){
		dados.forEach(function(item){
			$('.item-title').html('<strong>Name: </strong>'+item.name);
			$('.item-definition').text(item.description);
			$('.item-other-informations')
				.html('<strong>Volume: </strong>' +item.volume.value+' '+item.volume.unit)
				.append(
					'<p><strong>Fermentation: </strong>'
						+item.method.fermentation.temp.value+' '
						+item.method.fermentation.temp.unit+
					'</p>'
				);
		});
	});
}
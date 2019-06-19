$( document ).ready(function() {
	beers();
});

function beers()
{
	$.get('https://api.punkapi.com/v2/beers?page=1&per_page=3', function(data){
		data.forEach(function(item){
			$('#tbody')
				.append(
					'<tr><td><a data-toggle="modal" data-target="#itemModalScrollable" class="item-page" href="#">'+item.id+
					'</a></td><td>'+item.name+
					'</td><td>'+item.first_brewed+
					'</td></tr>'
				);
		});
	}).done(function(){
		setItemEvent();
	});
}

function setItemEvent()
{
	$('.item-page').click(function(){
		var id = $(this).text();
		beer(id);
	});
}

function beer(id)
{
	$.get('https://api.punkapi.com/v2/beers/'+id, function(dados){
		dados.forEach(function(item){
			$('.item-title').text(item.name);
			$('.item-definition').text(item.description);
			$('.item-other-informations').html('<strong>Volume: </strong>' +item.volume.value+' '+item.volume.unit);
		});
	});
}


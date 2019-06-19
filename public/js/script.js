$( document ).ready(function() {
	beers();
});

function beers(id = 1)
{
	$.get('https://api.punkapi.com/v2/beers?page='+id+'&per_page=25', function(data){
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
	$('.page-item').click(function(){
		
		if($(this).hasClass('active'))
			return false;

		$('.page-item').removeClass('active');
		var id = $(this).toggleClass('active').text();

		$('#tbody').text('');
		beers(id);
	})

	$('.item-page').click(function(){
		var id = $(this).text();
		beer(id);
	});
}

function beer(id)
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


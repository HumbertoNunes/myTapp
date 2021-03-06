$(document).ready(function(){

	setEvents();

	lock();

	$('.item-page-number').first().addClass('active');

});

function setEvents()
{

	$('.item-page-number').click(function(){
		
		if($(this).hasClass('active'))
			return false;

		var page = toggleButton($(this));

		if(page.entries != null)
			fetchBeers(page.number, page.entries);
		else
			fetchBeers(page.number);

	});

	$('.item-page-id').click(function(){
		
		var id = $(this).text();
		
		beerModal(id);

	});
}

function setEntries()
{
	$('.show-entries').change(function(){

		clean('#tbody');

		clean('.pagination-list');

		var items = $(this).val();
		
		pagination(items);
		
		$('.item-page-number').first().addClass('active');
	});
}

function clean(field)
{
	$(field).text('');
}

function toggleButton(button)
{
	clean('#tbody');

	$('.item-page-number').removeClass('active');

	var number = $(button).toggleClass('active').text();

	var entries = $('.show-entries').val();

	return { number: number, entries: entries };
}

function lock()
{
	$('#unlock').toggle();

	$('.lock').click(function(){

		$('.lock').toggle();
		
		$('#password').prop('disabled',function(prop, boolean) {
			
			if(boolean)
				$('#password').attr('placeholder','Desabilite no cadeado...');
			else
				$('#password').attr('placeholder','Habilite no cadeado...');

			return !boolean;
		});

	});
}
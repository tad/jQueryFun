$(document).ready(function () {
	$('#no-script').remove();
	$('#celebs tr:even').addClass('zebra');
	$('<input type="button" value="Hide" id="toggleButton" />').insertAfter('#disclaimer');
	$('#toggleButton').click(function () {
		var that = this;
		$('#disclaimer').slideToggle('slow', function () {
			if($('#disclaimer').is(':visible')) {
				$(that).val('Hide');			
			} else {
				$(that).val('Show');
			}
		});

	});
	$('#celebs tbody tr').hover(function() {
		$(this).addClass('zebraHover');
	}, function () {
		$(this).removeClass('zebraHover');
	});
	$('#celebs tbody tr').click(function () {
		$(this).toggleClass('zebraChosen');
	})
});
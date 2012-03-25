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
	});
	
	$('.spoiler').hide();
	$('<input class="revealer" type="button" value="Tell Me!" />').insertBefore('.spoiler');
	$('.revealer').click(function () {
		$(this).hide();
		$(this).next().fadeIn();
	});
	$('#navigation li').hover(function () {
		$(this).animate({paddingLeft: '+=15px'}, 200);
	}, function () {
		$(this).animate({paddingLeft: '-=15px'}, 200);
	});
	
	/*$('#disclaimer').animate({
		opacity: 'hide',
		height: 'hide'
	}, 1000);*/
	
	$('#disclaimer').animate({'backgroundColor': '#ff9f5f'}, 1000);
	
	/*$('p').animate({
		padding: '20px',
		borderBottom: '3px solid #8f8f8f',
		borderRight:'3px solid #bfbfbf'
	}, 2000);*/
	
	$('p:first').toggle(function() {
		$(this).animate({'height': '+=150px'}, 1000, 'easeOutElastic');
	}, function() {
		$(this).animate({'height': '-=150px'}, 1000, 'easeOutBack');
	});
	
});
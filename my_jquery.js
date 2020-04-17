$(function(){


var t = 0;

//DOM ADD ITEM
document.getElementById('form-product')
	.addEventListener('submit', function (e) {
	
	// ELIMINA EMPTY LIST STRING
	$('#empty-list').remove();

	// VAR T
	t++;
	console.log('var t = ' + t);	
});

var o = null;
var u = null;
var t = null;
// SHOW DELETE BUTTON
$("#list-product").on('click', '.delete-icon', function() {	
		clearTimeout(o);
		clearTimeout(u);
		clearTimeout(t);	
	//GLOBAL TIMER OUT
	t = setTimeout (function () {
		$('.delete-icon').css('opacity', '0.5');
		$('.delete-icon').css('background', '#ef5350');
		$('.deleteDiv').css('margin-top', '110px');
		$('.deleteDiv').css('visibility', 'hidden');
		$('.item').css('border-bottom-left-radius', '10px');  	
		$('.item').css('border-bottom-right-radius', '10px');	
	}, 7000);

	//SHOW CURRENT DELETE BTN
	var g = $(this);
		$(g).css('background-color', '#b71c1c');
		$(g).css('opacity', '1');
		$(g).siblings('.deleteDiv').css('margin-top', '140px');
		$(g).siblings('.deleteDiv').css('visibility', 'visible');
		$(g).parents('.item').css('border-bottom-left-radius', '0px');
		$(g).parents('.item').css('border-bottom-right-radius', '0px');	
	
	//HIDE 7 S AFTER CLICK TRASH BTN
	o = setTimeout (function () {
		$(g).css('background-color', '');
		$(g).css('opacity', '');
		$(g).siblings('.deleteDiv').css('border-bottom-left-radius', '10px');
		$(g).siblings('.deleteDiv').css('border-bottom-right-radius', '10px');
		$(g).siblings('.deleteDiv').css('visibility', 'hidden');
		$(g).siblings('.deleteDiv').css('margin-top', '110px');
		$(g).parents('.item').css('border-bottom-left-radius', '10px');
		$(g).parents('.item').css('border-bottom-right-radius', '10px');		
	}, 7000);
	
	//IF HOVER WAIT 15 SEGS BEFORE HIDE
	$("#list-product").on('mouseenter', '.deleteDiv', function() {
		clearTimeout(t);
		clearTimeout(o);
		clearTimeout(u);
		const s = $(this);
		u = setTimeout (function () {
			$(s).siblings('.delete-icon').css('background-color', '');
			$(s).siblings('.delete-icon').css('opacity', '');
			$(s).css('border-bottom-left-radius', '10px');
			$(s).css('border-bottom-right-radius', '10px');
			$(s).css('visibility', 'hidden');
			$(s).css('margin-top', '110px');
			$(s).parents('.item').css('border-bottom-left-radius', '10px');
			$(s).parents('.item').css('border-bottom-right-radius', '10px');	
			t = setTimeout (function () {
				$('.delete-icon').css('opacity', '');
				$('.delete-icon').css('background', '');
				$('.deleteDiv').css('margin-top', '110px');
				$('.deleteDiv').css('visibility', 'hidden');
				$('.item').css('border-bottom-left-radius', '10px');  	
				$('.item').css('border-bottom-right-radius', '10px');	
			}, 3000);
		}, 10000);
	});
});



//DELETE BUTTON FUNCTION
$('#list-product').on('click', '.deleteDiv', function() {
	const prueba2 = document.getElementsByClassName('item').length - 1;

	$(this);
	$(this).parents('.item').remove();
	$('#itemsFrame').remove();
	$('#container-2-mainDos').append("<h4 id='itemsFrame'>" + prueba2 + "</h4>");
});


}); //end

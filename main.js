$('.your-class').slick({
	
	dots: true,
	arrows:false,
	fade:true,
});
$('.slider2').slick({
	
	dots: true,
	arrows:false,
	fade:true,
});
// $('.findus').mouseenter(function(){
// 	$(this).toggleClass();
// 	})
// $('.maps').mouseleave(function(){
// 		$(this).addClass('.findus')

$( document ).ready(function() {
	console.log( "ready!" );
	var arr = [ "_1", "_2", "_3" ];

	for( var i = 0; i < arr.length; i++ ){
		(function (id) {
			$('#but'+id).click(
				function(){
					$(' .hiden_info'+id).show(00, 
						function () {
							$( ' .hiden_info'+id ).css('margin-top', '0');
						}
						);
					$(' .info'+ id).hide(00, 
						function () {
							$(' .info'+id).css(['margin-top', '-300px', 'display', 'block']);

						}
						);
				},
				);

			$('.hiden_info'+id).hover(function(){},
				function(){setTimeout(function(){ 
					$(' .hiden_info'+ id).hide(00, 
								function () {
									$(' .hiden_info'+id).css(['margin-top', '-300px', 'display', 'none']);
								}
								);
							$(' .info'+id).show(00, 
								function () {
									$( ' .info'+id ).css('margin-top', '0');
								}
								);
							
						}, 
						0);
				},

				);
		})(arr[i]);
	}
});



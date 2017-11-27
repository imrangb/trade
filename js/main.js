
(function($){
    $(document).ready(function(){
    $(".cart_search .fa-search").click(function(){
        $(".cart_search").addClass("search_class");
    });
  /*    
    $("body,.header_top_area, .slider_area").hover(function(){
    $(".fa-search.search_class").removeClass("search_class");
	 
  });    
    */  
   
       
    
    $(".collops_items").click(function(){
    $(".collops_items p").hide(); 
    $(".collops_items").addClass("myclass").removeClass("collops_items");    
    }); 
   
        //owlCarousel active- main slider
   $(".main-slider").owlCarousel({
       items:1,
       loop:true,
   });
   
   //owlcarousel navbar trigger activation
      $(".slider-area .fa-long-arrow-left").click (function(){
          $(".single-slider").trigger('next.owl.carousel');
      })

      $(".slider-area .fa-long-arrow-right").click (function(){
          $(".single-slider").trigger('prev.owl.carousel');
      })
 
   
  //owlCarousel active- testimonial-slider
   $(".testimonial-slider").owlCarousel({
       items:2,
       loop:true,
   });
   
   //owlcarousel navbar trigger activation
      $(".slider-area .fa-long-arrow-left").click (function(){
          $(".single-slider").trigger('next.owl.carousel');
      })

      $(".slider-area .fa-long-arrow-right").click (function(){
          $(".single-slider").trigger('prev.owl.carousel');
      })
 
   
  
  
  
  
  
  
   
   $(".skill").knob()
   $('.skillbar').skillBars({
		from: 0,
		speed: 4000, 
		interval: 100,
		decimals: 0,
	});    
 $('.navbar-wrapper').stickUp();	
 
   // isotup
    var work_items = $('.work_items');
    var work_list = $('.work_list li');
    work_items.isotope({
        itemSelector : '.single_work',
        filter: '*'
    });
    
    work_list.click(function(){
        
        var filterVal = $(this).attr('data-filter');
        
        work_items.isotope({
            filter: filterVal
        });
        
    });
        
  $(".work_list ul li").click(function(){
    $(this).addClass("my_newclass").siblings().removeClass('my_newclass');                           
   });

    /*
    $(".work_list ul li").click(function(){
    $(this).addClass("my_newclass").siblings().removeClass('my_newclass');                           
    });
 */
    
  
// google map
$(function() {
var LocsA = [
			{
					lat: 23.756107,
					lon: 90.387196,
					title: 'Imran Hossain',
					html:[
						'<h3 id="google_map_1">Imran Hossain</h3>',
						'<p>Student of RR Foundation, Batch: 32 (1)</p>',
					].join(''),
					icon: 'img/map_icon_01.png',
					animation: google.maps.Animation.DROP
				},
			 
			
				{
					lat: 23.746465,
					lon: 90.376013,
					title: 'Md. Imran Hossain',
					html:[
						'<h3 id="google_map_2">Imran Hossain</h3>',
						'<p>Student of RR Foundation, Batch: 32 (2)</p>',
					].join(''),
					icon: 'img/map_icon_01.png',
					animation: google.maps.Animation.DROP
				},
				
				{
					lat: 23.474305,
					lon: 90.320730,
					title: 'Md. Shahjahan',
					html:[
						'<h3 id="google_map_3">Md. Shahjahan</h3>',
						'<p>Louhajong, Munshigong</p>',
					].join(''),
					icon: 'img/map_icon_01.png',
					animation: google.maps.Animation.DROP
				},
			 

				{
					lat: 23.264380,
					lon: 91.014766,
					title: 'Md. Monier Hossain Sajib',
					html:[
						'<h3 id="google_map_4">Md. Monier Hossain Sajib</h3>',
						'<p>Borura, Comilla</p>',
					].join(''),
					icon: 'img/map_icon_01.png',
					animation: google.maps.Animation.DROP
				},
			 

				{
					lat: 23.656500,
					lon: 90.488284,
					title: 'Md. Ekramul Haque Bhuiyan',
					html:[
						'<h3 id="google_map_5">Md. Ekramul Haque Bhuiyan</h3>',
						'<p>Siddirgonj, Narayangonj</p>',
					].join(''),
					icon: 'img/map_icon_01.png',
					animation: google.maps.Animation.DROP
				},
			 

		];	


    new Maplace({
        locations: LocsA,

	<!--for gray color map style-->
	
	styles: {
		'Other style': [{
			stylers: [
					{ hue: "#00ffe6" },
					{ saturation: -20 }
			]
		}, {
			featureType: "road",
			elementType: "geometry",
			stylers: [
					{ lightness: 100 },
					{ visibility: "simplified" }
			]
		}, {
			featureType: "road",
			elementType: "labels",
			stylers: [
					{ visibility: "off" }
			]
		}],
		'Night': [{
			featureType: 'all',
			stylers: [
				{ invert_lightness: 'true' }
			]
		}],
		'Greyscale': [{              
			featureType: 'all',
			stylers: [
				{ saturation: -100 },
				{ gamma: 0.50 }
			]
		}]
	},

	<!--for gray color map CSS END-->
        controls_on_map: false
    }).Load();
	
});
        
 
        
//  
//        
//   $(".ok_button").click(function(){
//			$(this).hide();
//		});
//		
//		$(".ok_button").click(function(){
//			$(".close_button").show();
//		});
//		
//		$(".close_button").click(function(){
//			$(".ok_button").show();
//		});
//        
//    
//        
        
        
      
        
});
})(jQuery);
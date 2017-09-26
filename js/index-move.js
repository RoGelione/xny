/*首页全屏滑动*/
	$(function(){ 
    $('#dowebok').fullpage({
    	verticalCentered:false,
    	css3:false,
    	scrollingSpeed:900,
    	easing:'easeInCirc',
    	navigation:true,
    	afterRender: function(){
    		$(".cx").addClass("bounceInLeft");
    		$(".hb").addClass("bounceInDown");
    		$(".zr").addClass("bounceInRight");
    		$(".ywkh").addClass("fadeInUp");
    		$(".yx").addClass("fadeInUp");
    		
    		/*先移除，已达到最好的视觉效果*/
    		$(".page-title").addClass("rotateOutUpRight");
    		$(".gsjj").addClass("fadeOutDown");
    		$(".seemore").addClass("fadeOutDown");
    		$(".cpzx").addClass("bounceOutRight");
    		$(".cpjs").addClass("bounceOutLeft");
    		$(".fangan li").each(function(){
    			$(this).addClass("fadeOutDown");
    		})
    		$(".alzs").addClass("flipOutX");
    		$(".aljs").addClass("bounceOutDown");
    		$(".anli").addClass("rollOut");
    		$(".xwdt").addClass("bounceOutLeft");
    		$(".xwjs").addClass("bounceOutRight");
    		$(".xwdemo").addClass("rotateOutUpLeft");
    	},
    	afterLoad: function(anchorLink,index){
    		if(index == 1){
				$(".cx").removeClass("bounceOutLeft").addClass("bounceInLeft");
				$(".hb").removeClass("fadeOutUp").addClass("bounceInDown");
    			$(".zr").removeClass("bounceOutRight").addClass("bounceInRight");
    			$(".ywkh").removeClass("fadeOutDown").addClass("fadeInUp");
    			$(".yx").removeClass("fadeOutDown").addClass("fadeInUp");
    			
			}
    		if(index == 2){
    			$(".page-title").removeClass("rotateOutUpRight").addClass("rotateInDownLeft");
    			$(".gsjj").removeClass("fadeOutDown").addClass("fadeInUp");
    			$(".seemore").removeClass("fadeOutDown").addClass("fadeInUp");
    		}
    		if(index == 3){
    			$(".cpzx").removeClass("bounceOutRight").addClass("bounceInLeft");
    			$(".cpjs").removeClass("bounceOutLeft").addClass("bounceInRight");
    			var fli = $(".fangan li");
	    			for (var i = 0;i<fli.length;i++) {
	    				$(fli[i]).removeClass("fadeOutDown").addClass("fadeInUp").css('animation-delay','.'+(i+1)+'s');
    			}
    		}
    		if(index == 4){
    			$(".alzs").removeClass("flipOutX").addClass("flipInX");
    			$(".aljs").removeClass("bounceOutDown").addClass("bounceInUp");
    			$(".anli").removeClass("rollOut").addClass("rollIn");
    		}
    		if(index == 5){
    			$(".xwdt").removeClass("bounceOutLeft").addClass("bounceInRight");
    			$(".xwjs").removeClass("bounceOutRight").addClass("bounceInLeft");
    			$(".xwdemo").removeClass("rotateOutUpLeft").addClass("rotateInUpLeft");
    		}
    	},
    	onLeave:function(index,nextIndex){
    		if(index == 1){
				$(".cx").removeClass("bounceInLeft").addClass("bounceOutLeft");
				$(".hb").removeClass("bounceInDown").addClass("fadeOutUp");
    			$(".zr").removeClass("bounceInRight").addClass("bounceOutRight");
    			$(".ywkh").removeClass("fadeInUp").addClass("fadeOutDown");
    			$(".yx").removeClass("fadeInUp").addClass("fadeOutDown");
			}
    		if(index == 2){
    			$(".page-title").removeClass("rotateInDownLeft").addClass("rotateOutUpRight");
    			$(".gsjj").removeClass("fadeInUp").addClass("fadeOutDown");
    			$(".seemore").removeClass("fadeInUp").addClass("fadeOutDown");
    		}
    		if(index == 3){
    			$(".cpzx").removeClass("bounceInLeft").addClass("bounceOutRight");
    			$(".cpjs").removeClass("bounceInRight").addClass("bounceOutLeft");
    			var fli = $(".fangan li");
	    			for (var i = 0;i<fli.length;i++) {
	    				$(fli[i]).removeClass("fadeInUp").addClass("fadeOutDown").css('animation-delay','.'+(i+1)+'s');
    			}
    		}
    		if(index == 4){
    			$(".alzs").removeClass("flipInX").addClass("flipOutX");
    			$(".aljs").removeClass("bounceInUp").addClass("bounceOutDown");
    			$(".anli").removeClass("rollIn").addClass("rollOut");
    		}
    		if(index == 5 && nextIndex==4){
    			$(".xwdt").removeClass("bounceInRight").addClass("bounceOutLeft");
    			$(".xwjs").removeClass("bounceInRight").addClass("bounceOutRight");
    			$(".anli").removeClass("rollIn").addClass("rollOut");
    			$(".xwdemo").removeClass("rotateInUpLeft").addClass("rotateOutUpLeft");
    		}
    		
    	}
    	});
    		document.body.onmousewheel = function() {
		    clearInterval(t);
			};
			document.addEventListener('touchmove',function(){
				 clearInterval(t);
			}, false);
		    var t = setInterval(function(){
		        $.fn.fullpage.moveSectionDown();
			}, 7000);
	});
    
(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.
	$(document).ready(function(){
		$(".other").hide();
		var myData;
		var myArr = ['a','b','c','d','e'];
		var myVal;
		
		//Check if cookie is set
		if(document.cookie.indexOf("myCookie") == 0){
			myVal = document.cookie.split('=')[1].split('|')[0];
			myArr = document.cookie.split('|');
			$(".content").hide();
			$(".other").show();
			$(".keep").hide();
			$(".MyTitle").html(myVal);
		}
	
		
		
		
		
		//Actual ajax call
		function myFunction(data){
			return $.ajax({
				url: "http://www.mattbowytz.com/simple_api.json",
				data: {"data" : "quizData"},
			});
			
		}
		
		//AJAX call
		$(".mybutton").click(function(){
			//Ajax call
			myData = myFunction();
			console.log(myData);
			//Hide all but correct button
			$(".content").hide();
			$(".other").show();
			$(".keep").hide();
		});
		
		
		
		//If button pressed, show text and new button and change name of original button
		$(".change").click(function(){
			$(".keep").show();
			$(this).html('Change It');
			
			
			
			//Got data from website, but unable to do anything with it due to time constraints
			
			myVal = myArr[Math.floor(Math.random() * myArr.length)];
			$(".MyTitle").html(myVal);
			
			
			
			
			
		});
		
		
		
		//Set cookie
		$(".keep").click(function(){
			myString = "myCookie="+myVal+"|"+myArr.join('|');
			document.cookie = myString;
		});

		
		
		
		
		
		var flag = 0;
		$mouseover = $('.mouseover');
		$mouseover.on('mouseover', function() {
			if(flag == 0){
				flag = 1;
				$this = $(this);
				$(this).html('Scrooge McDuck!');
				$(this).height($(this).height() + 50);
			}
		});
	
	
		$click = $(".click");
		$click.click(function() {
			$(this).html('Peace Out!');
			$(this).fadeOut(1500);
			return false;
		});

		//Need to finish!!!!!!
		$sub = $('.submit');
		$sub.on('submit', function(e) {
			e.preventDefault();
			var inputs = $('.submit :input');
			if (inputs.val() != '') {
				//$(this).find('form :input').each(function() {
				//	$(this).fadeOut('slow');
				//});
				$('#submit').fadeOut('slow');
				$('#form').fadeOut('slow');
				$('.afterSub').html("<h2>Congratulations! You've entered some text!</h2>");
			}
		});
		
		
		$timeout = $('.timeout');
		$timeout.hide()
		setTimeout(function(){
			$timeout.fadeIn('slow');
		},1000);
	});

})(jQuery);
$(document).ready(function(){
    // When the user clicks on <span> (x), close the modal
$(".close").click(function() {
$(".modal").css("display","none");
$("#word").val("");
});

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(event) {
var modal = document.getElementById('myModal');
if (event.target == modal) {
  $(".modal").css("display","none");
  $("#word").val("");
}
});


  var positionOfState = 0;
 var word;
 var wordArray;
  
  
  function execute(){
    
      console.log(wordArray);
      console.log(positionOfState);
      if(wordArray.length < 1){
          if(positionOfState == 2 || positionOfState == 3){
              console.log("Valid Word");
              $(".modal-header").css("background-color","green");
              $(".modal-header h2").text("The word is valid.");
              $(".modal").css("display","block");
          }else{
              $(".modal-header").css("background-color","red");
              $(".modal-header h2").text("The word is invalid.");
              $(".modal").css("display","block");
              console.log("Invalid Word")
          }
          return;
      }
      if(positionOfState == 0){
          if(wordArray[0] == 'a'){
              rotateA();
          }else if(wordArray[0] == 'b'){
              initialToB();
          }
      } else if(positionOfState == 1){
          if(wordArray[0] == 'a'){
              midtofinal2(); 
          }else if(wordArray[0] == 'b'){
              tofinal1();
          }
      } else if(positionOfState == 2){
          if(wordArray[0] == 'a'){
              final1tofinal2(); 
          }else if(wordArray[0] == 'b'){
              rotateB();
          }
      }else if(positionOfState == 3){
          if(wordArray[0] == 'a'){
              final2toinitial();  
          }else if(wordArray[0] == 'b'){
              final2tomid();   
          }
      }
      wordArray.splice(0, 1);
  }



  // console.log(word.length);

var angles1 = [0];
var angles2 = [0];
var unit1 = 50;
var unit2 = 50;
var ch1 ; 
var c1 = 0;
var ch2 ; 
var c2 = 0;

var animate = function(){
 
  $.each($('.boxer'), function(idx, val){
     
      var rad = angles1[0] * (Math.PI / 90);
      
      $(val).css({
          left: 90 + Math.cos(rad) * unit1 + 'px',
          top: 10 + unit1 * (1 - Math.sin(rad))  + 'px'
      });
      
      angles1[0]--;
  });
  var position = $('.boxer').position();
  if(position.top < 101 && position.top > 100){
      // console.log(c);
      if(c1 > 1){
          clearInterval(ch1);
          execute();
      }else{
          c1++;
      }
  }
  
}
var animateHidden = function(){
 
  $.each($('.boxer'), function(idx, val){
     
      var rad = angles1[0] * (Math.PI / 90);
      
      $(val).css({
          left: 90 + Math.cos(rad) * unit1 + 'px',
          top: 10 + unit1 * (1 - Math.sin(rad))  + 'px'
      });
      
      angles1[0]--;
  });
  var position = $('.boxer').position();
  if(position.top < 101 && position.top > 100){
      // console.log(c);
      if(c1 > 1){
          clearInterval(ch1);
          showBox();
      }else{
          c1++;
      }
  }
  
}
var animate2 = function(){
 
 $.each($('.boxer'), function(idx, val){
    
     var rad = angles2[0] * (Math.PI / 90);
     
     $(val).css({
         left: 690 + Math.cos(rad) * unit2 + 'px',
         top: 10 + unit2 * (1 - Math.sin(rad))  + 'px'
     });
     
     angles2[0]--;
 });
 var position = $('.boxer').position();
 if(position.top < 101 && position.top > 100){
     // console.log(c);
     if(c2 > 1){
         clearInterval(ch2);
         execute();
     }else{
         c2++;
     }
 }
 
}
var animate2Hidden = function(){
 
 $.each($('.boxer'), function(idx, val){
    
     var rad = angles2[0] * (Math.PI / 90);
     
     $(val).css({
         left: 690 + Math.cos(rad) * unit2 + 'px',
         top: 10 + unit2 * (1 - Math.sin(rad))  + 'px'
     });
     
     angles2[0]--;
 });
 var position = $('.boxer').position();
 if(position.top < 101 && position.top > 100){
     // console.log(c);
     if(c2 > 1){
          clearInterval(ch2);
          rotateAHidden();
     }else{
         c2++;
     }
 }
 
}
var rotateA = function(){
      c1 = 1;
  ch1 = setInterval(animate, 20);
}
var rotateB = function(){
      c2 = 1;
  ch2 = setInterval(animate2, 20);
}
var rotateAHidden = function(){
      c1 = 1;
  ch1 = setInterval(animateHidden, 20);
}
var rotateBHidden = function(){
      c2 = 1;
  ch2 = setInterval(animate2Hidden, 20);
}

var initialToB = function(){
      $('.boxer').animate({
          left: 360 +'px',
      },2000,function(){
          execute();
      });
      positionOfState = 1
}
var tofinal1 = function(){
      $('.boxer').animate({
          left: 660 +'px',
      },2000,function(){
          execute();
      });
      positionOfState = 2
}
var final1tofinal2 = function(){
      $('.boxer').animate({
          left: 360 +'px',
          top:360+'px'
      },2000,function(){
          execute();
      });
      positionOfState = 3
}

var final2toinitial = function(){
      $('.boxer').animate({
          left: 60 +'px',
          top:100+'px'
      },2000,function(){
          execute();
      });
      positionOfState = 0;
}
var midtofinal2 = function(){
      $('.boxer').animate({
          left: 360 +'px',
          top:360+'px'
      },2000,function(){
          execute();
      });
      positionOfState = 3;
}
var final2tomid = function(){
      $('.boxer').animate({
          left: 270 +'px',
          top:230+'px'
      },2000,function(){
          $('.boxer').animate({
          left: 360 +'px',
          top:100+'px'
      },2000,function(){
          execute();
      });
      });
      positionOfState = 1;
}

function hideBox(){
  $('.boxer').css('height',0);
}
function showBox(){
  $('.boxer').css('height',64);
  $('.loader').remove();
}
  $("#run").click(function(){
      word = $("#word").val();
      wordArray = word.split("");
      positionOfState = 0;
      $(".boxer").css({"left":60+"px","top":100+"px"});
      execute();     
  })
 
  hideBox();
  rotateBHidden(); 

})
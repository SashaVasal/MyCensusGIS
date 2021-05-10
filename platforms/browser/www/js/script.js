var people = document.querySelector('.people');
var number = document.querySelector('.number');
var close = document.querySelectorAll("#close");
var MapInHtml = document.querySelector('.map');
var timer = 0;
var open = document.querySelectorAll("#open");
		$('#reportpanel').hide(200);
		$('#dadreppanel').hide(200);
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function(){
		 hide();
	}
}
for (var i = 0; i < open.length; i++) {
	open[i].onclick = function(){
		OpenPage();
	}
}
function OpenPage(e){
        
        $('#reportpanel').removeClass("fadeOutRight");
		$('#dadreppanel').removeClass("fadeOut");
		$('#reportpanel').addClass('fadeInRight');
		$('#dadreppanel').addClass('fadeIn');
		$('#reportpanel').show(1600);
		$('#dadreppanel').show(1600);
        //number.value = e.features[0].properties.number;
        people.value = e.features[0].properties.people;
        setInterval(tick, 300);
        
        
}
function OpenCreatePage(e){
        
        $('#reportpanel').removeClass("fadeOutRight");
		$('#dadreppanel').removeClass("fadeOut");
		$('#reportpanel').addClass('fadeInRight');
		$('#dadreppanel').addClass('fadeIn');
		$('#reportpanel').show(1600);
		$('#dadreppanel').show(1600);
        
       
        setInterval(tick, 300);
        
        
}
  
function hide(){
    if(timer >= 2){
         $('#reportpanel').removeClass("fadeInRight");
		$('#dadreppanel').removeClass("fadeIn");
		$('#reportpanel').addClass('fadeOutRight');
		$('#dadreppanel').addClass('fadeOut');
		$('#reportpanel').hide(1600);
		$('#dadreppanel').hide(1600);
         timer = 0;
    }
   
}
function tick()
            {
                timer++;            
            }


/*var d = function(a){
	if(a==0){
		$('#reportpanel').removeClass("fadeOutLeft");
		$('#dadreppanel').removeClass("fadeOut");
	}
}*/

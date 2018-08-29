
     var countersek = 60;
	 var countermin = 60;
	 var counterHours = 24;
	 var counterday = 2;
	   function timer(){
	     countersek--;
		 document.getElementById("sek").innerHTML = countersek;
		 	if(countersek==0){
			countersek=60;
			}
		    if(countersek==59){
			  countermin--;
			  document.getElementById("min").innerHTML = countermin;
			}
			if(countermin==0){
			   countermin=60;
			}
		    if(countermin ==59 && countersek == 59){
	            counterHours--;
			  document.getElementById("Hours").innerHTML = counterHours;
			}
			if(counterHours==0){
			   counterHours=60;
			}
			if(counterHours==23 &&countermin==59&&countersek== 59){
			 counterday--;
			  document.getElementById("day").innerHTML = counterday;
			}
			if(counterday==0){
			   counterday=24;
			}
			if(counterday==24 && counterHours==60 && countermin==60 && countersek==60){
			   alert("Время вышло!");
			}
		    setTimeout("timer()",1000);
	   }
	   timer();





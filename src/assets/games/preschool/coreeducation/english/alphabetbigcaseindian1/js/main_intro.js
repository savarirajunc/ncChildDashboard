	//Game Title : PS CS Representations Sorting Categorizing
//Developer  : J. Kumar
//QC         : Sahana Ravi
//Approvel   : Pradheep Christo

var Main = {	
	preload : function(){		
	
			game.load.image(['page1'], 'assets/Buttons/mainplay.png');
			clickcount = 0;
			var answers;
			var sessionId;
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
			xmlhttp.open("POST", "https://apitest.nidarachildren.com/gamesdatabase/getSessionMainId");
			xmlhttp.setRequestHeader("token", localStorage.getItem('token'));
			xmlhttp.send(JSON.stringify(answers));
			xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse(xmlhttp.responseText);
				sessionId = response.data;
				console.log(sessionId);
				let session_id = "session_id";
				localStorage.setItem(session_id,sessionId);
				}
			};
		

	},		
	create : function(){
		
		page1 = game.add.button(300, 200, 'page1', this.objectname, this);	
		this.game.input.addMoveCallback(this.paint, this);
	
		this.timerFull();
		
		
	},
	
	objectname : function(){
			game.state.start('1_image_hover_over');
			var answers = {
				session_id: localStorage.getItem('session_id'),
				gameId: localStorage.getItem('gameId'),
				nidara_kid_profile_id: localStorage.getItem('selectedKid'),
				current_status:0
			  };
			  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
			  xmlhttp.open("POST", "https://apitest.nidarachildren.com/gamesdatabase/savegamestatus");
			  xmlhttp.setRequestHeader("token", localStorage.getItem('token'));
			  xmlhttp.send(JSON.stringify(answers));
			  
			var answers1 = {
				session_id: localStorage.getItem('session_id'),
				game_id: localStorage.getItem('gameId'),
				nidara_kid_profile_id: localStorage.getItem('selectedKid'),
				question_id:0,
				slide_no:1,
				options:clickcount,
				actual_time:1,
				time:countNum
				//session_id:sessionId
			};
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
			xmlhttp.open("POST", "https://apitest.nidarachildren.com/gamesdatabase/savegamequsans");
			xmlhttp.setRequestHeader("token", localStorage.getItem('token'));
			xmlhttp.send(JSON.stringify(answers1));
			game.state.start('intro');

	},
	paint : function(pointer, x, y){		
			if(pointer.isDown){
				clickcount++;
				console.log("Click Count  :  "+clickcount);
			}
	},
	
	timerFull : function(pointer, x, y){		
		if(checkFull != 1){			
			countNum++;
			console.log('Counter: ' + countNum);
			firstTimer = game.time.events.add(Phaser.Timer.SECOND * 1, this.timerFull, this);

		}
	}
}
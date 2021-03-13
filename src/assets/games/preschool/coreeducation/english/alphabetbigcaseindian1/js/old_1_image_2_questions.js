//Game Title : LKG STE World Adventures World Cultures
//Developer  : G.Dheeraj Guhan
//QC         : Sahana Ravi
//Approvel   : Pradheep Christo

var Learn = {	
	preload : function(){
		game.load.image('tina', 'assets/tina.png');
		game.load.image('bg', 'assets/bg.png');
		 for(var objectNum = 1; objectNum<=objectcount; objectNum++){
		 	game.load.image(['object'+objectNum], 'assets/'+['obj0'+objectNum]+'.png');
		 	game.load.image(['object0'+objectNum], 'assets/'+['obj00'+objectNum]+'.png');
		 }
		game.load.image('rect1', 'assets/rect0001.png');
		game.load.image('pbtn1', 'assets/Buttons/Play_01.png');
		game.load.image('pbtn2', 'assets/Buttons/Play_00.png');
		game.load.audio('playsnd', 'audio/play.wav');
		game.load.image('rect2', 'assets/rect0002.png');
		game.load.image('rect3', 'assets/rect0003.png');
		game.load.audio('question', 'audio/question.mp3');
		game.load.audio('correct', 'audio/correct.mp3');
		game.load.audio('wrong', 'audio/wrong.mp3');
		game.load.audio('completed', 'audio/completed.wav');		
		game.load.image('arrow1', 'assets/arrow1.png');		
		game.load.audio('correctanswer', 'audio/correctanswer.mp3');
	},
	create : function(){
		objectNum = 0;	
		pbtn1 = game.add.sprite(720, 540, 'pbtn1');
		pbtn1.scale.setTo(0.25, 0.25);
		pbtn1.anchor.x = 0.5;
	    pbtn1.anchor.y = 0.5;
	    pbtn1.visible = false;
		bg = game.add.image(0, 0, 'bg');
		bg.scale.setTo(0.8, 0.8);
	    playsnd = game.add.audio('playsnd');    		
		correct = game.add.audio('correct');
		wrong = game.add.audio('wrong');		
		completed = game.add.audio('completed');
		correctanswer = game.add.audio('correctanswer');
		arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        arr.sort(this.numRandomized); 
		this.randAppearFun();
		this.timerFull();		
	},

	numRandomized : function() {
        return 0.5 - Math.random();
    },

	rect1Click : function(){
		objectNum++;
		if(rand3 == 1){
			rect1.visible = false;
			rect3.visible = true;
			correct.play();
			correct.onStop.addOnce(this.onCompletecorrect, this);
			answerCheck = 1;
			this.storeAnswerFun();			
		}else{			
			rect1.visible = false;
			rect2.visible = true;
			this.wrongnextFun();
			checkNum4 = 1;
			answerCheck = 2;
			this.storeAnswerFun();
			}
		rect1.inputEnabled = false;
		rect4.inputEnabled = false;
		question.stop();
	},

	rect2Click : function(){
		objectNum++;
		if(rand3 == 2){
			rect4.visible = false;
			rect6.visible = true;
			correct.play();
			correct.onStop.addOnce(this.onCompletecorrect, this);
			answerCheck = 1;
			this.storeAnswerFun();
		}else{		
			rect4.visible = false;
			rect5.visible = true;
			this.wrongnextFun();
			checkNum4 = 2;
			answerCheck = 2;
			this.storeAnswerFun();
			}
		rect1.inputEnabled = false;
		rect4.inputEnabled = false;
		question.stop();
	},	

	randAppearFun : function(){
		checklevel = 0;
		countNum1 = 0;		
		this.timerslide();
		rand1 = Math.floor(Math.random() * objectcount+1);	
		rand2 = Math.floor(Math.random() * objectcount+1);
		rand3 = Math.floor(Math.random() * 2+1);
		rand4 = Math.floor(Math.random() * 2+1);
		this.oncallRandomFun();		
		object01 = game.add.sprite(280, 35, ['object'+arr[objectNum]]);
		rect1 = game.add.button(150, 320, 'rect1', this.rect1Click, this);
		rect1.scale.setTo(0.7, 0.7);
		rect1.visible = true;
		rect1.inputEnabled = true;	
		rect2 = game.add.sprite(150, 320, 'rect2');
		rect2.scale.setTo(0.7, 0.7);
		rect2.visible = false;
		rect3 = game.add.sprite(150, 320, 'rect3');
		rect3.scale.setTo(0.7, 0.7);
		rect3.visible = false;
		rect4 = game.add.button(450, 320, 'rect1', this.rect2Click, this);
		rect4.scale.setTo(0.7, 0.7);
		rect4.visible = true;
		rect4.inputEnabled = true;
		rect5 = game.add.sprite(450, 320, 'rect2');
		rect5.scale.setTo(0.7, 0.7);
		rect5.visible = false;
		rect6 = game.add.sprite(450, 320, 'rect3');
		rect6.scale.setTo(0.7, 0.7);
		rect6.visible = false;
		if(rand3 == 1){
			object1 = game.add.sprite(0, 200, ['object0'+arr[objectNum]]);
			object2 = game.add.sprite(250, 300, ['object0'+rand1]);
		}else{
			object1 = game.add.sprite(0, 200, ['object0'+rand1]);
			object2 = game.add.sprite(250, 300, ['object0'+arr[objectNum]]);
		}
	
		this.bigToyFun();
		this.smallToyFun();		
	},

	bigToyFun : function(){
		if(rand4 == 1){
			object1.scale.setTo(0.6, 0.6);
			object1.x = rect1.x + 30;
			object1.y = rect1.y + 30;			
		}else if(rand4 == 2){
			object1.scale.setTo(0.6, 0.6);
			object1.x = rect1.x + 30;
			object1.y = rect1.y + 30;		
		}
	},

	smallToyFun : function(){
		if(rand4 == 1){
			object2.scale.setTo(0.6, 0.6);
			object2.x = rect4.x + 30;
			object2.y = rect4.y + 30;			
		}else if(rand4 == 2){
			object2.scale.setTo(0.6, 0.6);
			object2.x = rect4.x + 30;
			object2.y = rect4.y + 30;			
		}
	},

	oncallRandomFun : function(){
		if(rand1 == arr[objectNum]){			
			rand1 = Math.floor(Math.random() * objectcount+1);
			this.oncallRandomFun();
		}
		else
		{
			question = game.add.audio('question');
			question.play();
		}
	},

	checkgameFinish : function(){

		checkNum3++;

		object01.destroy();
		object1.destroy();
		object2.destroy();		
		rect1.destroy();
		rect2.destroy();
		rect3.destroy();
		rect4.destroy();
		rect5.destroy();
		rect6.destroy();
		countNum1 = 0;
		if(arrow1 != null){
			arrow1.destroy();
		}	
		if(checkNum3 == countquestion){
			checkFull = 1;		
			tina = game.add.sprite(0, 0, 'tina');			
			/* tina.scale.setTo(0.8, 0.8);
			tina.x = 250;
			tina.y = 100; */
			completed.play();
			completed.onStop.addOnce(this.checkreplay, this);
			console.log("Correct Answer---"+answerCount);
			console.log("Wrong Answer---"+wrongCount);
			console.log("Session Time---"+countNum);	
		}else{				
			this.randAppearFun();
		}
	},

	checkwrongFun : function(){
		pbtn1.destroy();
		pbtn1 = game.add.sprite(720, 540, 'pbtn1');
		pbtn1.scale.setTo(0.25, 0.25);
		pbtn1.anchor.x = 0.5;
	    pbtn1.anchor.y = 0.5;
		pbtn1.visible = true;		
		correctanswer.play();
		correctanswer.onStop.addOnce(this.onComplete4, this);
		if(checkNum4 == 1){
			arrow1 = game.add.sprite(500, 240, 'arrow1');	
			arrow1.scale.setTo(0.2,0.2);
			rect1.visible = true;
			rect2.visible = false;
			rect3.visible = false;
			rect6.visible = true;
		}else if(checkNum4 == 2){
			arrow1 = game.add.sprite(210, 240, 'arrow1');
			arrow1.scale.setTo(0.2,0.2);
			rect3.visible = true;
			rect4.visible = true;
			rect5.visible = false;
			rect6.visible = false;  
		}
	},

	onCompletecorrect : function(){
		this.checkgameFinish();
	},

	onCompletewrong : function(){
		this.checkwrongFun();
	},

	onComplete4 : function(){
		qbtn = game.add.button(720, 540, 'pbtn2', this.qButClick, this);
		qbtn.scale.setTo(0.25, 0.25);	
		qbtn.onInputOver.add(this.over01, this);
		qbtn.onInputOut.add(this.out01, this);
		qbtn.anchor.x = 0.5;
	    qbtn.anchor.y = 0.5;
	},

	qButClick : function(){
		qbtn.destroy();	
		pbtn1.visible = false;
		this.checkgameFinish();
	},

	wrongnextFun : function(){
		wrong.play();
		game.time.events.add(Phaser.Timer.SECOND * 2, this.onCompletewrong, this);
	},

	storeAnswerFun : function(){
		if(answerCheck == 1){
			answerCount++;
			console.log("Correct");
			checklevel = 1;			
		}else if(answerCheck == 2){
			wrongCount++;
			console.log("Wrong");
			checklevel = 1;			
		}
	},

	over01 : function(){
		playsnd.play();
	    game.add.tween(qbtn.scale).to({x: 0.27, y: 0.27}, 500, Phaser.Easing.Bounce.Out, true);
	},

	out01 : function(){
		game.add.tween(qbtn.scale).to({x: 0.25, y: 0.25}, 500, Phaser.Easing.Bounce.Out, true);
	},

	checkreplay : function(){
		console.log("Replay")
	},

	timerslide : function(){		
		if(checklevel != 1){
			countNum1++;
			console.log('Counter-Level: ' + countNum1);
			secondTimer = game.time.events.add(Phaser.Timer.SECOND * 1, this.timerslide, this);
		}
	},

	timerFull : function(){		
		if(checkFull != 1){
			countNum++;
			console.log('Counter: ' + countNum);
			firstTimer = game.time.events.add(Phaser.Timer.SECOND * 1, this.timerFull, this);
		}
	}
}
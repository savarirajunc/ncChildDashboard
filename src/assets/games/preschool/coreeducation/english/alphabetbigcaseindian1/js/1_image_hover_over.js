//Game Title : LKG STE World Adventures World Cultures
//Developer  : G.Dheeraj Guhan
//QC         : Sahana Ravi
//Approvel   : Pradheep Christo

var Slide = {
	preload: function () {
		game.load.image('bg', 'assets/bg.png');
		for (var slideNum = 1; slideNum <= slidecount; slideNum++) {
			game.load.image(['page' + slideNum], 'assets/' + ['Pg_0' + slideNum] + '.png');
			game.load.audio(['intro' + slideNum], 'audio/' + ['s' + slideNum] + '.mp3');
		}
		game.load.image('pbtn1', 'assets/Buttons/Play_01.png');
		game.load.image('pbtn2', 'assets/Buttons/Play_00.png');
		game.load.audio('playsnd', 'audio/play.wav');
		game.load.audio('nextsnd', 'audio/next.wav');
		game.load.audio('smallsnd', 'audio/ss3.mp3');
		game.load.image('rect1', 'assets/rectBtn.png');
		game.load.image('nbtn1', 'assets/Buttons/Next_01.png');
		game.load.image('nbtn2', 'assets/Buttons/Next_00.png');
		clickcount = 0;	
		actual_time = 0;
		countNum=0;
	},

	create: function () {
		bg = game.add.sprite(0, 0, 'bg');
		this.complete12();
		slidecount = 0;
		pbtn1 = game.add.sprite(720, 540, 'pbtn1');
		pbtn1.scale.setTo(0.25, 0.25);
		pbtn1.anchor.x = 0.5;
		pbtn1.anchor.y = 0.5;
		pbtn2 = game.add.button(720, 540, 'pbtn2', this.flowername, this);
		pbtn2.visible = false;
		pbtn2.scale.setTo(0.25, 0.25);
		pbtn2.onInputOver.add(this.over1, this);
		pbtn2.onInputOut.add(this.out1, this);
		pbtn2.anchor.x = 0.5;
		pbtn2.anchor.y = 0.5;
		playsnd = game.add.audio('playsnd');
		concept = game.add.audio('concept');
		nextsnd = game.add.audio('nextsnd');
		intro2 = game.add.audio('intro2');
		smallsnd = game.add.audio('smallsnd');
		nbtn1 = game.add.sprite(720, 540, 'nbtn1');
		nbtn1.visible = false;
		nbtn1.scale.setTo(0.25, 0.25);
		nbtn1.anchor.x = 0.5;
		nbtn1.anchor.y = 0.5;
		nbtn2 = game.add.button(720, 540, 'nbtn2', this.flowername, this);
		nbtn2.scale.setTo(0.25, 0.25);
		nbtn2.visible = false;
		nbtn2.anchor.x = 0.5;
		nbtn2.anchor.y = 0.5;
		nbtn2.onInputOver.add(this.over2, this);
		nbtn2.onInputOut.add(this.out2, this);
		this.timerFull();
	},

	flowername: function () {

		var answers1 = {
				session_id: localStorage.getItem('session_id'),
				game_id: localStorage.getItem('gameId'),
				nidara_kid_profile_id: localStorage.getItem('selectedKid'),
				question_id:0,
				slide_no:checkNum1,
				actual_time:actual_time,
				options:clickcount,
				time:countNum
				//session_id:sessionId
			};
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
			xmlhttp.open("POST", "https://apitest.nidarachildren.com/gamesdatabase/savegamequsans");
			xmlhttp.setRequestHeader("token", localStorage.getItem('token'));
			xmlhttp.send(JSON.stringify(answers1));
			countNum = 0;
			clickcount = 0;
			actual_time = countNum;

		pbtn1.visible = false;
		pbtn2.visible = false;
		page.destroy();
		if (checkNum1 == 10) {

			nbtn1.visible = false;
			nbtn2.visible = false;
			pbtn1.visible = true;
			pbtn2.visible = false;
		} else {

			nbtn1.visible = true;
			nbtn2.visible = false;
		}
		this.complete12();
	},


	complete12: function () {
		checkNum1++;
		if (checkNum1 == 11) {
			game.state.start('1_image_2_questions');

		} else {

			page = game.add.sprite(0, 0, ['page' + checkNum1]);
			if (checkNum1 >= 2 && checkNum1 <= 9) {
				nbtn1.destroy();
				nbtn1 = game.add.sprite(720, 540, 'nbtn1');
				nbtn1.scale.setTo(0.25, 0.25);
				nbtn1.anchor.x = 0.5;
				nbtn1.anchor.y = 0.5;
				nbtn2.destroy();
				nbtn2 = game.add.button(720, 540, 'nbtn2', this.flowername, this);
				nbtn2.scale.setTo(0.25, 0.25);
				nbtn2.visible = false;
				nbtn2.onInputOver.add(this.over2, this);
				nbtn2.onInputOut.add(this.out2, this);
				nbtn2.anchor.x = 0.5;
				nbtn2.anchor.y = 0.5;
			}
			if (checkNum1 == 10) {
				pbtn1.destroy();
				pbtn1 = game.add.sprite(720, 540, 'pbtn1');
				pbtn1.scale.setTo(0.25, 0.25);
				pbtn1.anchor.x = 0.5;
				pbtn1.anchor.y = 0.5;
				pbtn2.destroy();
				pbtn2 = game.add.button(720, 540, 'pbtn2', this.flowername, this);
				pbtn2.scale.setTo(0.25, 0.25);
				pbtn2.visible = false;
				pbtn2.onInputOver.add(this.over1, this);
				pbtn2.onInputOut.add(this.out1, this);
				pbtn2.anchor.x = 0.5;
				pbtn2.anchor.y = 0.5;
			}
			intro1 = game.add.audio('intro' + checkNum1);
			intro1.play();
			replayaudio = '';
			intro1.onStop.addOnce(this.onComplete11, this);

		}
	},

	onComplete11: function () {
		if (checkNum1 == 1 || checkNum1 == 10) {
			pbtn2.visible = true;
		} else {

			slidecount++;
			nbtn2.visible = true;
		}
		actual_time = countNum - actual_time;
		replayaudio = 'audio/s' + checkNum1 + '.mp3';
	},

	over1: function () {
		playsnd.play();
		game.add.tween(pbtn2.scale).to({
			x: 0.27,
			y: 0.27
		}, 500, Phaser.Easing.Bounce.Out, true);
	},

	out1: function () {
		game.add.tween(pbtn2.scale).to({
			x: 0.25,
			y: 0.25
		}, 500, Phaser.Easing.Bounce.Out, true);
	},

	onComplete2: function () {
		nbtn2.visible = true;
		game.add.tween(nbtn2.scale).to({
			x: 0.25,
			y: 0.25
		}, 500, Phaser.Easing.Bounce.Out, true);
	},

	over2: function () {
		nextsnd.play();
		game.add.tween(nbtn2.scale).to({
			x: 0.27,
			y: 0.27
		}, 500, Phaser.Easing.Bounce.Out, true);
	},

	out2: function () {
		game.add.tween(nbtn2.scale).to({
			x: 0.25,
			y: 0.25
		}, 500, Phaser.Easing.Bounce.Out, true);
	},

	timerFull: function () {
		if (checkFull != 1) {
			countNum++;
			console.log('Counter: ' + countNum);
			firstTimer = game.time.events.add(Phaser.Timer.SECOND * 1, this.timerFull, this);
		}
	}
}
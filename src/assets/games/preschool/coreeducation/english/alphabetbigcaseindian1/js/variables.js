//Game Title : LKG STE World Adventures World Cultures
//Developer  : G.Dheeraj Guhan
//QC         : Sahana Ravi
//Approvel   : Pradheep Christo


var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

//Sprites Variables
var page1;
var page2;
var page3;
var tina;
var toy1;
var toy2;
var pbtn1;
var pbtn2;
var nbtn1;
var nbtn2;
var rect1;
var rect2;
var rect3;
var rect4;
var rect5;
var rect6;
var rect7;
var rect8;
var rect9;
var rect10;
var rect11;
var bg;
var qbtn;
var s01;
var s02;
var s03;
var s04;
var s05;
var s06;
var s07;
var s08;
var s09;
var s010;
//Sounds Variables

var intro1;
var concept;
var playsnd;
var nextsnd;
var intro2;
var big;
var small;
var correct;
var wrong;
var completed;
var smallsnd;
var correctanswer;

var replayaudio = '';
var child_id = localStorage.getItem('selectedKid');
var	game_id = localStorage.getItem('gameId');

//Common Variables
var checkNum1 = 0;
var checkNum2 = 0;
var checkNum3 = 0;
var checkNum4 = 0;
var rand1;
var rand2;
var rand3;
var rand4;
var rand5;
var txtstyle;
var arrow1;
var arrow2;
var arrow3;
var firstTimer;
var secondTimer;
var checkFull = 0;
var checklevel = 0;
var actual_time = 0;
var answerclick = 0;

var objectcount = 8;
var toycount = 8; // Number of Toys
var countquestion = 8; // Number of Questions
var slidecount = 10; // Number of slides
var singlecount = 10; // For mouse over the object

//Data Store Variables
var countNum = 0; // Entire Session Time
var answerCheck = 0; // Answer Check  "if answerCheck == 1 the Answer is correct"  "if answerCheck == 2 the Answer is Wrong"
var answerCount = 0; // Total Correct Answer
var wrongCount = 0; // Total Wrong Answer 
var countNum1 = 0; // Each Question Time

function preload() {
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;	
	game.stage.backgroundColor = 0xFFFFFF;	
	
	game.scale.fullscreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
	game.state.add('main_intro',Main);
    game.state.add('1_image_hover_over',Slide);
    game.state.add('1_image_2_questions',Learn);
    game.state.start('main_intro');
}

function create() {
	
}

function update() {	
	
}

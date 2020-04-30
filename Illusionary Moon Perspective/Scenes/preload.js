//Enter
var tinter; var pressenter; var gameOver = false;
//Cursors
var cursors;
//Player
var player; var comefrom;
//Life
var nbheart = 2;
//Objetcs
var inv; var poulpi; var pathup; var pathright; var pathleft; var pathdown; var hup; var rock; var board; var rup = false;
var enigma;
//Monsters
var orosaovw1; var orosaovw2; var tecball1; var tecball2;
var tecballrock1; var tecballrock2;


class preload extends Phaser.Scene {
	constructor() {
		super('preload');
	}

	init(){}


	preload(){

		////AUDIO////
		this.load.audio('titleA','Assets/Audio/OddRivalry.mp3');

		////Sounds////
		this.load.audio('start', 'Assets/Sounds/start.wav');
		this.load.audio('get', 'Assets/Sounds/get.wav');
		this.load.audio('warp', 'Assets/Sounds/warp.wav');
		this.load.audio('wave', 'Assets/Sounds/wave.wav');


		////Title Screen////
		this.load.image('back','Assets/Title/back.png');
		this.load.spritesheet('etr','Assets/Title/enter.png', {frameWidth: 400,frameHeight: 200});
		this.load.image('nm', 'Assets/Title/name.png');
		
		////Player////
		this.load.spritesheet('plr','Assets/Character/HanLi.png', {frameWidth: 32,frameHeight: 32});

		////Monsters////
		this.load.spritesheet('oro', 'Assets/Npc/orosa.png', {frameWidth: 32, frameHeight: 32});
		this.load.spritesheet('horo', 'Assets/Npc/hurtorosa.png', {frameWidth: 32, frameHeight: 32});
		this.load.spritesheet('tec', 'Assets/Npc/tecball.png', {frameWidth: 32, frameHeight: 32});
		this.load.spritesheet('htec', 'Assets/Npc/hurttecball.png', {frameWidth: 32, frameHeight: 32});

		////Life////
		this.load.image('h1','Assets/Character/H1.png');
		this.load.image('h2','Assets/Character/H2.png');
		this.load.image('h3','Assets/Character/H3.png');
		this.load.image('rh1','Assets/Character/RH1.png');
		this.load.image('rh2','Assets/Character/RH2.png');
		this.load.image('rh3','Assets/Character/RH3.png');
		this.load.image('rh4','Assets/Character/RH4.png');
		this.load.image('rh5','Assets/Character/RH5.png');
		this.load.image('rh6','Assets/Character/RH6.png');

		////Background Objects////
		this.load.image('flower','Assets/Decorum/flower.png');
		this.load.image('grass','Assets/Decorum/grass.png');
		this.load.image('hole','Assets/Decorum/hole.png');
		this.load.image('rocky','Assets/Decorum/rocklets.png');
		///Path///
		this.load.image('pathup','Assets/Decorum/pathup.png');
		this.load.image('pathdown','Assets/Decorum/pathdown.png');
		this.load.image('pathleft','Assets/Decorum/pathleft.png');
		this.load.image('pathright','Assets/Decorum/pathright.png');


		////Object////
		this.load.image('poulpi','Assets/Objects/poulpi.png');
		this.load.image('board','Assets/Objects/board.png');
		this.load.image('rock','Assets/Objects/rock.png');
		this.load.spritesheet('info','Assets/Objects/infopannel.png', {frameWidth: 32,frameHeight: 32});
		this.load.spritesheet('enigma','Assets/Objects/enigma.png', {frameWidth: 32,frameHeight: 32});
		this.load.image('inv', 'Assets/Objects/screen.png');
		////Objects Utilitary////
		this.load.image('hup','Assets/Objects/hup.png');
		this.load.image('mny', 'Assets/Objects/money.png');
		this.load.image('red','Assets/Objects/rupee.png');
	}

	create(){}
	update(){this.scene.start('title');}
}
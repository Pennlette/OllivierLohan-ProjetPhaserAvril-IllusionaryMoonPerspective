class forest extends Phaser.Scene {
	constructor() {
		super('forest');
	}

	init(){}
	preload(){}

	create()
	{
		////Background////
		this.add.image(400, 300, 'back');

		///Path Left
		pathleft = this.physics.add.staticGroup();
		pathleft.create(16, 225, 'pathleft');


		////Life////
		if (nbheart == 1) {this.add.image(55,570,'h1')};
		if (nbheart == 2) {this.add.image(55,570,'h2')};
		if (nbheart == 3) {this.add.image(55,570,'h3')};

		////Decorum////
		this.add.image(75, 100, 'rocky');
		this.add.image(200, 423, 'rocky');
		this.add.image(723, 143, 'rocky');
		this.add.image(442, 512, 'rocky');
		this.add.image(197, 246, 'rocky');	

		//Poulpis Up//
		poulpi = this.physics.add.staticGroup();
		poulpi.create(30, 30, 'poulpi');
		poulpi.create(80, 30, 'poulpi');
		poulpi.create(120, 30, 'poulpi');
		poulpi.create(160, 30, 'poulpi');
		poulpi.create(200, 30, 'poulpi');
		poulpi.create(250, 30, 'poulpi');
		poulpi.create(300, 30, 'poulpi');
		poulpi.create(350, 30, 'poulpi');
		poulpi.create(400, 30, 'poulpi');
		poulpi.create(450, 30, 'poulpi');
		poulpi.create(500, 30, 'poulpi');
		poulpi.create(550, 30, 'poulpi');
		poulpi.create(600, 30, 'poulpi');
		poulpi.create(650, 30, 'poulpi');
		poulpi.create(700, 30, 'poulpi');
		poulpi.create(750, 30, 'poulpi');
		poulpi.create(800, 30, 'poulpi');
		poulpi.create(40, 50, 'poulpi');
		poulpi.create(90, 50, 'poulpi');
		poulpi.create(140, 50, 'poulpi');
		poulpi.create(190, 50, 'poulpi');
		poulpi.create(240, 50, 'poulpi');
		poulpi.create(290, 50, 'poulpi');
		poulpi.create(340, 50, 'poulpi');
		poulpi.create(390, 50, 'poulpi');
		poulpi.create(440, 50, 'poulpi');
		poulpi.create(490, 50, 'poulpi');
		poulpi.create(540, 50, 'poulpi');
		poulpi.create(590, 50, 'poulpi');
		poulpi.create(640, 50, 'poulpi');
		poulpi.create(690, 50, 'poulpi');
		poulpi.create(740, 50, 'poulpi');
		poulpi.create(790, 50, 'poulpi');
		//Poulpis Left//
		poulpi.create(800, 110, 'poulpi');
		poulpi.create(800, 150, 'poulpi');
		poulpi.create(800, 190, 'poulpi');
		poulpi.create(800, 230, 'poulpi');
		poulpi.create(800, 270, 'poulpi');
		poulpi.create(800, 310, 'poulpi');
		poulpi.create(800, 350, 'poulpi');
		poulpi.create(800, 390, 'poulpi');
		poulpi.create(800, 430, 'poulpi');
		poulpi.create(800, 470, 'poulpi');
		poulpi.create(800, 510, 'poulpi');
		poulpi.create(800, 550, 'poulpi');
		//Poulpis Terrain//
		poulpi.create(257, 266, 'poulpi');
		poulpi.create(411, 334, 'poulpi');
		poulpi.create(626, 149, 'poulpi');
		poulpi.create(95, 500, 'poulpi');
		poulpi.create(700, 476, 'poulpi');
		poulpi.create(672, 341, 'poulpi');

		////Inv////
		inv = this.physics.add.staticGroup();
		inv.create(400, 570, 'inv');

		////Life////
		if (nbheart == 1) {this.add.image(55,570,'h1')};
		if (nbheart == 2) {this.add.image(55,570,'h2')};
		if (nbheart == 3) {this.add.image(55,570,'h3')};

		////Rupee////
		rup = this.physics.add.staticGroup();
		rup.create(720, 160, 'red');

		////Tec Ball 1////
		tecball1 = this.physics.add.sprite(350, 490, 'oro')
		tecball1.setCollideWorldBounds(true);
		tecball1.setBounce(1);
		tecball1.setVelocityX(200);
		tecball1.setVelocityY(200);
		tecball1.anims.play('pulse', true);

		this.anims.create({
			key: 'pulse',
			frames: this.anims.generateFrameNumbers('tec', { start: 0, end: 7}),
			frameRate: 10,
			repeat: -1
		});

		////Tec Ball 2////
		tecball2 = this.physics.add.sprite(236, 197, 'oro')
		tecball2.setCollideWorldBounds(true);
		tecball2.setBounce(1);
		tecball2.setVelocityX(200);
		tecball2.setVelocityY(200);
		tecball2.anims.play('pulse', true);

		this.anims.create({
			key: 'pulse',
			frames: this.anims.generateFrameNumbers('tec', { start: 0, end: 7}),
			frameRate: 10,
			repeat: -1
		});


		////Han-Li////
		player = this.physics.add.sprite(75, 225, 'plr').setScale(1.3);
		player.setCollideWorldBounds(true);

		this.anims.create({
			key: 'down',
			frames: this.anims.generateFrameNumbers('plr', { start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('plr', { start: 4, end: 7}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('plr', { start: 8, end: 11}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'up',
			frames: this.anims.generateFrameNumbers('plr', { start: 12, end: 15}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'hurt',
			frames: [ { key: 'plr', frame: 16 } ],
			frameRate: 20,
			repeat: -1
		});

		////Cursors////
		cursors = this.input.keyboard.createCursorKeys();
	}

	update()
	{
		////Move Han-Li////
		if (cursors.up.isDown)
		{
			player.setVelocityY(-150);
			player.anims.play('up', true);
		}

		else if (cursors.down.isDown)
		{
			player.setVelocityY(150);
			player.anims.play('down', true);
		}

		else if (cursors.left.isDown)
		{
			player.setVelocityX(-150);
			player.anims.play('left', true);
		}

		else if (cursors.right.isDown)
		{
			player.setVelocityX(150);
			player.anims.play('right', true);
		}

		else
		{
			player.setVelocityX(0);
			player.setVelocityY(0);
			player.anims.play('down', true);
		}

		////Colliders////
		this.physics.add.collider(player, inv);
		this.physics.add.collider(player, poulpi);
		this.physics.add.overlap(player, pathleft, sceleft, null, this);
		this.physics.add.collider(tecball1, inv);
		this.physics.add.collider(tecball1, poulpi);
		this.physics.add.collider(tecball2, inv);
		this.physics.add.collider(tecball2, poulpi);
		this.physics.add.overlap(player, tecball1, hitplayer, null, this);
		this.physics.add.overlap(player, tecball2, hitplayer, null, this);
		this.physics.add.overlap(player, rup, collecrup, null, this);

		function sceleft (player, pathright)
		{
		this.sound.play('warp', {volume: 0.001});
		this.scene.start('overworld');
		}

		function hitplayer (tecball1, player)
		{
			this.sound.play('wave', {volume: 0.001});
			nbheart-=1;
			player.setPosition(75,225)
			if (nbheart == 1) {this.add.image(55,570,'h1')};
			if (nbheart == 2) {this.add.image(55,570,'h2')};
			if (nbheart == 3) {this.add.image(55,570,'h3')};
		}

		if (nbheart == 0)
		{
			this.physics.pause();
			player.anims.play('hurt', true);
			gameOver=true;
		};

		function hitplayer (tecball2, player)
		{
			this.sound.play('wave', {volume: 0.001});
			nbheart-=1;
			player.setPosition(75,225)
			if (nbheart == 1) {this.add.image(55,570,'h1')};
			if (nbheart == 2) {this.add.image(55,570,'h2')};
			if (nbheart == 3) {this.add.image(55,570,'h3')};
		}

		if (nbheart == 0)
		{
			this.physics.pause();
			player.anims.play('hurt', true);
			gameOver=true;
		};

		function collecrup (player, rup)
		{
			this.sound.play('get');
			rup.destroy(true);
			rup=true;
			this.add.image(750, 570);
		};
	}
}

class rockland extends Phaser.Scene {
	constructor() {
		super ('rockland');
	}

	init(){}
	preload(){}

	create()
	{
		////Background////
		this.add.image(400, 300, 'back');

		////Pathdown////
		pathdown = this.physics.add.staticGroup();
		pathdown.create(400, 530, 'pathdown');

		///Decorum////
		this.add.image(386, 100, 'rocky');
		this.add.image(200, 352, 'rocky');
		this.add.image(678, 243, 'rocky');
		this.add.image(54, 484, 'rocky');
		this.add.image(467, 439, 'rocky');

		this.add.image(400, 165, 'flower');
		this.add.image(400, 200, 'flower');
		this.add.image(761, 423, 'flower');
		this.add.image(42, 146, 'flower');

		////Tec Ball 1////
		tecballrock1 = this.physics.add.sprite(75, 490, 'oro')
		tecballrock1.setCollideWorldBounds(true);
		tecballrock1.setBounce(1);
		tecballrock1.setVelocityX(300);
		tecballrock1.setVelocityY(300);
		tecballrock1.anims.play('pulse', true);

		this.anims.create({
			key: 'pulse',
			frames: this.anims.generateFrameNumbers('tec', { start: 0, end: 7}),
			frameRate: 10,
			repeat: -1
		});

		////Tec Ball 2////
		tecballrock2 = this.physics.add.sprite(762, 145, 'oro')
		tecballrock2.setCollideWorldBounds(true);
		tecballrock2.setBounce(1);
		tecballrock2.setVelocityX(300);
		tecballrock2.setVelocityY(300);
		tecballrock2.anims.play('pulse', true);

		this.anims.create({
			key: 'pulse',
			frames: this.anims.generateFrameNumbers('tec', { start: 0, end: 7}),
			frameRate: 10,
			repeat: -1
		});

		////Poulpi////
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

		poulpi.create(30, 70, 'poulpi');
		poulpi.create(80, 70, 'poulpi');
		poulpi.create(120, 70, 'poulpi');
		poulpi.create(160, 70, 'poulpi');
		poulpi.create(200, 70, 'poulpi');
		poulpi.create(250, 70, 'poulpi');
		poulpi.create(300, 70, 'poulpi');
		poulpi.create(350, 70, 'poulpi');
		poulpi.create(400, 70, 'poulpi');
		poulpi.create(450, 70, 'poulpi');
		poulpi.create(500, 70, 'poulpi');
		poulpi.create(550, 70, 'poulpi');
		poulpi.create(600, 70, 'poulpi');
		poulpi.create(650, 70, 'poulpi');
		poulpi.create(700, 70, 'poulpi');
		poulpi.create(750, 70, 'poulpi');
		poulpi.create(800, 70, 'poulpi');

		poulpi.create(40, 90, 'poulpi');
		poulpi.create(90, 90, 'poulpi');
		poulpi.create(140, 90, 'poulpi');
		poulpi.create(190, 90, 'poulpi');
		poulpi.create(240, 90, 'poulpi');
		poulpi.create(290, 90, 'poulpi');
		poulpi.create(490, 90, 'poulpi');
		poulpi.create(540, 90, 'poulpi');
		poulpi.create(590, 90, 'poulpi');
		poulpi.create(640, 90, 'poulpi');
		poulpi.create(690, 90, 'poulpi');
		poulpi.create(740, 90, 'poulpi');
		poulpi.create(790, 90, 'poulpi');

		////Enigma////
		enigma = this.physics.add.staticGroup();
		enigma.create(400, 130, 'enigma')

		////Rocks////
		rock = this.physics.add.staticGroup();
		rock.create(20, 520, 'rock');
		rock.create(55, 520, 'rock');
		rock.create(90, 520, 'rock');
		rock.create(125, 520, 'rock');
		rock.create(160, 520, 'rock');
		rock.create(195, 520, 'rock');
		rock.create(230, 520, 'rock');
		rock.create(265, 520, 'rock');
		rock.create(265, 520, 'rock');
		rock.create(300, 520, 'rock');
		rock.create(335, 520, 'rock');

		rock.create(780, 520, 'rock');
		rock.create(745, 520, 'rock');
		rock.create(710, 520, 'rock');
		rock.create(675, 520, 'rock');
		rock.create(640, 520, 'rock');
		rock.create(605, 520, 'rock');
		rock.create(570, 520, 'rock');
		rock.create(535, 520, 'rock');
		rock.create(500, 520, 'rock');
		rock.create(465, 520, 'rock');

		rock.create(356, 556, 'rock');
		rock.create(188, 161, 'rock');
		rock.create(202, 294, 'rock');
		rock.create(347, 428, 'rock');
		rock.create(160, 305, 'rock');
		rock.create(212, 484, 'rock');

		rock.create(492, 556, 'rock');
		rock.create(740, 161, 'rock');
		rock.create(653, 294, 'rock');
		rock.create(550, 428, 'rock');
		rock.create(762, 305, 'rock');
		rock.create(735, 484, 'rock');


		////Inv////
		inv = this.physics.add.staticGroup();
		inv.create(400, 570, 'inv');

		////Life////
		if (nbheart == 1) {this.add.image(55,570,'h1')};
		if (nbheart == 2) {this.add.image(55,570,'h2')};
		if (nbheart == 3) {this.add.image(55,570,'h3')};

		////Han-Li////
		player = this.physics.add.sprite(400, 470, 'plr').setScale(1.3);
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

		this.physics.add.overlap(player, pathdown, scedown, null, this);
		this.physics.add.overlap(player, tecballrock1, hitplayer, null, this);
		this.physics.add.overlap(player, tecballrock2, hitplayer, null, this);
		this.physics.add.collider(player, rock);
		this.physics.add.collider(player, inv);
		this.physics.add.collider(player, poulpi);
		this.physics.add.collider(player, enigma);
		this.physics.add.collider(tecballrock1, rock);
		this.physics.add.collider(tecballrock1, inv);
		this.physics.add.collider(tecballrock1, poulpi);
		this.physics.add.collider(tecballrock1, enigma);
		this.physics.add.collider(tecballrock2, rock);
		this.physics.add.collider(tecballrock2, inv);
		this.physics.add.collider(tecballrock2, poulpi);
		this.physics.add.collider(tecballrock2, enigma);


		function scedown (player, pathdown)
		{
		this.sound.play('warp', {volume: 0.001});
		this.scene.start('overworld');
		}

		function hitplayer (tecballrock1, player)
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

		function hitplayer (tecballrock2, player)
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
	}
}
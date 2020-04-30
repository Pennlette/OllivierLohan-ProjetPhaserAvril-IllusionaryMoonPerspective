class overworld extends Phaser.Scene {
	constructor() {
		super('overworld');
	}

	init(){}
	preload(){}


	create()
	{
		////Background////
		this.add.image(400, 300, 'back');

		//Flowers//
		this.add.image(100, 100, 'flower');
		this.add.image(132, 100, 'flower');
		this.add.image(132, 132, 'flower');
		this.add.image(68, 164, 'flower');
		this.add.image(36, 196, 'flower');

		//Rocklets//
		this.add.image(145, 435, 'rocky');
		this.add.image(190, 500, 'rocky');
		this.add.image(145, 525, 'rocky');

		//Grass//
		this.add.image(365, 16, 'grass');
		this.add.image(430, 16, 'grass');

		//Paths//
		pathup = this.physics.add.staticGroup();
		pathup.create(400, 17, 'pathup');
		pathright = this.physics.add.staticGroup();
		pathright.create(784, 225, 'pathright');

		//Poulpis Up//
		poulpi = this.physics.add.staticGroup();
		poulpi.create(775, 30, 'poulpi');
		poulpi.create(765, 60, 'poulpi');
		poulpi.create(775, 90, 'poulpi');
		poulpi.create(765, 120, 'poulpi');
		poulpi.create(775, 150, 'poulpi');
		//Poulpi Down//
		poulpi.create(775, 300, 'poulpi');
		poulpi.create(765, 330, 'poulpi');
		poulpi.create(775, 360, 'poulpi');
		poulpi.create(765, 390, 'poulpi');
		poulpi.create(775, 420, 'poulpi');
		poulpi.create(765, 450, 'poulpi');
		poulpi.create(775, 480, 'poulpi');
		poulpi.create(765, 510, 'poulpi');
		poulpi.create(775, 540, 'poulpi');
		//Rocks//
		rock = this.physics.add.staticGroup();
		rock.create(100, 430, 'rock');
		rock.create(100, 465, 'rock');
		rock.create(100, 500, 'rock');
		rock.create(230, 430, 'rock');
		rock.create(230, 465, 'rock');
		rock.create(230, 500, 'rock');
	
		//Inventory//
		inv = this.physics.add.staticGroup();
		inv.create(400, 570, 'inv');

		////Life////
		if (nbheart == 1) {this.add.image(55,570,'h1')};
		if (nbheart == 2) {this.add.image(55,570,'h2')};
		if (nbheart == 3) {this.add.image(55,570,'h3')};

		///Life Up////
		hup = this.physics.add.sprite(164, 68, 'hup');		

		////Han-Li////
		player = this.physics.add.sprite(400, 300, 'plr').setScale(1.3);
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

		////Orosa 1////
		orosaovw1 = this.physics.add.sprite(150, 430, 'oro')
		orosaovw1.setCollideWorldBounds(true);
		orosaovw1.setBounce(1);
		orosaovw1.setVelocityX(120);
		orosaovw1.setVelocityY(120);
		orosaovw1.anims.play('orodown', true);

		this.anims.create({
			key: 'orodown',
			frames: this.anims.generateFrameNumbers('oro', { start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'oroup',
			frames: this.anims.generateFrameNumbers('oro', { start: 4, end: 7}),
			frameRate: 10,
			repeat: -1
		});

		////Orosa 2////
		orosaovw2 = this.physics.add.sprite(125, 430, 'oro')
		orosaovw2.setCollideWorldBounds(true);
		orosaovw2.setBounce(1);
		orosaovw2.setVelocityX(120);
		orosaovw2.setVelocityY(120);
		orosaovw2.anims.play('orodown', true);

		this.anims.create({
			key: 'orodown',
			frames: this.anims.generateFrameNumbers('oro', { start: 0, end: 3}),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'oroup',
			frames: this.anims.generateFrameNumbers('oro', { start: 4, end: 7}),
			frameRate: 10,
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
		this.physics.add.collider(player, rock);
		this.physics.add.overlap(player, hup, collechup, null, this);
		this.physics.add.overlap(player, pathright, sceright, null, this);
		this.physics.add.overlap(player, pathup, sceup, null, this);
		
		this.physics.add.collider(orosaovw1, inv);
		this.physics.add.collider(orosaovw1, poulpi);
		this.physics.add.collider(orosaovw1, rock);
		this.physics.add.overlap(orosaovw1, player, hitplayer, null, this);

		this.physics.add.collider(orosaovw2, inv);
		this.physics.add.collider(orosaovw2, poulpi);
		this.physics.add.collider(orosaovw2, rock);
		this.physics.add.overlap(orosaovw2, player, hitplayer, null, this);

		this.physics.add.collider(player, board);


		////Functions////
		function collechup (player, hup)
		{
			this.sound.play('get');
			hup.destroy(true);
			nbheart +=1;
			if (nbheart == 1) {this.add.image(55,570,'h1')};
			if (nbheart == 2) {this.add.image(55,570,'h2')};
			if (nbheart == 3) {this.add.image(55,570,'h3')};
		};

		function sceright (player, pathright)
		{
			this.sound.play('warp', {volume: 0.001});
			this.scene.start('forest');
		};

		function sceup (player, pathright)
		{
			this.sound.play('warp', {volume: 0.001});
			this.scene.start('rockland');
		};

		function hitplayer (orosaovw1, player)
		{
			this.sound.play('wave', {volume: 0.001});
			nbheart-=1;
			player.setPosition(400,300)
			if (nbheart == 1) {this.add.image(55,570,'h1')};
			if (nbheart == 2) {this.add.image(55,570,'h2')};
			if (nbheart == 3) {this.add.image(55,570,'h3')};
		};

		if (nbheart == 0)
		{
			this.physics.pause();
			player.anims.play('hurt', true);
			gameOver=true;
		};

		function hitplayer (orosaovw2, player)
		{
			this.sound.play('wave', {volume: 0.001});
			nbheart-=1;
			player.setPosition(400,300)
			if (nbheart == 1) {this.add.image(55,570,'h1')};
			if (nbheart == 2) {this.add.image(55,570,'h2')};
			if (nbheart == 3) {this.add.image(55,570,'h3')};
		};

		if (nbheart == 0)
		{
			this.physics.pause();
			player.anims.play('hurt', true);
			gameOver=true;
		};

	}
}

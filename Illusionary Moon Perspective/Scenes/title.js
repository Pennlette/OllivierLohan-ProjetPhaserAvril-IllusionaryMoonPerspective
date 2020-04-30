


class title extends Phaser.Scene {
	constructor() {
		super('title');
	}

	init(){}
	preload(){}

	create()
	{
		////Background////
		this.add.image(400, 300, 'back');

		////Title////
		this.add.image(400, 70, 'nm');

		////Press Enter////
		tinter = this.add.sprite(400, 375, 'etr');
		this.anims.create({
			key: 'flash',
			frames: this.anims.generateFrameNumbers('etr', { start: 0, end: 1
			}),
				frameRate: 2,
				repeat: -1
		});
		pressenter = this.input.keyboard.addKey('ENTER');

		////Audio////
		this.sound.add('titleA');
		this.sound.play('titleA');
		


	}

	update(){
		tinter.anims.play('flash', true);

		if (pressenter.isDown)
		{
			this.sound.add('start')
			this.sound.play('start')
			this.scene.start('overworld');
		}
	}

}
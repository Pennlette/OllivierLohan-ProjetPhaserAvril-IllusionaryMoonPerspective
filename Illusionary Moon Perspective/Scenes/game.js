var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
      preload,
      title,
      overworld,
      forest,
      rockland,
    ]
  }

var game = new Phaser.Game(config);
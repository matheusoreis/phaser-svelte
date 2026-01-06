import { Scene } from "phaser";
import { emitter } from "../emitter";

export class GameScene extends Scene {
  private logo!: Phaser.GameObjects.Image;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("GameScene");
  }

  public create() {
    const { width, height } = this.scale;
    this.logo = this.add.image(width / 2, height / 2, "svelte-logo");
    this.cursors = this.input.keyboard!.createCursorKeys();

    emitter.emit("scene-ready", this);
  }

  public update() {
    const speed = 1.5;
    let dx = 0;
    let dy = 0;
    if (this.cursors.left?.isDown) dx -= 1;
    if (this.cursors.right?.isDown) dx += 1;
    if (this.cursors.up?.isDown) dy -= 1;
    if (this.cursors.down?.isDown) dy += 1;

    if (dx !== 0 || dy !== 0) {
      const length = Math.sqrt(dx * dx + dy * dy);
      this.logo.x += (dx / length) * speed;
      this.logo.y += (dy / length) * speed;
    }
  }
}

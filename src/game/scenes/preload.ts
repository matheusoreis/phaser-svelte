import { Scene } from "phaser";

export class PreloadScene extends Scene {
  constructor() {
    super("PreloadScene");
  }

  public init() {
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);
    this.load.on("progress", (progress: number) => {
      bar.width = 4 + 460 * progress;
    });
  }

  public preload() {
    this.load.svg("svelte-logo", "/svelte.svg");
    this.load.svg("vite-logo", "/vite.svg");
  }

  public create() {
    this.scene.start("GameScene");
  }
}

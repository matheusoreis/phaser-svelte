import { Game } from "phaser";

import { PreloadScene } from "./scenes/preload";
import { GameScene } from "./scenes/game";

export function startGame(parent: string) {
  return new Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#1d212d",
    scene: [PreloadScene, GameScene],
    parent: parent,
  });
}

<script context="module" lang="ts">
    import {Game, Scene} from "phaser";

    export type PhaserReference = {
        game: Game | null;
        scene: Scene | null;
    }
</script>

<script lang="ts">
    import { onMount } from "svelte";

    import { startGame } from "../game/game";
    import { emitter } from "../game/emitter";

    export let phaserReference: PhaserReference = {
        game: null,
        scene: null
    };

    export let currentActiveScene: (scene: Scene) => void | undefined;

    onMount(() => {
        phaserReference.game = startGame("game-container");

        emitter.on('scene-ready', (scene: Scene) => {
            phaserReference.scene = scene;
            if (currentActiveScene) {
                currentActiveScene(scene);
            }
        });
    });
</script>

<div id="game-container"></div>
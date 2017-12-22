import { EventEmitter } from "events";
import Game from "./Game";
import v4 = require("uuid/v4");
import GameDispatcher from "../GameDispatcher";
import { GameActionType, GameActions } from "../GameDispatcher";

class GameStore extends EventEmitter
{
    private games: Array<Game>;

    constructor()
    {
        super();

        this.games = [
            new Game(v4, "Heisenberg's game", 4),
            new Game(v4, "Jessie's game", 2),
            new Game(v4, "Mike's game", 3)
        ];
    }

    public createGame(name: string, maxPlayers: number): void
    {
        this.games.push(new Game(v4, name, maxPlayers));
        this.emit("change");
    }

    public getAll(): Array<Game>
    {
        return this.games;
    }

    public handleActions(action: GameActions): void
    {
        switch(action.type) {
            case GameActionType.CreateGame: {
                this.createGame(action.payload.name, action.payload.maxPlayers);
            }
        }
    }
}

const gameStore = new GameStore();
GameDispatcher.register(gameStore.handleActions.bind(gameStore));

export default gameStore;

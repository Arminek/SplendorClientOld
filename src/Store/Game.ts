import {v4} from "uuid/interfaces";

class Game
{
    constructor(
        public readonly id: v4,
        public readonly name: string,
        public readonly maxPlayers: number
    ) {}
}

export default Game;

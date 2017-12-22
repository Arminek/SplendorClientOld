import GameDispatcher, {GameActionType} from "../GameDispatcher";

export function createGame(name: string, maxPlayers: number) {
    GameDispatcher.dispatch({
        type: GameActionType.CreateGame,
        payload: {
            name,
            maxPlayers
        }
    });
}

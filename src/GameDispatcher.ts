import { Dispatcher } from "flux";

export enum GameActionType
{
    CreateGame,
}

export interface GameActions
{
    type: GameActionType;
    payload: any;
}

export default new Dispatcher<GameActions>();

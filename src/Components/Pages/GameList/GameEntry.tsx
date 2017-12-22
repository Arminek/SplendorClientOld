import * as React from "react";
import Game from "../../../Store/Game";

export interface GameEntryProps
{
    key: string;
    game: Game;
}

export default class GameEntry extends React.Component<GameEntryProps, any>
{
    constructor(props: GameEntryProps, state: any)
    {
        super(props, state);
    }

    public render(): any
    {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{this.props.game.maxPlayers}</td>
                <td><button>Join</button></td>
            </tr>
        );
    }
}

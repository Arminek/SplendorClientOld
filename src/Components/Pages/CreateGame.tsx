import * as React from "react";
import * as GameActions from "../../Actions/GameActions";

export default class CreateGame extends React.Component
{
    private gameName: string;
    private maxPlayers: number;

    private handleCreateGame(): void
    {
        GameActions.createGame(this.gameName, this.maxPlayers);
    }

    private handleGameNameChange(proxy: any): void
    {
        this.gameName = proxy.target.value;
    }

    private handleMaxPlayersChange(proxy: any): void
    {
        this.maxPlayers = proxy.target.value;
    }

    public render(): any
    {
        return (
            <div>
                <label>Game name</label>
                <input type="text" onChange={this.handleGameNameChange.bind(this)} />
                <label>How many players</label>
                <input type="number" onChange={this.handleMaxPlayersChange.bind(this)} />
                <button onClick={this.handleCreateGame.bind(this)} >Create</button>
            </div>
        );
    }
}

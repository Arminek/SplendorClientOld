import * as React from "react";
import GameStore from "../../Store/GameStore";
import Game from "../../Store/Game";
import GameEntry from "./GameList/GameEntry";

export interface GameListState
{
    games: Array<Game>;
}

export default class GameList extends React.Component<any, GameListState>
{
    constructor(props: any, state: GameListState)
    {
        super(props, state);

        this.state = {
            games: GameStore.getAll()
        };
    }

    public componentWillMount(): void
    {
        GameStore.on("change", (): void => {
            this.setState({
                games: GameStore.getAll()
            });
        });
    }

    public componentWillUnmount(): void
    {
        GameStore.removeAllListeners();
    }

    public render(): any
    {
        const { games } = this.state;
        const GameComponents = games.map((game: Game) => {
            return <GameEntry key={game.id()} game={game} />;
        });

        return (
            <div>
                <h1>List of Games</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Max Players</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {GameComponents}
                    </tbody>
                </table>
            </div>
        );
    }
}

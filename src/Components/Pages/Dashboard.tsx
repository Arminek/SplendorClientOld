import * as React from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends React.Component
{
    public render(): any
    {
        return (
            <div>
                <h1>Inn</h1>
                <Link to="create-game">Create New Game</Link>
                <Link to="games">Join To Existing Game</Link>
            </div>
        );
    }
}

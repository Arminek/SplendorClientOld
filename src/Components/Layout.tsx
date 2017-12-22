import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateGame from "./Pages/CreateGame";
import GameList from "./Pages/GameList";

export default class Layout extends React.Component
{
    public render(): any
    {
        return (
            <div>
                <Header />
                <CreateGame />
                <GameList />
                <Footer />
            </div>
        );
    }
}

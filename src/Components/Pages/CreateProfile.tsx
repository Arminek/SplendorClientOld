import * as React from "react";

export default class CreateProfile extends React.Component
{
    public render(): any
    {
        return (
            <div>
                <h1>Create New Player Profile</h1>
                <label>Email</label>
                <input />
                <label>Password</label>
                <input />
                <button>Create</button>
            </div>
        );
    }
}

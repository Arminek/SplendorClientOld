import * as React from "react";

export default class SignIn extends React.Component
{
    public render(): any
    {
        return (
            <div>
                <label>Email</label>
                <input />
                <label>Password</label>
                <input />
                <button>Sign In</button>
                <button>Create Profile</button>
            </div>
        );
    }
}

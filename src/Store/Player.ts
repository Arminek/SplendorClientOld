import Email from "./Email";
import Password from "./Password";

class Player
{
    constructor(public readonly email: Email, public readonly password: Password, public readonly nickname: string) {}
}

export default Player;

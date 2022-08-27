module.exports = class AuthDto {
    uid;
    email;
    nickname;

    constructor(user) {
        this.uid = user.uid;
        this.email = user.email;
        this.nickname = user.nickname;
    }
};
module.exports = class putUserDto {

    email;
    nickname;

    constructor(user) {
        this.email = user.email;
        this.nickname = user.nickname;
    }
};
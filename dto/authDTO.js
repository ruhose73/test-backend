module.exports = class AuthDto {
    id;
    email;

    constructor(user) {
        this.id = user.id;
        this.email = user.email;
    }
};
module.exports = class tokenDTO {

    token;
    expire;

    constructor(inputToken) {
        this.token = inputToken.token;
        this.expire = inputToken.expire;
    }
};
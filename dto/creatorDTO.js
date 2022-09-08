module.exports = class CreatorDto {
    
    nickname;
    uid;

    constructor(user) {
        this.nickname = user.nickname;
        this.uid = user.uid;
    }
};
module.exports = class UserTagDto {
    
    id;
    name;
    sortOrder;

    constructor(tag) {
        this.id = tag.id;
        this.name = tag.name;
        this.sortOrder = tag.sortorder;
    }
};
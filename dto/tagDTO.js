module.exports = class TagDto {
    
    name;
    sortOrder;

    constructor(tag) {
        this.name = tag.name;
        this.sortOrder = tag.sortorder;
    }
};
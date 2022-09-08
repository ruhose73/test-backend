module.exports = class MetaDto {
    offset;
    length;
    quantity;

    constructor(meta) {
        this.offset = meta.offset;
        this.length = meta.length;
        this.quantity = meta.quantity;
    }
};
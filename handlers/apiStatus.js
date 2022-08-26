class ApiStatus extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiStatus(400, message);
    }

    static UnauthorizedError() {
        return new ApiStatus(401, "Пользователь не авторизован");
    }

    static forbidden(message) {
        return new ApiStatus(403, message);
    }

    static pageNotFound(message) {
        return new ApiStatus(404, message);
    }

    static ok(message) {
        return new ApiStatus(200, message);
    }

    static created(message) {
        return new ApiStatus(201, message);
    }

    static accepted(message) {
        return new ApiStatus(202, message);
    }

    static noContent() {
        return new ApiStatus(204);
    }

    static internal(message) {
        return new ApiStatus(500, message);
    }
}


module.exports = ApiStatus;
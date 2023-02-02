"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDeviceById(repo) {
    return (id) => {
        return repo.getDeviceById(id);
    };
}
exports.default = getDeviceById;

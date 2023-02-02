"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteDevice(repo) {
    return (id) => {
        return repo.deleteDevice(id);
    };
}
exports.default = deleteDevice;

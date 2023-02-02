"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateDevice(repo) {
    return (id) => {
        return repo.deleteDevice(id);
    };
}
exports.default = updateDevice;

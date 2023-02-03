"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateDevice(repo) {
    return (dev) => {
        return repo.updateDevice(dev);
    };
}
exports.default = updateDevice;

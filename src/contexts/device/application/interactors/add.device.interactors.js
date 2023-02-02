"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDevice(repo) {
    return (dev) => {
        return repo.addDevice(dev);
    };
}
exports.default = addDevice;

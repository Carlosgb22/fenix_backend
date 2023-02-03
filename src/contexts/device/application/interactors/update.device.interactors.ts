import Device from "../../domain/entities/device";
import database from "../../domain/repositories/device.repo";

export default function updateDevice(repo: database): (dev: Device) => Promise<boolean> {
    return (dev: Device) => {
        return repo.updateDevice(dev);
    }
}
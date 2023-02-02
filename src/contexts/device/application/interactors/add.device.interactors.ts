import Device from "../../domain/entities/device"
import database from "../../domain/repositories/device.repo"

export default function addDevice(repo: database): (dev: Device) => boolean {
    return (dev: Device) => {
        return repo.addDevice(dev);
    }
}
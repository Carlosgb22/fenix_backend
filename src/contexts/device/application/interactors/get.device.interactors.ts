import Device from "../../domain/entities/device";
import database from "../../domain/repositories/device.repo";

export default function getDeviceById(repo: database): (id: String) => Device {
    return (id: String) => {
        return repo.getDeviceById(id);
    }
}
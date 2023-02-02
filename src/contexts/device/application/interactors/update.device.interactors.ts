import database from "../../domain/repositories/device.repo";
import deleteDevice from "./delete.device.interactors";

export default function updateDevice(repo: database): (id: String) => boolean {
    return (id: String) => {
        return repo.deleteDevice(id);
    }
}
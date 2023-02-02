import database from "../../domain/repositories/device.repo"

export default function deleteDevice(repo: database): (id: String) => boolean {
    return (id: String) => {
        return repo.deleteDevice(id);
    }
}
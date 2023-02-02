import Device from "../../domain/entities/device";
import database from "../../domain/repositories/device.repo";

export default function getAll(repo: database): () => Array<Device> {
    return () => {
        return repo.getAll();
    }
}
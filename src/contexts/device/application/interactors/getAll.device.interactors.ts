import { Query } from "mysql";
import database from "../../domain/repositories/device.repo";
import Device from "../../domain/entities/device";

export default function getAll(repo: database): Promise<Array<Device>> {
    return repo.getAll();
}

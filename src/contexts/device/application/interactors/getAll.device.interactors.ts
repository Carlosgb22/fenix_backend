import { Query } from "mysql";
import loggerService from "../../../../services/loggerService";
import database from "../../domain/repositories/device.repo";

export default function getAll(repo: database): Promise<Query> {
    loggerService.info("Llega a getAll.device.interactors");
    return repo.getAll();
}

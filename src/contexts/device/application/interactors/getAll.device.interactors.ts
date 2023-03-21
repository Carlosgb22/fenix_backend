import database from "../../domain/repositories/device.repo";
import Device from "../../domain/entities/device";

//Metodo que llama al metodo de la interfaz, se implementa en device.interactors
export default function getAll(repo: database): Promise<Array<Device>> {
    return repo.getAll();
}

import Device from "../../domain/entities/device";
import database from "../../domain/repositories/device.repo";

//Metodo que llama al metodo de la interfaz, se implementa en device.interactors
export default function getDeviceById(repo: database): (id: String) => Promise<Device> {
    return (id: String) => {
        return repo.getDeviceById(id);
    }
}
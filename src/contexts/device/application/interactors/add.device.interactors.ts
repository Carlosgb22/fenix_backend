import Device from "../../domain/entities/device"
import database from "../../domain/repositories/device.repo"

//Metodo que llama al metodo de la interfaz, se implementa en device.interactors
export default function addDevice(repo: database): (dev: Device) => Promise<boolean> {
    return (dev: Device) => {
        return repo.addDevice(dev);
    }
}
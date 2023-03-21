import database from "../../domain/repositories/device.repo"

//Metodo que llama al metodo de la interfaz, se implementa en device.interactors
export default function deleteDevice(repo: database): (id: String) => Promise<boolean> {
    return (id: String) => {
        return repo.deleteDevice(id);
    }
}
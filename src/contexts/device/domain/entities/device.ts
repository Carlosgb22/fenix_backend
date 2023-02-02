export default interface Device {
    id: string;
    name: string;
    user: string;
    status: string;
    imgCheck: Blob | null;
    imgFail: Blob | null;
    imgWait: Blob | null;
}
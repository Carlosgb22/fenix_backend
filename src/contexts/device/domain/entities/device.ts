export default interface Device {
    id: string;
    name: string;
    userUid: string;
    imgcon: Blob | null;
    imgdiscon: Blob | null;
    imgwait: Blob | null;
}
export class Microscope {
    id: string;
    status: string;
    machineType: string;
    longitude: number;
    latitude: number;
    lastMaintenance: string;
    installDate: string;
    floor: number;
    events?: {
        timestamp: string;
        status: string;
    };
}

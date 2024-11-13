export interface ActorDTO {
    id: number;
    name: string;
    dateOfBirth: Date;
    pircture?: string;
}

export interface ActorCreationDTO {
    name: string;
    dateOfBirth: Date;
    picture?: File;
}
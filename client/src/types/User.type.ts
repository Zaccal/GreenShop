export type TypeRole = 'USER' | 'ADMIN' | 'ADMINISTRATOR';

export interface IAddress {
    CountryOrRegion: string;
    StreetAddress: string;
    State: string;
    TownOrCity: string;
    Appartment?: string;
    Zip: number;
}

export interface IUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: TypeRole;
    address: IAddress;
    avatar: string;
}

interface AddressCity {
    city: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    address: AddressCity;
}

export interface Users {
    users: User[];
    total?: number;
    skip?: number;
    limit?: number;
}
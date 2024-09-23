export interface User {
	id: number;
	name: string;
}

export interface Address {
	id: number;
	street: string;
	city: string;
	zipCode: string;
	userId: number;
}

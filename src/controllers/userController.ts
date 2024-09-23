import { Request, Response } from 'express';
import { createUser, createAddress } from '../models/userModel';
import { User, Address } from '../models/types';

export const createUserWithAddress = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { name, street, city, zipCode } = req.body;

		const user: User = await createUser(name);

		const address: Address = await createAddress(
			street,
			city,
			zipCode,
			user.id
		);

		res.status(201).json({
			message: 'User and address created successfully.',
			user,
			address,
		});
	} catch (error) {
		res.status(500).json({ message: (error as Error).message });
	}
};

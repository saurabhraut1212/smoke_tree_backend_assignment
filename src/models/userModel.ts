import pool from '../config/dbConfig';
import { QueryResult } from 'pg';
import { User, Address } from './types';

export const createUser = async (name: string): Promise<User> => {
	const result: QueryResult<User> = await pool.query(
		'INSERT INTO users (name) VALUES ($1) RETURNING *',
		[name]
	);
	return result.rows[0];
};

export const createAddress = async (
	street: string,
	city: string,
	zipCode: string,
	userId: number
): Promise<Address> => {
	const result: QueryResult<Address> = await pool.query(
		'INSERT INTO addresses (street, city, zip_code, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
		[street, city, zipCode, userId]
	);
	return result.rows[0];
};

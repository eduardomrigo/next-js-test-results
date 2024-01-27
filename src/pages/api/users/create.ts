/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 * 
 * 
 * Verificar o tipo de requisição, obter os dados do corpo da requisição e verificar os dados do usuário.
 * Em seguida, crio o novo usuário e o adiciono à lista de usuários.
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser, IUserCreate } from '@/types/user.d';

const users: IUser[] = [];

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
	  return res.status(405).json({ error: 'Method Not Allowed' });
	}
  
	const userData: IUserCreate = req.body as IUserCreate;
  
	if (!userData) {
	  return res.status(400).json({ error: 'Bad Request - Missing or invalid request body' });
	}
  
	const newUser: IUser = {
	  id: users.length + 1,
	  name: userData.name,
	  email: userData.email,
	};
  
	users.push(newUser);
  
	return res.status(201).json(newUser);
  };
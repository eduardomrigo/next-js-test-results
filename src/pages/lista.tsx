/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 * 
 * Aqui mapeei a lista e criei uma div para cada usuario na interface, 
 * cada um deles renderiza o id nome e email, utilizando o id como key unica de cada um
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { IUser } from '@/types/user';

export default function Lista() {
	const [users, setUsers] = useState<Array<IUser>>([]);

	async function getUsersList() {
		try {
			const response = await fetch('/api/users');
			const data = await response.json();

			if (!response.ok) throw new Error('Erro ao obter os dados');

			setUsers(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUsersList();
	}, []);

	return (
		<div className={styles.container}>
		<div className={styles.content}>
		  <h2>Lista de usuários</h2>
  
		  <div data-list-container>
			{users.map((user) => (
			  <div key={user.id} data-list-item>
				{`ID ${user.id} - ${user.name} (${user.email})`}
			  </div>
			))}
		  </div>
		</div>
	  </div>
	);
}

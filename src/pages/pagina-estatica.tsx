/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useState, useEffect } from 'react';
import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

const Lista = ({ cities }: { cities: ICity[] }) => {
  const [list, setList] = useState(cities);
  const [logMessages, setLogMessages] = useState<string[]>([]);


  useEffect(() => {
    const interval = setInterval(() => {
      const logMessage = `${new Date().toISOString()}`;
      console.log(logMessage);
      setLogMessages((prevMessages) => [logMessage, ...prevMessages.slice(0, 4)]);
      getList();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getList = async () => {
    try {
      const response = await fetch('/api/cities/10');
      const data = await response.json();

      if (!response.ok) throw new Error('Erro ao obter os dados');

      setList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de cidades</h2>

        <div data-list-container>
          {list.map((city) => (
            <div data-list-item key={city.id}>
              {city.name}
            </div>
          ))}
        </div>

        <pre><strong>Último log:</strong> {logMessages[0]}</pre>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:8080';
	const response = await fetch(`${baseUrl}/api/cities/10`);
	const cities = await response.json();
  
	return {
	  props: {
		cities,
	  },
	  revalidate: 60, 
	};
  };

export default Lista;


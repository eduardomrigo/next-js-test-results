/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 * 
 * No formulário, utilizei o useState para criar um estado para o resultado.
 * Após a resposta da API, armazeno o JSON formatado no setResult no estado result e, 
 * em seguida, exibo abaixo utilizando uma tag <pre> (vi isso em um vídeo de react-form-hook do Diego Fernandes da RocketSeat; 
 * achei legal para visualização diferente do console.log)
 * 
 */

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '@/styles/formulario.module.css';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [result, setResult] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error creating user');

      const newUser = await response.json();
      setResult(JSON.stringify(newUser, null, 2)); 
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nome" {...register('name', { required: 'Nome é obrigatório' })} />
          {errors.name && <span>{errors.name.message}</span>}

          <input type="email" placeholder="E-mail" {...register('email', { required: 'Email é obrigatório' })} />
          {errors.email && <span>{errors.email.message}</span>}

          <button type="submit">Enviar</button>
        </form>

        {result && (
          <div>
            <h2>Usuário criado:</h2>
            <pre>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

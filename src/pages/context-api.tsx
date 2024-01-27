/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { useMessage } from '../contexts/MessageContext';
import { ToastMessage } from '@/components/ToastMessage';

export default function ContextApi() {
  const { addMessage, messages } = useMessage();

  const handleSuccessButtonClick = () => {
    addMessage({
      id: String(Date.now()),
      message: 'Mensagem de sucesso',
      type: 'success',
    });
  };

  const handleErrorButtonClick = () => {
    addMessage({
      id: String(Date.now()),
      message: 'Mensagem de erro',
      type: 'error',
    });
  };

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles['toast-container']}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} />
        ))}
      </div>
    </>
  );
}

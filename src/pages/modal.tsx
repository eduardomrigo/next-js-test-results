/**
 * Modal
 *
 * - O modal fecha ao clicar em qualquer elemento, resolva o problema
 * 
 * 
 * 
 * - Analise do codigo: 
 * 
 * IDs iguais nos forms, utilizei o hook useId para gerar ids unicos aos campos
 * O formulario esta com uma funcao vazia, oq previne o envio, porem o melhor seria utilizar o e.preventDefault() pra evitar o reload da pagina;
 * 
 * - Problema e Solução: 
 * O evento de clique se propaga no HTML até o elemento pai, ou seja, precisamos de algo para manipular esse evento e impedir q ele se propague para o elemento pai, pra isso utilizei o metodo stopPropagation() no evento de click no conteudo do modal.

 */

import { useId, useState } from 'react';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}

	function renderModalContent() {
		const id = useId();
		return (
			<div data-modal-content className={styles['modal-form']}>
				<form onSubmit={(e) => e.preventDefault()}>
					<div onClick={(e) => e.stopPropagation()}  >
					<div>
						<label htmlFor={id + '-name'}>Nome</label>
						<input 
							type="text"  
							id={id + '-name'} 
							placeholder="Insira um nome"
							 
						/>
					</div>

					<div>
						<label htmlFor={id + '-email'}>E-mail</label>
						<input 
							type="email" 
							id={id + '-email'} 
							placeholder="Insira um e-mail válido" 
							onClick={(e) => e.stopPropagation()} 
						/>
					</div>
					</div>
				</form>
			</div>
		);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal
				</button>
			</main>

			{/* modal */}
			<Modal
				isOpen={modalIsOpen}
				title="Criar novo usuário"
				onClose={handleModalClose}
				onConfirm={handleModalConfirm}
				footer={{ confirmText: 'Criar usuário' }}
			>
				{renderModalContent()}
			</Modal>
		</>
	);
}

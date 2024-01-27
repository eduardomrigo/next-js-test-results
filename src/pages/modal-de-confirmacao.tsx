/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 * 
 * 	Criei o componente ConfirmationModal utilizando mesmos estilos do Modal ja criado e adicionei dois botoes que imprimem no console o que foi selecionado.
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import ConfirmationModal from '@/components/ConfirmationModal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
  
	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);
  
	return (
	  <>
		<Head>
		  <title>Modal de Confirmação</title>
		</Head>
  
		<main className={styles.container}>
		  <button type="button" onClick={openModal}>
			Abrir modal de confirmação
		  </button>
		</main>
  
		<ConfirmationModal
		  isOpen={modalIsOpen}
		  onClose={closeModal}
		  title="Confirmação"
		  content="Conteúdo dinâmico do modal de confirmação."
		/>
	  </>
	);
  }
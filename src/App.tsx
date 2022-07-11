import { useState } from "react";
import Modal from "react-modal";

import { TransactionsProvider } from "./context/TransactionsContext";

import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
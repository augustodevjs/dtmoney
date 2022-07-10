import { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
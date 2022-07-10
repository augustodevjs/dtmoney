import { ReactNode } from "react";

export interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

export interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

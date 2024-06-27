import { Injectable } from '@angular/core';
import { Transaction } from './models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionsKey = 'transactions';
  
  constructor() { }

  getTransactions(): Transaction[] {
    const transactions = localStorage.getItem(this.transactionsKey);
    return transactions ? JSON.parse(transactions) : [];
  }

  addTransaction(transaction: Transaction): void {
    const transactions = this.getTransactions();
    transactions.push(transaction);
    this.saveTransactions(transactions);
  }

  editTransaction(updatedTransaction: Transaction): void {
    const transactions = this.getTransactions();
    const index = transactions.findIndex(t => t.id === updatedTransaction.id);
    if (index !== -1) {
      transactions[index] = updatedTransaction;
      this.saveTransactions(transactions);
    }
  }

  deleteTransaction(id: number): void {
    let transactions = this.getTransactions();
    transactions = transactions.filter(t => t.id !== id);
    this.saveTransactions(transactions);
  }

  private saveTransactions(transactions: Transaction[]): void {
    localStorage.setItem(this.transactionsKey, JSON.stringify(transactions));
  }
}

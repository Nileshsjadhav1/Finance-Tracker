import { Component, EventEmitter, Output } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  @Output() transactionAdded = new EventEmitter<void>();

  description: string = '';
  amount: number = 0;
  date: Date = new Date();
  type: 'income' | 'expense' = 'income';

  constructor(private transactionService: TransactionService) {}

  addTransaction() {
    const transaction: Transaction = {
      id: Date.now(),
      description: this.description,
      amount: this.amount,
      date: this.date,
      type: this.type
    };

    this.transactionService.addTransaction(transaction);
    this.transactionAdded.emit();
  }
}

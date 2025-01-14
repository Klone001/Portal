export type TransactionType = {
    date: string;
    category: string,
    description: string;
    moneyIn?: string | number;
    moneyOut?: string | number;
    balance: string | number;
}
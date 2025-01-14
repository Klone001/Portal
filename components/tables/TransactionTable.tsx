import React from 'react'
import { TableHeader, TableHead, Table, TableBody, TableRow, TableCell } from "../ui/table";
import { transactions } from '@/data';
import { formatCurrency } from '@/lib';

const TransactionTable = () => {

    return (
        <>

            <Table className=''>

                <TableHeader className='bg-gray-200 !text-black'>

                    <TableRow>

                        <TableHead className="pl-2 pr-6 py-5 font-semibold">
                            Date
                        </TableHead>

                        <TableHead className="px-6 font-semibold">
                            Categories
                        </TableHead>

                        <TableHead className="pl-6 font-semibold">
                            Description
                        </TableHead>

                        <TableHead className="pl-6 font-semibold">
                            Money In
                        </TableHead>

                        <TableHead className="pl-6 font-semibold">
                            Money Out
                        </TableHead>

                        <TableHead className="pl-6 font-semibold">
                            Balance
                        </TableHead>

                    </TableRow>

                </TableHeader>

                <TableBody>

                    {transactions.map((transaction, index) => (

                        <TableRow className="text-xs font-normal text-off-black" key={index}>

                            <TableCell className="pl-2 pr-6">
                                {transaction.date}
                            </TableCell>

                            <TableCell className="px-6">
                                {transaction.category}
                            </TableCell>

                            <TableCell className="px-6 w-96 min-w-[30rem] !whitespace-normal">
                                    {transaction.description}
                            </TableCell>

                            <TableCell className="px-6">
                                {!transaction.moneyIn ? (
                                    <span>---</span>
                                ) : (
                                    <span className="text-success">
                                        {formatCurrency(transaction.moneyIn || 0)}
                                    </span>
                                )}
                            </TableCell>

                            <TableCell className="px-6">
                                {!transaction.moneyOut ? (
                                    <span>---</span>
                                ) : (
                                    <span className="text-error-400">
                                        - {formatCurrency(transaction.moneyOut || 0)}
                                    </span>
                                )}
                            </TableCell>

                            <TableCell className="px-6">
                                {formatCurrency(transaction.balance)}
                            </TableCell>

                        </TableRow >

                    ))}

                </TableBody >

            </Table>

        </>
    )
}

export default TransactionTable
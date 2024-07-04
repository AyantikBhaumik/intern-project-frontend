import Link from "next/link";
import React from "react";

function TransactionHomePage() {
  return ( 
    <div className="transactionHome">
        <Link href={"/transactionPage/newTransaction"}>New Transaction +</Link>
        <br />
        <br />
        Hello World
    </div>
);
}

export default TransactionHomePage;

import Link from "next/link";
import React from "react";
import Transaction from "@/src/components/transaction/transaction";

function TransactionHomePage() {
  return (
    <div className="transactionHome">
      <Link href={"/transactionPage/newTransaction"}>New Transaction +</Link>
      <br />
      <br />
      <Transaction store="Starbucks" amount="200.00" crypto="ETH" />
      <Transaction store="Starbucks" amount="200.00" crypto="ETH" />
      <Transaction store="Starbucks" amount="200.00" crypto="ETH" />
      <Transaction store="Starbucks" amount="200.00" crypto="ETH" />
      <Transaction store="Starbucks" amount="200.00" crypto="ETH" />
    </div>
  );
}

export default TransactionHomePage;

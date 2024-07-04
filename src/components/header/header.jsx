import Link from "next/link";

export const Header = () => {
  return (
      <header>
        <Link href={"/"} className="logo">
          {" "}
          Coinbase Wallet
        </Link>
        <nav>
          <>
            <Link href={"/transactionPage"}>Transactions</Link>
            <Link href={"/rewardsPage"}>Rewards</Link>
            <Link href={"/profile"}>Profile</Link>
          </>
        </nav>
      </header>
  );
};

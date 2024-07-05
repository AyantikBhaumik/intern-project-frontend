import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const isTransactionPage = router.pathname === "/transactionPage";
  return (
    <header>
      <Link href={"/"} className="logo">
        {" "}
        coinbase wallet
      </Link>
      <nav>
        <>
          <Link
            href={"/transactionPage"}
            className={isTransactionPage ? "active" : ""}
          >
            Transactions
          </Link>
          <Link href={"/rewardPage"}>Rewards</Link>
          <Link href={"/profile"}>Profile</Link>
        </>
      </nav>
    </header>
  );
};

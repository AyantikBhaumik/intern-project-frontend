import Link from "next/link";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  const router = useRouter();
  const isTransactionPage = router.pathname === "/transactionPage";
  const isRewardPage = router.pathname === "/rewardPage"
  const isProfilePage = router.pathname === "/profile"
  return (
    <header>
      <Link href={"/"} className="logo">
        {" "}
        <span className={roboto.className}>coinbase</span> wallet
      </Link>
      <nav className={roboto.className}>
        <>
          <Link
            href={"/transactionPage"}
            className={isTransactionPage ? "active" : ""}
          >
            Transactions
          </Link>
          <Link href={"/rewardPage"} className={isRewardPage ? "active" : ""}>Rewards</Link>
          <Link href={"/profile"} className={isProfilePage ? "active" : ""}>Profile</Link>
        </>
      </nav>
    </header>
  );
};

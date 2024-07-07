import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  return (
    <div className="homePage">
      <span className={poppins.className}>Home Page</span>
    </div>
  );
}

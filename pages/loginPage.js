import Link from "next/link";
import React, { useState } from "react";

function loginPage() {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  return (
      <form className="login">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>
          New here? <Link href={"/registerPage"}>Register</Link>
        </p>
      </form>

  );
}

export default loginPage;

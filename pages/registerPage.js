import Link from 'next/link';
import React, {useState} from 'react'

function registerPage() {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  return (

      <form className="register">
        <h1>Register</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password"  />
        <button>Register</button>
        <p>Already registered? <Link href={"/loginPage"}>Login</Link></p>
      </form>

  );
}

export default registerPage


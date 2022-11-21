import {
  AlternateEmail,
  Fingerprint,
  GitHub,
  Google,
} from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../layout/layout";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const [show, setShow] = useState(false);

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <div className="py-6">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-slate-500">Please Login</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2"
        >
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <span className="relative right-7 cursor-pointer top-0">
              <AlternateEmail />
            </span>
          </div>
          <div>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs "
            />
            <span
              onClick={() => setShow(!show)}
              className="relative right-7 cursor-pointer top-0"
            >
              <Fingerprint />
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-2/6 mx-auto">
            Login
          </button>
          <button
            onClick={handleGoogleSignin}
            className="btn flex items-center gap-2 bg-slate-300 text-black border-none hover:bg-slate-300 w-4/6 mx-auto"
          >
            Signin with Google
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {" "}
              <Google />{" "}
            </span>
          </button>
          <button
            onClick={handleGithubSignin}
            className="btn flex items-center gap-2 bg-slate-300 text-black border-none hover:bg-slate-300 w-4/6 mx-auto"
          >
            Signin with Github
            <span>
              <GitHub />
            </span>
          </button>
        </form>
        <p className="py-6">
          Don't have an account? Please{" "}
          <Link className="text-blue-500 font-bold" href={"/register"}>
            Signup
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;

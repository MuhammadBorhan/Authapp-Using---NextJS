import { AlternateEmail, Fingerprint, Person } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../layout/layout";
import { useFormik } from "formik";

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div>
        <div className="py-6">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-slate-500">Please Create a New Account</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
              {...formik.getFieldProps("username")}
            />
            <span className="relative right-7 cursor-pointer top-0">
              <Person />
            </span>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...formik.getFieldProps("email")}
            />
            <span className="relative right-7 cursor-pointer top-0">
              <AlternateEmail />
            </span>
          </div>
          <div>
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs "
              {...formik.getFieldProps("password")}
            />
            <span
              onClick={() => setShow({ ...show, password: !show.password })}
              className="relative right-7 cursor-pointer top-0"
            >
              <Fingerprint />
            </span>
          </div>
          <div>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs "
              {...formik.getFieldProps("cpassword")}
            />
            <span
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              className="relative right-7 cursor-pointer top-0"
            >
              <Fingerprint />
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-2/6 mx-auto">
            Signup
          </button>
        </form>
        <p className="py-6">
          Already have an account? Please{" "}
          <Link className="text-blue-500 font-bold" href={"/login"}>
            Signin
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Register;

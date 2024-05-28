"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Page</h1>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 my-3" href={
        session?.user ? "/dashboard" : "/api/auth/signin"
      }>
        {session?.user ? "Go to dashboard" : "Sign in"}
      </Link>
    </div>
  );
}

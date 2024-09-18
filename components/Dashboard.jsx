"use client";
import React from "react";
import { useSession , signIn, signOut} from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex justify-center items-center flex-col h-screen w-full">
        <h1 className="text-3xl text-center font-bold max-w-lg">
          Welcome, {session.user.name}
        </h1>
        <p className="font-medium my-4">
          You are signed in as {session.user.email}
        </p>
        <button
          onClick={() => signOut()}
          className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full">
      <h1 className="text-3xl text-center font-bold max-w-lg">
        Welcome to the admin Website
      </h1>
      <p className="font-medium my-4">An Account is needed to view this page</p>
      <button
        onClick={() => signIn("google")}
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Dashboard;

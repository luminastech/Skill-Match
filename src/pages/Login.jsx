import React from "react";

const Home = () => {
  return (
    <main className="flex-1">
      <section className="container mx-auto flex justify-between items-center w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none dark:text-gray-50">
              Sign Up
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Create an account to access our platform.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
              Sign up with Google
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
              Sign up with GitHub
            </button>
            <form className="flex flex-col gap-2">
              <input
                className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white dark:bg-gray-800 dark:text-gray-50"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                type="submit"
              >
                Sign Up with Email
              </button>
            </form>
            <div className="text-center text-sm">
              Already have an account? &nbsp;
              <a
                className="underline dark:text-gray-300 dark:hover:text-gray-100"
                href="#"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

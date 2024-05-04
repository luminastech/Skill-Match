import React from "react";

const Browse = () => {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] dark:bg-gray-950 dark:text-gray-50">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
          <a className="flex items-center justify-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
            <span className="sr-only">Acme SaaS</span>
          </a>
          <div className="ml-auto flex gap-4 sm:gap-6">
            <form className="flex flex-1 max-w-sm">
              <input
                className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white dark:bg-gray-800 dark:text-gray-50"
                placeholder="Search for jobs..."
                type="text"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none dark:text-gray-50">
                  Find Your Next Dream Job
                </h1>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-white dark:bg-gray-950">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-50">
                  Jobs
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out our top job listings and apply today.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-10 py-12 lg:grid-cols-3 lg:gap-12">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      Frontend Developer
                    </h3>
                    <p className="text-sm text-muted-foreground">Acme Inc.</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Full-time, Remote
                      </p>
                      <p>
                        We are looking for an experienced frontend developer to
                        join our team. You will be responsible for building and
                        maintaining our web application.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      Backend Developer
                    </h3>
                    <p className="text-sm text-muted-foreground">Acme Inc.</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Full-time, Onsite
                      </p>
                      <p>
                        We are looking for an experienced backend developer to
                        join our team. You will be responsible for building and
                        maintaining our server-side infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      Product Manager
                    </h3>
                    <p className="text-sm text-muted-foreground">Acme Inc.</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Full-time, Hybrid
                      </p>
                      <p>
                        We are looking for an experienced product manager to
                        join our team. You will be responsible for defining and
                        executing our product strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      Data Analyst
                    </h3>
                    <p className="text-sm text-muted-foreground">Acme Inc.</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Full-time, Remote
                      </p>
                      <p>
                        We are looking for an experienced data analyst to join
                        our team. You will be responsible for analyzing and
                        interpreting data to drive business decisions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                      UX Designer
                    </h3>
                    <p className="text-sm text-muted-foreground">Acme Inc.</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Full-time, Hybrid
                      </p>
                      <p>
                        We are looking for an experienced UX designer to join
                        our team. You will be responsible for designing a
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-6">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Browse;

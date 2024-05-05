import React from "react";

const Browse = () => {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-12 lg:py-24 border-t border-slate-700 bg-white dark:bg-gray-900">
          <div className="container grid items-center justify-center gap-4 px-2 text-center md:px-4">
            <div className="space-y-3">
              <div className="flex">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-50">
                  Jobs
                </h2>
                <div className="ml-auto flex gap-6 sm:gap-8 ">
                  <form className="flex flex-1 max-w-sm">
                    <input
                      className="flex mr-1 h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white dark:bg-gray-800 dark:text-gray-50"
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
              </div>
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
                      We are looking for an experienced product manager to join
                      our team. You will be responsible for defining and
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
                      We are looking for an experienced data analyst to join our
                      team. You will be responsible for analyzing and
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
                      We are looking for an experienced UX designer to join our
                      team. You will be responsible for designing a
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
    </>
  );
};

export default Browse;

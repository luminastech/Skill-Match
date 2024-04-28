import React from "react";
import Jobs from "../assets/jobs.mp4";
const Home = () => {
  return (
    <>
    <div className="px-8">
      <section className="container mx-auto flex justify-between items-center w-full py-8 md:py-16 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Dream Job Today
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the best job opportunities in your field. Browse
                  thousands of job listings and connect with top companies.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Browse Jobs
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Post a Job
                </a>
              </div>
            </div>
            <video
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              width={550}
              height={550}
              autoPlay
              muted
              loop
            >
              <source src={Jobs} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-between items-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Featured Categories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Top Job Categories
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse through the most popular job categories and find the
                perfect fit for your career.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
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
                className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <div className="text-sm font-medium leading-none group-hover:underline">
                Software Engineering
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
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
                className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50"
              >
                <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                <line x1={3} x2={21} y1={9} y2={9} />
                <line x1={9} x2={9} y1={21} y2={9} />
              </svg>
              <div className="text-sm font-medium leading-none group-hover:underline">
                Design &amp; Creative
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
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
                className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50"
              >
                <ellipse cx={12} cy={5} rx={9} ry={3} />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
              <div className="text-sm font-medium leading-none group-hover:underline">
                Data &amp; Analytics
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
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
                className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50"
              >
                <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <div className="text-sm font-medium leading-none group-hover:underline">
                Business &amp; Operations
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-between items-center w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Top Companies
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Companies Hiring Now
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore job opportunities from the top companies in your
                industry.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12">
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <img
                src="/placeholder.svg"
                width={100}
                height={50}
                alt="Company Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Acme Inc.
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <img
                src="/placeholder.svg"
                width={100}
                height={50}
                alt="Company Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Globex Corp.
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <img
                src="/placeholder.svg"
                width={100}
                height={50}
                alt="Company Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Stark Industries
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <img
                src="/placeholder.svg"
                width={100}
                height={50}
                alt="Company Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Umbrella Corp.
              </div>
            </a>
            <a
              className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
              href="#"
            >
              <img
                src="/placeholder.svg"
                width={100}
                height={50}
                alt="Company Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="text-sm font-medium leading-none group-hover:underline">
                Stark Industries
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-between items-center w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Job Search
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Find Your Next Opportunity
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Search through thousands of job listings and find the perfect
                fit for your career.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                  placeholder="Job title, keywords, or company"
                  type="text"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;

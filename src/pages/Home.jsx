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
                <div className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="50"
                  viewBox="0 0 48 48"
                  
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                </div>
                {/* <img
                src="/placeholder.svg"
                width={100}
                height={50}
                alt="Company Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              /> */}
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Google
                </div>
              </a>
              <a
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
              >
                <div className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 48 48">
<path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0081fb"></stop><stop offset=".995" stopColor="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0081fb"></stop><stop offset=".995" stopColor="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
</svg>

                </div>
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Meta
                </div>
              </a>
              <a
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
              >
                <div className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 40 40">
<path fill="#e1ebf2" d="M36.62,28.775c-0.879,1.901-1.299,2.751-2.427,4.428c-1.576,2.346-3.803,5.273-6.555,5.294 c-2.446,0.019-3.131-1.022-6.451-0.997c-3.32,0.017-3.96,1.026-6.41,0.999c-2.75-0.023-4.857-2.661-6.434-5 c-4.329-6.444-4.794-14.39-2.151-18.361c1.928-2.904,4.981-4.61,7.846-4.61c2.919,0,4.754,1.91,7.166,1.91 c2.344,0,3.769-1.913,7.145-1.913c2.553,0,5.253,1.36,7.181,3.704C29.462,17.479,30.595,26.546,36.62,28.775z"></path><path fill="#788b9c" d="M14.873,38.999l-0.101,0c-2.946-0.024-5.113-2.653-6.844-5.221 C3.72,27.514,2.815,19.309,5.776,14.86c1.979-2.981,5.145-4.833,8.262-4.833c1.631,0,2.958,0.565,4.129,1.063 c1.023,0.436,1.99,0.847,3.037,0.847c0.958,0,1.761-0.362,2.69-0.782c1.174-0.53,2.506-1.131,4.455-1.131 c2.736,0,5.565,1.453,7.568,3.887l0.387,0.471l-0.538,0.288c-2.551,1.366-3.951,3.969-3.745,6.963 c0.21,3.06,2.083,5.679,4.772,6.673l0.507,0.188l-0.227,0.491c-0.91,1.967-1.329,2.806-2.466,4.498 c-1.824,2.715-4.078,5.493-6.966,5.515c-0.001,0-0.001,0-0.002,0c-1.232,0-2.01-0.225-2.835-0.462 C23.894,38.271,22.951,38,21.309,38l-0.117,0c-1.695,0.008-2.644,0.28-3.56,0.543C16.813,38.777,16.039,38.999,14.873,38.999z M14.038,11.027c-2.786,0-5.633,1.681-7.429,4.386c-2.701,4.058-1.776,11.962,2.149,17.806c1.585,2.352,3.541,4.759,6.023,4.779 l0.092,0.5v-0.5c1.025,0,1.701-0.193,2.483-0.417c0.936-0.269,1.997-0.572,3.829-0.582l0.124,0c1.783,0,2.841,0.305,3.773,0.574 c0.788,0.228,1.469,0.424,2.492,0.424c2.484-0.019,4.526-2.575,6.204-5.073c1.001-1.49,1.428-2.299,2.168-3.886 c-2.787-1.256-4.698-4.078-4.923-7.337c-0.219-3.182,1.167-5.979,3.733-7.601c-1.779-1.936-4.137-3.077-6.408-3.077 c-1.733,0-2.908,0.53-4.043,1.042c-0.992,0.448-1.929,0.871-3.102,0.871c-1.25,0-2.358-0.471-3.428-0.927 C16.639,11.527,15.465,11.027,14.038,11.027z"></path><g><path fill="#e1ebf2" d="M26.339,7.491c1.315-1.634,2.456-3.641,2.093-5.991c-2.144,0.143-4.796,1.169-6.261,2.886 c-1.328,1.565-1.98,3.865-1.551,6.114C22.96,10.571,24.933,9.245,26.339,7.491z"></path><path fill="#788b9c" d="M20.799,11.003C20.799,11.003,20.799,11.003,20.799,11.003l-0.596-0.015l-0.075-0.394 c-0.439-2.304,0.197-4.807,1.661-6.531c1.638-1.919,4.5-2.92,6.609-3.062l0.458-0.03l0.07,0.453 c0.424,2.746-1.051,4.957-2.197,6.381C25.075,9.867,22.969,11.003,20.799,11.003z M27.989,2.046 c-1.794,0.231-4.118,1.118-5.438,2.665c-1.187,1.397-1.747,3.39-1.505,5.286c1.775-0.084,3.507-1.078,4.903-2.819 C27.44,5.326,28.096,3.682,27.989,2.046z"></path></g>
</svg>
                </div>
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Apple
                </div>
              </a>
              <a
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
              >
                <div className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 48 48">
<path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
</svg>
                 </div>
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Microsoft
                </div>
              </a>
              <a
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
              >
                <div className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 48 48">
<path fill="#0d47a1" d="M47.97,19.826c0.654,3.747-9.547,8.655-22.788,10.96c-13.238,2.306-24.5,1.136-25.153-2.613 c-0.653-3.747,9.551-8.654,22.79-10.958C36.059,14.907,47.318,16.078,47.97,19.826z"></path><polygon fill="#fafafa" points="35.51,25.388 35.442,21.492 36.671,21.492 36.671,26.403 34.905,26.403 33.678,22.373 33.652,22.373 33.72,26.403 32.499,26.403 32.499,21.492 34.342,21.492 35.483,25.388"></polygon><polygon fill="#fafafa" points="13.177,21.952 12.497,26.455 11.157,26.455 12.076,21.492 14.284,21.492 15.201,26.455 13.865,26.455 13.204,21.952"></polygon><polygon fill="#fafafa" points="18.964,25.286 19.577,21.492 21.601,21.492 21.708,26.455 20.468,26.455 20.435,21.993 20.409,21.993 19.58,26.455 18.321,26.455 17.49,21.993 17.464,21.993 17.433,26.455 16.19,26.455 16.3,21.492 18.325,21.492 18.937,25.286"></polygon><path fill="#fafafa" d="M9.067,25.055c0.049,0.12,0.034,0.275,0.011,0.368c-0.042,0.165-0.154,0.333-0.483,0.333 c-0.312,0-0.5-0.179-0.5-0.45v-0.48H6.763L6.762,25.21c0,1.106,0.871,1.441,1.805,1.441c0.898,0,1.637-0.307,1.754-1.134 c0.061-0.429,0.015-0.709-0.005-0.816c-0.209-1.039-2.093-1.349-2.233-1.93c-0.024-0.099-0.017-0.205-0.005-0.262 c0.035-0.158,0.143-0.332,0.453-0.332c0.29,0,0.461,0.18,0.461,0.45c0,0.091,0,0.307,0,0.307h1.237v-0.348 c0-1.081-0.97-1.25-1.673-1.25c-0.883,0-1.604,0.292-1.736,1.099c-0.036,0.223-0.041,0.422,0.011,0.671 C7.049,24.118,8.811,24.412,9.067,25.055z"></path><path fill="#fafafa" d="M25.204,25.046c0.049,0.119,0.033,0.27,0.011,0.363c-0.041,0.165-0.152,0.33-0.479,0.33 c-0.307,0-0.494-0.179-0.494-0.444l-0.001-0.476h-1.318l-0.002,0.379c0,1.095,0.863,1.426,1.787,1.426 c0.888,0,1.62-0.303,1.736-1.122c0.061-0.426,0.018-0.702-0.004-0.807c-0.208-1.029-2.073-1.336-2.211-1.912 c-0.024-0.099-0.017-0.203-0.005-0.257c0.036-0.16,0.142-0.329,0.449-0.329c0.288,0,0.455,0.175,0.455,0.444 c0,0.09,0,0.304,0,0.304h1.228v-0.345c0-1.07-0.962-1.237-1.659-1.237c-0.873,0-1.588,0.288-1.717,1.09 c-0.036,0.22-0.04,0.415,0.012,0.663C23.206,24.118,24.951,24.41,25.204,25.046z"></path><path fill="#fafafa" d="M29.372,25.713c0.344,0,0.451-0.238,0.475-0.36c0.01-0.054,0.013-0.125,0.012-0.19V21.49h1.255 v3.56c0.003,0.091-0.006,0.279-0.011,0.325c-0.088,0.927-0.821,1.227-1.732,1.227c-0.913,0-1.646-0.301-1.733-1.227 c-0.004-0.047-0.013-0.235-0.011-0.325v-3.56h1.254v3.672c0,0.064,0.002,0.137,0.012,0.19 C28.921,25.473,29.025,25.713,29.372,25.713z"></path><path fill="#fafafa" d="M39.725,25.66c0.359,0,0.485-0.227,0.508-0.359c0.009-0.057,0.012-0.126,0.011-0.189v-0.72 h-0.509v-0.724h1.76V25c-0.001,0.093-0.003,0.162-0.018,0.327c-0.082,0.903-0.866,1.225-1.745,1.225 c-0.881,0-1.663-0.322-1.747-1.225c-0.014-0.166-0.016-0.234-0.018-0.327l0.001-2.089c0-0.088,0.011-0.244,0.021-0.327 c0.11-0.928,0.862-1.226,1.743-1.226c0.88,0,1.651,0.297,1.742,1.226c0.016,0.158,0.011,0.327,0.011,0.327v0.166h-1.251v-0.278 c0.001,0.001-0.002-0.118-0.016-0.189c-0.021-0.11-0.116-0.362-0.495-0.362c-0.362,0-0.467,0.238-0.494,0.362 c-0.015,0.065-0.021,0.154-0.021,0.234v2.27c-0.001,0.063,0.003,0.132,0.013,0.189C39.241,25.433,39.366,25.66,39.725,25.66z"></path>
</svg>
                 </div>
                <div className="text-sm font-medium leading-none group-hover:underline">
                  Samsung
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="container mx-auto flex justify-between items-center w-full py-12 md:py-24 lg:py-32 border-t border-slate-700">
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

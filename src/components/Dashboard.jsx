import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className="flex-1 p-8">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="col-span-1 md:col-span-2">
              <h2 class="text-2xl font-bold mb-4">Welcome User</h2>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="flex-col space-y-1.5 p-6 flex items-center justify-between">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Applicant Information
                </h3>
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Edit
                </button>
              </div>
              <div class="p-6 grid grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First Name
                  </label>
                  <p>John</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last Name
                  </label>
                  <p>Doe</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Job Title
                  </label>
                  <p>Software Engineer</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <p>john@example.com</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Phone
                  </label>
                  <p>+1 (555) 555-5555</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Location
                  </label>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Skills
                  </label>
                  <p>JavaScript, React, Node.js, SQL</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Projects
                  </label>
                  <p>E-commerce website, Mobile app, SaaS platform</p>
                </div>
                <div>
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Experience
                  </label>
                  <p>3 years as a Software Engineer</p>
                </div>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Recent Activity
                </h3>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="bg-gray-100 dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium">Uploaded Resume</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="bg-gray-100 dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium">ATS Score Updated</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        3 days ago
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="bg-gray-100 dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium">Cover Letter Updated</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        5 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard

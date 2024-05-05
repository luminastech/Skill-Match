import React from "react";

const Resume = () => {
  return (
    <div class="border-t border-slate-700 bg-gray-900 text-white min-h-screen w-full p-8">
      <h1 class="text-4xl font-bold mb-2">Applicant - Resume Advisor</h1>
      <p class="text-lg mb-8">
        Elevate your resume from ordinary to extraordinary with Resume Advisor's
        personalized tips.
      </p>
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Job Description:</h2>
        <textarea
          class="flex min-h-[80px] rounded-md border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#333333] h-40 w-full p-4 text-white focus:outline-none"
          placeholder="Enter job description here..."
        ></textarea>
      </div>
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">
          Upload your Resume (PDF only):
        </h2>
        <div class="flex justify-between items-center p-6 bg-[#333333]">
          <div class="space-y-2">
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
              class="text-gray-400 h-6 w-6"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" x2="12" y1="3" y2="15"></line>
            </svg>
            <p class="text-sm">Drag and drop file here</p>
            <p class="text-sm">Limit 200MB per file • PDF</p>
          </div>
          <input
            class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hidden"
            accept=".pdf"
            id="resume-upload"
            type="file"
          />
          <label
            for="resume-upload"
            class="bg-white text-black px-4 py-2 rounded-md cursor-pointer"
          >
            Browse files
          </label>
        </div>
      </div>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#1e1e1e] text-white mb-6">
        How to Enhance my resume
      </button>
      <p class="mb-6">Please upload the resume</p>
    </div>
  );
};

export default Resume;

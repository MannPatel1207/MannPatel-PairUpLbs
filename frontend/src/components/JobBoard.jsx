import { useState } from 'react';
import JobList from './JobList';
import ApplicationForm from './ApplicationForm';

export default function JobBoard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#0f0f0f] text-white overflow-hidden font-mono">
      {/* Job List Section */}
      <div
        className={`transition-all duration-700 ease-in-out h-full p-8 ${
          selectedJob ? 'w-1/2' : 'w-full'
        }`}
      >
        <h1 className="text-4xl font-bold mb-8 text-cyan-300 ">🚀 Available Jobs</h1>
        <JobList onApplyClick={setSelectedJob} />
      </div>

      {/* Application Form Section */}
      {selectedJob && (
        <div className="absolute top-0 right-0 w-1/2 h-full p-8 bg-[#1f1f1f] shadow-lg border-l border-cyan-500 animate-slideIn">
          <ApplicationForm
            job={selectedJob}
            onClose={() => {
              setSelectedJob(null);
              setSubmitted(false);
            }}
            onSuccess={() => setSubmitted(true)}
            submitted={submitted}
          />
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function JobList({ onApplyClick }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
    if (!API_ENDPOINT) {
      setError('API endpoint is not configured.');
      setLoading(false);
      return;
    }

    axios.get(`${API_ENDPOINT}/jobs`)
      .then(res => {
        console.log(res.data)
        if (res.data.data && Array.isArray(res.data.data)) {
          setJobs(res.data.data);
        } else {
          setError('Invalid response format from server.');
        }
      })
      .catch(err => {
        console.error('Failed to fetch jobs:', err);
        setError('Unable to load jobs. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-gray-400 animate-pulse">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-red-500 bg-red-100 p-4 rounded-md">{error}</p>;
  }

  if (!jobs || jobs.length === 0) {
    return <p className="text-gray-300">No jobs found at the moment.</p>;
  }

  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <div key={job.id} className="bg-gray-800 rounded-lg p-4 flex justify-between items-center shadow-lg hover:shadow-orange-400/20 transition">
          <div>
            <h2 className="text-xl font-bold text-cyan-300">{job.title}</h2>
            <p className="text-gray-300">{job.summary}</p>
            <p className="text-orange-400 mt-1">{job.location}</p>
          </div>
          <button
            onClick={() => onApplyClick(job)}
            className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-4 rounded-full shadow-md"
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

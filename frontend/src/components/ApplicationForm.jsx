import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SuccessAnimation from './SuccessAnimation';

export default function ApplicationForm({ job, onClose, onSuccess, submitted }) {
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '' });
  const [error, setError] = useState(null);
  const resumeRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('portfolio', formData.portfolio);
    form.append('resume', resumeRef.current.files[0]);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/application/${job.id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Submitted:', res.data);
      onSuccess();
      setTimeout(onClose, 3000);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit application. Please try again.');
    }
  };

  useEffect(() => {
    setFormData({ name: '', email: '', portfolio: '' });
    if (resumeRef.current) resumeRef.current.value = '';
  }, [job]);

  if (submitted) {
    return <SuccessAnimation />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 animate-slideUp"
      encType="multipart/form-data"
    >
      <div className="bg-[#0f0f0f] border-l-4 border-cyan-400 pl-4 mb-6">
        <h2 className="text-2xl font-bold text-cyan-400">{job.title}</h2>
        <p className="text-sm text-gray-300">{job.description}...</p>
      </div>

      <input
        className="bg-black border border-cyan-500 p-3 w-full rounded-md text-white"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        className="bg-black border border-cyan-500 p-3 w-full rounded-md text-white"
        placeholder="Your Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        className="bg-black border border-cyan-500 p-3 w-full rounded-md text-white"
        placeholder="Portfolio URL"
        value={formData.portfolio}
        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
      />

      <input
        ref={resumeRef}
        type="file"
        accept=".pdf,.doc,.docx"
        required
        className="block w-full text-sm text-gray-400 border border-cyan-500 rounded-md cursor-pointer bg-black p-2 file:bg-cyan-500 file:text-black file:font-bold file:border-none file:px-4 file:py-2"
      />

      {error && <p className="text-red-400">{error}</p>}

      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 rounded-full font-bold text-black hover:opacity-90 transition"
      >
        Submit Application
      </button>
    </form>
  );
}

import React from 'react';
import './SuccessAnimation.css'; // Import CSS animations

export default function SuccessAnimation() {
  return (
    <div className="flex flex-col items-center justify-center h-full animate-fadeIn">
      <div className="relative w-32 h-32">
        {/* Circular outline */}
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            className="text-gray-700"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="64"
            cy="64"
          />
          <circle
            className="text-cyan-400 circle-progress"
            strokeWidth="6"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="64"
            cy="64"
          />
        </svg>

        {/* Checkmark */}
        <svg
          className="absolute top-0 left-0 w-full h-full checkmark"
          viewBox="0 0 52 52"
        >
          <path
            fill="none"
            stroke="#0ff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 27l8 8 16-16"
          />
        </svg>
      </div>

      <p className="mt-6 text-xl text-cyan-300 font-semibold text-glow">
        Application Submitted Successfully!
      </p>
    </div>
  );
}

// LazyImage.jsx
import { useState } from "react";

export default function LazyImage({ src, alt, className = "", object = "object-cover", ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 flex h-full w-full items-center justify-center bg-gray-50 ${!loaded && !error ? "opacity-100" : "opacity-0"}`}>
        <svg className="animate-spin h-6 w-6 text-gray-200" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`h-full w-full ${object}`}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          Image not available
        </div>
      )}
    </div>
  );
}
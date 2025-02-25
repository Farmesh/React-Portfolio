import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageWithFallback = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse rounded-lg" />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 rounded-lg">
          <span className="text-neutral-400">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback; 
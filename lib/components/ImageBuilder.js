import { useState } from 'react';
import Image from 'next/image';
// create fallback logic
export default function ImageBuilder({ src, alt, fallbackSrc, ...props }) {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <img {...props} src={fallbackSrc} alt={alt} {...props} />
  ) : (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
}
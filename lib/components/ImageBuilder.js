import { useState } from 'react';
import Image from 'next/image';
//Any generic image logic be applied here, e.g Fallback for image.
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
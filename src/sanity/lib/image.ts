import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Create an instance of the builder with your Sanity project credentials
const builder = createImageUrlBuilder({ projectId, dataset });

// URL builder function
export const urlFor = (source: SanityImageSource | string | null | undefined): string => {
  if (typeof source === 'string') {
    return source;
  }

  if (source && 'asset' in source && source.asset?.url) {
    // Generate the image URL using the Sanity image builder
    return builder.image(source).auto('format').fit('max').url() || '/placeholder.png';
  }

  return '/placeholder.png'; // Fallback image
};

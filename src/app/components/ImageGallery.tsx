'use client';
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  selectedImage: string | null;
  onSelectImage: (image: string) => void;
}

const ImageGallery = ({ images, selectedImage, onSelectImage }: ImageGalleryProps) => {
  return (
    <div className="order-last flex gap-4 lg:order-none lg:flex-col ">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={urlFor(img).url()}
            alt={`Image ${index}`}
            width={110}
            height={150}
            className={`h-full w-full object-cover object-center cursor-pointer  ${
              selectedImage === img ? "border-2 border-gray-500" : "border border-gray-300"
            }`}
            onClick={() => onSelectImage(img)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

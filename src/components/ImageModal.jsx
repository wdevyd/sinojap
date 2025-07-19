import { X } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black">
          <X className="w-5 h-5" />
        </button>
        <img src={imageSrc} alt={alt} className="w-full h-auto rounded shadow-lg" />
      </div>
    </div>
  );
}
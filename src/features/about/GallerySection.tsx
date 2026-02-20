import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const GallerySection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useSpring(useTransform(imageScrollProgress, [0, 1], ['-15%', '15%']), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
      alt: 'Team meeting',
    },
    {
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800',
      alt: 'Training session',
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
      alt: 'Workshop',
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
      alt: 'Collaboration',
    },
  ];

  return (
    <>
      <div className="relative">
        <div ref={imageRef} className="relative w-full h-[25vh] overflow-hidden">
          <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: imageY }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
              alt="Team collaboration at Ebanex International"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #020617 0%, transparent 80%)' }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4 sm:px-8 lg:px-12">
          <div className="flex sm:grid sm:grid-cols-4 gap-3 sm:gap-3 lg:gap-4 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative aspect-[4/5] min-w-[45%] sm:min-w-0 sm:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group shadow-xl border-2 border-white/10 w-full flex-shrink-0 snap-center"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;

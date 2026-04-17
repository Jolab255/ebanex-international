import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Squares } from '../../components/animations';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800', alt: 'Team meeting' },
    { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800', alt: 'Training session' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800', alt: 'Workshop' },
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800', alt: 'Collaboration' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800', alt: 'Corporate Discussion' },
    { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800', alt: 'Digital Learning' },
  ];

  return (
    <section className="h-[90vh] relative isolate overflow-hidden bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] flex flex-col items-center justify-center py-8 sm:py-12 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center h-full max-h-full overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-6 shrink-0">
          <div className="mt-4">
            <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.6rem,1vw,0.75rem)] inline-block bg-black py-1.5 px-6">
              Gallery & Moments
            </span>
          </div>
        </div>

        {/* Gallery Container Box */}
        <div 
          className="w-full max-w-6xl p-4 sm:p-8 border-[10px] border-black shadow-none relative flex-1 overflow-y-auto scrollbar-hide"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%)'
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 auto-rows-[150px] sm:auto-rows-[200px] grid-flow-dense">
            {galleryImages.map((img, idx) => {
              const spans = [
                "col-span-2 row-span-2", // Image 0
                "col-span-2 row-span-1", // Image 1
                "col-span-1 row-span-1", // Image 2
                "col-span-1 row-span-2", // Image 3
                "col-span-2 row-span-1", // Image 4
                "col-span-1 row-span-1", // Image 5
              ];
              
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden cursor-pointer group border border-white/10 ${spans[idx] || ""}`}
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover effect - border reveal */}
                  <div className="absolute inset-0 border-0 group-hover:border-4 border-[#00BFFF]/30 transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BFFF]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 overflow-hidden pointer-events-none" />
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-none flex items-center justify-center hover:bg-[#00BFFF] hover:text-black transition-colors z-10 border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-none border-[10px] border-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

import React, { useMemo } from 'react';
import { Squares, ScrollReveal } from '../../components/animations';
import { FitText } from '../../components/common';

interface Testimonial {
  id: number;
  description: string;
  image: string;
  name: string;
  company: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      description:
        'Ebanex transformed our cybersecurity posture. Their training gave our team the skills to identify and neutralize threats before they became incidents.',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Alex Turner',
      company: 'Vercel',
    },
    {
      id: 2,
      description:
        'The capacity building program exceeded our expectations. Our team is now more confident and capable than ever before.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Harry Peter',
      company: 'Amazon',
    },
    {
      id: 3,
      description:
        'Ebanex strikes the perfect balance between technical depth and practical application. It feels like training built by real industry experts.',
      image:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jason Kim',
      company: 'Flipkart',
    },
    {
      id: 4,
      description:
        'The cybersecurity training structure and hands-on labs made implementation incredibly easy. Highly recommended for any organization.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
      name: 'Sofia Martinez',
      company: 'Linear',
    },
    {
      id: 5,
      description:
        'Ebanex allows us to focus on our core business instead of worrying about security gaps. Everything looks professional right from day one.',
      image:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Alex Johnson',
      company: 'Microsoft',
    },
    {
      id: 6,
      description:
        "If you&apos;re serious about cybersecurity, Ebanex is a must-have. It dramatically speeds up team development while keeping standards high.",
      image: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200',
      name: 'Emily Karter',
      company: 'Stripe',
    },
    {
      id: 7,
      description:
        'The leadership development program helped our executives understand cybersecurity risks and make informed decisions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200',
      name: 'Christopher Levin',
      company: 'Deloitte',
    },
    {
      id: 8,
      description:
        'Ebanex helped us reduce security incidents drastically. The training modules feel production-ready and comprehensive.',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Alex Turner',
      company: 'Vercel',
    },
    {
      id: 9,
      description:
        'We achieved compliance weeks earlier than planned. Ebanex removed a huge amount of repetitive security training work.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Harry Peter',
      company: 'Amazon',
    },
  ];

  // Split testimonials into 3 columns
  const columns = useMemo(
    () => [
      { testimonials: [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)], duration: 25 },
      { testimonials: [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)], duration: 30 },
      { testimonials: [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)], duration: 20 },
    ],
    [testimonials],
  );

  return (
    <section className="h-[90vh] relative isolate overflow-hidden bg-[linear-gradient(135deg,#00bfff_50%,#000000_50%)] flex flex-col items-center justify-center py-8 sm:py-12 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.13}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.08)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>
      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-scroll-col-1 {
          animation: scroll-up 60s linear infinite;
        }
        
        .animate-scroll-col-2 {
          animation: scroll-up 80s linear infinite;
        }
        
        .animate-scroll-col-3 {
          animation: scroll-up 70s linear infinite;
        }
        
        .testimonial-card {
          background: radial-gradient(circle at 50% 50%, #16476A 0%, #051020 100%);
          border: 1px solid rgba(0, 191, 255, 0.1);
        }
        
        .testimonial-card:hover {
          border-color: rgba(0, 191, 255, 0.5);
          box-shadow: 0 0 30px rgba(0, 191, 255, 0.15);
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-[20px] relative z-10 text-center shrink-0">
        <ScrollReveal yOffset={10} delay={0.1}>
          <div className="select-none mb-3 inline-block bg-black py-4 px-8">
            <FitText
              minScale={0.35}
              textClassName="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(1.25rem,6vw,3.5rem)]"
            >
              <span 
                style={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #00BFFF 50%, #FFFFFF 100%)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TESTIMONIALS
              </span>
            </FitText>
          </div>
        </ScrollReveal>
        
        <ScrollReveal yOffset={20} delay={0.2}>
          <div className="mt-4">
            <span className="text-[#00BFFF] font-black uppercase tracking-[0.4em] text-[clamp(0.7rem,1.2vw,0.85rem)] inline-block bg-black py-1.5 px-6">
              Client Success Stories
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Testimonials Grid */}
      <div className="relative w-full max-w-6xl overflow-hidden h-[600px]">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`overflow-hidden ${colIndex === 1 ? 'hidden md:block' : ''} ${colIndex === 2 ? 'hidden lg:block' : ''}`}
            >
              <div className={`animate-scroll-col-${colIndex + 1}`}>
                {column.testimonials.map((testimonial, index) => (
                  <div
                    key={`${colIndex}-${testimonial.id}-${index}`}
                    className="testimonial-card rounded-none p-8 mb-6 transition-all duration-300 flex flex-col justify-between min-h-[320px]"
                  >
                    <div>
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <svg
                          width="21"
                          height="15"
                          viewBox="0 0 21 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="#00BFFF"
                            strokeOpacity="0.7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" />
                          </g>
                        </svg>
                      </div>

                      {/* Description */}
                      <p className="text-base text-white/90 mb-8 leading-relaxed font-medium italic">
                        &quot;{testimonial.description}&quot;
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-none border border-[#00BFFF]/40 object-cover"
                      />
                      <div>
                        <p className="text-sm sm:text-base text-white font-black uppercase tracking-tighter">{testimonial.name}</p>
                        <p className="text-[10px] sm:text-xs text-[#00BFFF] uppercase tracking-widest font-black">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

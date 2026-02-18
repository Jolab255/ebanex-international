import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

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
        "If you're serious about cybersecurity, Ebanex is a must-have. It dramatically speeds up team development while keeping standards high.",
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
    <section className="bg-slate-950 flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden border-t border-white/5">
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
          animation: scroll-up 25s linear infinite;
        }
        
        .animate-scroll-col-2 {
          animation: scroll-up 30s linear infinite;
        }
        
        .animate-scroll-col-3 {
          animation: scroll-up 20s linear infinite;
        }
        
        .testimonial-card {
          background: linear-gradient(to bottom, #020204, #191130);
          border: 1px solid rgba(51, 65, 85, 0.5);
        }
        
        .testimonial-card:hover {
          border-color: rgba(71, 85, 105, 0.7);
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black leading-none uppercase tracking-tighter text-[clamp(0.6rem,7vw,5rem)] bg-center bg-no-repeat bg-clip-text text-transparent select-none filter brightness-125 animate-bg-pan whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            backgroundImage:
              "url('https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/4645803d-67d3-4662-9f18-816e532b82a1/Responding-to-a-cyber-security-incident.jpg')",
            WebkitBackgroundClip: 'text',
          }}
        >
          I M P A C T & - T E S T I M O N I A L S
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8"
        >
          <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[clamp(1rem,2.5vw,1.25rem)] block">
            Client Success Stories
          </span>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative w-full max-w-6xl overflow-hidden h-[600px]">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

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
                    className="testimonial-card rounded-xl p-6 mb-4 transition-all duration-300"
                  >
                    {/* Quote Icon */}
                    <div className="mb-5">
                      <svg
                        width="21"
                        height="15"
                        viewBox="0 0 21 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          stroke="#fff"
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
                    <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                      {testimonial.description}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-9 h-9 rounded-full border border-slate-800 object-cover"
                      />
                      <div>
                        <p className="text-sm text-slate-300 font-medium">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.company}</p>
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

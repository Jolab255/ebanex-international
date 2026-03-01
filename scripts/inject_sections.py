import re

def update_page(filename, technical_skills, business_benefits, instructor_name, instructor_title, instructor_bio, instructor_certs, faqs, cta_title, cta_desc):
    with open(filename, 'r') as f:
        content = f.read()

    # Create the new section block starting with 'What You'll Learn' and ending with the CTA
    # This precisely matches the structure from CybersecurityAwarenessPrograms.tsx
    new_sections = f"""
            <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20">
              {{/* What You'll Learn Content */}}
              <motion.div
                id="syllabus"
                initial={{{{ opacity: 0 }}}}
                whileInView={{{{ opacity: 1 }}}}
                transition={{{{ duration: 0.8 }}}}
                viewport={{{{ once: true }}}}
                className="mb-20"
              >
                <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12">
                  What You'll Learn
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                  {{/* Technical Skills */}}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                      Technical Skills
                    </h3>
                    <ul className="space-y-4">
                      {{[
{technical_skills}
                      ].map((item, index) => (
                        <motion.li
                          key={{index}}
                          className="flex items-start gap-3 text-slate-300 font-light leading-relaxed"
                          initial={{{{ opacity: 0, x: -20 }}}}
                          whileInView={{{{ opacity: 1, x: 0 }}}}
                          transition={{{{ duration: 0.4, delay: index * 0.1 }}}}
                          viewport={{{{ once: true }}}}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0 flex-shrink-0" />
                          {{item}}
                        </motion.li>
                      ))}}
                    </ul>
                  </div>

                  {{/* Business Benefits */}}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
                      Business Benefits
                    </h3>
                    <ul className="space-y-4">
                      {{[
{business_benefits}
                      ].map((item, index) => (
                        <motion.li
                          key={{index}}
                          className="flex items-start gap-3 text-slate-300 font-light leading-relaxed"
                          initial={{{{ opacity: 0, x: -20 }}}}
                          whileInView={{{{ opacity: 1, x: 0 }}}}
                          transition={{{{ duration: 0.4, delay: index * 0.1 }}}}
                          viewport={{{{ once: true }}}}
                        >
                          <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 shrink-0 flex-shrink-0" />
                          {{item}}
                        </motion.li>
                      ))}}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {{/* Measurable Impact Section */}}
              <div className="grid lg:grid-cols-2 gap-16">
                {{/* Left Side - Static/Sticky */}}
                <div className="lg:sticky lg:top-[120px] lg:h-fit">
                  <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-light font-heading mb-8 text-white">
                    Measurable Impact
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {{[
                      {{ metric: 70, suffix: '%', label: 'Reduction in Security Incidents' }},
                      {{ metric: 85, suffix: '%', label: 'Decrease in Phishing Clicks' }},
                      {{ metric: 90, suffix: '%', label: 'Knowledge Retention Rate' }},
                      {{ metric: 3, suffix: 'x', label: 'ROI Within First Year' }},
                    ].map((stat, index) => (
                      <div
                        key={{index}}
                        className="text-center p-4 border border-white/10 bg-slate-900/30"
                      >
                        <div className="text-4xl font-light text-[#00C4D4] mb-1">
                          <Counter target={{stat.metric}} suffix={{stat.suffix}} />
                        </div>
                        <div className="text-sm text-slate-300 font-light">{{stat.label}}</div>
                      </div>
                    ))}}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#00C4D4] text-black px-6 py-3 rounded-full font-medium hover:bg-[#00b0c0] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                      Request Corporate Training
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center whitespace-nowrap">
                      Schedule & Pricing
                    </button>
                  </div>
                </div>

                {{/* Right Side - Scrollable */}}
                <div className="space-y-12 pb-32">
                  <div>
                    <h3 className="text-xl font-light text-white mb-4 pb-3 border-b border-white/10">
                      How You'll Be Evaluated
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Our comprehensive assessment framework ensures you master every competency
                      through four key phases
                    </p>
                    <ul className="space-y-4">
                      {{[
                        {{
                          phase: 'Phase 1: Pre-Assessment',
                          desc: 'Baseline knowledge evaluation, security posture questionnaire, skill gap analysis',
                        }},
                        {{
                          phase: 'Phase 2: Module Assessments',
                          desc: 'End-of-module quizzes, practical lab exercises, scenario-based evaluations',
                        }},
                        {{
                          phase: 'Phase 3: Final Examination',
                          desc: 'Comprehensive written exam, hands-on simulation test, case study analysis',
                        }},
                        {{
                          phase: 'Phase 4: Continuous Evaluation',
                          desc: 'Phishing simulation results, behavior tracking metrics, peer assessments',
                        }},
                      ].map((phase, index) => (
                        <li
                          key={{index}}
                          className="flex items-start gap-4 p-4 bg-slate-900/30 border border-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#00C4D4] mt-2 flex-shrink-0"></span>
                          <div>
                            <span className="text-white font-light block mb-1">{{phase.phase}}</span>
                            <span className="text-slate-400 text-sm font-light">{{phase.desc}}</span>
                          </div>
                        </li>
                      ))}}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-4 pb-3 border-b border-white/10">
                      Tailored for Your Industry
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Our curriculum is customized to address the unique security challenges and
                      compliance requirements of your sector
                    </p>
                    <ul className="space-y-4">
                      {{[
                        {{
                          title: 'Financial Services',
                          desc: 'PCI-DSS compliance, fraud prevention, customer data protection',
                        }},
                        {{
                          title: 'Healthcare',
                          desc: 'HIPAA compliance, patient data security, medical device protection',
                        }},
                        {{
                          title: 'Government & Public Sector',
                          desc: 'National security compliance, citizen data protection, critical infrastructure',
                        }},
                        {{
                          title: 'Manufacturing & Industrial',
                          desc: 'OT security, intellectual property protection, supply chain security',
                        }},
                        {{
                          title: 'Technology & SaaS',
                          desc: 'Cloud security, API security, customer trust',
                        }},
                        {{
                          title: 'Education',
                          desc: 'Student data privacy, remote learning security, research protection',
                        }},
                      ].map((item, index) => (
                        <li
                          key={{index}}
                          className="flex items-start gap-4 p-4 bg-slate-900/30 border border-white/5"
                        >
                          <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                          <div>
                            <span className="text-white font-medium text-sm block">
                              {{item.title}}
                            </span>
                            <span className="text-slate-400 text-sm font-light">{{item.desc}}</span>
                          </div>
                        </li>
                      ))}}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -left-20 top-20 w-[400px] h-[400px] pointer-events-none"
            animate={{{{ x: [0, 30, 0], y: [0, -20, 0] }}}}
            transition={{{{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}}}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <radialGradient id="waveGradientSticky2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="url(#waveGradientSticky2)"
                strokeWidth="10"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#waveGradientSticky2)"
                strokeWidth="6"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {{/* Meet Your Instructor Section */}}
      <div className="w-full py-16 px-[100px] bg-slate-900">
        <motion.div
          initial={{{{ opacity: 0, y: 30 }}}}
          whileInView={{{{ opacity: 1, y: 0 }}}}
          transition={{{{ duration: 0.8 }}}}
          viewport={{{{ once: true }}}}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-4 text-center"
            initial={{{{ opacity: 0, y: 20 }}}}
            whileInView={{{{ opacity: 1, y: 0 }}}}
            transition={{{{ duration: 0.6 }}}}
            viewport={{{{ once: true }}}}
          >
            Meet Your Instructor
          </motion.h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Learn from industry experts with years of hands-on experience in cybersecurity
          </p>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            {{/* Instructor Photo */}}
            <motion.div
              initial={{{{ opacity: 0, x: -30 }}}}
              whileInView={{{{ opacity: 1, x: 0 }}}}
              transition={{{{ duration: 0.6, delay: 0.2 }}}}
              viewport={{{{ once: true }}}}
              className="w-full md:w-72 flex-shrink-0"
            >
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#00C4D4] text-black px-4 py-2 rounded-full text-sm font-bold">
                  {{['CISSP', 'CISM', 'CEH', 'CISA', 'CRMA', 'ISO 27001 Lead Auditor'][0]}}, {{['CISSP', 'CISM', 'CEH', 'CISA', 'CRMA', 'ISO 27001 Lead Auditor'][1]}}
                </div>
              </div>
            </motion.div>

            {{/* Instructor Details */}}
            <motion.div
              initial={{{{ opacity: 0, x: 30 }}}}
              whileInView={{{{ opacity: 1, x: 0 }}}}
              transition={{{{ duration: 0.6, delay: 0.3 }}}}
              viewport={{{{ once: true }}}}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{instructor_name}</h3>
              <p className="text-[#00C4D4] font-medium mb-4">
                {instructor_title}
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                {instructor_bio}
              </p>

              {{/* Certifications */}}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {{[
{instructor_certs}
                  ].map(
                    (cert, index) => (
                      <span
                        key={{index}}
                        className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-sm text-slate-300"
                      >
                        {{cert}}
                      </span>
                    ),
                  )}}
                </div>
              </div>

              {{/* Experience Stats */}}
              <div className="grid grid-cols-3 gap-4">
                {{[
                  {{ number: '15+', label: 'Years Experience' }},
                  {{ number: '5000+', label: 'Professionals Trained' }},
                  {{ number: '200+', label: 'Organizations Served' }},
                ].map((stat, index) => (
                  <div key={{index}} className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-xl font-bold text-[#00C4D4]">{{stat.number}}</div>
                    <div className="text-xs text-slate-400">{{stat.label}}</div>
                  </div>
                ))}}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {{/* FAQ Section */}}
      <motion.div
        id="faqs"
        className="w-full py-16 px-[100px]"
        initial={{{{ opacity: 0 }}}}
        whileInView={{{{ opacity: 1 }}}}
        transition={{{{ duration: 0.8 }}}}
        viewport={{{{ once: true }}}}
      >
        <motion.h2
          className="text-[clamp(1.25rem,4vw,2.5rem)] font-light font-heading mb-12 text-center"
          initial={{{{ opacity: 0, y: 20 }}}}
          whileInView={{{{ opacity: 1, y: 0 }}}}
          transition={{{{ duration: 0.6 }}}}
          viewport={{{{ once: true }}}}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {{[
{faqs}
          ].map((faq, index) => (
            <motion.div
              key={{index}}
              initial={{{{ opacity: 0, y: 30 }}}}
              whileInView={{{{ opacity: 1, y: 0 }}}}
              transition={{{{ duration: 0.5, delay: index * 0.1 }}}}
              viewport={{{{ once: true }}}}
              className="mb-4"
            >
              <motion.div
                className={{`relative overflow-hidden rounded-2xl transition-all duration-500 ${{
                  openFaq === index
                    ? 'bg-gradient-to-r from-blue-900/40 to-teal-900/30 border-blue-500/30'
                    : 'bg-slate-900/50 border border-white/10 hover:border-white/20'
                }}`}}
              >
                {{/* Background glow effect when open */}}
                <motion.div
                  initial={{{{ opacity: 0 }}}}
                  animate={{{{ opacity: openFaq === index ? 1 : 0 }}}}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5"
                />

                <button
                  onClick={{() => setOpenFaq(openFaq === index ? null : index)}}
                  className="relative w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      className={{`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${{
                        openFaq === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-slate-400 group-hover:bg-white/20'
                      }}`}}
                      animate={{{{ scale: openFaq === index ? 1 : 1 }}}}
                    >
                      {{index + 1}}
                    </motion.span>
                    <span
                      className={{`font-medium text-lg transition-colors ${{
                        openFaq === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }}`}}
                    >
                      {{faq.question}}
                    </span>
                  </div>

                  <motion.div
                    animate={{{{ rotate: openFaq === index ? 180 : 0 }}}}
                    transition={{{{ duration: 0.3, ease: 'easeInOut' }}}}
                    className={{`w-10 h-10 rounded-full flex items-center justify-center ${{
                      openFaq === index
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white'
                    }}`}}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={{2}}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={{{{ height: 0, opacity: 0 }}}}
                  animate={{{{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}}}
                  transition={{{{ duration: 0.4, ease: 'easeInOut' }}}}
                >
                  <div className="relative px-6 pb-6 pl-[72px] pr-16">
                    <motion.p
                      initial={{{{ opacity: 0, y: 10 }}}}
                      animate={{{{
                        opacity: openFaq === index ? 1 : 0,
                        y: openFaq === index ? 0 : 10,
                      }}}}
                      transition={{{{ duration: 0.3, delay: 0.1 }}}}
                      className="text-slate-400 font-light leading-relaxed"
                    >
                      {{faq.answer}}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}}
        </div>
      </motion.div>

      {{/* Call to Action */}}
      <motion.div
        id="register"
        initial={{{{ opacity: 0 }}}}
        whileInView={{{{ opacity: 1 }}}}
        transition={{{{ duration: 0.8 }}}}
        viewport={{{{ once: true }}}}
      >
        <div className="relative min-h-[500px] flex items-center">
           <div className="absolute inset-0">
             <div className="absolute inset-0 bg-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70" />
          </div>

          {{/* Content */}}
          <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{{{ opacity: 0, y: 30 }}}}
                whileInView={{{{ opacity: 1, y: 0 }}}}
                transition={{{{ duration: 0.6 }}}}
                viewport={{{{ once: true }}}}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {cta_title}
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {cta_desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#00C4D4] hover:bg-[#00b0c0] text-black font-bold rounded-full transition-colors"
                    whileHover={{{{ scale: 1.05 }}}}
                    whileTap={{{{ scale: 0.95 }}}}
                  >
                    Request Corporate Training
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-colors"
                    whileHover={{{{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}}}
                    whileTap={{{{ scale: 0.95 }}}}
                  >
                    View All Programs
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {{/* Decorative elements */}}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </motion.div>
    </>
"""

    # We need to replace the ending of the current file with our new sections
    # They should go right before the closing </> tag
    
    # Simple regex to split the file just before the final </>\n  );\n};
    split_point = content.rfind("    </>\n  );\n};")
    if split_point == -1:
        print(f"Error finding split point in {filename}")
        return
        
    first_part = content[:split_point]
    last_part = """    </>
  );
};

export default """ + filename.split('/')[-1].replace('.tsx', '') + ";"
    
    # Also we need to make sure we don't duplicate the wavy animation background at the end of the syllabus section
    # Let's cleanly inject it
    
    with open(filename, 'w') as f:
        f.write(first_part + new_sections + last_part)

# Ethical Hacking Variables
eh_tech = """                        'Execute complex penetration tests across network, web, and cloud environments',
                        'Write custom exploit scripts and automate vulnerability discovery',
                        'Perform advanced active directory exploitation and privilege escalation',
                        'Analyze cyber threat intelligence feeds and attribute attacks to specific threat actors',
                        'Conduct evasion techniques against modern EDR and firewall solutions',
                        'Reverse engineer basic malware samples and extract indicators of compromise',"""

eh_biz = """                        'Proactively identify critical vulnerabilities before they are exploited by real attackers',
                        'Demonstrate rigorous security testing compliance for PCI-DSS, SOC2, and ISO 27001',
                        'Reduce external penetration testing costs by building internal Red Team capabilities',
                        'Minimize the blast radius of potential breaches through architectural hardening',
                        'Improve incident response metrics through intelligence-driven defense strategies',
                        'Protect intellectual property and maintain customer trust in your digital platforms',"""

eh_name = "Sarah Chen"
eh_title = "Lead Red Team Operator & Threat Intelligence Analyst"
eh_bio = "Sarah brings over a decade of offensive security experience from both the financial sector and defense contractor environments. She has discovered multiple zero-day vulnerabilities in enterprise software and frequently presents at major security conferences like DEF CON and Black Hat. Her training emphasizes the hacker mindset over automated tools."
eh_certs = "'OSCP', 'OSCE', 'CTI', 'CISSP', 'GPEN'"

eh_faqs = """            {{
              question: 'Do I need programming experience for this course?',
              answer: 'Yes, basic proficiency in Python and bash scripting is highly recommended. While we cover the fundamentals of exploit modification, you will need to understand how to read and execute custom scripts during the practical labs.'
            }},
            {{
              question: 'Are the lab environments realistic?',
              answer: 'We utilize a fully isolated, ephemeral cyber range that accurately mimics modern enterprise networks, complete with Active Directory domains, simulated user traffic, and multi-tier web applications.'
            }},
            {{
              question: 'Is this course focused on network or web application hacking?',
              answer: 'The program provides a comprehensive methodology covering both. The first half focuses on infrastructure and network penetration, while the second half dives deeply into web application vulnerabilities (OWASP Top 10) and API exploitation.'
            }}"""

eh_cta_title = "Ready to Build Offensive Security Capabilities?"
eh_cta_desc = "Train your team to think and act like advanced persistent threats. Partner with Ebanex International to develop a world-class internal Red Team that proactively defends your enterprise."

update_page(
    'src/pages/EthicalHackingThreatIntelligence.tsx',
    eh_tech, eh_biz, eh_name, eh_title, eh_bio, eh_certs, eh_faqs, eh_cta_title, eh_cta_desc
)

print("Injected into Ethical Hacking page.")

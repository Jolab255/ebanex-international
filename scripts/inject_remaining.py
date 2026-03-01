import re

def update_page(filename, technical_skills, business_benefits, instructor_name, instructor_title, instructor_bio, instructor_certs, faqs, cta_title, cta_desc):
    with open(filename, 'r') as f:
        content = f.read()

    new_sections = f"""
            <div className="relative z-10 max-w-7xl mx-auto px-[100px] py-20">
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

              <div className="grid lg:grid-cols-2 gap-16">
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

          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </motion.div>
    </>
"""
    
    # We find the specific spot to inject this chunk of HTML and TSX to finish up the file
    split_point = content.rfind("    </>\n  );\n};")
    if split_point == -1:
        print(f"Error finding split point in {filename}")
        return
        
    first_part = content[:split_point]
    last_part = """    </>
  );
};

export default """ + filename.split('/')[-1].replace('.tsx', '') + ";"
    
    with open(filename, 'w') as f:
        f.write(first_part + new_sections + last_part)

# Digital Risk Variables
dr_tech = """                        'Map complex digital assets directly to tangible corporate risk registers and business continuity plans',
                        'Calculate quantitative impacts using industry frameworks like FAIR',
                        'Govern third-party vendor portfolios and identify systemic supply chain vulnerabilities',
                        'Determine cyber insurance adequacy and liability limitations during contract negotiations',
                        'Perform compliance assessments for GDPR, HIPAA, and industry-specific regulations',
                        'Present board-level cyber risk dashboards with clear financial correlations',"""
dr_biz = """                        'Minimize catastrophic, uninsurable security incidents by proactively discovering hidden vulnerabilities',
                        'Ensure compliance and avoid devastating regulatory fines and customer lawsuits',
                        'Integrate security investments tightly into overall corporate planning and expenditure',
                        'Bridge the gap between executive boards and technical IT security personnel',
                        'Accelerate merger and acquisition due diligence processes with quantifiable risk matrices',
                        'Drive cultural change where security is viewed as a business enabler rather than an obstacle',"""
dr_name = "Marcus Dubois"
dr_bio = "Marcus is a former Chief Risk Officer (CRO) for a major European bank, specialized in governing enormous third-party vendor portfolios and presenting risk posture to corporate boards. He teaches students how to speak both binary and business logic, ensuring security initiatives align explicitly with corporate goals."
dr_title = "Chief Risk Officer & Governance Lead"
dr_certs = "'CRISC', 'CISM', 'CGEIT', 'FAIR Analyst'"
dr_faqs = """            {{
              question: 'Who should attend this training?',
              answer: 'This training is ideal for C-level executives, Risk and Compliance Managers, IT Directors, and Internal Auditors who need to govern cybersecurity posture without necessarily needing to perform technical configurations.'
            }},
            {{
              question: 'Does this prepare me for ISACA CRISC?',
              answer: 'Yes, the curriculum maps perfectly to the four domains of the CRISC (Certified in Risk and Information Systems Control) exam. It serves as an excellent bootcamp for the certification.'
            }},
            {{
              question: 'Will we do technical hacking in this course?',
              answer: 'No. This is a governance and management course. We focus on calculating risk impacts, writing policies, auditing architectures, and presenting findings to executive boards.'
            }}"""
dr_cta_t = "Govern Your Cybersecurity Future"
dr_cta_d = "Cyber risk is business risk. Partner with Ebanex International to develop executives and managers capable of navigating complex data regulations and demonstrating clear ROI on your security investments."

update_page('src/pages/DigitalRiskManagement.tsx', dr_tech, dr_biz, dr_name, dr_title, dr_bio, dr_certs, dr_faqs, dr_cta_t, dr_cta_d)

# Incident Response Variables
ir_tech = """                        'Isolate compromised internal systems via automated network orchestration rapidly',
                        'Secure volatile digital evidence on disk and in memory for law enforcement handover',
                        'Examine malicious binaries utilizing isolated sandbox environments to extract signatures',
                        'Orchestrate a seamless business continuity strategy to recover critical servers',
                        'Validate post-incident remediation efforts and patch successful infection vectors',
                        'Manage external incident communications during active breach scenarios',"""
ir_biz = """                        'Turn unpredictable crises into systematic, procedural operations that ensure continuity',
                        'Recover operational availability within hours rather than weeks during ransomware incidents',
                        'Preserve key legal evidence to ensure the viability of insurance claims and criminal prosecution',
                        'Minimize costly operational downtime through well-drilled incident containment capabilities',
                        'Protect organizational reputation through confident, organized crisis management and reporting',
                        'Comply with mandatory data breach notification and legal reporting timelines',"""
ir_name = "Elena Rostova"
ir_title = "Director of Digital Forensics and Incident Response"
ir_bio = "Elena is a veteran responder who has managed technical triage during some of the largest ransomware attacks of the last decade. She brings intense, high-pressure tabletop scenario training to the classroom, pushing teams to operate decisively when an enterprise network is actively failing."
ir_certs = "'GCIH', 'GCFA', 'GNFA', 'CHFI'"
ir_faqs = """            {{
              question: 'Are we going to fight live malware in the coursework?',
              answer: 'Yes. Our advanced cyber range allows us to cleanly detonate modified ransomware samples. Your team will practice real-time containment and decryption key extraction in a safe, isolated environment.'
            }},
            {{
              question: 'Should our entire IT department take this course?',
              answer: 'We recommend sending dedicated members who will form your core Computer Security Incident Response Team (CSIRT). This course is intensive and intended for those directly managing triage and recovery.'
            }},
            {{
              question: 'Do we learn about specific vendor tools?',
              answer: 'We focus heavily on the underlying methodology and frameworks (SANS/NIST). However, we do use industry-standard SIEMs, memory dumpers, and endpoint detection and response (EDR) platforms during labs.'
            }}"""
ir_cta_t = "Are You Ready For Your Worst Day?"
ir_cta_d = "Don't plan your incident response strategy while the network is actively failing. Partner with Ebanex International to drill your handlers through advanced, simulation-based tactical response scenarios."

update_page('src/pages/IncidentResponseTraining.tsx', ir_tech, ir_biz, ir_name, ir_title, ir_bio, ir_certs, ir_faqs, ir_cta_t, ir_cta_d)


# Privacy variables
pr_tech = """                        'Integrate granular Privacy by Design constraints directly into software architectures',
                        'Execute Data Protection Impact Assessments (DPIAs) prior to new data processing changes',
                        'Automate and scale the retrieval, masking, and deletion mechanisms necessary for honoring DSARs',
                        'Implement robust technical encryption and algorithmic tokenization protections for PII',
                        'Design legally defensible data destruction routines that permanently purge records',
                        'Conduct thorough vendor privacy audits to minimize external data liabilities',"""
pr_biz = """                        'Operate efficiently across global regulatory environments without data silos',
                        'Minimize legal and financial risks of GDPR, HIPAA, and external compliance violations',
                        'Demonstrate privacy commitment to enterprise clients to streamline B2B sales cycles',
                        'Reduce the volume of redundant and dark data held in costly corporate storage',
                        'Design products that leverage customer data optimally without crossing regulatory boundaries',
                        'Avoid critical reputation damaging incidents resulting from mishandled personal information',"""
pr_name = "Jonathan Hayes"
pr_title = "Data Privacy Officer and Cloud Security Architect"
pr_bio = "Jonathan specializes in bridging the gap between corporate legal counsel and IT engineering. He emphasizes privacy engineering, teaching application developers how to embed encryption, tokenization, and Data Subject Access Request compliance directly into their codebases."
pr_certs = "'CDPSE', 'CIPP/E', 'CISSP', 'CISA'"
pr_faqs = """            {{
              question: 'Is this course for lawyers or for IT engineers?',
              answer: 'Both. Data privacy is a cross-functional discipline. Engineers must understand the legal obligations driving compliance, while legal professionals must understand the technical reality of encrypting and deleting cloud databases.'
            }},
            {{
              question: 'Does this course teach specific data regulations?',
              answer: 'We cover the universal principles of data protection, heavily utilizing GDPR as the modern standard. We also touch upon regional privacy laws (CCPA, LGPD) and sector-specific laws like HIPAA where relevant to students.'
            }},
            {{
              question: 'Does this prepare me for the CDPSE certification?',
              answer: 'Yes. Our syllabus is perfectly aligned with the ISACA Certified Data Privacy Solutions Engineer (CDPSE) domains: Privacy Governance, Privacy Architecture, and Data Lifecycle.'
            }}"""
pr_cta_t = "Engineer Compliance Directly Into Your Infrastructure"
pr_cta_d = "Turn mandatory privacy legislation into a competitive advantage. Partner with Ebanex International to cross-train your legal and technical teams in the deployment of advanced Privacy by Design architectures."

update_page('src/pages/DataPrivacyProtection.tsx', pr_tech, pr_biz, pr_name, pr_title, pr_bio, pr_certs, pr_faqs, pr_cta_t, pr_cta_d)

print("Injected into remaining 3 pages.")

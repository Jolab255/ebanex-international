import { 
    Shield, Lock, Database, FileKey, GlobeLock, 
    Search, Server, AlertOctagon, Activity,
    Briefcase, Globe, Target
} from 'lucide-react';

export interface TrainingProgram {
    title: string;
    slug: string;
    badge: string;
    description: string;
    longDescription?: string;
    duration: string;
    hours: string;
    audience: string;
    image: string;
    testimonial: {
        text: string;
        author: string;
        role: string;
        image?: string;
    };
    instructor: {
        name: string;
        role: string;
        bio: string;
        certs: string[];
        image: string;
        stats: { number: string; label: string; }[];
    };
    skills: {
        technical: string[];
        business: string[];
    };
    evaluation: {
        phase: string;
        desc: string;
    }[];
    industries: {
        title: string;
        desc: string;
    }[];
    stats: {
        metric: number;
        suffix: string;
        label: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const TRAINING_PROGRAMS: Record<string, TrainingProgram> = {
    // CYBERSECURITY & INFORMATION SECURITY
    'cybersecurity-awareness': {
        title: 'Cybersecurity Awareness Programs',
        slug: 'cybersecurity-awareness',
        badge: 'Foundational Program',
        description: 'Empower your workforce to be the first line of defense. Our comprehensive awareness training transforms human risk into institutional security strength.',
        longDescription: 'Our Cybersecurity Awareness Program is designed to transform your employees from potential security vulnerabilities into your organization\'s first line of defense. In today\'s increasingly connected world, cyber threats are evolving faster than ever—phishing attacks, ransomware, social engineering, and insider threats target organizations of all sizes. This comprehensive training equips your workforce with the knowledge and skills to identify, prevent, and respond to these threats effectively, protecting your organization\'s critical assets and reputation.\n\nBeyond just theoretical knowledge, our program focuses on behavioral change. We utilize real-world simulations, interactive workshops, and high-fidelity testing environments to ensure that security awareness becomes a core part of your institutional culture. By the end of this program, your staff will not only understand the risks but will proactively act as a human firewall for your organization.\n\nInstitutional effectiveness depends on the security of its people. Ebanex International provides the framework and the tools to ensure that your workforce is prepared for the challenges of the digital age, reducing the likelihood of successful breaches and minimizing the impact of potential security incidents.',
        duration: '2 Days (Workshops)',
        hours: '12 Hours (Interactive)',
        audience: 'General Staff, Management, Executives',
        image: 'https://picsum.photos/seed/cyberaware/800/800',
        testimonial: {
            text: 'The transition from a reactive to a proactive security culture was palpable within weeks of the Ebanex training. Our employees didn\'t just learn about phishing; they developed a deep-seated understanding of their role as the organization\'s primary line of defense. We saw a documented 70% reduction in successful simulated phishing attempts and, more importantly, a 300% increase in the proactive reporting of suspicious activities to our internal security team. This program is an essential investment for any institution serious about its digital resilience.',
            author: 'Sarah Jenkins',
            role: 'CISO, Global Tech Solutions',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000'
        },
        instructor: {
            name: 'David Miller',
            role: 'Security Culture Expert',
            bio: 'David specializes in behavioral security and organizational culture change with over 15 years of experience. He has helped Fortune 500 companies and government agencies strengthen their security posture and transform their organizational culture.',
            certs: ['CISM', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '5k+', label: 'Trained' },
                { number: '200+', label: 'Companies' },
            ]
        },
        skills: {
            technical: [
                'Recognize and identify phishing attempts and malicious links',
                'Implement strong password policies and MFA best practices',
                'Apply data protection protocols and secure file handling',
                'Understand cloud security and identify shadow IT risks',
                'Respond effectively to security incidents',
                'Conduct basic vulnerability and risk evaluations'
            ],
            business: [
                'Reduce security incidents by up to 70%',
                'Protect sensitive data and maintain compliance',
                'Strengthen organizational security culture',
                'Minimize financial losses from cyber incidents',
                'Enhance customer trust and brand reputation',
                'Meet industry compliance requirements (GDPR, ISO 27001)'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Pre-Assessment', desc: 'Baseline knowledge evaluation and skill gap analysis' },
            { phase: 'Phase 2: Module Quizzes', desc: 'Interactive quizzes after each learning block' },
            { phase: 'Phase 3: Phishing Simulation', desc: 'Real-world test of threat recognition skills' },
            { phase: 'Phase 4: Final Certification', desc: 'Comprehensive examination and behavior review' }
        ],
        industries: [
            { title: 'Financial Services', desc: 'PCI-DSS compliance and fraud prevention' },
            { title: 'Healthcare', desc: 'HIPAA compliance and patient data security' },
            { title: 'Public Sector', desc: 'National security and citizen data protection' },
            { title: 'Manufacturing', desc: 'IP protection and supply chain security' }
        ],
        stats: [
            { metric: 70, suffix: '%', label: 'Phishing Reduction' },
            { metric: 90, suffix: '%', label: 'Policy Adherence' },
            { metric: 100, suffix: '%', label: 'Staff Engagement' },
            { metric: 5, suffix: 'x', label: 'Risk Mitigation' }
        ],
        faqs: [
            { 
                question: 'Who should take this training?', 
                answer: 'This program is designed for all employees across an organization, regardless of their technical background or seniority. From entry-level staff to C-suite executives, every member of your workforce who handles sensitive data or uses organizational technology will find immense value in building these foundational security habits. We tailor the specific delivery to match the various risk profiles within your departments.' 
            },
            { 
                question: 'Is it purely online?', 
                answer: 'We offer a highly flexible hybrid delivery model that includes instructor-led classroom workshops, live virtual training sessions, and self-paced online modules. While our online platform provides 24/7 accessibility for remote staff, we highly recommend our interactive on-site workshops for maximum engagement and behavioral shift, as they allow for real-time questions and localized threat discussions.' 
            },
            { 
                question: 'Can it be customized?', 
                answer: 'Absolutely. We can tailor the content to your specific industry threats and company policies. Our team works closely with your security department to ensure the simulation scenarios and examples used are directly relevant to the real-world risks your employees face in their daily roles.' 
            },
            { 
                question: 'What is the duration?', 
                answer: 'Our standard comprehensive workshop takes 2 full days, but we offer condensed 1-day intensive sessions for busy management teams. For long-term cultural reinforcement, we also provide a continuous learning subscription that delivers monthly micro-learning bursts to keep security top-of-mind throughout the year.' 
            },
            { 
                question: 'Do we get certificates?', 
                answer: 'Yes, all participants receive a formal Ebanex International Certificate of Completion upon successfully passing the final assessment. These certificates serve as tangible evidence of your organization\'s commitment to security standards and can often be used to satisfy regulatory compliance requirements.' 
            }
        ]
    },
    'ethical-hacking': {
        title: 'Ethical Hacking & Threat Intelligence',
        slug: 'ethical-hacking',
        badge: 'Advanced Program',
        description: 'Master the mindset and techniques used by malicious hackers to exploit vulnerabilities before they do. Learn penetration testing, vulnerability assessment, and proactive defense.',
        longDescription: 'Our Ethical Hacking & Threat Intelligence program is an intensive, hands-on experience designed to take security professionals to the next level. We don\'t just teach tools; we teach the adversarial mindset. Participants will work through real-world attack scenarios in our isolated lab environments, learning how to identify obscure vulnerabilities, pivot through compromised networks, and extract actionable threat intelligence from dark web sources.\n\nThis curriculum is built on the most current threat landscape. You will learn to bypass advanced perimeter defenses, exploit internal misconfigurations, and maintain persistence within a network—all within an ethical framework. We cover advanced topics including cloud exploitation, modern web application attacks, and physical security bypassing techniques.\n\nIntelligence is the key to defense. The threat intelligence module teaches you how to collect and analyze data on potential attackers, their motivations, and their specific methodologies. By combining offensive skills with strategic intelligence, you will be prepared to not just respond to threats, but to anticipate and neutralize them before they can impact your organization.',
        duration: '8 Days (Instructor-Led)',
        hours: '45 Hours (Hands-on Labs)',
        audience: 'Security Analysts, Pen Testers, System Admins',
        image: 'https://picsum.photos/seed/ethicalhacking/800/800',
        testimonial: {
            text: 'The ethical hacking bootcamp was a game-changer for our internal Red Team. The high-fidelity labs forced our analysts to move beyond automated tools and develop the critical thinking skills required to bypass advanced endpoint protection and pivot through complex, segmented networks. After the training, our team discovered three critical internal vulnerabilities that had gone unnoticed for over a year. The blend of offensive tactics and threat intelligence modeling provided us with a truly holistic view of our security posture.',
            author: 'David Osei',
            role: 'Head of Information Security, Pan-African Financial Group',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000'
        },
        instructor: {
            name: 'Sarah Chen',
            role: 'Lead Red Team Operator',
            bio: 'Sarah brings over a decade of offensive security experience from both the financial sector and defense contractor environments. She has discovered multiple zero-day vulnerabilities in enterprise software.',
            certs: ['OSCP', 'OSCE', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '12+', label: 'Years Exp' },
                { number: '3k+', label: 'Trained' },
                { number: '50+', label: 'Engagements' },
            ]
        },
        skills: {
            technical: [
                'Advanced network exploitation and pivoting techniques',
                'Web application vulnerability research (SQLi, XSS, XXE)',
                'Wireless security auditing and WPA3 exploitation',
                'Social engineering frameworks and physical bypass',
                'Malware analysis and reverse engineering basics',
                'Threat intelligence collection and attribution'
            ],
            business: [
                'Communicate technical risks to non-technical stakeholders',
                'Develop remediation roadmaps based on exploitation results',
                'Align offensive testing with business continuity goals',
                'Quantify the ROI of proactive vulnerability management',
                'Improve incident response through red team insights',
                'Meet compliance requirements for regular penetration testing'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Skills Baseline', desc: 'Practical assessment of networking and OS fundamentals' },
            { phase: 'Phase 2: Lab Challenges', desc: 'Progressive capture-the-flag (CTF) style technical challenges' },
            { phase: 'Phase 3: Real-world Simulation', desc: 'Full-scale penetration test of a mock enterprise network' },
            { phase: 'Phase 4: Reporting', desc: 'Delivery of a professional-grade executive and technical report' }
        ],
        industries: [
            { title: 'Banking & Finance', desc: 'Securing SWIFT systems and core banking applications' },
            { title: 'Telecommunications', desc: 'Protecting 5G infrastructure and subscriber data' },
            { title: 'Critical Infrastructure', desc: 'SCADA/ICS security and industrial control protection' },
            { title: 'SaaS & Technology', desc: 'Secure SDLC integration and cloud-native exploitation' }
        ],
        stats: [
            { metric: 85, suffix: '%', label: 'Faster Threat Detection' },
            { metric: 100, suffix: '%', label: 'Hands-on Lab Focus' },
            { metric: 92, suffix: '%', label: 'Career Growth Rate' },
            { metric: 5, suffix: 'x', label: 'Risk Reduction ROI' }
        ],
        faqs: [
            { 
                question: 'Is prior coding experience required?', 
                answer: 'While not strictly mandatory for every module, a basic understanding of scripting languages like Python, Bash, or PowerShell will significantly help you navigate the advanced exploitation and automation modules. The ability to read and modify code is essential for customizing exploits during our high-level lab challenges. We provide a "coding for hackers" refresher for those who need to brush up on their skills.' 
            },
            { 
                question: 'What hardware do I need?', 
                answer: 'We provide high-performance, cloud-based lab environments that handle all the heavy lifting, so you don\'t need a specialized "hacking laptop." Any modern computer (Windows, macOS, or Linux) with at least 8GB of RAM and a stable high-speed internet connection is sufficient. You will access our virtual cyber-range through a standard web browser or a secure VPN client provided during enrollment.' 
            },
            { 
                question: 'Is the certification globally recognized?', 
                answer: 'Yes, the Ebanex Advanced Ethical Hacker (E-AEH) certificate is recognized and highly respected by leading financial institutions, telecommunications firms, and government agencies across Africa and the Middle East. Our curriculum is mapped to international frameworks such as NIST and NICE, ensuring that your skills are transferable and competitive in the global cybersecurity labor market.' 
            },
            { 
                question: 'Do you provide lab access after?', 
                answer: 'We believe that mastery comes through repeated practice. Therefore, we provide all students with 30 days of extended access to our virtual lab environments after the instructor-led portion of the course concludes. This allows you to revisit the most complex scenarios, refine your exploitation techniques, and ensure you have fully internalized the curriculum at your own pace.' 
            },
            { 
                question: 'What version of OS are used?', 
                answer: 'Our labs are updated quarterly to ensure you are working with the latest environments. We utilize a mix of Kali Linux (2024.x editions), Parrot OS, and Windows Server 2022/2025 targets. You will also practice attacking modern containerized environments using Docker and Kubernetes, as well as serverless cloud functions to reflect the reality of current enterprise infrastructure.' 
            }
        ]
    },
    'digital-risk': {
        title: 'Digital Risk Management',
        slug: 'digital-risk',
        badge: 'Executive Track',
        description: 'Bridge the critical gap between technical security controls and executive business strategy. Learn to quantify, govern, and mitigate IT risk across your enterprise ecosystem.',
        longDescription: 'In an era where digital transformation is no longer optional, managing digital risk has become a boardroom priority. This program moves beyond the technical details of security to focus on how risk impacts the bottom line.\n\nParticipants will learn to implement robust risk governance frameworks that align technology investments with organizational risk appetite. We cover quantitative risk assessment methodologies that translate cyber threats into financial impact, enabling better-informed decision-making at the executive level.\n\nManaging risk in a connected ecosystem requires a comprehensive view. This program deep-dives into third-party risk management, regulatory compliance mapping, and digital asset valuation. By the end of this course, you will be equipped to lead your organization\'s digital risk strategy, ensuring resilience and competitive advantage in a volatile digital landscape.',
        duration: '5 Days (Instructor-Led)',
        hours: '32 Hours (Blended Learning)',
        audience: 'Risk Managers, CISOs, IT Auditors, Executives',
        image: 'https://picsum.photos/seed/riskmanagement/800/800',
        testimonial: {
            text: 'Ebanex has completely redefined how we present cybersecurity to our Board of Directors. Before this training, our risk reporting was purely qualitative and often misunderstood by the business leaders. By implementing the quantitative FAIR frameworks we learned, we are now able to present risk in financial terms that allow our executives to make strategic capital allocation decisions. We have moved from a "check-the-box" compliance culture to a truly risk-informed strategy that has already optimized our security spend by 25% while improving our overall resilience.',
            author: 'Elena Rostova',
            role: 'Chief Risk Officer, Global Logistics Corp',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000'
        },
        instructor: {
            name: 'Marcus Dubois',
            role: 'Senior Risk Strategist',
            bio: 'Marcus is a former CRO for a major European bank, specialized in governing enormous third-party vendor portfolios and presenting risk posture to corporate boards.',
            certs: ['CRISC', 'CISM', 'CGEIT'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '1k+', label: 'Executives' },
                { number: '15+', label: 'Board Seats' },
            ]
        },
        skills: {
            technical: [
                'Quantitative risk modeling (FAIR methodology)',
                'Third-party risk assessment automation',
                'Key Risk Indicator (KRI) dashboard design',
                'Regulatory compliance mapping (ISO, NIST, COBIT)',
                'Cyber insurance valuation and scoping',
                'IT audit automation frameworks'
            ],
            business: [
                'Translating cyber threats into financial impact',
                'Executive reporting and boardroom communication',
                'Budgeting for security as a business enabler',
                'Strategic risk appetite definition',
                'M&A due diligence for digital assets',
                'Crisis leadership and communication'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Strategy Audit', desc: 'Analysis of current organizational risk management maturity' },
            { phase: 'Phase 2: Risk Modeling', desc: 'Developing quantitative models for specific business scenarios' },
            { phase: 'Phase 3: Board Presentation', desc: 'Simulated board meeting presentation of risk posture' },
            { phase: 'Phase 4: Policy Draft', desc: 'Creation of a comprehensive digital risk management policy' }
        ],
        industries: [
            { title: 'Global Logistics', desc: 'Managing supply chain risk and operational uptime' },
            { title: 'Insurance', desc: 'Underwriting digital risk and claim verification' },
            { title: 'E-commerce', desc: 'Protecting transaction integrity and customer trust' },
            { title: 'Public Sector', desc: 'Securing citizen services and national data assets' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Compliance Readiness' },
            { metric: 60, suffix: '%', label: 'Risk Reduction' },
            { metric: 40, suffix: '%', label: 'Security ROI Uplift' },
            { metric: 100, suffix: '%', label: 'Board Visibility' }
        ],
        faqs: [
            { 
                question: 'Is this only for C-level executives?', 
                answer: 'While the curriculum is designed to meet the strategic needs of C-suite leaders and Board members, senior IT managers, risk analysts, and internal auditors will also find it extremely valuable. Anyone responsible for bridging the gap between technical security controls and organizational business strategy needs these quantification and governance skills to be effective in their role.' 
            },
            { 
                question: 'Does this cover specific regulations?', 
                answer: 'Yes, we provide deep-dive modules on aligning risk strategy with major global and regional standards, including GDPR, HIPAA, and ISO 27001. We also incorporate regional African banking and data protection regulations, such as Nigeria\'s NDPR and Kenya\'s Data Protection Act, ensuring that your compliance strategy is both globally standard and locally relevant.' 
            },
            { 
                question: 'Can we use our own company data?', 
                answer: 'Absolutely. We offer customized corporate workshop versions of this program where your leadership team can apply our quantitative risk frameworks to your organization\'s actual historical data and current threat profile under a strict Non-Disclosure Agreement (NDA). This transforms the training into a real-time strategic exercise that yields immediate ROI for your planning cycle.' 
            },
            { 
                question: 'What framework is used?', 
                answer: 'We primarily utilize the Factor Analysis of Information Risk (FAIR) methodology, which is the international standard for quantitative information risk analysis. Unlike traditional qualitative "high/medium/low" charts, the FAIR framework allows you to calculate risk in actual currency terms, enabling much more precise budgeting and cyber insurance discussions with the Board.' 
            },
            { 
                question: 'Are there group activities?', 
                answer: 'Yes, approximately 40% of the program is dedicated to high-level strategic simulations and peer-based group workshops. Participants engage in mock "Boardroom Diligent" sessions where they must defend their risk mitigation priorities and security budgets against simulated business crises, fostering real-world communication and negotiation skills.' 
            }
        ]
    },
    'incident-response': {
        title: 'Incident Response Training',
        slug: 'incident-response',
        badge: 'Tactical Training',
        description: 'When a breach happens, every second counts. Master the framework to detect, contain, and eradicate threats while minimizing critical business downtime.',
        longDescription: 'Our Incident Response program is built on the philosophy that a breach is inevitable, but a disaster is not. This tactical training prepares your Blue Team to handle the high-pressure environment of a live attack.\n\nWe cover the entire IR lifecycle from initial detection and triage to containment, eradication, and post-incident recovery. Participants will participate in live "fire drills" where they must identify lateral movement, isolate compromised systems, and preserve forensic evidence while maintaining business operations.\n\nBeyond technical detection, we emphasize the importance of communication and process. You will learn to build actionable IR playbooks, manage stakeholders during a crisis, and meet regulatory breach notification requirements. This program transforms your response function from a reactive team into a well-oiled recovery machine.',
        duration: '4 Days (Live Scenarios)',
        hours: '28 Hours (Practical Training)',
        audience: 'Security Operations (SOC) Teams, Blue Teams',
        image: 'https://picsum.photos/seed/incidentresponse/800/800',
        testimonial: {
            text: 'We underwent the Ebanex Incident Response training just months before we were targeted by a major ransomware group. The difference in our response was extraordinary. Instead of the panic and chaos we had experienced in the past, our SOC team followed the precise containment playbooks we developed during the course. We were able to isolate the lateral movement in under 20 minutes, preventing the encryption of our primary subscriber database. The forensic skills our team acquired allowed us to provide the regulators with a complete, evidence-backed report within 48 hours of the incident. Ebanex literally saved our business from a catastrophic outage.',
            author: 'Martin Kinyua',
            role: 'VP of Infrastructure, Regional Telecom Provider',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000'
        },
        instructor: {
            name: 'Elena Rostova',
            role: 'DFIR Director',
            bio: 'Elena is a veteran responder who has managed technical triage during some of the largest ransomware attacks of the last decade.',
            certs: ['GCIH', 'GCFA', 'CHFI'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '500+', label: 'Incidents' },
                { number: '50k+', label: 'Nodes Managed' },
            ]
        },
        skills: {
            technical: [
                'Live memory and disk forensic acquisition',
                'Malware triage and indicator of compromise (IoC) extraction',
                'Network traffic analysis for C2 detection',
                'Active Directory environment containment',
                'Log correlation across SIEM/EDR platforms',
                'Cloud incident response (AWS/Azure/GCP)'
            ],
            business: [
                'Crisis management and stakeholder communication',
                'Legal and regulatory breach notification requirements',
                'Incident cost estimation and business impact analysis',
                'Developing actionable IR playbooks',
                'Post-incident reporting and root cause analysis',
                'Building a continuous improvement security loop'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Triage Test', desc: 'Timed assessment of alert validation and initial scoping' },
            { phase: 'Phase 2: Forensic Challenge', desc: 'Deep-dive analysis of memory dumps and network logs' },
            { phase: 'Phase 3: Live Breach Simulation', desc: 'Collaborative team exercise to contain a live "attacker"' },
            { phase: 'Phase 4: Recovery Planning', desc: 'Developing a restoration and hardening strategy' }
        ],
        industries: [
            { title: 'Telecom', desc: 'Protecting network backbones and subscriber databases' },
            { title: 'Retail', desc: 'Securing POS systems and preventing credit card theft' },
            { title: 'Healthcare', desc: 'Preventing ransomware from disrupting patient care' },
            { title: 'Government', desc: 'Protecting classified data and national systems' }
        ],
        stats: [
            { metric: 90, suffix: '%', label: 'Containment Speed' },
            { metric: 75, suffix: '%', label: 'Impact Reduction' },
            { metric: 100, suffix: '%', label: 'Chain of Custody' },
            { metric: 50, suffix: '%', label: 'RTO Decrease' }
        ],
        faqs: [
            { 
                question: 'Do we need a specific SIEM?', 
                answer: 'No, our program is designed to be platform-agnostic. We teach the underlying core principles and forensic methodologies that apply across all major industry tools, including Splunk, Microsoft Sentinel, Crowdstrike, and Elastic. Our goal is to ensure your team can respond effectively regardless of the specific technology stack your organization currently uses.' 
            },
            { 
                question: 'Is this for managers or technicians?', 
                answer: 'This is primarily a technical, hands-on course designed for SOC analysts, blue team members, and system administrators who will be on the front lines during an attack. However, we have included specific modules on incident cost estimation, legal notification, and executive crisis communication that IR managers and CISOs will find essential for coordinating the organizational response.' 
            },
            { 
                question: 'Can we run this on-site?', 
                answer: 'Yes, we offer on-site "Cyber Range" deployments for our corporate clients. We can bring our mobile lab infrastructure to your facility, allowing your entire team to train together in their familiar working environment while responding to simulated attacks that mirror your actual organizational topology and vulnerabilities.' 
            },
            { 
                question: 'What tools are used?', 
                answer: 'Participants will get hands-on experience with industry-standard forensic and analysis tools such as Volatility for memory forensics, FTK Imager for disk acquisition, Wireshark for deep packet inspection, and various open-source intelligence (OSINT) tools for threat attribution. We focus on tools that are used in actual high-stakes investigations worldwide.' 
            },
            { 
                question: 'Is evidence preservation covered?', 
                answer: 'Yes, a fundamental pillar of our curriculum is the preservation of digital evidence and the maintenance of a rigorous chain of custody. We teach the legal and technical requirements for forensic acquisition, ensuring that any evidence your team collects during an incident remains admissible in court and useful for formal regulatory inquiries.' 
            }
        ]
    },
    'data-privacy': {
        title: 'Data Privacy & Protection',
        slug: 'data-privacy',
        badge: 'Essential Regulatory',
        description: 'Transform privacy from a legal obligation into an engineering discipline. Equip your team to build compliant systems and protect personal data across its entire lifecycle.',
        longDescription: 'Data privacy is no longer just for lawyers. In today\'s regulatory environment, privacy must be built into the code and architecture of every system.\n\nThis program bridges the gap between legal requirements (like GDPR and regional laws) and technical implementation. We cover "Privacy by Design" principles, data flow mapping, encryption-at-rest and in-transit, and how to handle Data Subject Access Requests (DSARs) at scale.\n\nParticipants will learn how to turn privacy into a competitive advantage by building trust with customers and navigating the complex global regulatory landscape. We provide practical tools and templates for conducting DPIAs and implementing technical controls that ensure compliance without sacrificing operational efficiency.',
        duration: '5 Days (Instructor-Led)',
        hours: '30 Hours (Hybrid Learning)',
        audience: 'DPOs, IT Architects, Developers, Legal Teams',
        image: 'https://picsum.photos/seed/dataprivacy/800/800',
        testimonial: {
            text: 'The "Privacy by Design" modules provided by Ebanex have fundamentally changed how our engineering teams build products. Previously, privacy was something our legal department tried to fix after a system was already built, which was costly and often incomplete. Now, our architects and developers have the specific technical frameworks to build privacy into the very fabric of our cloud services. We\'ve not only met our GDPR and regional compliance goals, but we\'ve also seen a significant increase in trust from our enterprise clients who value our data handling transparency.',
            author: 'Chinedu Okafor',
            role: 'Chief Data Officer, Pan-African Retail Network',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000'
        },
        instructor: {
            name: 'Jonathan Hayes',
            role: 'Privacy Architect',
            bio: 'Jonathan specializes in bridging the gap between corporate legal counsel and IT engineering.',
            certs: ['CDPSE', 'CIPP/E', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '10+', label: 'Years Exp' },
                { number: '200+', label: 'DPOs Trained' },
                { number: '50+', label: 'Audits' },
            ]
        },
        skills: {
            technical: [
                'Data flow mapping and inventory automation',
                'Privacy-enhancing technologies (PETs) implementation',
                'Advanced encryption and tokenization strategies',
                'Secure data disposal and "right to be forgotten" workflows',
                'Database security and masking techniques',
                'Cloud privacy configuration (AWS/Azure)'
            ],
            business: [
                'Conducting Data Protection Impact Assessments (DPIA)',
                'Managing third-party and vendor privacy risk',
                'Building a privacy-first organizational culture',
                'Handling regulatory inquiries and DSARs',
                'Privacy as a brand differentiator',
                'Global regulatory landscape navigation'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Compliance Gap Analysis', desc: 'Evaluating current systems against GDPR/Regional standards' },
            { phase: 'Phase 2: Architecture Review', desc: 'Redesigning a mock system using Privacy by Design' },
            { phase: 'Phase 3: Breach Response Drill', desc: 'Handling a privacy-specific data breach scenario' },
            { phase: 'Phase 4: Audit Readiness', desc: 'Compiling an evidence pack for a mock privacy audit' }
        ],
        industries: [
            { title: 'Retail & Marketing', desc: 'Personalization without compromising privacy' },
            { title: 'Healthcare', desc: 'Managing sensitive patient data and research assets' },
            { title: 'Financial Services', desc: 'Protecting transaction data and KYC information' },
            { title: 'Cloud/SaaS', desc: 'Building multi-tenant privacy into product architecture' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Compliance Health' },
            { metric: 100, suffix: '%', label: 'Lifecycle Visibility' },
            { metric: 50, suffix: '%', label: 'DSAR Speed Uplift' },
            { metric: 80, suffix: '%', label: 'Risk Decrease' }
        ],
        faqs: [
            { 
                question: 'Is this for developers?', 
                answer: 'Yes, while many privacy courses focus strictly on legal compliance, approximately 50% of our curriculum is dedicated to technical implementation for architects, developers, and database administrators. We believe that privacy must be built into the code, and our program provides the specific engineering patterns and cryptographic strategies needed to achieve this practically.' 
            },
            { 
                question: 'Which laws are covered?', 
                answer: 'Our baseline is the GDPR as the recognized global standard for data protection. However, we also provide specific modules on regional African laws, including Nigeria\'s NDPR, Kenya\'s Data Protection Act, and South Africa\'s POPIA. This ensures that your team is prepared to manage data flows that cross multiple jurisdictions while remaining fully compliant with both international and local standards.' 
            },
            { 
                question: 'Do we get templates?', 
                answer: 'Yes, every participant receives access to our comprehensive Ebanex Privacy Toolkit. This includes a full library of professional templates for Data Protection Impact Assessments (DPIAs), Data Subject Access Request (DSAR) workflows, Data Processing Agreements (DPAs), and organizational privacy policies that you can adapt for your immediate use.' 
            },
            { 
                question: 'What is Privacy by Design?', 
                answer: 'Privacy by Design is a framework based on seven foundational principles that ensure privacy is integrated into the system engineering process from the very beginning. Instead of bolting on privacy controls as an afterthought, we teach your team how to make privacy the default setting for all your products, services, and internal business processes.' 
            },
            { 
                question: 'Does it cover cloud privacy?', 
                answer: 'Absolutely. We have dedicated modules for managing data residency and privacy configurations within major cloud providers like AWS, Azure, and Google Cloud. You will learn to use cloud-native tools for data discovery, classification, and encryption, ensuring that your cloud architecture meets the most stringent global privacy requirements.' 
            }
        ]
    },

    // IT & DIGITAL SKILLS
    'networking': {
        title: 'Networking & Infrastructure',
        slug: 'networking',
        badge: 'Infrastructure Core',
        description: 'Master the design, implementation, and management of modern enterprise networks. From software-defined networking to traditional routing and switching.',
        longDescription: 'The Networking & Infrastructure program provides a comprehensive deep-dive into the backbone of modern business. We bridge the gap between legacy hardware-centric networking and modern Software-Defined Infrastructure (SDI).\n\nParticipants learn to design resilient architectures, implement advanced routing protocols, and secure network perimeters against modern threats. Our hands-on labs use industry-leading equipment and simulation tools to prepare you for real-world deployment challenges.\n\nInfrastructure is the foundation of digital agility. This program covers automation, SD-WAN, and high-availability design, ensuring your network can scale with the demands of your organization while maintaining 99.99% target uptime.',
        duration: '10 Days (Bootcamp)',
        hours: '60 Hours (Theory + Lab)',
        audience: 'Network Engineers, System Architects, IT Admins',
        image: 'https://picsum.photos/seed/networking/800/800',
        testimonial: {
            text: 'The Ebanex networking lab environment is simply world-class. Being able to simulate our entire corporate topology and test our failover and BGP routing protocols in a safe, high-fidelity environment was invaluable. Our engineers gained more practical knowledge in 10 days than they had in years of standard support roles. We\'ve since implemented the SD-WAN and automation scripts developed during the bootcamp, which has already reduced our manual configuration errors by nearly 60% and improved our overall network responsiveness.',
            author: 'Samuel Okafor',
            role: 'Infrastructure Lead, TechHub Africa',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000'
        },
        instructor: {
            name: 'Robert Mensah',
            role: 'Network Architect',
            bio: 'Robert is a CCIE-certified professional with 20 years of experience designing carrier-grade networks.',
            certs: ['CCIE', 'CCNP Enterprise', 'JNCIP'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '2k+', label: 'Engineers' },
                { number: '100+', label: 'Projects' },
            ]
        },
        skills: {
            technical: [
                'Advanced BGP and OSPF routing configurations',
                'Software-Defined Networking (SDN) and SD-WAN',
                'Network automation using Python and Ansible',
                'Next-Generation Firewall (NGFW) implementation',
                'Wireless LAN controllers and high-density WiFi',
                'IPv6 transition strategies'
            ],
            business: [
                'Network lifecycle management and budgeting',
                'Vendor selection and SLA negotiation',
                'Disaster recovery and business continuity planning',
                'Regulatory compliance for data transit',
                'Aligning infrastructure with digital transformation',
                'Total Cost of Ownership (TCO) analysis'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Topology Design', desc: 'Creating a high-availability network architecture' },
            { phase: 'Phase 2: Configuration Lab', desc: 'Implementing complex routing and switching scenarios' },
            { phase: 'Phase 3: Troubleshooting', desc: 'Identifying and fixing intentional network breaks' },
            { phase: 'Phase 4: Capstone Project', desc: 'Full deployment of a secure multi-site enterprise network' }
        ],
        industries: [
            { title: 'Telecommunications', desc: 'Core network optimization and 5G readiness' },
            { title: 'Enterprise IT', desc: 'Hybrid cloud connectivity and office infrastructure' },
            { title: 'Education', desc: 'Campus-wide wireless and student network security' },
            { title: 'Industrial', desc: 'Converged OT/IT network environments' }
        ],
        stats: [
            { metric: 99.99, suffix: '%', label: 'Target Uptime' },
            { metric: 40, suffix: '%', label: 'Cost Reduction' },
            { metric: 100, suffix: '%', label: 'Practical Lab Focus' },
            { metric: 3, suffix: 'x', label: 'Deployment Speed' }
        ],
        faqs: [
            { 
                question: 'Do I need hardware?', 
                answer: 'No, Ebanex provides all necessary equipment for the duration of the bootcamp. You will have exclusive access to a full rack of both physical and virtualized enterprise-grade hardware, including Cisco Catalyst switches, Nexus data center platforms, and high-performance routers. You simply need to bring a modern laptop to access our management consoles and lab environments.' 
            },
            { 
                question: 'Is this CCNA prep?', 
                answer: 'While our curriculum covers all the core topics required for the CCNA certification, it is designed to go much deeper into professional-level (CCNP) and carrier-grade scenarios. We focus on multi-vendor environments, software-defined networking, and enterprise automation, ensuring that you leave the course with a much more comprehensive and job-ready skill set than a standard entry-level certificate provides.' 
            },
            { 
                question: 'Remote access?', 
                answer: 'Yes, we understand the need for flexible study schedules. Every student receives secure, encrypted 24/7 VPN access to our lab environment for the entire duration of the course. This allows you to practice your configurations, test your failover protocols, and complete your project work from the comfort of your home or office whenever it suits you best.' 
            },
            { 
                question: 'What vendors are covered?', 
                answer: 'We utilize Cisco systems as our primary pedagogical foundation because they are the global industry standard. However, we also include significant modules and labs involving Juniper, Fortinet, and Aruba environments. Our goal is to train versatile engineers who can walk into any enterprise data center and be effective regardless of the specific vendor logos on the equipment.' 
            },
            { 
                question: 'Is automation included?', 
                answer: 'Absolutely. Modern infrastructure cannot be managed manually at scale. We have dedicated a full 20% of the curriculum to network automation and programmability. You will learn to use Python and Ansible to automate routine configuration tasks, manage firmware updates across hundreds of devices simultaneously, and implement intent-based networking principles.' 
            }
        ]
    },
    'cloud-computing': {
        title: 'Cloud Computing & Virtualization',
        slug: 'cloud-computing',
        badge: 'Modern Infrastructure',
        description: 'Transition from physical servers to elastic, scalable cloud architectures. Master AWS, Azure, and Google Cloud along with enterprise virtualization techniques.',
        longDescription: 'Our Cloud Computing program is designed to transform traditional IT professionals into Cloud Architects. We focus on the "well-architected" framework, teaching you how to build cost-effective, high-performing, and secure cloud environments.\n\nFrom serverless computing to containerization with Kubernetes, we cover the modern cloud stack. You will learn to implement Infrastructure as Code (IaC) using Terraform, ensuring that your deployments are repeatable and reliable.\n\nThe business case for cloud is just as important as the technology. We teach you FinOps principles to manage cloud spending and strategies for avoiding vendor lock-in. By the end of this program, you will be able to lead complex cloud migrations and design multi-cloud architectures that drive institutional innovation.',
        duration: '6 Days (Intensive)',
        hours: '40 Hours (Project Based)',
        audience: 'System Admins, Architects, DevOps Engineers',
        image: 'https://picsum.photos/seed/cloud/800/800',
        testimonial: {
            text: 'The Ebanex Cloud program was the catalyst for our organization\'s successful digital transformation. We had struggled for years with a fragmented, on-premise infrastructure that limited our ability to scale. The "Well-Architected" frameworks we learned allowed us to migrate our core customer-facing applications to a multi-cloud environment in just three months, reducing our time-to-market for new features by over 50%. The focus on Infrastructure as Code (IaC) has completely modernized our deployment pipeline, and we are now operating with a level of agility and security that was previously impossible.',
            author: 'Aisha Keita',
            role: 'Cloud Lead, Fintech Solutions',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Kofi Mensah',
            role: 'Senior Cloud Architect',
            bio: 'Kofi is a multi-cloud certified expert with extensive experience in large-scale enterprise migrations.',
            certs: ['AWS Solutions Architect', 'Azure Solutions Architect', 'VCP'],
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '10+', label: 'Years Exp' },
                { number: '100+', label: 'Migrations' },
                { number: '2k+', label: 'Students' },
            ]
        },
        skills: {
            technical: [
                'Cloud migration strategies (Rehost, Refactor, Rearchitect)',
                'Serverless computing and Microservices',
                'Infrastructure as Code (Terraform, CloudFormation)',
                'Containerization with Docker and Kubernetes',
                'Cloud security and identity management',
                'Virtualization with VMware and Hyper-V'
            ],
            business: [
                'Cloud financial management (FinOps)',
                'Developing a cloud-first strategy',
                'Compliance and data residency in the cloud',
                'Reducing Total Cost of Ownership (TCO)',
                'Business continuity and disaster recovery',
                'Vendor lock-in mitigation'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Architecture Design', desc: 'Designing a secure multi-region cloud environment' },
            { phase: 'Phase 2: Migration Lab', desc: 'Migrating an on-premise application to the cloud' },
            { phase: 'Phase 3: Automation Test', desc: 'Deploying infrastructure using Terraform' },
            { phase: 'Phase 4: Security Audit', desc: 'Securing the cloud environment against simulated attacks' }
        ],
        industries: [
            { title: 'Fintech', desc: 'Scaling secure payment processing in the cloud' },
            { title: 'SaaS', desc: 'Building multi-tenant global applications' },
            { title: 'Government', desc: 'Implementing secure government cloud initiatives' },
            { title: 'Logistics', desc: 'Global supply chain tracking and optimization' }
        ],
        stats: [
            { metric: 60, suffix: '%', label: 'Operational Efficiency' },
            { metric: 45, suffix: '%', label: 'Cost Savings' },
            { metric: 90, suffix: '%', label: 'Deployment Speed' },
            { metric: 100, suffix: '%', label: 'High Availability' }
        ],
        faqs: [
            { 
                question: 'Which cloud provider?', 
                answer: 'We cover AWS, Azure, and GCP, with a focus on transferable architecture principles. While we utilize specific providers for our labs, the core engineering patterns we teach—such as microservices, serverless design, and IAM governance—are applicable across the entire industry, ensuring you are not locked into a single ecosystem.' 
            },
            { 
                question: 'Coding needed?', 
                answer: 'Basic knowledge of Linux and a bit of scripting (Python or Bash) is very helpful for the automation and IaC modules. However, we have designed the course to be accessible for experienced system administrators; we provide a "cloud-native coding" primer to help you master the necessary Terraform and Kubernetes syntax during the first phase of the bootcamp.' 
            },
            { 
                question: 'Do I get free credits?', 
                answer: 'Yes, we provide student lab accounts for all three major providers during the course. You will have a dedicated, pre-funded sandbox environment where you can build, deploy, and occasionally "break" architectures without any personal cost or risk to your organizational production environments.' 
            },
            { 
                question: 'What is IaC?', 
                answer: 'Infrastructure as Code allows you to manage and provision your servers, networks, and databases using text-based configuration files. This eliminates manual configuration errors, allows for version control of your infrastructure, and enables your team to deploy entire complex environments in minutes rather than days.' 
            },
            { 
                question: 'Is Kubernetes covered?', 
                answer: 'Yes, we have a significant module dedicated to container orchestration using Kubernetes. You will learn to manage pods, services, and ingress controllers, as well as how to implement persistent storage and secure container registries within a production-grade cloud environment.' 
            }
        ]
    },
    'ai-tech': {
        title: 'AI & Emerging Technologies',
        slug: 'ai-tech',
        badge: 'Innovation Track',
        description: 'Harness the power of Artificial Intelligence, Machine Learning, and Automation to drive institutional innovation and operational excellence.',
        longDescription: 'Our AI & Emerging Technologies program bridges the gap between science fiction and business reality. We focus on practical applications of GenAI, Predictive Analytics, and Robotic Process Automation (RPA) in enterprise settings.\n\nParticipants will learn to identify high-value AI opportunities within their organizations and develop a strategic roadmap for implementation. We cover the technical foundations of machine learning and natural language processing, but also the critical human elements of ethics and governance.\n\nAutomation is the key to scaling innovation. This program includes hands-on workshops where you will build RPA workflows and explore the potential of low-code AI tools. By the end of this course, you will be prepared to lead your organization\'s AI journey, ensuring that your workforce is future-proofed and your operations are optimized.',
        duration: '5 Days (Workshops)',
        hours: '35 Hours (Applied Practice)',
        audience: 'Innovation Leads, Data Analysts, IT Managers',
        image: 'https://picsum.photos/seed/aitech/800/800',
        testimonial: {
            text: 'The Ebanex AI workshop has been a transformative experience for our innovation department. Instead of just talking about Artificial Intelligence, we were actually building functional GenAI prototypes and RPA workflows that solved real bottlenecks in our customer support and data entry departments. The instructors did a brilliant job of demystifying the technology and focusing on the strategic ROI and ethical governance that our leadership cares about. We left with not just knowledge, but a concrete 12-month AI roadmap that is already driving measurable efficiency gains in our operations.',
            author: 'Kelechi Iheanacho',
            role: 'Head of Innovation, Retail Link',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000'
        },
        instructor: {
            name: 'Dr. Kwame Addo',
            role: 'AI Strategy Lead',
            bio: 'Dr. Addo has implemented large-scale AI solutions for global telecommunications and financial institutions.',
            certs: ['PhD in AI', 'Google Cloud ML Engineer', 'TensorFlow Developer'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '12+', label: 'Years Exp' },
                { number: '50+', label: 'AI Projects' },
                { number: '1k+', label: 'Pros Trained' },
            ]
        },
        skills: {
            technical: [
                'Generative AI and Prompt Engineering',
                'Predictive Modeling and Data Science foundations',
                'Robotic Process Automation (RPA) workflows',
                'Natural Language Processing (NLP) for Business',
                'AI Ethics and Governance frameworks',
                'Low-code/No-code AI implementation'
            ],
            business: [
                'AI Opportunity Identification and Prioritization',
                'Developing an AI Strategy and Roadmap',
                'Measuring AI Return on Investment (ROI)',
                'Change Management for AI-driven cultures',
                'Managing AI risks and security implications',
                'Future-proofing workforce skills'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: AI Readiness Audit', desc: 'Evaluating organizational data and infrastructure maturity' },
            { phase: 'Phase 2: Prompt Engineering Lab', desc: 'Mastering GenAI for complex business tasks' },
            { phase: 'Phase 3: RPA Prototype', desc: 'Building a simple automation for a real business process' },
            { phase: 'Phase 4: Capstone Pitch', desc: 'Presenting an AI-driven innovation project to a mock board' }
        ],
        industries: [
            { title: 'Customer Service', desc: 'Intelligent chatbots and automated support systems' },
            { title: 'Financial Analysis', desc: 'Fraud detection and automated risk assessment' },
            { title: 'HR & Operations', desc: 'Automated screening and process optimization' },
            { title: 'Healthcare', desc: 'Predictive diagnostics and patient management' }
        ],
        stats: [
            { metric: 50, suffix: '%', label: 'Efficiency Gain' },
            { metric: 3, suffix: 'x', label: 'Innovation Speed' },
            { metric: 90, suffix: '%', label: 'Applied Project Success' },
            { metric: 100, suffix: '%', label: 'Future Readiness' }
        ],
        faqs: [
            { 
                question: 'Do I need to be a coder?', 
                answer: 'No, we focus on both low-code implementation and the strategic management of AI. While we cover the technical foundations of how models work, our goal is to empower business and IT leaders to utilize existing platforms like OpenAI, Azure AI, and UiPath to drive organizational value without needing a PhD in data science.' 
            },
            { 
                question: 'What tools are used?', 
                answer: 'We utilize a curated selection of industry-leading enterprise tools, including OpenAI\'s GPT-4 models, Azure AI Foundry, and UiPath for robotic automation. We also explore open-source alternatives like Llama and Hugging Face libraries, ensuring you have a comprehensive view of the entire AI ecosystem and can choose the right tools for your specific budget and privacy needs.' 
            },
            { 
                question: 'Is it purely theoretical?', 
                answer: 'Not at all. Over 60% of the program is dedicated to hands-on "Innovation Labs" where you will actively build and test AI-driven solutions. You will practice prompt engineering for complex business tasks, design automated workflows for common departmental bottlenecks, and participate in a final capstone project where you develop a complete AI business case for your organization.' 
            },
            { 
                question: 'What is Prompt Engineering?', 
                answer: 'Prompt Engineering is the specialized skill of crafting precise, context-aware instructions for Large Language Models (LLMs) to ensure they produce the most accurate and useful results. You will learn to use structured prompting, few-shot learning, and chain-of-thought techniques to transform GenAI into a reliable professional assistant for your entire workforce.' 
            },
            { 
                question: 'Does it cover AI ethics?', 
                answer: 'Yes, ethics and governance are core pillars of our program. We provide deep-dives into bias detection, data transparency, and the creation of "Responsible AI" policies for your institution. We believe that long-term AI success is only possible when the technology is implemented with a clear understanding of its societal impact and regulatory boundaries.' 
            }
        ]
    },
    'digital-transformation': {
        title: 'Digital Transformation Skills',
        slug: 'digital-transformation',
        badge: 'Strategy Track',
        description: 'Equip your workforce with the mindset and technical skills required to navigate and lead in a digitally-driven economy.',
        longDescription: 'Digital transformation is 20% technology and 80% people. This program focuses on building the cultural and technical agility required to thrive in a constantly evolving landscape.\n\nWe bridge the gap between legacy processes and modern digital business models. You will learn to implement agile and scrum methodologies, drive data-driven decision making, and lead your organization through complex change management initiatives.\n\nAgility is the new currency of business. This program teaches you to build high-performance, customer-centric teams and establish innovation hubs within your organization. By the end of this course, you will be prepared to lead your organization\'s digital journey, ensuring that you stay ahead of the competition.',
        duration: '4 Days (Blended)',
        hours: '25 Hours (Strategic)',
        audience: 'Business Leaders, Change Agents, Project Managers',
        image: 'https://picsum.photos/seed/digitaltrans/800/800',
        testimonial: {
            text: 'The Ebanex Digital Transformation program provided the strategic blueprint our agency needed to move from fragmented, legacy systems to a modern, mobile-first service delivery model. The instructors didn\'t just teach us about technology; they taught us how to lead people through the profound cultural changes that digital maturity requires. We now have a unified "Change Agent" network across our departments that uses agile sprints to solve operational challenges. Our citizen engagement has improved by over 100% since we began implementing the customer journey frameworks learned in this program.',
            author: 'Fatuma Hassan',
            role: 'Digital Lead, Government Agency',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000'
        },
        instructor: {
            name: 'Robert Mensah',
            role: 'Transformation Lead',
            bio: 'Robert has led digital turnarounds for multiple multi-million dollar enterprises.',
            certs: ['MBA', 'PMP', 'Lean Six Sigma Black Belt'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '20+', label: 'Major Projects' },
                { number: '5k+', label: 'Upskilled' },
            ]
        },
        skills: {
            technical: [
                'Digital Ecosystem Mapping',
                'Agile and Scrum methodologies',
                'Data-driven decision making',
                'Cloud and Mobile strategy',
                'Cybersecurity foundations for non-tech',
                'User Experience (UX) principles'
            ],
            business: [
                'Change Management and Leadership',
                'Customer-centric business modeling',
                'Digital ROI and Value realization',
                'Establishing Innovation Hubs',
                'Future of Work and Workforce planning',
                'Operational Agility'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Agility Assessment', desc: 'Baseline measurement of digital maturity' },
            { phase: 'Phase 2: Sprint Lab', desc: 'Practicing agile delivery in a mock project' },
            { phase: 'Phase 3: Transformation Roadmap', desc: 'Developing a step-by-step strategy for a real unit' },
            { phase: 'Phase 4: Pitch Session', desc: 'Defending the transformation strategy to executives' }
        ],
        industries: [
            { title: 'Public Sector', desc: 'E-government services and process digitization' },
            { title: 'Banking', desc: 'Mobile-first banking and customer journeys' },
            { title: 'Retail', desc: 'Omnichannel commerce and digital engagement' },
            { title: 'Industrial', desc: 'IoT and smart manufacturing initiatives' }
        ],
        stats: [
            { metric: 75, suffix: '%', label: 'Process Speedup' },
            { metric: 40, suffix: '%', label: 'Employee Engagement' },
            { metric: 100, suffix: '%', label: 'Strategic Alignment' },
            { metric: 5, suffix: 'x', label: 'Innovation ROI' }
        ],
        faqs: [
            { 
                question: 'Is it technical?', 
                answer: 'While we cover essential technology concepts like cloud, mobile, and UX, the program focuses primarily on the strategy and implementation of change. We believe that successful transformation requires leaders who understand the capabilities of technology but prioritize the human and operational agility needed to utilize those tools effectively.' 
            },
            { 
                question: 'For which level?', 
                answer: 'This program is ideally suited for middle and senior management, as well as project leaders who have the authority to drive change within their departments. It is for those who are responsible for the overall strategic direction of their units and need to understand how to align digital initiatives with institutional goals.' 
            },
            { 
                question: 'Can we run it in-house?', 
                answer: 'Yes, this is our most requested corporate in-house program. We can tailor the curriculum to your specific organizational context, allowing your leadership team to work through actual transformation challenges and develop a real-world roadmap as part of the workshop experience.' 
            },
            { 
                question: 'What is Agile?', 
                answer: 'Agile is a mindset and a set of methodologies (like Scrum or Kanban) that focus on iterative delivery, customer feedback, and continuous improvement. We teach your team how to apply these concepts to business processes, not just software development, to increase your speed and flexibility.' 
            },
            { 
                question: 'Is there a final project?', 
                answer: 'Yes, every participant or team will develop a comprehensive Digital Transformation Roadmap for their specific unit. This serves as a tangible output of the course that can be presented to your executive board for immediate implementation and funding.' 
            }
        ]
    },
    'systems-admin': {
        title: 'Systems Administration',
        slug: 'systems-admin',
        badge: 'Core Operations',
        description: 'Master the deployment, management, and securing of enterprise server environments across Linux and Windows platforms.',
        longDescription: 'Our Systems Administration program provides the tactical skills required to maintain high-availability infrastructure. From directory services to automated deployment, we cover the full lifecycle of enterprise systems.\n\nYou will learn to manage complex identity and access management (IAM) systems, implement robust backup and disaster recovery (DR) solutions, and harden servers against common attack vectors using both Linux and Windows platforms.\n\nOperations are the heartbeat of the IT organization. This program teaches you to use scripting and automation to reduce manual tasks, monitor service levels, and manage IT assets effectively. By the end of this course, you will be able to maintain stable, secure, and scalable infrastructure that meets the needs of your organization.',
        duration: '8 Days (Bootcamp)',
        hours: '45 Hours (Hands-on)',
        audience: 'System Admins, IT Support, Infrastructure Engineers',
        image: 'https://picsum.photos/seed/sysadmin/800/800',
        testimonial: {
            text: 'The Ebanex Systems Administration bootcamp has elevated our IT operations to an entirely new level. Before this training, our administrators were manually performing routine maintenance, which led to inconsistent uptimes and security vulnerabilities. After mastering the automation and PowerShell/Bash scripting modules, our team has reduced their manual workload by nearly 50%, allowing them to focus on proactive hardening and infrastructure optimization. The disaster recovery simulations were particularly impactful—we are now confident that our restoration times are well within our SLAs. This is the most practical, job-ready IT training available.',
            author: 'Joseph Mensah',
            role: 'Senior SysAdmin, Tech Ghana',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000'
        },
        instructor: {
            name: 'Kofi Mensah',
            role: 'Lead Systems Architect',
            bio: 'Kofi is a multi-platform expert with 15 years of experience in enterprise data center management.',
            certs: ['RHCE', 'MCSE', 'VCP'],
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '500+', label: 'Servers Managed' },
                { number: '2k+', label: 'Pros Trained' },
            ]
        },
        skills: {
            technical: [
                'Advanced Linux/Unix Administration',
                'Windows Server & Active Directory',
                'Identity and Access Management (IAM)',
                'Virtualization and Hyperconverged Infra',
                'Backup and Disaster Recovery (DR)',
                'Scripting and Automation (PowerShell, Bash)'
            ],
            business: [
                'Infrastructure Lifecycle Management',
                'SLA and Uptime Monitoring',
                'IT Asset Management (ITAM)',
                'Change and Incident Management',
                'Budgeting for Infrastructure',
                'Vendor and License Management'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Configuration Lab', desc: 'Setting up a multi-server directory environment' },
            { phase: 'Phase 2: Automation Challenge', desc: 'Writing scripts to automate routine maintenance' },
            { phase: 'Phase 3: DR Simulation', desc: 'Recovering critical services after a mock failure' },
            { phase: 'Phase 4: Hardening Test', desc: 'Securing servers against common attack vectors' }
        ],
        industries: [
            { title: 'Enterprise IT', desc: 'Managing internal corporate infrastructure' },
            { title: 'Hosting Providers', desc: 'Operating large-scale multi-tenant environments' },
            { title: 'Education', desc: 'Supporting campus-wide identity and lab systems' },
            { title: 'Health', desc: 'Managing high-availability patient data systems' }
        ],
        stats: [
            { metric: 99.9, suffix: '%', label: 'Target Uptime' },
            { metric: 50, suffix: '%', label: 'Manual Task Reduction' },
            { metric: 100, suffix: '%', label: 'Hands-on Lab focus' },
            { metric: 4, suffix: 'x', label: 'Recovery Speed' }
        ],
        faqs: [
            { 
                question: 'Linux or Windows?', 
                answer: 'We cover both extensively. In the modern enterprise, these operating systems almost always coexist. We focus on how to manage them side-by-side, integrating them through directory services (like LDAP and Active Directory) and using cross-platform automation tools to ensure your skills are versatile regardless of your organization\'s current stack.' 
            },
            { 
                question: 'Certification prep?', 
                answer: 'Yes, our curriculum maps very closely to the domains required for major industry certifications, including Red Hat Certified Engineer (RHCE), Microsoft Azure Administrator (AZ-104), and VMware Certified Professional (VCP). While we focus on job-ready skills first, we provide mock exams and review sessions to ensure you are well-prepared to sit for these formal certificates.' 
            },
            { 
                question: 'Prerequisites?', 
                answer: 'A basic understanding of IT support and networking (OSI model, IP addressing) is highly recommended. This is a tactical bootcamp designed for those who have some experience but want to move into more senior engineering and administration roles. If you are a complete beginner, we recommend our "IT Foundations" course first.' 
            },
            { 
                question: 'Is virtualization covered?', 
                answer: 'Absolutely. Virtualization is the backbone of the modern data center. You will get hands-on experience managing hypervisors using VMware vSphere and Microsoft Hyper-V, and we also explore the basics of hyperconverged infrastructure (HCI) to ensure you understand how compute and storage are scaling today.' 
            },
            { 
                question: 'What scripting languages?', 
                answer: 'We focus on PowerShell for Windows environments and Bash for Linux. We also include a module on Ansible for configuration management, ensuring you can manage hundreds of servers simultaneously through declarative code rather than manual, error-prone command-line entries.' 
            }
        ]
    },

    // GRC (Governance, Risk & Compliance)
    'it-governance': {
        title: 'IT Governance & Digital Governance',
        slug: 'it-governance',
        badge: 'Strategic Leadership',
        description: 'Align IT strategy with business goals and ensure that technology investments deliver value and manage risks effectively.',
        longDescription: 'Our IT Governance program focus on frameworks like COBIT and ISO 38500 to help leaders establish clear accountability and decision-making structures.\n\nGovernance is the foundation of digital success. You will learn to implement COBIT 2019 roadmaps, manage IT value with Val IT, and establish risk-based governance frameworks that ensure technology serves the business, not the other way around.\n\nInstitutional effectiveness depends on clear decision rights. This program teaches you to build high-performance governance committees, measure IT performance using balanced scorecards, and align technology strategy with organizational goals. By the end of this course, you will be prepared to lead your organization\'s digital governance journey.',
        duration: '5 Days (Instructor-Led)',
        hours: '30 Hours (Strategic)',
        audience: 'IT Directors, Board Members, GRC Managers',
        image: 'https://picsum.photos/seed/governance/800/800',
        testimonial: {
            text: 'Ebanex has provided our Board of Directors with the specific decision-making framework we needed to move beyond seeing IT as a cost center and start viewing it as a primary strategic enabler. By implementing the COBIT and ISO 38500 principles learned in this course, we have established a high-performance governance committee that has already improved our project success rate by 35% and ensured that our massive digital transformation budget is directly tied to measurable business outcomes. This is the most practical governance training I have ever attended.',
            author: 'John Kamau',
            role: 'IT Director, Regional Bank',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Dr. Elizabeth Wangari',
            role: 'Governance Consultant',
            bio: 'Dr. Wangari is a leading expert in enterprise IT governance with over 20 years of experience advising boards.',
            certs: ['CGEIT', 'CRISC', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '50+', label: 'Board Advisory' },
                { number: '1k+', label: 'Leaders' },
            ]
        },
        skills: {
            technical: [
                'COBIT 2019 implementation roadmap',
                'Balanced Scorecard for IT',
                'IT Value Management (Val IT)',
                'Risk Governance (Risk IT)',
                'Maturity model assessments',
                'Digital transformation governance'
            ],
            business: [
                'Strategic alignment of IT and business',
                'Benefits realization and ROI tracking',
                'Executive decision-making frameworks',
                'Governance of outsourced services',
                'Compliance and regulatory alignment',
                'Establishing a culture of accountability'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Maturity Assessment', desc: 'Evaluating current governance status' },
            { phase: 'Phase 2: Framework Design', desc: 'Designing a custom governance framework' },
            { phase: 'Phase 3: Case Study Analysis', desc: 'Solving real-world governance failures' },
            { phase: 'Phase 4: Implementation Plan', desc: 'Developing a 12-month governance roadmap' }
        ],
        industries: [
            { title: 'Banking', desc: 'Meeting stringent central bank governance requirements' },
            { title: 'Public Sector', desc: 'Governance for citizen-centric digital services' },
            { title: 'Energy', desc: 'Governing critical infrastructure and OT' },
            { title: 'Insurance', desc: 'Risk-based governance for financial stability' }
        ],
        stats: [
            { metric: 100, suffix: '%', label: 'Compliance Alignment' },
            { metric: 35, suffix: '%', label: 'Value Increase' },
            { metric: 50, suffix: '%', label: 'Risk Reduction' },
            { metric: 25, suffix: '%', label: 'Budget Optimization' }
        ],
        faqs: [
            { 
                question: 'Is it only for IT people?', 
                answer: 'No, this program is essential for business leaders, board members, and GRC managers who oversee or rely on IT investments. Governance is about institutional accountability and strategic alignment; therefore, it requires a shared understanding between the technical and executive branches of the organization.' 
            },
            { 
                question: 'Does it cover AI governance?', 
                answer: 'Yes, we have a dedicated, up-to-date module on governing emerging technologies such as Artificial Intelligence and Machine Learning. You will learn to implement guardrails that allow for rapid innovation while managing the significant risks associated with bias, privacy, and algorithmic transparency.' 
            },
            { 
                question: 'Is it theoretical?', 
                answer: 'Not at all. We focus on the practical implementation of major frameworks using real-world scenarios and case studies. You will not just learn what COBIT is; you will practice designing a governance roadmap for a mock organization, identifying decision-making failures, and building performance metrics that work.' 
            },
            { 
                question: 'What is COBIT?', 
                answer: 'COBIT is a globally recognized framework for the governance and management of enterprise information and technology. It provides a common language for business and IT leaders, ensuring that technology investments deliver the value the organization expects while managing risks at an acceptable level.' 
            },
            { 
                question: 'Do you provide templates?', 
                answer: 'Yes, every participant receives access to the Ebanex Governance Toolkit, which includes a comprehensive library of policy templates, assessment forms, and dashboard designs for IT performance measurement that you can immediately adapt for your organization.' 
            }
        ]
    },
    'risk-management': {
        title: 'Enterprise Risk Management',
        slug: 'risk-management',
        badge: 'Resilience Track',
        description: 'Build institutional resilience by identifying, assessing, and mitigating risks across all levels of the organization.',
        longDescription: 'This ERM program follows the ISO 31000 and COSO frameworks to help organizations integrate risk management into their overall strategy and culture.\n\nRisk is the other side of opportunity. You will learn to use sophisticated risk identification techniques, quantitative assessment models, and dynamic heatmaps to manage your organization\'s risk profile effectively.\n\nResilience is built through culture. This program teaches you to foster risk awareness throughout the organization, report effectively to the board, and implement robust business continuity plans. By the end of this course, you will be prepared to lead your organization\'s risk management strategy, ensuring that you can navigate uncertainty and achieve your organizational goals.',
        duration: '5 Days (Workshops)',
        hours: '32 Hours (Blended)',
        audience: 'Risk Officers, Internal Auditors, Senior Managers',
        image: 'https://picsum.photos/seed/erm/800/800',
        testimonial: {
            text: 'Transitioning from a "checklist" compliance mindset to a truly proactive Enterprise Risk Management culture has been the most significant strategic shift our organization has made this decade. The Ebanex ERM program gave our leadership team the specific quantitative tools to identify obscure risks in our supply chain and translate them into financial impacts that the board could understand and act upon. We have since integrated risk assessment into every major project planning session, resulting in a documented 60% reduction in major operational incidents and a much higher level of confidence in our overall institutional resilience.',
            author: 'Marcus Dubois',
            role: 'CRO, Global Logistics',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Marcus Dubois',
            role: 'ERM Specialist',
            bio: 'Marcus is a veteran CRO who has designed ERM frameworks for some of the world\'s largest logistics companies.',
            certs: ['CRISC', 'CISM', 'IRM Fellow'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '100+', label: 'Assessments' },
                { number: '15+', label: 'Board Seats' },
            ]
        },
        skills: {
            technical: [
                'Risk Identification techniques (BIA, Scenario Analysis)',
                'Quantitative and Qualitative risk assessment',
                'Developing Risk Heatmaps and Dashboards',
                'Integration with Strategic Planning',
                'Risk Appetite and Tolerance setting',
                'Treatment and Mitigation strategies'
            ],
            business: [
                'Risk Culture and Awareness',
                'Board Reporting and Communication',
                'Crisis Management and Communication',
                'Business Continuity Planning (BCP)',
                'Regulatory Compliance monitoring',
                'Opportunity-based risk taking'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Organizational Audit', desc: 'Evaluating the current risk environment' },
            { phase: 'Phase 2: Risk Workshop', desc: 'Facilitating a mock risk identification session' },
            { phase: 'Phase 3: Framework Development', desc: 'Designing an ERM policy for the organization' },
            { phase: 'Phase 4: Implementation Roadmap', desc: 'Creating a plan to embed risk into daily operations' }
        ],
        industries: [
            { title: 'Mining', desc: 'Managing operational, safety, and environmental risks' },
            { title: 'Finance', desc: 'Credit, market, and operational risk management' },
            { title: 'Energy', desc: 'Supply chain and infrastructure resilience' },
            { title: 'Government', desc: 'Managing policy and sovereign risks' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Resilience Score' },
            { metric: 60, suffix: '%', label: 'Incident Reduction' },
            { metric: 40, suffix: '%', label: 'ROI in 2 Years' },
            { metric: 100, suffix: '%', label: 'Staff Alignment' }
        ],
        faqs: [
            { 
                question: 'Which framework?', 
                answer: 'We cover both ISO 31000 and the COSO ERM Framework in depth. We highlight the strengths of each and, more importantly, teach you how to choose and customize a framework that best fits your organization\'s specific size, industry, and strategic complexity.' 
            },
            { 
                question: 'For auditors?', 
                answer: 'Yes, this program is highly beneficial for internal and external auditors. It provides a much deeper understanding of the "first and second lines of defense" within an organization, allowing auditors to provide better assurance on the risk management processes themselves rather than just looking at individual controls.' 
            },
            { 
                question: 'Templates provided?', 
                answer: 'Yes, all participants receive a comprehensive set of professional-grade risk registers, policy templates, impact assessment forms, and dashboard designs that can be immediately implemented into their existing organizational workflows.' 
            },
            { 
                question: 'What is a risk appetite?', 
                answer: 'Risk appetite is the formal statement of the amount and type of risk an organization is willing to take in order to achieve its strategic objectives. You will learn to define this for your institution, ensuring that your management team and board are perfectly aligned on what risks are acceptable and what risks require immediate mitigation.' 
            },
            { 
                question: 'Does it cover BCP?', 
                answer: 'Yes, we have a significant module dedicated to Business Continuity Planning (BCP) and Disaster Recovery. We teach you how to conduct Business Impact Analyses (BIA) and design recovery strategies that ensure your organization can maintain critical operations regardless of the crisis encountered.' 
            }
        ]
    },
    'internal-audit': {
        title: 'Internal Audit & Assurance',
        slug: 'internal-audit',
        badge: 'Assurance Track',
        description: 'Master modern internal auditing techniques to provide independent assurance and add value to organizational operations.',
        longDescription: 'Our Internal Audit program focus on the IIA standards and teaches auditors how to move from checklist-based auditing to risk-based, value-added assurance.\n\nYou will learn to design risk-based audit plans, implement sophisticated data analytics (CAATs), and provide assurance on complex internal control frameworks like COSO. We focus on both technical auditing skills and the human skills of communication and reporting.\n\nAssurance is the key to board confidence. This program teaches you to manage the internal audit activity effectively, conduct quality assurance reviews, and align your audit program with organizational risk. By the end of this course, you will be prepared to lead your organization\'s internal audit function, ensuring that it provides true strategic value.',
        duration: '5 Days (Intensive)',
        hours: '30 Hours (Practical)',
        audience: 'Internal Auditors, Finance Managers, Compliance Officers',
        image: 'https://picsum.photos/seed/audit/800/800',
        testimonial: {
            text: 'The Ebanex Internal Audit training has been a true strategic turning point for our assurance department. We used to spend our time on manual checklist-based audits that provided very little real insight to the Board. After learning the risk-based methodologies and the advanced data analytics techniques taught in this program, our audit function has become a valued partner in the organizational decision-making process. We are now able to provide deep, evidence-backed assurance on our most complex operations, and the quality of our reporting has improved our overall recommendation implementation rate by over 40%. This is the gold standard for audit professional development.',
            author: 'Chinedu Okafor',
            role: 'Head of Internal Audit, Pan-African Financial',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Dr. James Morrison',
            role: 'Assurance Lead',
            bio: 'Dr. Morrison is a CIA-certified expert with extensive experience in banking and government audit.',
            certs: ['CIA', 'CISA', 'CRMA', 'CPA'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '18+', label: 'Years Exp' },
                { number: '200+', label: 'Audits Led' },
                { number: '1k+', label: 'Auditors' },
            ]
        },
        skills: {
            technical: [
                'Risk-Based Audit Planning',
                'Internal Control Frameworks (COSO)',
                'Data Analytics for Auditors (CAATs)',
                'IT General and Application Controls',
                'Audit Documentation and Evidence',
                'Continuous Auditing and Monitoring'
            ],
            business: [
                'Audit Reporting and Communication',
                'Interviewing and Inquisitive skills',
                'Ethical Standards and Independence',
                'Value-Added Auditing',
                'Conflict Management for Auditors',
                'Quality Assurance of Audit function'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Standards Quiz', desc: 'Testing knowledge of IIA International Standards' },
            { phase: 'Phase 2: Audit Program Design', desc: 'Creating an audit program for a specific business unit' },
            { phase: 'Phase 3: Fieldwork Simulation', desc: 'Identifying control weaknesses in a mock scenario' },
            { phase: 'Phase 4: Exit Meeting Pitch', desc: 'Communicating findings and recommendations effectively' }
        ],
        industries: [
            { title: 'Banking', desc: 'Regulatory compliance and financial assurance' },
            { title: 'Public Sector', desc: 'Performance and value-for-money auditing' },
            { title: 'Oil & Gas', desc: 'Operational and joint-venture auditing' },
            { title: 'Retail', desc: 'Inventory and supply chain assurance' }
        ],
        stats: [
            { metric: 100, suffix: '%', label: 'Standards Alignment' },
            { metric: 40, suffix: '%', label: 'Audit Speedup' },
            { metric: 85, suffix: '%', label: 'Recommendation Rate' },
            { metric: 10, suffix: 'x', label: 'Value Multiplier' }
        ],
        faqs: [
            { 
                question: 'Is it prep for CIA?', 
                answer: 'While our curriculum covers many of the job practices and knowledge areas required for the CIA exam, this program is designed primarily to provide practical, high-impact skills that you can use immediately on the job. We focus more on "how to audit" in a modern enterprise environment than just passing the formal examination, although successful participants will find they have a significantly improved foundation for their CIA studies.' 
            },
            { 
                question: 'Technical audit?', 
                answer: 'Yes, we include a comprehensive module on IT auditing specifically designed for non-IT auditors. We believe that in the digital age, every internal auditor must be able to understand and provide assurance on general IT controls and application-level risks without needing to be a specialized system engineer.' 
            },
            { 
                question: 'Software used?', 
                answer: 'We demonstrate modern auditing techniques using common tools like advanced Excel functions and popular computer-assisted audit software (CAATs). You will learn how to automate data extraction, perform population-wide testing rather than just sampling, and create dynamic visualizations that make your audit reports much more impactful for the Board.' 
            },
            { 
                question: 'What is COSO?', 
                answer: 'The COSO framework is the global standard for designing, implementing, and conducting internal control. You will learn to use this framework to assess the maturity of your organization\'s controls across operations, reporting, and compliance, ensuring that your audit function is providing assurance on what truly matters.' 
            },
            { 
                question: 'Is data analytics covered?', 
                answer: 'Yes, data analytics is a core component of our curriculum. You will learn how to move beyond manual testing to perform continuous monitoring and risk-based data analysis that allows you to identify obscure findings and trends across your organization\'s entire data set.' 
            }
        ]
    },
    'compliance': {
        title: 'Regulatory Compliance & Standards',
        slug: 'compliance',
        badge: 'Compliance Track',
        description: 'Navigate the complex global and regional regulatory landscape with confidence. Build a robust compliance framework for your organization.',
        longDescription: 'Our Compliance program helps organizations move from "accidental compliance" to a structured, policy-driven approach that meets both local laws and global standards.\n\nYou will learn to implement robust compliance risk assessments, manage regulatory monitoring, and design effective policies for anti-money laundering (AML) and data protection. We cover international standards like ISO 37301 to ensure your compliance framework is world-class.\n\nEthics is the foundation of compliance. This program teaches you to foster an ethical corporate culture, manage whistleblower programs, and report effectively to the board. By the end of this course, you will be prepared to lead your organization\'s compliance journey, ensuring that you avoid major fines and build lasting institutional trust.',
        duration: '4 Days (Workshops)',
        hours: '24 Hours (Strategic)',
        audience: 'Compliance Officers, Legal Counsel, Directors',
        image: 'https://picsum.photos/seed/compliance/800/800',
        testimonial: {
            text: 'Navigating the intricate maze of regional and international regulations has always been a major obstacle to our cross-border expansion. The Ebanex Compliance program has been an absolute game-changer for our legal and risk teams. We left the workshop with a clear, ISO-aligned framework for monitoring regulatory changes and managing our AML/KYC obligations across multiple jurisdictions. The focus on building an "ethics-first" culture has not only ensured we avoid regulatory fines but has also significantly improved our brand reputation with our international partners. Ebanex makes the complex world of compliance manageable and strategic.',
            author: 'Elena Rostova',
            role: 'Head of Compliance, Tech Solutions',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000'
        },
        instructor: {
            name: 'Dr. Elizabeth Wangari',
            role: 'Regulatory Expert',
            bio: 'Dr. Wangari is a former regulator with deep expertise in African and International compliance standards.',
            certs: ['CAMS', 'CRCM', 'LLM'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '50+', label: 'Compliance Audits' },
                { number: '2k+', label: 'Officers Trained' },
            ]
        },
        skills: {
            technical: [
                'Compliance Risk Assessment',
                'Regulatory Mapping and Monitoring',
                'Anti-Money Laundering (AML/KYC)',
                'ISO 37301 Compliance Management',
                'Policy Writing and Management',
                'Reporting to Regulators'
            ],
            business: [
                'Ethics and Corporate Culture',
                'Board Engagement and Reporting',
                'Whistleblowing and Investigations',
                'Vendor and Third-Party Risk',
                'Sanctions and Trade Compliance',
                'Compliance Technology (RegTech)'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Regulatory Scan', desc: 'Identifying applicable laws for the organization' },
            { phase: 'Phase 2: Gap Analysis', desc: 'Measuring current state against target standards' },
            { phase: 'Phase 3: Policy Workshop', desc: 'Drafting a core compliance policy' },
            { phase: 'Phase 4: Audit Simulation', desc: 'Preparing for a mock regulatory inspection' }
        ],
        industries: [
            { title: 'Telecom', desc: 'Data protection and licensing compliance' },
            { title: 'Finance', desc: 'AML/CFT and prudential regulations' },
            { title: 'Pharma', desc: 'Safety and ethical standards' },
            { title: 'Logistics', desc: 'Customs and trade regulations' }
        ],
        stats: [
            { metric: 100, suffix: '%', label: 'Regulatory Readiness' },
            { metric: 0, suffix: '', label: 'Major Fines' },
            { metric: 80, suffix: '%', label: 'Policy Coverage' },
            { metric: 3, suffix: 'x', label: 'Confidence Gain' }
        ],
        faqs: [
            { 
                question: 'Which regions?', 
                answer: 'We focus on a comprehensive view that includes major African regional laws (like NDPR and POPIA) as well as the global "gold standards" such as the GDPR and FATF recommendations. This ensures your organization is prepared for the specific legal requirements of the continent while remaining fully compatible with international trade and banking norms.' 
            },
            { 
                question: 'Legal background?', 
                answer: 'While a basic understanding of organizational law is helpful, it is certainly not required. We have designed our curriculum to translate complex "legalese" into actionable business workflows and policies that any management team can understand and implement effectively. Our focus is on the practical application of standards, not just the theory of law.' 
            },
            { 
                question: 'Is AML covered?', 
                answer: 'Yes, we have a significant, high-impact module dedicated entirely to Anti-Money Laundering (AML), Counter-Terrorist Financing (CFT), and robust KYC/KYB procedures. You will learn the latest international standards and how to implement risk-based screening and monitoring systems that satisfy the most stringent central bank requirements.' 
            },
            { 
                question: 'What is ISO 37301?', 
                answer: 'ISO 37301 is the international standard for compliance management systems. It provides a formal framework for establishing, developing, implementing, evaluating, maintaining, and improving an effective compliance culture within an organization. We use this standard as the pedagogical spine of our program.' 
            },
            { 
                question: 'Do you cover RegTech?', 
                answer: 'Yes, we explore the latest technological solutions for automating regulatory monitoring, screening, and reporting. You will learn how to select and implement "RegTech" tools that can significantly reduce the manual workload of your compliance department while improving overall data accuracy and reporting speed.' 
            }
        ]
    },

    // LEADERSHIP & PROFESSIONAL DEVELOPMENT
    'leadership': {
        title: 'Leadership & Management Skills',
        slug: 'leadership',
        badge: 'Executive Development',
        description: 'Develop the essential leadership and management competencies required to lead teams effectively in a complex and rapidly changing digital environment.',
        longDescription: 'Ebanex\'s Leadership program is designed for current and aspiring leaders who want to move beyond management to truly inspire and transform their teams.\n\nYou will learn to lead through digital transformation, manage high-performance cultures, and foster inclusive and diverse environments. We cover advanced strategic planning, agile leadership methodologies, and the emotional intelligence required for visionary leadership.\n\nInstitutional effectiveness depends on the quality of leadership. This program teaches you to influence stakeholders, handle complex crisis management scenarios, and sustain peak performance across your department. By the end of this course, you will be prepared to lead your organization into the future, ensuring that you can navigate complexity and drive lasting impact.',
        duration: '4 Days (Workshops)',
        hours: '24 Hours (Interactive)',
        audience: 'Managers, Team Leads, High-Potentials',
        image: 'https://picsum.photos/seed/leadership/800/800',
        testimonial: {
            text: 'The Ebanex Leadership Labs have been the most profound developmental experience of my career. Instead of standard "management theory," we were pushed into high-stakes simulations that challenged our personal leadership styles and forced us to confront our cognitive biases. I learned how to build a culture of psychological safety where my team feels empowered to innovate and take risks, which has already led to a measurable 40% increase in our unit\'s overall productivity. This program hasn\'t just made me a better manager; it has equipped me with the emotional intelligence and strategic vision to lead through the profound complexities of our current digital landscape.',
            author: 'Fatuma Abdi',
            role: 'Operations Manager, Global Logistics',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000'
        },
        instructor: {
            name: 'Michael Omondi',
            role: 'Leadership Coach',
            bio: 'Michael is a certified executive coach who has worked with leaders across the public and private sectors for 15 years.',
            certs: ['ICF PCC', 'MBA', 'PMP'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '200+', label: 'Coaching Hours' },
                { number: '3k+', label: 'Leaders' },
            ]
        },
        skills: {
            technical: [
                'Strategic planning and execution',
                'Performance management systems',
                'Conflict resolution techniques',
                'Agile leadership methodologies',
                'Digital workplace management',
                'Change management frameworks'
            ],
            business: [
                'Emotional intelligence and self-awareness',
                'Effective communication and influence',
                'Leading through digital transformation',
                'Building high-performance cultures',
                'Inclusive leadership and diversity',
                'Crisis leadership and resilience'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: 360 Degree Assessment', desc: 'Personal leadership style evaluation' },
            { phase: 'Phase 2: Role Play Scenarios', desc: 'Practicing difficult conversations and coaching' },
            { phase: 'Phase 3: Strategy Simulation', desc: 'Leading a team through a mock organizational crisis' },
            { phase: 'Phase 4: Action Learning Plan', desc: 'Developing a personal growth and team development plan' }
        ],
        industries: [
            { title: 'Service Sector', desc: 'Leading customer-centric teams' },
            { title: 'Manufacturing', desc: 'Management for operational excellence' },
            { title: 'Technology', desc: 'Leading creative and technical teams' },
            { title: 'Non-Profit', desc: 'Values-based leadership for impact' }
        ],
        stats: [
            { metric: 85, suffix: '%', label: 'Team Engagement' },
            { metric: 40, suffix: '%', label: 'Productivity Increase' },
            { metric: 95, suffix: '%', label: 'Retention Rate' },
            { metric: 100, suffix: '%', label: 'Confidence Gain' }
        ],
        faqs: [
            { 
                question: 'Is it for new managers?', 
                answer: 'Yes, we have developed specific, tailored streams for both first-time managers needing foundational skills and experienced executives looking for advanced visionary leadership techniques. During the first phase, we group participants according to their current leadership level to ensure the peer learning and case studies are highly relevant to their actual daily challenges.' 
            },
            { 
                question: 'Is coaching included?', 
                answer: 'Absolutely. We believe that leadership growth requires individual attention. The program includes two formal one-on-one executive coaching sessions with our ICF-certified faculty following the workshops. This allows you to apply the frameworks to your specific organizational context and receive direct, personalized feedback on your progress.' 
            },
            { 
                question: 'Group discounts?', 
                answer: 'Yes, we offer competitive institutional rates for organizations sending five or more leaders to the program. We also provide customized versions of this course that can be delivered in-house, focusing exclusively on your organization\'s unique leadership competencies and cultural goals.' 
            },
            { 
                question: 'What is 360 feedback?', 
                answer: 'A 360-degree assessment is a comprehensive performance appraisal method that gathers confidential feedback from your managers, peers, and direct reports. This provides you with an unfiltered view of your leadership impact and serves as the primary data point for creating your personalized action learning plan during the bootcamp.' 
            },
            { 
                question: 'Is it purely theoretical?', 
                answer: 'No, this is a highly experiential and interactive program. Over 50% of the workshop time is dedicated to role-playing difficult conversations, practicing coaching techniques, and participating in full-scale strategy simulations where you must lead your team through simulated organizational crises under pressure.' 
            }
        ]
    },
    'strategic-thinking': {
        title: 'Strategic Thinking & Decision Making',
        slug: 'strategic-thinking',
        badge: 'Executive Track',
        description: 'Enhance your ability to think critically, anticipate market shifts, and make high-stakes decisions that drive institutional growth.',
        longDescription: 'This program is designed for executives who need to move beyond operational excellence to truly visionary leadership. We cover frameworks for complexity, game theory, and long-term strategic planning.\n\nYou will learn to use scenario planning and forecasting to anticipate future shifts, apply game theory to business dilemmas, and develop "blue ocean" strategies that create new markets. We focus on both technical decision models and the human cognitive biases that can cloud judgment.\n\nInstitutional success is built on clear vision. This program teaches you to influence stakeholders, align diverse interests, and lead during periods of disruptive change. By the end of this executive retreat, you will be prepared to lead your organization\'s long-term strategy, ensuring lasting competitive advantage.',
        duration: '3 Days (Executive Retreat)',
        hours: '20 Hours (High-Level)',
        audience: 'C-Suite, Directors, Senior Strategists',
        image: 'https://picsum.photos/seed/strategy/800/800',
        testimonial: {
            text: 'The Ebanex Strategic Thinking retreat was a profound catalyst for our five-year planning cycle. As a leadership team, we were stuck in tactical, year-over-year thinking that ignored the massive disruptive shifts happening in our global market. The scenario planning and wargaming exercises forced us to confront uncomfortable "what-if" futures and fundamentally rethink our value proposition. We left with not just a new strategic plan, but a completely new way of making high-stakes decisions based on quantitative models rather than just intuition. This program has given us the strategic clarity and institutional confidence to make aggressive market moves that were previously seen as too risky.',
            author: 'Marcus Dubois',
            role: 'Managing Director, Regional Logistics',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Robert Mensah',
            role: 'Strategy Consultant',
            bio: 'Robert has advised dozens of boards on strategic turnarounds and market entry strategies across Africa.',
            certs: ['MBA', 'PhD Strategy', 'CMC'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '100+', label: 'Boards Advised' },
                { number: '15+', label: 'Books Authored' },
            ]
        },
        skills: {
            technical: [
                'Scenario Planning and Forecasting',
                'Game Theory in Business',
                'Competitive Intelligence gathering',
                'Blue Ocean Strategy formulation',
                'Risk-based Decision Models',
                'Portfolio Management strategy'
            ],
            business: [
                'Cognitive Bias identification',
                'Complex Problem Solving',
                'Stakeholder influence and alignment',
                'Visionary Communication',
                'Crisis Management leadership',
                'Strategic ROI analysis'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Strategic Audit', desc: 'Analysis of current organizational strategy' },
            { phase: 'Phase 2: Wargaming', desc: 'Simulated competition against a mock market rival' },
            { phase: 'Phase 3: Decision Lab', desc: 'Solving high-stakes dilemmas under time pressure' },
            { phase: 'Phase 4: Board Pitch', desc: 'Presenting a 5-year vision to a mock board' }
        ],
        industries: [
            { title: 'Private Equity', desc: 'Strategic due diligence and asset growth' },
            { title: 'Tech Giants', desc: 'Leading in disruptive and fast-moving markets' },
            { title: 'Government', desc: 'National policy development and strategic planning' },
            { title: 'Finance', desc: 'Navigating global economic shifts' }
        ],
        stats: [
            { metric: 100, suffix: '%', label: 'Board Readiness' },
            { metric: 50, suffix: '%', label: 'Faster Decisioning' },
            { metric: 3, suffix: 'x', label: 'Innovation Output' },
            { metric: 90, suffix: '%', label: 'Strategic Clarity' }
        ],
        faqs: [
            { 
                question: 'Is it for managers?', 
                answer: 'This program is specifically designed for those responsible for the overall strategic direction of a functional unit or entire organization. While tactical managers will find the decision models useful, the curriculum is most impactful for C-suite leaders and Directors who must navigate long-term complexity and multi-year planning horizons.' 
            },
            { 
                question: 'Data science involved?', 
                answer: 'We cover how to use data and analytics to inform strategic choices, but we do not delve into technical data science itself. Our goal is to train executives on how to ask the right questions of their data teams and how to interpret complex forecasts to make better, risk-informed decisions at the highest level.' 
            },
            { 
                question: 'Retreat location?', 
                answer: 'We offer these programs in premium, distraction-free environments across the region. We believe that strategic thinking requires "unplugging" from daily tactical operations. These locations are carefully selected to provide the space and luxury needed to foster deep reflection, creative problem solving, and effective leadership bonding.' 
            },
            { 
                question: 'What is Blue Ocean Strategy?', 
                answer: 'Blue Ocean Strategy is a strategic framework that focuses on creating entirely new, uncontested market spaces rather than competing in existing, crowded "red oceans." You will learn to use "value innovation" to create a leap in value for your customers while simultaneously lowering costs for your organization.' 
            },
            { 
                question: 'Is there individual feedback?', 
                answer: 'Yes, every participant receives a personalized "Strategic Thinking Profile" review. We use proprietary diagnostic tools to help you understand your natural decision-making style, your risk tolerance, and any cognitive biases that may be impacting your professional judgment.' 
            }
        ]
    },
    'communication': {
        title: 'Communication & Workplace Effectiveness',
        slug: 'communication',
        badge: 'Core Competency',
        description: 'Master the art of high-impact communication, emotional intelligence, and interpersonal skills to drive productivity and collaboration.',
        longDescription: 'Communication is the lifeblood of any organization. This program focuses on developing the "soft" skills that yield "hard" results in professional environments.\n\nYou will master advanced presentation skills, professional business writing, and the art of influencing stakeholders. We cover emotional intelligence (EQ) foundations, conflict resolution techniques, and digital communication etiquette for the modern workplace.\n\nCollaboration is built on understanding. This program teaches you to listen actively, negotiate effectively, and manage cross-cultural communications with ease. By the end of this workshop series, you will be a more confident, persuasive, and effective professional, driving productivity across your team.',
        duration: '3 Days (Interative)',
        hours: '18 Hours (Workshops)',
        audience: 'All Professionals, Client-facing Teams, Managers',
        image: 'https://picsum.photos/seed/comm/800/800',
        testimonial: {
            text: 'The Ebanex Communication workshop has completely transformed how our technical consultants engage with our high-value clients. Previously, our experts struggled to translate complex technical jargon into clear, value-driven business language, which often slowed down our sales and delivery cycles. After mastering the presentation and persuasion techniques taught by Michael, we\'ve seen a remarkable increase in our client satisfaction scores and a 30% uplift in our project proposal acceptance rate. This course bridged the critical gap between our technical expertise and our ability to communicate it with impact and empathy.',
            author: 'Aisha Keita',
            role: 'Lead Consultant, Tech Solutions',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Michael Omondi',
            role: 'Behavioral Expert',
            bio: 'Michael is a communication specialist with a background in psychology and 15 years of corporate training experience.',
            certs: ['CMC', 'EQ-i 2.0 Certified', 'NLP Practitioner'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '5k+', label: 'Professionals' },
                { number: '100+', label: 'Workshops' },
            ]
        },
        skills: {
            technical: [
                'Advanced Presentation Skills',
                'Professional Business Writing',
                'Non-verbal communication mastery',
                'Digital communication etiquette',
                'Public Speaking and Rhetoric',
                'Interpreting Emotional Intelligence metrics'
            ],
            business: [
                'Conflict Resolution and Mediation',
                'Negotiation and Persuasion',
                'Active Listening and Empathy',
                'Influencing Stakeholders',
                'Cross-cultural communication',
                'Feedback loops and Coaching'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Communication Audit', desc: 'Personal assessment of current communication style' },
            { phase: 'Phase 2: Recording & Review', desc: 'Analyzing personal speaking and presentation habits' },
            { phase: 'Phase 3: Roleplay Simulation', desc: 'Handling difficult workplace conversations' },
            { phase: 'Phase 4: Capstone Presentation', desc: 'Delivering a high-impact professional pitch' }
        ],
        industries: [
            { title: 'Consulting', desc: 'Client engagement and project delivery' },
            { title: 'Sales & Marketing', desc: 'Influence and persuasion in the market' },
            { title: 'Management', desc: 'Internal alignment and team motivation' },
            { title: 'Human Resources', desc: 'Employee relations and mediation' }
        ],
        stats: [
            { metric: 80, suffix: '%', label: 'Collaboration Uplift' },
            { metric: 50, suffix: '%', label: 'Conflict Reduction' },
            { metric: 100, suffix: '%', label: 'Engagement Rate' },
            { metric: 4, suffix: 'x', label: 'Confidence Gain' }
        ],
        faqs: [
            { 
                question: 'Is it for introverts?', 
                answer: 'Absolutely. We provide specific, proven techniques that help individuals of all personality types communicate authentically and effectively. We focus on building your personal "presence" and giving you the structural tools to organize your thoughts and speak with confidence, without needing to change your core personality.' 
            },
            { 
                question: 'Covers email writing?', 
                answer: 'Yes, we have a significant, highly practical module dedicated to written professional communication. You will learn to draft high-impact emails, concise reports, and persuasive proposals that get results while maintaining a perfectly professional institutional tone across all digital channels.' 
            },
            { 
                question: 'Group exercises?', 
                answer: 'The course is over 80% interactive group work, practical drills, and real-time feedback. We believe that communication is a "performing art" that can only be mastered through practice. You will participate in multiple simulations that reflect the high-stakes conversations you face in your specific industry.' 
            },
            { 
                question: 'What is EQ?', 
                answer: 'Emotional Intelligence (EQ) is the critical ability to recognize, understand, and manage your own emotions, as well as the emotions of those around you. You will learn to use EQ to navigate workplace politics, handle difficult colleagues, and build much more resilient professional relationships.' 
            },
            { 
                question: 'Do you use video?', 
                answer: 'Yes, we utilize professional video recording and playback for all presentation modules. Seeing yourself "in action" and receiving structured faculty feedback is the most effective way to identify and correct distracting habits while reinforcing your natural communication strengths.' 
            }
        ]
    },
    'team-development': {
        title: 'Team Development & Collaboration',
        slug: 'team-development',
        badge: 'High Performance',
        description: 'Build cohesive, high-performing teams that collaborate effectively across departments and geographies to achieve organizational goals.',
        longDescription: 'High performance is not an accident; it is the result of intentional team dynamics and structured collaboration. This program helps teams move through the stages of development to peak performance.\n\nYou will learn to build trust and psychological safety, implement agile team rituals, and manage virtual teams across geographies. We cover the Belbin team roles, OKR setting, and the design of effective feedback loops.\n\nInstitutional success depends on unity. This program teaches teams to solve complex problems collectively, make faster decisions, and align departmental interests with organizational goals. By the end of this team intensive, you will have a more cohesive, accountable, and high-quality functional unit.',
        duration: '3 Days (Team Intensive)',
        hours: '20 Hours (Experiential)',
        audience: 'Departmental Teams, Project Teams, Unit Leads',
        image: 'https://picsum.photos/seed/team/800/800',
        testimonial: {
            text: 'The Ebanex Team Development program has completely dismantled the departmental silos that were choking our operational efficiency. Before this intensive, our different teams were working in isolation, often with conflicting goals and a lack of mutual trust. Through the Belbin mapping and the complex collaboration drills, we developed a shared "Team Charter" and a unified language for solving problems. We saw an immediate 40% reduction in our project delivery times and a profound improvement in the quality of our cross-functional work. Our team is now more cohesive, more accountable, and significantly more empowered than ever before.',
            author: 'Elena Rostova',
            role: 'Operations Director, Tech Solutions',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000'
        },
        instructor: {
            name: 'Michael Omondi',
            role: 'Team Facilitator',
            bio: 'Michael has facilitated team-building and performance workshops for some of Africa\'s largest enterprises.',
            certs: ['Belbin Team Roles', 'Team Coaching International', 'MBA'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '300+', label: 'Teams Led' },
                { number: '10k+', label: 'Members' },
            ]
        },
        skills: {
            technical: [
                'Collaboration Tool mastery (Slack, Teams, etc.)',
                'Agile team rituals and frameworks',
                'Defining Team KPIs and OKRs',
                'Mapping Team Roles and Dynamics',
                'Designing Feedback Systems',
                'Virtual team management protocols'
            ],
            business: [
                'Trust-building and Psychological Safety',
                'Accountability and Ownership culture',
                'Cross-functional alignment',
                'Collective Problem Solving',
                'Team Decision-making models',
                'Sustaining High Performance'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Team Diagnostic', desc: 'Evaluating current team performance and culture' },
            { phase: 'Phase 2: Dynamic Mapping', desc: 'Understanding individual roles and strengths' },
            { phase: 'Phase 3: Collaboration Drill', desc: 'Solving a complex business challenge as a unit' },
            { phase: 'Phase 4: Charter Development', desc: 'Creating a formal team agreement for future work' }
        ],
        industries: [
            { title: 'Software Dev', desc: 'Building efficient agile squads' },
            { title: 'Project Management', desc: 'Coordinating complex delivery teams' },
            { title: 'Operations', desc: 'Improving cross-departmental flow' },
            { title: 'Executive Suites', desc: 'Aligning leadership teams' }
        ],
        stats: [
            { metric: 90, suffix: '%', label: 'Trust Increase' },
            { metric: 40, suffix: '%', label: 'Project Speedup' },
            { metric: 100, suffix: '%', label: 'Goal Alignment' },
            { metric: 2, suffix: 'x', label: 'Output Quality' }
        ],
        faqs: [
            { 
                question: 'Entire team required?', 
                answer: 'Ideally, yes. This program is most effective when an entire functional unit or project team attends together. Building trust and psychological safety is a collective process that requires the participation of all members, including the team lead, to create lasting behavioral change and unified working protocols.' 
            },
            { 
                question: 'Indoor or outdoor?', 
                answer: 'We offer both options depending on your organizational goals. We utilize experiential indoor learning for complex problem-solving modules, and we can incorporate high-impact outdoor components that focus on building grit, resilience, and deep interpersonal trust through physical challenges.' 
            },
            { 
                question: 'Long-term support?', 
                answer: 'Yes, we don\'t just leave you after the workshop. We offer structured follow-up "pulse" sessions every quarter to review your Team Charter, measure your progress against your new collaboration KPIs, and ensure that the high-performance habits you developed during the intensive remain permanent.' 
            },
            { 
                question: 'What is Belbin?', 
                answer: 'Belbin Team Roles is a globally recognized methodology for identifying and managing individual strengths within a team. You will learn to recognize the 9 key team roles (such as the "Shaper" or the "Monitor Evaluator") and how to balance these roles to ensure your team is diverse, well-rounded, and effective.' 
            },
            { 
                question: 'Is it for large groups?', 
                answer: 'We can facilitate groups ranging from 5 to 50 members in this intensive format. For larger departmental sessions, we bring in multiple senior facilitators to ensure that each small group receives the individual attention and guidance needed to make the experiential drills meaningful.' 
            }
        ]
    },

    // CERTIFICATION PREP
    'cisa': {
        title: 'CISA Certification Preparation',
        slug: 'cisa',
        badge: 'Certification Prep',
        description: 'Prepare for the Certified Information Systems Auditor (CISA) exam with our comprehensive bootcamp led by industry experts.',
        longDescription: 'Our CISA prep program is world-renowned for its high pass rate. We cover the five domains of the CISA job practice in detail, with a focus on practical application and exam strategy.\n\nYou will master the Information System Auditing Process, Governance and Management of IT, and the protection of information assets. We utilize a massive database of over 2000 practice questions and conduct full-length mock examinations to ensure you are ready for the ISACA standard.\n\nInstitutional effectiveness relies on robust auditing. This program ensures you have the technical knowledge and the examination strategy required to achieve the gold standard in IT auditing, significantly boosting your career and your organization\'s assurance capability.',
        duration: '5 Days (Bootcamp)',
        hours: '40 Hours (Intensive)',
        audience: 'IT Auditors, GRC Professionals, Consultants',
        image: 'https://picsum.photos/seed/cisa/800/800',
        testimonial: {
            text: 'I had attempted the CISA exam twice before enrolling in the Ebanex bootcamp, and both times I was overwhelmed by the sheer breadth of the domains. The Ebanex instructors provided the specific "exam-mindset" and structural clarity I was missing. Their focus on the ISACA job practice and the intensive, timed mock examinations gave me the confidence to handle the most complex scenario-based questions. I passed with a score well above the requirement on my first try after the course. The Ebanex question database is, without a doubt, the most accurate representation of the real exam I have seen.',
            author: 'Grace Mutua',
            role: 'IT Auditor, Central Bank',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Dr. James Morrison',
            role: 'CISA/CISM Lead',
            bio: 'Dr. Morrison has helped over 1,000 professionals achieve their ISACA certifications.',
            certs: ['CISA', 'CISM', 'CGEIT', 'CRISC'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '95%', label: 'Pass Rate' },
                { number: '1k+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Domain 1: Information System Auditing Process',
                'Domain 2: Governance and Management of IT',
                'Domain 3: IS Acquisition, Development and Implementation',
                'Domain 4: IS Operations and Business Resilience',
                'Domain 5: Protection of Information Assets',
                'Exam strategy and question analysis'
            ],
            business: [
                'Ethics and professional standards',
                'Audit reporting and communication',
                'Risk-based auditing approaches',
                'Continuous auditing techniques',
                'Quality assurance of the audit function',
                'Legal and regulatory considerations'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Baseline Mock Exam', desc: 'Evaluating initial knowledge level' },
            { phase: 'Phase 2: Domain Quizzes', desc: 'Testing mastery of each of the 5 domains' },
            { phase: 'Phase 3: Final Mock Exam', desc: '4-hour simulated CISA examination' },
            { phase: 'Phase 4: Post-Exam Review', desc: 'Detailed analysis of incorrect answers and weak areas' }
        ],
        industries: [
            { title: 'External Audit', desc: 'Preparation for Big 4 and mid-tier audit firms' },
            { title: 'Internal Audit', desc: 'Building in-house IT audit capability' },
            { title: 'Compliance', desc: 'Auditing for regulatory compliance' },
            { title: 'Risk Management', desc: 'Bridging audit and risk functions' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Pass Rate' },
            { metric: 2000, suffix: '+', label: 'Practice Questions' },
            { metric: 100, suffix: '%', label: 'Job Practice Focus' },
            { metric: 10, suffix: 'x', label: 'Career ROI' }
        ],
        faqs: [
            { 
                question: 'Is the exam included?', 
                answer: 'No, exam registration and the voucher cost are separate from the bootcamp fee and must be handled directly through ISACA. However, we provide step-by-step guidance on the registration process, the experience verification requirements, and the best times to schedule your test for maximum success.' 
            },
            { 
                question: 'Retake policy?', 
                answer: 'We are so confident in our methodology that if you do not pass your CISA exam within 60 days of completing our bootcamp, you are invited to attend our next scheduled bootcamp for free (conditions apply). We are committed to your certification success and will provide additional support to help you master your weak areas.' 
            },
            { 
                question: 'Is it online?', 
                answer: 'We offer both in-person intensives at our premium training centers and live virtual sessions that utilize high-definition video and interactive polling. Regardless of the format, you will have the same expert faculty and full access to our comprehensive question database and study materials.' 
            },
            { 
                question: 'How long are the exams?', 
                answer: 'The CISA examination is a rigorous 4-hour session consisting of 150 multiple-choice questions. We have designed our mock exams to simulate this exact timing and pressure, helping you build the mental endurance and time-management skills required to succeed.' 
            },
            { 
                question: 'What is the pass score?', 
                answer: 'ISACA uses a scaled score system ranging from 200 to 800. A score of 450 or higher is required to pass. Our diagnostic quizzes and mock tests are calibrated to help you accurately predict your performance and ensure you are consistently scoring above this threshold before you sit for the real thing.' 
            }
        ]
    },
    'cism': {
        title: 'CISM Certification Preparation',
        slug: 'cism',
        badge: 'Management Prep',
        description: 'Certified Information Security Manager (CISM) prep. Transition from technical security to strategic security management.',
        longDescription: 'The CISM certification is for those who manage, design, oversee and assess an enterprise\'s information security.\n\nThis program focuses on Information Security Governance, Risk Management, and Program Development. You will learn to align your security program with organizational goals, manage resources effectively, and design metrics that demonstrate the value of your security investments.\n\nManagement is a strategic discipline. This bootcamp prepares you for the CISM examination with high-fidelity simulations and intensive domain reviews, ensuring that you achieve the professional recognition required to lead an organization\'s security function.',
        duration: '5 Days (Bootcamp)',
        hours: '40 Hours (Strategic)',
        audience: 'Security Managers, IT Consultants, GRC Leads',
        image: 'https://picsum.photos/seed/cism/800/800',
        testimonial: {
            text: 'Transitioning from a purely technical security role to a strategic management position was a significant challenge for me. The Ebanex CISM bootcamp was the perfect bridge. Dr. Morrison and the faculty provided the precise management-level mindset required by ISACA, focusing on strategic alignment and risk-based governance rather than just technical implementation. The intensive review of Information Security Governance and Incident Management allowed me to pass my CISM on the first attempt and, more importantly, gave me the tools to design a multi-year security program for my organization that actually delivers business value.',
            author: 'Aisha Keita',
            role: 'Security Manager, Regional Telecom',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Dr. James Morrison',
            role: 'Lead Instructor',
            bio: 'Expert instructor for CISM with focus on management and strategic alignment.',
            certs: ['CISM', 'CISSP', 'CGEIT'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '15+', label: 'Years Exp' },
                { number: '92%', label: 'Pass Rate' },
                { number: '800+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Domain 1: Information Security Governance',
                'Domain 2: Information Security Risk Management',
                'Domain 3: Information Security Program Development',
                'Domain 4: Information Security Incident Management',
                'Resource Management',
                'Metric Design and Reporting'
            ],
            business: [
                'Strategic Alignment',
                'Value Delivery',
                'Resource Optimization',
                'Performance Measurement',
                'Integration of Governance',
                'Policy Development'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Baseline Test', desc: 'Assessing management mindset' },
            { phase: 'Phase 2: Domain Exams', desc: 'Focused testing on each management domain' },
            { phase: 'Phase 3: Simulation', desc: 'Simulated 4-hour CISM examination' },
            { phase: 'Phase 4: Gaps Analysis', desc: 'Final review of weak concepts' }
        ],
        industries: [
            { title: 'Finance', desc: 'Managing security for financial stability' },
            { title: 'Tech', desc: 'Overseeing product security governance' },
            { title: 'Health', desc: 'Strategic data protection management' },
            { title: 'Gov', desc: 'National security program oversight' }
        ],
        stats: [
            { metric: 92, suffix: '%', label: 'Pass Rate' },
            { metric: 1500, suffix: '+', label: 'Practice Items' },
            { metric: 100, suffix: '%', label: 'Job Practice' },
            { metric: 15, suffix: '%', label: 'Salary Uplift' }
        ],
        faqs: [
            { 
                question: 'CISA vs CISM?', 
                answer: 'CISA is specifically for those who audit, control, and monitor an organization\'s information technology and business systems. CISM is for those who manage, design, oversee and assess an enterprise\'s information security program. If your career goal is in leadership and program development, CISM is the correct path.' 
            },
            { 
                question: 'Prerequisites?', 
                answer: 'ISACA requires a minimum of five years of professional information security management work experience within the ten years prior to application. Three of those five years must be in information security management. We provide a comprehensive review of your eligibility and assist with the application process.' 
            },
            { 
                question: 'Hybrid model?', 
                answer: 'Yes, we offer flexible hybrid options that combine live, instructor-led strategic workshops with self-paced domain reviews and access to our massive question database, allowing you to prepare for your certification without taking extensive time away from your leadership duties.' 
            },
            { 
                question: 'How is it different from CISSP?', 
                answer: 'The CISSP is a broader "gold standard" that covers eight domains of security across the entire IT spectrum. The CISM is a more focused, management-level certification specifically for those who lead and govern information security programs. Many senior professionals find that holding both certifications provides the ultimate competitive advantage.' 
            },
            { 
                question: 'Are materials provided?', 
                answer: 'Yes, every participant receives the most current ISACA CISM Review Manual, a one-year subscription to our proprietary Ebanex online question database, and our custom-developed "Management Mindset" study guides that are exclusive to Ebanex students.' 
            }
        ]
    },
    'cissp': {
        title: 'CISSP Certification Preparation',
        slug: 'cissp',
        badge: 'Elite Security',
        description: 'Achieve the gold standard in cybersecurity certification. Our CISSP bootcamp covers all 8 domains of the Common Body of Knowledge (CBK).',
        longDescription: 'The CISSP certification is the most globally recognized standard of achievement in the industry. This program is an intensive review of information security concepts and industry best practices.\n\nWe cover all 8 domains of the (ISC)2 CBK, from asset security to software development security. Our instructors use a proven methodology of domain deep-dives followed by intensive practice using simulated Computerized Adaptive Testing (CAT) formats.\n\nElite security requires deep knowledge. This bootcamp ensures you have the technical breadth and the management depth required to achieve the gold standard, opening doors to the most senior positions in the global cybersecurity industry.',
        duration: '6 Days (Bootcamp)',
        hours: '48 Hours (High Intensity)',
        audience: 'Security Managers, Architects, Consultants',
        image: 'https://picsum.photos/seed/cissp/800/800',
        testimonial: {
            text: 'Ebanex\'s CISSP preparation is without a doubt the most rigorous and rewarding professional development experience I have ever had. The sheer breadth of the eight domains is daunting, but the instructors at Ebanex provided the structural clarity and the deep conceptual understanding required to master the Common Body of Knowledge. The simulated CAT exams were incredibly accurate, helping me build the mental endurance needed for the three-hour real test. I walked into the examination room with complete confidence and passed on my first attempt. This certification has already opened doors to global leadership opportunities that were previously out of reach.',
            author: 'Samuel Okafor',
            role: 'CISO, Fintech Africa',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000'
        },
        instructor: {
            name: 'Dr. James Morrison',
            role: 'Lead Instructor',
            bio: 'Dr. Morrison is a world-renowned security expert with multiple gold-standard certifications.',
            certs: ['CISSP', 'ISSAP', 'CCSP', 'CISM'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '90%', label: 'Pass Rate' },
                { number: '2k+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Security and Risk Management',
                'Asset Security',
                'Security Architecture and Engineering',
                'Communication and Network Security',
                'Identity and Access Management (IAM)',
                'Security Assessment and Testing',
                'Security Operations',
                'Software Development Security'
            ],
            business: [
                'Strategic security management',
                'Legal, regulatory, and compliance',
                'Business continuity and disaster recovery',
                'Professional ethics (ISC)2',
                'Security auditing and governance',
                'Organizational risk leadership'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Knowledge Assessment', desc: 'Evaluating base CBK knowledge' },
            { phase: 'Phase 2: Domain Deep Dives', desc: 'Intensive review and testing of all 8 domains' },
            { phase: 'Phase 3: CAT Mock Exam', desc: 'Simulated Adaptive Testing (CAT) mock examination' },
            { phase: 'Phase 4: Exam Strategy Review', desc: 'Fine-tuning response strategy and time management' }
        ],
        industries: [
            { title: 'Global Enterprise', desc: 'Securing multi-national organizations' },
            { title: 'Government & Defense', desc: 'Meeting national security standards' },
            { title: 'Financial Services', desc: 'Securing critical global payment systems' },
            { title: 'Critical Infrastructure', desc: 'Protecting essential national assets' }
        ],
        stats: [
            { metric: 90, suffix: '%', label: 'Pass Rate' },
            { metric: 3000, suffix: '+', label: 'Domain Questions' },
            { metric: 100, suffix: '%', label: 'CBK Alignment' },
            { metric: 25, suffix: '%', label: 'Salary Uplift' }
        ],
        faqs: [
            { 
                question: 'What are the prerequisites?', 
                answer: 'Candidates must have a minimum of five years of cumulative paid work experience in two or more of the eight domains of the CISSP CBK. Earning a four-year college degree or a regional equivalent can satisfy one year of the required experience. If you lack the experience, you can still take the exam and become an Associate of (ISC)2 while you work toward the full certification.' 
            },
            { 
                question: 'Is it the CAT format?', 
                answer: 'Yes, our mock exams specifically simulate the Computerized Adaptive Testing (CAT) format used for English-language CISSP exams. This adaptive format adjusts the difficulty of the next question based on your previous answers, ensuring that the test is a precise measurement of your knowledge across all domains.' 
            },
            { 
                question: 'Exam voucher?', 
                answer: 'The exam voucher is separate from the bootcamp registration. We assist you with the (ISC)2 registration process and provide guidance on the most strategic time to schedule your formal test based on your performance in our high-fidelity mock examinations.' 
            },
            { 
                question: 'Can I get an endorsement?', 
                answer: 'Yes, successful candidates must be endorsed by another (ISC)2 certified professional in good standing. Our faculty and the Ebanex professional network are available to assist our successful students with this critical final step in the certification process.' 
            },
            { 
                question: 'What is the passing score?', 
                answer: 'You must achieve a minimum scaled score of 700 out of 1000. Our diagnostic tools are designed to ensure you are consistently performing at this elite level before we recommend you sit for the formal, high-stakes examination.' 
            }
        ]
    },
    'ceh': {
        title: 'CEH Certification Preparation',
        slug: 'ceh',
        badge: 'Hacking Prep',
        description: 'Certified Ethical Hacker (CEH) prep. Learn to think like a hacker to better defend your organization.',
        longDescription: 'The CEH program is the most comprehensive ethical hacking course on the globe to help information security professionals grasp the fundamentals of ethical hacking.\n\nYou will master footprinting, enumeration, and system hacking using over 3000 hacking tools. Our bootcamp includes intensive practical labs where you will learn to evade IDS, exploit wireless networks, and secure cloud and mobile platforms.\n\nYou need to think like a hacker to beat one. This program provides the technical mastery and the ethical framework required to become a certified professional, significantly enhancing your organization\'s offensive and defensive security capabilities.',
        duration: '5 Days (Bootcamp)',
        hours: '40 Hours (Practical)',
        audience: 'Pen Testers, Security Analysts, Network Admins',
        image: 'https://picsum.photos/seed/ceh/800/800',
        testimonial: {
            text: 'Mastering the offensive side of cybersecurity through the Ebanex CEH bootcamp has fundamentally improved how I approach my role as a security analyst. The "hacking mindset" I developed allows me to identify obscure misconfigurations and potential attack paths that I would have completely missed in the past. The hands-on labs with over 3000 tools were extraordinary—I am now much more comfortable using professional exploitation frameworks and conducting thorough vulnerability assessments. Passing the CEH on my first try was a huge career milestone, and I feel significantly better equipped to defend my organization against modern advanced threats.',
            author: 'David Osei',
            role: 'Security Analyst, Pan-African Financial',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000'
        },
        instructor: {
            name: 'Sarah Chen',
            role: 'Lead Hacker',
            bio: 'Sarah is an expert in offensive security and a certified EC-Council instructor.',
            certs: ['CEH', 'ECSA', 'LPT', 'OSCP'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '10+', label: 'Years Exp' },
                { number: '100%', label: 'Lab Success' },
                { number: '1k+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Footprinting and Reconnaissance',
                'Scanning Networks',
                'Enumeration',
                'Vulnerability Analysis',
                'System Hacking',
                'Malware Threats',
                'Sniffing',
                'Social Engineering',
                'DoS/DDoS',
                'Session Hijacking',
                'Evading IDS, Firewalls, and Honeypots',
                'Hacking Web Servers',
                'Hacking Web Applications',
                'SQL Injection',
                'Hacking Wireless Networks',
                'Hacking Mobile Platforms',
                'IoT and OT Hacking',
                'Cloud Computing',
                'Cryptography'
            ],
            business: [
                'Ethical Hacking Methodology',
                'Compliance Auditing',
                'Vulnerability Management',
                'Risk Assessment',
                'Incident Reporting',
                'Professional Standards'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Tool Mastery', desc: 'Hands-on test of common hacking tools' },
            { phase: 'Phase 2: Vulnerability Lab', desc: 'Identifying and exploiting known vulnerabilities' },
            { phase: 'Phase 3: Final Exam Simulation', desc: 'Simulated 125-question CEH exam' },
            { phase: 'Phase 4: Practical Challenge', desc: 'Mock penetration test with reporting' }
        ],
        industries: [
            { title: 'Tech', desc: 'Securing cloud and mobile applications' },
            { title: 'Finance', desc: 'Defending against financial cybercrime' },
            { title: 'Critical Infra', desc: 'Securing IoT and OT environments' },
            { title: 'Defense', desc: 'Advanced threat protection' }
        ],
        stats: [
            { metric: 98, suffix: '%', label: 'Satisfaction' },
            { metric: 20, suffix: '', label: 'Hacking Domains' },
            { metric: 3000, suffix: '+', label: 'Hacking Tools' },
            { metric: 20, suffix: '%', label: 'Skill Boost' }
        ],
        faqs: [
            { 
                question: 'Is it the latest version?', 
                answer: 'Yes, Ebanex always utilizes the most current version of the EC-Council CEH curriculum (currently v12). We ensure that you are training with the latest modules, attack vectors, and toolsets that reflect the reality of the global hacking landscape in 2026.' 
            },
            { 
                question: 'Practical included?', 
                answer: 'Our bootcamp is designed to prepare you for both the CEH (ANSI) multiple-choice exam and the CEH (Practical) examination. We provide intensive, hands-on labs that mimic the 6-hour practical exam format, ensuring you have the technical mastery required to become a CEH Master.' 
            },
            { 
                question: 'Prerequisites?', 
                answer: 'EC-Council requires two years of information security work experience or the attendance of authorized training like ours. We provide a full review of your eligibility and guide you through the formal application and examination scheduling process.' 
            },
            { 
                question: 'Is iLab access included?', 
                answer: 'Yes, every Ebanex student receives 6 months of extended access to EC-Council\'s official iLabs. This cloud-based range allows you to practice all the modules from the course in a safe, legal environment until you achieve complete mastery of the techniques.' 
            },
            { 
                question: 'What tools are used?', 
                answer: 'You will work with a massive library of over 3000 hacking tools, including industry standards like Metasploit, Nmap, Wireshark, Burp Suite, and various advanced scanners and exploitation scripts that are used by both professional pen-testers and real-world attackers.' 
            }
        ]
    },
    'cisco': {
        title: 'CCNA/CCNP Certification Prep',
        slug: 'cisco',
        badge: 'Network Expert',
        description: 'Comprehensive preparation for Cisco Certified Network Associate and Professional exams using high-fidelity lab environments.',
        longDescription: 'Our Cisco certification program provides the practical skills needed to install, configure, operate, and troubleshoot medium-size routed and switched networks.\n\nFrom network access to IP connectivity and security fundamentals, we cover the full Cisco curriculum. Our bootcamp features high-fidelity labs using both physical hardware and virtual environments, ensuring you are ready for real-world scenarios.\n\nInfrastructure is the heart of IT. This preparation ensures you have the technical mastery required to achieve globally recognized Cisco certifications, boosting your career and your organization\'s infrastructure capability.',
        duration: '10 Days (Bootcamp)',
        hours: '60 Hours (Practical)',
        audience: 'Network Engineers, System Architects, Support Technicians',
        image: 'https://picsum.photos/seed/cisco/800/800',
        testimonial: {
            text: 'The Ebanex Cisco bootcamp has been a defining moment for my engineering career. Previously, I had relied on basic simulations and theoretical knowledge, but the exclusive access to physical Cisco Catalyst and Nexus racks provided a level of confidence that I simply couldn\'t get elsewhere. The intensive troubleshooting labs were particularly valuable—having to solve 10 complex network failures under time pressure perfectly prepared me for the professional level (CCNP) examination. I passed with a score well above the requirement, and I am now leading major infrastructure optimization projects that I wouldn\'t have felt qualified for before this training.',
            author: 'Samuel Okafor',
            role: 'Infrastructure Lead, TechHub Africa',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000'
        },
        instructor: {
            name: 'Robert Mensah',
            role: 'Network Architect',
            bio: 'Robert is a CCIE-certified professional with decades of experience in global infrastructure.',
            certs: ['CCIE', 'CCNP Enterprise', 'CCNA'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '98%', label: 'Pass Rate' },
                { number: '2k+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Network Fundamentals',
                'Network Access and Connectivity',
                'IP Connectivity (Routing)',
                'IP Services (DHCP, NAT, SNMP)',
                'Security Fundamentals',
                'Automation and Programmability',
                'Advanced Routing Protocols (BGP, OSPF, EIGRP)',
                'Enterprise Network Design'
            ],
            business: [
                'Network lifecycle management',
                'SLA management and monitoring',
                'TCO analysis for infrastructure',
                'Incident and change management',
                'Vendor relationship management',
                'Strategic infrastructure planning'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Lab Topology Test', desc: 'Building a complex network from scratch' },
            { phase: 'Phase 2: Configuration Drills', desc: 'Speed-based configuration of core services' },
            { phase: 'Phase 3: Troubleshooting Lab', desc: 'Solving 10 intentional network failures in 2 hours' },
            { phase: 'Phase 4: Final Mock Exam', desc: 'Simulated Cisco CCNA/CCNP composite exam' }
        ],
        industries: [
            { title: 'Telecom', desc: 'Core network operations and 5G backhaul' },
            { title: 'Banking', desc: 'Securing multi-branch financial networks' },
            { title: 'Industrial', desc: 'Managing converged OT/IT infrastructure' },
            { title: 'Public Sector', desc: 'Building secure citizen service networks' }
        ],
        stats: [
            { metric: 98, suffix: '%', label: 'Pass Rate' },
            { metric: 100, suffix: '%', label: 'Hands-on Labs' },
            { metric: 50, suffix: '%', label: 'Skill Increase' },
            { metric: 3, suffix: 'x', label: 'Job Readiness' }
        ],
        faqs: [
            { 
                question: 'CCNA vs CCNP?', 
                answer: 'The CCNA is the foundational associate-level certification that covers a broad range of networking concepts. The CCNP is the professional-level certification designed for engineers who want to specialize in high-level enterprise design and complex implementation. We offer tailored bootcamp tracks for both, ensuring you receive the appropriate level of depth for your current career stage.' 
            },
            { 
                question: 'Physical hardware?', 
                answer: 'Yes, we use a strategic mix of high-end physical Cisco racks and high-fidelity virtualized environments using GNS3 and VIRL. This ensures you gain the tactile experience of cable management and physical port configuration while having the flexibility to build massive, 50-node virtual topologies that reflect carrier-grade networks.' 
            },
            { 
                question: 'Latest exam versions?', 
                answer: 'Always. Cisco frequently updates their certification domains, and we update our curriculum and lab topologies the very day Cisco announces a change. You can be certain you are training with the exact curriculum required for the most current v1.1 or v2.0 exams.' 
            },
            { 
                question: 'Is automation covered?', 
                answer: 'Absolutely. Every modern Cisco certification now includes a significant domain on network automation and programmability. Our bootcamp includes dedicated labs on using Cisco DevNet, REST APIs, and Python to manage enterprise-scale networks through code.' 
            },
            { 
                question: 'What labs are used?', 
                answer: 'We utilize official Cisco Learning Labs as our baseline and supplement them with Ebanex custom-designed high-fidelity topologies that simulate the complex, multi-site network challenges found in African telecommunications and financial hubs.' 
            }
        ]
    },
    'cdpse': {
        title: 'CDPSE Certification Prep',
        slug: 'cdpse',
        badge: 'Privacy Engineer',
        description: 'Certified Data Privacy Solutions Engineer (CDPSE) prep. Bridge the gap between technical privacy implementation and legal requirements.',
        longDescription: 'CDPSE is the first experience-based, technical certification of its kind. It validates your ability to implement privacy by design into technology platforms and products.\n\nThis program covers Privacy Governance, Privacy Architecture, and Data Lifecycle Management. You will learn to implement technical privacy controls, manage data sovereignty, and design systems that respect user privacy by default.\n\nEngineering privacy is a strategic requirement. This preparation ensures you have the technical knowledge and the examination strategy required to achieve the gold standard in privacy engineering, significantly boosting your organization\'s trust and compliance.',
        duration: '5 Days (Bootcamp)',
        hours: '40 Hours (Intensive)',
        audience: 'IT Architects, Privacy Engineers, Developers, DPOs',
        image: 'https://picsum.photos/seed/cdpse/800/800',
        testimonial: {
            text: 'The Ebanex CDPSE bootcamp was the perfect bridge for my technical engineering background. Before this training, I understood how to build complex systems, but I didn\'t have the framework to ensure those systems met the increasingly stringent global privacy laws. The instructors at Ebanex did a brilliant job of translating legal requirements into specific engineering patterns and data lifecycle controls. I passed the CDPSE exam on my first attempt and have since led the implementation of our organization\'s first automated privacy discovery and classification system. This certification is essential for any modern architect.',
            author: 'Jonathan Hayes',
            role: 'Privacy Architect, Global Tech Services',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Jonathan Hayes',
            role: 'Lead Privacy Engineer',
            bio: 'Recognized expert in privacy engineering and CDPSE lead instructor.',
            certs: ['CDPSE', 'CIPP/E', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '10+', label: 'Years Exp' },
                { number: '95%', label: 'Pass Rate' },
                { number: '500+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Privacy Governance',
                'Privacy Architecture',
                'Data Lifecycle Management',
                'Data Sovereignty and Residence',
                'Technical Privacy Controls',
                'Privacy by Design principles'
            ],
            business: [
                'Privacy Impact Assessments (PIA)',
                'Business Process Privacy',
                'Privacy Awareness and Culture',
                'Stakeholder Management',
                'Legal and Regulatory alignment'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Architecture Audit', desc: 'Evaluating privacy controls in a mock application' },
            { phase: 'Phase 2: Domain Drills', desc: 'Intensive testing on the 3 CDPSE domains' },
            { phase: 'Phase 3: Final Mock Exam', desc: 'Simulated 120-question CDPSE examination' },
            { phase: 'Phase 4: Design Review', desc: 'Presenting a privacy-first product architecture' }
        ],
        industries: [
            { title: 'SaaS', desc: 'Building multi-tenant privacy into cloud products' },
            { title: 'Tech', desc: 'Engineering privacy for global user bases' },
            { title: 'Finance', desc: 'Protecting transaction and KYC data technically' },
            { title: 'Health', desc: 'Technical safeguarding of patient information' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Pass Rate' },
            { metric: 1000, suffix: '+', label: 'Practice Questions' },
            { metric: 100, suffix: '%', label: 'Technical Focus' },
            { metric: 20, suffix: '%', label: 'Salary Uplift' }
        ],
        faqs: [
            { 
                question: 'Engineering required?', 
                answer: 'Yes, the CDPSE is a technical certification. While it is accessible for DPOs with a strong technical interest, the curriculum is most valuable for IT architects, privacy engineers, and developers who are responsible for the actual design and implementation of privacy controls within systems and platforms.' 
            },
            { 
                question: 'CDPSE vs CIPP?', 
                answer: 'The CIPP is primarily policy-based and focused on the legal interpretation of privacy laws. The CDPSE is technical and focused on the solution engineering—how to actually build systems that meet those legal requirements. Holding both certifications provides a truly holistic and strategic understanding of organizational privacy.' 
            },
            { 
                question: 'Work experience?', 
                answer: 'ISACA requires a minimum of three years of professional work experience in at least two of the three CDPSE domains (Privacy Governance, Privacy Architecture, and Data Lifecycle). We provide a thorough experience audit and assist our students with the formal application process.' 
            },
            { 
                question: 'What are the 3 domains?', 
                answer: 'The certification is structured around three core pillars: Privacy Governance (how the organization manages privacy), Privacy Architecture (how systems are built), and Data Lifecycle (how data is collected, processed, and disposed of).' 
            },
            { 
                question: 'Are ISACA materials included?', 
                answer: 'Yes, every participant receives the official ISACA CDPSE Review Manual, a one-year subscription to our proprietary Ebanex online question database, and intensive faculty review of the most complex technical privacy patterns.' 
            }
        ]
    },
    'cia': {
        title: 'CIA Certification Preparation',
        slug: 'cia',
        badge: 'Audit Expert',
        description: 'Prepare for the Certified Internal Auditor (CIA) exam, the only globally recognized certification for internal auditors.',
        longDescription: 'Our CIA prep program covers the three parts of the CIA exam in depth, focusing on internal audit basics, practice, and business knowledge for internal auditing.\n\nYou will master the foundations of internal auditing, proficiency and due professional care, and managing the internal audit activity. Our bootcamp features intensive drills for all three parts of the exam, utilizing a massive database of IIA-aligned practice questions.\n\nInstitutional effectiveness depends on robust auditing. This preparation ensures you have the technical knowledge and the examination strategy required to achieve the CIA status, significantly boosting your career and your organization\'s internal assurance capability.',
        duration: '6 Days (Bootcamp)',
        hours: '40 Hours (Intensive)',
        audience: 'Internal Auditors, Risk Managers, Compliance Officers',
        image: 'https://picsum.photos/seed/ciaaudit/800/800',
        testimonial: {
            text: 'I had been putting off my CIA certification for years because of the three-part exam structure, but the Ebanex bootcamp provided exactly the discipline and the structural roadmap I needed. The intensive drills for Part 2 and Part 3 were particularly high-impact, focusing on the specific "audit mindset" required by the IIA. I passed all three parts in under six months, and the quality of the Ebanex question database was a near-perfect reflection of the actual test difficulty. My certification has already resulted in a senior promotion and a 30% increase in my professional standing within the internal audit community.',
            author: 'Chinedu Okafor',
            role: 'Internal Auditor, Pan-African Financial',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Dr. James Morrison',
            role: 'Assurance lead',
            bio: 'Expert in internal audit and CIA exam preparation with a 90%+ student pass rate.',
            certs: ['CIA', 'CISA', 'CRMA'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '18+', label: 'Years Exp' },
                { number: '90%', label: 'Pass Rate' },
                { number: '1k+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Foundations of Internal Auditing',
                'Independence and Objectivity',
                'Proficiency and Due Professional Care',
                'Quality Assurance and Improvement Program',
                'Governance, Risk Management, and Control',
                'Fraud Risks',
                'Managing the Internal Audit Activity',
                'Planning the Engagement',
                'Performing the Engagement',
                'Communicating Results and Monitoring Progress'
            ],
            business: [
                'Business Acumen',
                'Information Security',
                'Information Technology',
                'Financial Management'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: Part 1 Mock', desc: 'Internal Audit Basics assessment' },
            { phase: 'Phase 2: Part 2 Mock', desc: 'Internal Audit Practice assessment' },
            { phase: 'Phase 3: Part 3 Mock', desc: 'Internal Audit Business Knowledge assessment' },
            { phase: 'Phase 4: Final Review', desc: 'Simulated 3-part composite examination' }
        ],
        industries: [
            { title: 'Corporate Audit', desc: 'Internal audit functions in large enterprises' },
            { title: 'Public Sector', desc: 'Government and institutional auditing' },
            { title: 'Financial Services', desc: 'Internal control and risk assurance' },
            { title: 'Consulting', desc: 'Providing internal audit advisory services' }
        ],
        stats: [
            { metric: 90, suffix: '%', label: 'Pass Rate' },
            { metric: 3, suffix: '', label: 'Exam Parts' },
            { metric: 2000, suffix: '+', label: 'Practice Questions' },
            { metric: 30, suffix: '%', label: 'Salary Uplift' }
        ],
        faqs: [
            { 
                question: 'How many parts?', 
                answer: 'The CIA examination is divided into three distinct parts: Part 1 covers Internal Audit Basics; Part 2 covers Internal Audit Practice; and Part 3 covers Business Knowledge for Internal Auditing. We offer specialized, intensive bootcamp tracks for each part, allowing you to focus your studies and succeed at your own pace.' 
            },
            { 
                question: 'Prerequisites?', 
                answer: 'A bachelor\'s degree or higher (or equivalent) is required for full certification. You must also have a minimum of two years of internal audit experience (or equivalent). However, you can sit for the exams as soon as you have your degree, and our faculty will assist you with the final certification paperwork once your experience requirements are met.' 
            },
            { 
                question: 'IIA membership?', 
                answer: 'While not strictly mandatory for our bootcamp, we highly recommend becoming a member of the Institute of Internal Auditors (IIA). Membership provides significant discounts on exam registration fees and provides access to a global network of audit professionals and continuing education resources.' 
            },
            { 
                question: 'Can I take parts separately?', 
                answer: 'Yes, the CIA exams are designed to be taken separately and in any order. Most of our students prefer to take them sequentially (Part 1, then 2, then 3), but we can adjust your study plan if your organizational requirements or personal background make a different order more strategic.' 
            },
            { 
                question: 'What is the pass mark?', 
                answer: 'The IIA uses a scaled scoring system ranging from 250 to 750. A score of 600 or higher is required to pass each part. Our high-fidelity mock examinations are designed to ensure you are consistently performing at this level before you schedule your official test dates.' 
            }
        ]
    },
    'crma': {
        title: 'CRMA Certification Prep',
        slug: 'crma',
        badge: 'Risk Assurance',
        description: 'Certification in Risk Management Assurance (CRMA) prep. For internal auditors and risk management professionals who want to demonstrate their ability to provide risk assurance.',
        longDescription: 'The CRMA validates your ability to provide assurance on core business processes in risk management and corporate governance.\n\nYou will master risk management governance, risk management processes, and the role of internal audit in providing risk assurance. We focus on strategic alignment and executive communication, ensuring you can lead risk-based assurance programs that drive organizational resilience.\n\nAssurance is the key to managing uncertainty. This preparation ensures you have the management-level knowledge and the examination strategy required to achieve the CRMA, significantly boosting your career and your organization\'s risk management capability.',
        duration: '4 Days (Bootcamp)',
        hours: '30 Hours (Intensive)',
        audience: 'Senior Internal Auditors, Risk Managers, Board Advisors',
        image: 'https://picsum.photos/seed/crma/800/800',
        testimonial: {
            text: 'Achieving the CRMA has been the single most important step in my transition from a general internal auditor to a true strategic risk advisor. The Ebanex program gave me the management-level frameworks to move beyond simple compliance testing and start providing the Board with deep, strategic assurance on our core business processes and risk governance. The focus on executive communication and strategic alignment was particularly high-impact—I am now able to present risk assurance findings that directly inform our organization\'s capital allocation and long-term planning. Ebanex is the premier training provider for high-level audit specialties.',
            author: 'Marcus Dubois',
            role: 'Senior Risk Advisor, Regional Logistics',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        instructor: {
            name: 'Dr. Elizabeth Wangari',
            role: 'GRC Lead',
            bio: 'GRC expert with decades of experience in risk management and assurance.',
            certs: ['CRMA', 'CGEIT', 'CRISC'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces',
            stats: [
                { number: '20+', label: 'Years Exp' },
                { number: '92%', label: 'Pass Rate' },
                { number: '400+', label: 'Certified' },
            ]
        },
        skills: {
            technical: [
                'Risk Management Governance',
                'Risk Management Process',
                'Internal Audit Role and Responsibility',
                'Business Objective Alignment',
                'Assurance on Risk Management Processes'
            ],
            business: [
                'Strategic Thinking',
                'Executive Communication',
                'Organizational Resilience',
                'Board Engagement',
                'Facilitation Skills'
            ]
        },
        evaluation: [
            { phase: 'Phase 1: GRC Baseline', desc: 'Evaluating understanding of risk and governance' },
            { phase: 'Phase 2: Assurance Lab', desc: 'Designing assurance programs for complex risks' },
            { phase: 'Phase 3: Final Mock Exam', desc: 'Simulated CRMA examination' },
            { phase: 'Phase 4: Case Presentation', desc: 'Risk assurance strategy for an executive board' }
        ],
        industries: [
            { title: 'Banking', desc: 'Risk assurance for regulatory stability' },
            { title: 'Public Sector', desc: 'Institutional risk and governance assurance' },
            { title: 'Private Equity', desc: 'Risk-based assurance for portfolio growth' },
            { title: 'Oil & Gas', desc: 'Operational and environmental risk assurance' }
        ],
        stats: [
            { metric: 92, suffix: '%', label: 'Pass Rate' },
            { metric: 1000, suffix: '+', label: 'Practice Items' },
            { metric: 100, suffix: '%', label: 'Alignment with IIA' },
            { metric: 25, suffix: '%', label: 'Career Growth' }
        ],
        faqs: [
            { 
                question: 'IIA certification?', 
                answer: 'Yes, the Certification in Risk Management Assurance (CRMA) is a premier, specialty certification offered by the Institute of Internal Auditors (IIA). It is designed to validate your ability to provide assurance on core business processes in risk management and corporate governance.' 
            },
            { 
                question: 'Prerequisites?', 
                answer: 'You must have an active CIA (Certified Internal Auditor) certification to qualify for the CRMA designation. In addition, the IIA requires five years of internal audit and/or risk management experience. We assist our students with the verification and application process to ensure their certification journey is seamless.' 
            },
            { 
                question: 'Is it technical?', 
                answer: 'The CRMA is a management-level assurance certification. While it requires a deep understanding of risk assessment methodologies, it focuses more on the strategic governance and the advisory role of internal audit than on technical IT controls. It is for those who want to lead the risk dialogue within their organization.' 
            },
            { 
                question: 'How is it different from CIA?', 
                answer: 'While the CIA provides a comprehensive foundation across the entire internal audit spectrum, the CRMA is a deep-dive specialty certification. It focuses exclusively on the audit function\'s role as a trusted advisor to the Board and management on matters of organizational risk and resilience.' 
            },
            { 
                question: 'Is there a practical component?', 
                answer: 'Our bootcamp includes intensive, case-based simulations of risk assurance engagements. You will practice designing assurance programs for complex organizational risks, creating high-impact board reports, and defending your risk mitigation priorities in mock executive committee sessions.' 
            }
        ]
    }
};

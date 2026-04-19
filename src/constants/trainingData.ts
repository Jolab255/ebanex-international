import { 
    Shield, Lock, Database, FileKey, GlobeLock, 
    Search, Server, AlertOctagon, Activity,
    Briefcase, Globe, Target
} from 'lucide-react';

export const TRAINING_PROGRAMS: Record<string, any> = {
    'ethical-hacking': {
        title: 'Ethical Hacking & Threat Intelligence',
        slug: 'ethical-hacking',
        badge: 'Advanced Program',
        description: 'Master the mindset and techniques used by malicious hackers to exploit vulnerabilities before they do. Learn penetration testing, vulnerability assessment, and proactive defense.',
        duration: '8 Days (Instructor-Led Labs)',
        hours: '45 Hours (Hands-on Practice)',
        audience: 'EBANEX Red Team Specialists',
        image: 'https://picsum.photos/seed/ethicalhacking/800/800',
        testimonial: {
            text: 'The hands-on rigor of the Ebanex Ethical Hacking labs prepared my team to think like real attackers. We transitioned from simply running automated vulnerability scanners to actively hunting hidden threats.',
            author: 'David Osei',
            role: 'Head of Information Security, Pan-African Financial Group'
        },
        instructor: {
            name: 'Sarah Chen',
            role: 'Lead Red Team Operator',
            bio: 'Sarah brings over a decade of offensive security experience from both the financial sector and defense contractor environments. She has discovered multiple zero-day vulnerabilities in enterprise software.',
            certs: ['OSCP', 'OSCE', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces'
        },
        syllabus: [
            { phase: 'Foundations', desc: 'Methodologies, Reconnaissance, Network Scanning, OSINT' },
            { phase: 'Exploitation', desc: 'Vulnerability Analysis, System Hacking, Malware, Sniffing' },
            { phase: 'Advanced', desc: 'SQLi, XSS, Wireless Exploitation, Session Hijacking' },
            { phase: 'Intelligence', desc: 'CTI, Threat Actors, MITRE ATT&CK, Incident Integration' }
        ],
        stats: [
            { metric: 80, suffix: '%', label: 'Faster Remediation' },
            { metric: 100, suffix: '%', label: 'Lab Completion Rate' },
            { metric: 95, suffix: '%', label: 'Practical Skill Uplift' },
            { metric: 4, suffix: 'x', label: 'Risk Mitigation ROI' }
        ]
    },
    'digital-risk': {
        title: 'Digital Risk Management',
        slug: 'digital-risk',
        badge: 'Executive Track',
        description: 'Bridge the critical gap between technical security controls and executive business strategy. Learn to quantify, govern, and mitigate IT risk across your enterprise ecosystem.',
        duration: '5 Days (Instructor-Led)',
        hours: '32 Hours (Blended)',
        audience: 'Risk Managers, CISOs, IT Auditors',
        image: 'https://picsum.photos/seed/riskmanagement/800/800',
        testimonial: {
            text: 'Ebanex transformed our approach to IT risk. We shifted from a culture of compliance checklists to a dynamic risk management strategy.',
            author: 'Elena Rostova',
            role: 'Chief Risk Officer, Global Logistics Corp'
        },
        instructor: {
            name: 'Marcus Dubois',
            role: 'Chief Risk Officer',
            bio: 'Marcus is a former CRO for a major European bank, specialized in governing enormous third-party vendor portfolios and presenting risk posture to corporate boards.',
            certs: ['CRISC', 'CISM', 'CGEIT'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        syllabus: [
            { phase: 'Identification', desc: 'Asset Valuation, Threat Scenarios, Business Context' },
            { phase: 'Assessment', desc: 'Quantitative vs Qualitative Analysis, Risk Ranking' },
            { phase: 'Response', desc: 'Acceptance, Transfer, Mitigation Strategies' },
            { phase: 'Monitoring', desc: 'Key Risk Indicators (KRIs), Board Reporting' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Compliance Readiness' },
            { metric: 60, suffix: '%', label: 'Risk Reduction' },
            { metric: 40, suffix: '%', label: 'Security ROI Uplift' },
            { metric: 100, suffix: '%', label: 'Board Visibility' }
        ]
    },
    'incident-response': {
        title: 'Incident Response Training',
        slug: 'incident-response',
        badge: 'Tactical Training',
        description: 'When a breach happens, every second counts. Master the framework to detect, contain, and eradicate threats while minimizing critical business downtime.',
        duration: '4 Days (Live Scenarios)',
        hours: '28 Hours (Practical)',
        audience: 'EBANEX Blue Team Operations',
        image: 'https://picsum.photos/seed/incidentresponse/800/800',
        testimonial: {
            text: 'Because of the tabletop exercises and playbooks we developed at Ebanex, our response team isolated the lateral movement in 15 minutes.',
            author: 'Martin Kinyua',
            role: 'VP of Infrastructure, Regional Telecom Provider'
        },
        instructor: {
            name: 'Elena Rostova',
            role: 'DFIR Director',
            bio: 'Elena is a veteran responder who has managed technical triage during some of the largest ransomware attacks of the last decade.',
            certs: ['GCIH', 'GCFA', 'CHFI'],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=533&fit=crop&crop=faces'
        },
        syllabus: [
            { phase: 'Preparation', desc: 'IR Frameworks, CSIRT Structures, Log Aggregation' },
            { phase: 'Identification', desc: 'Alert Validation, IoC Analysis, Scoping the Breach' },
            { phase: 'Containment', desc: 'Isolation Strategies, Malware Removal, AD Recovery' },
            { phase: 'Recovery', desc: 'Validating Restoration, Lessons Learned, Reporting' }
        ],
        stats: [
            { metric: 90, suffix: '%', label: 'Containment Speed' },
            { metric: 75, suffix: '%', label: 'Impact Reduction' },
            { metric: 100, suffix: '%', label: 'Chain of Custody' },
            { metric: 50, suffix: '%', label: 'RTO Decrease' }
        ]
    },
    'data-privacy': {
        title: 'Data Privacy & Protection',
        slug: 'data-privacy',
        badge: 'Essential Regulatory',
        description: 'Transform privacy from a legal obligation into an engineering discipline. Equip your team to build compliant systems and protect personal data across its entire lifecycle.',
        duration: '5 Days (Instructor-Led)',
        hours: '30 Hours (Hybrid)',
        audience: 'DPOs, IT Architects, Legal Teams',
        image: 'https://picsum.photos/seed/dataprivacy/800/800',
        testimonial: {
            text: 'Ebanex showed our architects how to build Privacy by Design directly into our cloud applications, preventing compliance issues before they were even coded.',
            author: 'Chinedu Okafor',
            role: 'Chief Data Officer, Pan-African Retail Network'
        },
        instructor: {
            name: 'Jonathan Hayes',
            role: 'DPO & Architect',
            bio: 'Jonathan specializes in bridging the gap between corporate legal counsel and IT engineering. He emphasizes privacy engineering.',
            certs: ['CDPSE', 'CIPP/E', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=533&fit=crop&crop=faces'
        },
        syllabus: [
            { phase: 'Governance', desc: 'GDPR & Regional Laws, Frameworks, Classification' },
            { phase: 'Architecture', desc: 'Privacy by Design, Data Flow Mapping, Vendor Risk' },
            { phase: 'Technical', desc: 'Encryption Protocols, Data Masking, Secure Disposal' },
            { phase: 'Compliance', desc: 'Breach Notification, Handling DSARs, DPIA Execution' }
        ],
        stats: [
            { metric: 95, suffix: '%', label: 'Compliance Health' },
            { metric: 100, suffix: '%', label: 'Lifecycle Visibility' },
            { metric: 50, suffix: '%', label: 'DSAR Speed Uplift' },
            { metric: 80, suffix: '%', label: 'Risk Decrease' }
        ]
    },
    'cybersecurity-awareness': {
        title: 'Cybersecurity Awareness Programs',
        slug: 'cybersecurity-awareness',
        badge: 'Foundational Program',
        description: 'Empower your workforce to be the first line of defense. Our comprehensive awareness training transforms human risk into institutional security strength.',
        duration: '2 Days (Workshops)',
        hours: '12 Hours (Interactive)',
        audience: 'General Staff, Management, Executives',
        image: 'https://picsum.photos/seed/cyberaware/800/800',
        testimonial: {
            text: 'The cultural shift within our organization after Ebanex training was immediate. Employees are now proactively reporting phishing attempts.',
            author: 'Sarah Jenkins',
            role: 'CISO, Global Tech Solutions'
        },
        instructor: {
            name: 'David Miller',
            role: 'Security Culture Expert',
            bio: 'David specializes in behavioral security and organizational culture change with over 15 years of experience.',
            certs: ['CISM', 'CISSP'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=533&fit=crop&crop=faces'
        },
        syllabus: [
            { phase: 'Social Engineering', desc: 'Phishing, Vishing, Pretexting, Tailgating' },
            { phase: 'Data Protection', desc: 'Secure Handling, Clear Desk, Password Hygiene' },
            { phase: 'Device Security', desc: 'Remote Work, Mobile Security, Public Wi-Fi' },
            { phase: 'Reporting', desc: 'Incident Reporting, Response Protocols, Security ROI' }
        ],
        stats: [
            { metric: 70, suffix: '%', label: 'Phishing Reduction' },
            { metric: 90, suffix: '%', label: 'Policy Adherence' },
            { metric: 100, suffix: '%', label: 'Staff Engagement' },
            { metric: 5, suffix: 'x', label: 'Risk Mitigation' }
        ]
    }
};

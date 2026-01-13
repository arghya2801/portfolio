import React from 'react';
import { useInView } from '@/hooks/useInView';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    verificationCode: '47cd3045f57840d08b247abd844bd3ee',
    link: 'https://bit.ly/4jB0l9K',
    date: '2026-01-13'
  },
  {
    name: 'Oracle OCI Certified Generative AI Professional',
    verificationCode: '319525494OCI25GAlOCP',
    link: 'https://bit.ly/47hmfsV',
    date: '2025-10-17'
  },
  {
    name: 'Oracle OCI Certified DevOps Professional',
    verificationCode: '319525494OCI25DOPOCP',
    link: 'https://bit.ly/48T5nLt',
    date: '2025-10-07'
  },
  {
    name: 'Oracle OCI Certified Data Science Professional',
    verificationCode: '319525494OCI25DSOCP',
    link: 'https://bit.ly/45r6Ia4',
    date: '2025-07-29'
  },
  {
    name: 'AWS Certified AI Practitioner',
    verificationCode: '2e53321df15b407a9f02296e5f1f0b65',
    link: 'https://bit.ly/44Pp6d7',
    date: '2025-05-23'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    verificationCode: '5db5f4f0bce04fafba688cb1a49af70b',
    link: 'https://bit.ly/44RcTol',
    date: '2025-05-14'
  },
  {
    name: 'Oracle AI Vector Search Certified Professional',
    verificationCode: '319525494DB23AIOCP',
    link: 'http://bit.ly/455wWzf',
    date: '2025-05-12'
  },
  {
    name: 'Microsoft Azure - AI Fundamentals',
    verificationCode: 'wEKCD-48DY',
    link: 'https://bit.ly/427JYsK',
    date: '2023-03-16'
  },
  {
    name: 'Google - Computer Networking',
    verificationCode: 'HZUZYMSTTCCT',
    link: 'https://coursera.org/verify/HZUZYMSTTCCT',
    date: '2023-12-01'
  }
];

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0], index: number }) => {
  const { ref, isInView } = useInView(0.1);
  
  return (
    <div 
      ref={ref}
      className={`
        p-4 border border-gray-200 dark:border-gray-700 rounded-lg
        bg-gray-50 dark:bg-slate-900/90 backdrop-blur-sm
        shadow-sm hover:shadow-md dark:shadow-none
        hover:bg-white dark:hover:bg-[#020618] hover:border-cyan-500 dark:hover:border-cyan-400
        hover:scale-102
        transition-all duration-500 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <h3 className="text-2xl font-semibold pb-1.5 text-gray-800 dark:text-gray-100">{cert.name}</h3>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Verification Code:</strong> {cert.verificationCode}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Date:</strong> {cert.date}
      </p>
      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">View Certification</a>
    </div>
  );
};

const CertificationsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} cert={cert} index={index} />
      ))}
    </div>
  );
};

export default CertificationsGrid;

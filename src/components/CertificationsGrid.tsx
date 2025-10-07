import React from 'react';

const certifications = [
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

const CertificationsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold pb-1.5">{cert.name}</h3>
          <p className="text-gray-700">
            <strong>Verification Code:</strong> {cert.verificationCode}
          </p>
          <p className="text-gray-700">
            <strong>Date:</strong> {cert.date}
          </p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">View Certification</a>
        </div>
      ))}
    </div>
  );
};

export default CertificationsGrid;

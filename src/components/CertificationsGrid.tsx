import React from 'react';

const certifications = [
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
            <strong>Date:</strong> {new Date(cert.date).toLocaleDateString()}
          </p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">View Certification</a>
        </div>
      ))}
    </div>
  );
};

export default CertificationsGrid;

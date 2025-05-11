import React from 'react';

const certifications = [
  {
    name: 'Certified React Developer',
    verificationCode: 'CRD123456',
    link: 'https://example.com/certifications/react',
    date: '2023-04-15'
  },
  {
    name: 'JavaScript Expert',
    verificationCode: 'JSX654321',
    link: 'https://example.com/certifications/javascript',
    date: '2024-01-20'
  },
  {
    name: 'Frontend Specialist',
    verificationCode: 'FES789012',
    link: 'https://example.com/certifications/frontend',
    date: '2022-11-05'
  }
];

const CertificationsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold">{cert.name}</h3>
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

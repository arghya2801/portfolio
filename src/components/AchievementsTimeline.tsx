import React from 'react';

const achievementsData = [
    {
        title: 'Global Rank of 1608 in TCS CodeVita Season 12',
        description: 'Qualified for TCS CodeVita Season 12 Round 2 and got a global rank of 1608.',
        date: 'January 2025'
    },
    {
        title: 'Qualified Internal Round of SIH',
        description: 'Reached the penultimate stage of Smart India Hackathon after qualifying in the internal round of SIH at VIT as team OMADA.',
        date: 'November 2024'
    },
    {
        title: 'JEE Mains percentile of 92.1201280',
        description: 'Got percentile of 92.1201280 in JEE Mains and qualified for JEE Advanced.',
        date: 'July 2022'
    }
];

interface AchievementsTimelineProps {
    achievements: {
        title: string;
        description?: string;
        date?: string;
        details?: string[];
    }[];
}

const AchievementsTimeline: React.FC<AchievementsTimelineProps> = ({ achievements }) => (
    <div className="relative">
        <div className="absolute left-4 top-4 bottom-0 w-px bg-indigo-400"></div>
        <div className="space-y-8">
            {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start mt-2">
                    <div className="relative z-10">
                        <div
                            className="w-8 h-8 rounded-full bg-[#020618] flex items-center justify-center"
                            style={{ left: 'calc(4px - 0.625rem)', top: '0.25rem' }}
                        >
                            <div className="w-4 h-4 rounded-full bg-indigo-400"></div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{ach.title}</h4>
                        {ach.date && <small className="text-gray-500">{ach.date}</small>}
                        {ach.description && <p className="mt-2 text-gray-700">{ach.description}</p>}
                        {ach.details && (
                            <ul className="mt-4 list-disc list-inside text-gray-700">
                                {ach.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MyComponent = () => {
    return (
        <div>
            <AchievementsTimeline achievements={achievementsData} />
        </div>
    );
};

export default MyComponent;
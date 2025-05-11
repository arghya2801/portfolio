import React from 'react';

const achievementsData = [ // Renamed to avoid confusion with the prop name
    {
        title: 'Graduated with Honors',
        description: 'Completed Bachelor of Science in Computer Science with top honors.',
        date: 'June 2020'
    },
    {
        title: 'First Place - Hackathon',
        description: 'Led a team to victory in a 24-hour hackathon focused on AI solutions.',
        date: 'September 2021'
    },
    {
        title: 'Published Research Paper',
        description: 'Published a paper on machine learning in a reputed international journal.',
        date: 'March 2022'
    },
    {
        title: 'Promoted to Senior Developer',
        description: 'Recognized for outstanding contributions and promoted at XYZ Corp.',
        date: 'August 2023'
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
        <div className="absolute left-4 right-4 top-1 bottom-0 w-px bg-indigo-400 ml-1"></div>
        <div className="space-y-8">
            {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start mt-2">
                    <div className="relative z-10 -ml-2.5 mt-1.5">
                        <div className="w-5 h-5 rounded-full bg-indigo-400 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
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
"use client"
import React from 'react';

interface TabNavigationProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'tech-stack', label: 'Tech Stack' },
        { id: 'deep-dive', label: 'Deep Dive' },
    ];

    return (
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
                        px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200
                        ${activeTab === tab.id
                            ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        }
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

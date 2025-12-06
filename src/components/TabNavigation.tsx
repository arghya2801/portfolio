"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
        const activeButton = tabsRef.current[activeIndex];
        
        if (activeButton) {
            setIndicatorStyle({
                left: activeButton.offsetLeft,
                width: activeButton.offsetWidth,
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab]);

    return (
        <div className="relative mb-8">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={el => tabsRef.current[index] = el}
                        onClick={() => onTabChange(tab.id)}
                        className={`
                            px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 relative
                            ${activeTab === tab.id
                                ? 'text-cyan-600 dark:text-cyan-400'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <motion.div
                className="absolute bottom-0 h-0.5 bg-cyan-600 dark:bg-cyan-400"
                initial={false}
                animate={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        </div>
    );
}

import React from 'react';

interface Tab {
    value: string;
    label: string;
}

interface BookingTabProps {
    tabs: Tab[];
    activeTab: string;
    onTabClick: (value: string) => void;
}

const BookingTab: React.FC<BookingTabProps> = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="text-sm mb-5 text-center text-off-black border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
                {tabs.map((tab, index) => (
                    <li key={index} className="me-2">
                        <button
                            onClick={() => onTabClick(tab.value)}
                            className={`inline-block p-4 border-b-2 rounded-t-lg transition-all duration-300 ease-in-out ${activeTab === tab?.value
                                    ? 'text-off-black border-primary'
                                    : 'text-gray-800 border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}>
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingTab;

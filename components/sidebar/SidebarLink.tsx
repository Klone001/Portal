import React from 'react'
import Link from 'next/link';

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    text: string;
    isActive?: boolean;
    onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, activeIcon, text, isActive, onClick }) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link href={href} className={`text-xs my-0 flex items-center px-4 py-3 whitespace-nowrap rounded-lg text-gray-600 transition-all mb-1 gap-x-2 ${isActive ? 'bg-accent-800 text-white' : ''}`} onClick={handleClick}>
            <div className="stroke-none text-lg flex items-center justify-center text-center">
                {isActive && <span className="border-l-3 border-white h-6 mr-2"></span>}
                {isActive ? activeIcon : icon}
            </div>
            <span className="duration-300 opacity-100 pointer-events-none text-xs ease-soft tracking-wider font-light pt-1">{text}</span>
        </Link>
    )
};

export default SidebarLink
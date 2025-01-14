import { cn } from '@/lib';
import React, { ComponentType, ReactNode } from 'react';

interface AlertProps {
    icon?: ComponentType<{ className?: string }>;
    message?: ReactNode;
    button?: ReactNode;
    type?: 'info' | 'success' | 'warning' | 'error' | '';
    className?: string;
}

const Alert: React.FC<AlertProps> = ({
    icon: Icon,
    message,
    button,
    type='',
    className = '',
}) => {
    const alertColors = {
        info: 'text-blue-800 bg-blue-100',
        success: 'text-green-800 bg-green-100',
        warning: 'text-secondary-800 bg-secondary-50',
        error: 'text-red-800 bg-red-100',
        '': 'text-stale-gray-800 bg-gray-400',
    };

    const styles = alertColors[type];

    return (
        <div className={cn(
            'flex items-center py-2 px-4 text-sm rounded-lg',
            styles,
            className)}>

            {Icon && <Icon className="flex-shrink-0 size-5 me-3" aria-hidden="true" />}

            <span className="sr-only">{type} alert</span>

            <div className="flex-1">{message}</div>

            {button && <div className="ms-4">{button}</div>}

        </div>
    );
};

export default Alert;

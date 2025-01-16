import React from 'react';

interface SearchInsightIconProps {
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    [key: string]: any;
}

const SearchInsightIcon: React.FC<SearchInsightIconProps> = ({
    className = '',
    width = 20,
    height = 20,
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="currentColor"
            {...props}
            xmlns="http://www.w3.org/2000/svg">

            <path d="M8 14.0193C9.66667 14.0193 11.0833 13.435 12.25 12.2665C13.4167 11.0978 14 9.67883 14 8.0095C14 6.34017 13.4167 4.92125 12.25 3.75275C11.0833 2.58425 9.66667 2 8 2C6.33333 2 4.91667 2.58425 3.75 3.75275C2.58333 4.92125 2 6.34017 2 8.0095C2 9.67883 2.58333 11.0978 3.75 12.2665C4.91667 13.435 6.33333 14.0193 8 14.0193ZM7.99975 10.798C7.78708 10.798 7.609 10.7262 7.4655 10.5825C7.32183 10.4387 7.25 10.2605 7.25 10.048V5.06725C7.25 4.85475 7.32192 4.67667 7.46575 4.533C7.60958 4.38917 7.78775 4.31725 8.00025 4.31725C8.21292 4.31725 8.391 4.38917 8.5345 4.533C8.67817 4.67667 8.75 4.85475 8.75 5.06725V10.048C8.75 10.2605 8.67808 10.4387 8.53425 10.5825C8.39042 10.7262 8.21225 10.798 7.99975 10.798ZM4.5765 10.798C4.364 10.798 4.18592 10.7262 4.04225 10.5825C3.89875 10.4387 3.827 10.2605 3.827 10.048V7.01925C3.827 6.80675 3.89892 6.62858 4.04275 6.48475C4.18658 6.34108 4.36475 6.26925 4.57725 6.26925C4.78992 6.26925 4.968 6.34108 5.1115 6.48475C5.25517 6.62858 5.327 6.80675 5.327 7.01925V10.048C5.327 10.2605 5.25508 10.4387 5.11125 10.5825C4.96742 10.7262 4.78917 10.798 4.5765 10.798ZM11.4227 10.798C11.2101 10.798 11.032 10.7262 10.8885 10.5825C10.7448 10.4387 10.673 10.2605 10.673 10.048V8C10.673 7.7875 10.7449 7.60942 10.8888 7.46575C11.0326 7.32192 11.2108 7.25 11.4235 7.25C11.636 7.25 11.8141 7.32192 11.9578 7.46575C12.1013 7.60942 12.173 7.7875 12.173 8V10.048C12.173 10.2605 12.1011 10.4387 11.9572 10.5825C11.8134 10.7262 11.6352 10.798 11.4227 10.798ZM8 15.5C5.90633 15.5 4.13292 14.7736 2.67975 13.3207C1.22658 11.8679 0.5 10.0948 0.5 8.0015C0.5 5.90817 1.22642 4.13458 2.67925 2.68075C4.13208 1.22692 5.90517 0.5 7.9985 0.5C10.0918 0.5 11.8654 1.22658 13.3193 2.67975C14.7731 4.13292 15.5 5.90633 15.5 8C15.5 8.90567 15.3509 9.76283 15.0527 10.5715C14.7547 11.3802 14.3391 12.107 13.8057 12.752L18.9827 17.9288C19.1211 18.0651 19.1903 18.2386 19.1903 18.4492C19.1903 18.6599 19.1211 18.8361 18.9827 18.9778C18.8442 19.1194 18.6686 19.1887 18.4557 19.1855C18.2429 19.1823 18.0673 19.1115 17.9288 18.973L12.7615 13.8057C12.1102 14.3391 11.3802 14.7547 10.5715 15.0527C9.76283 15.3509 8.90567 15.5 8 15.5Z" fill="currentColor" />

        </svg>
    );
};

export default SearchInsightIcon;
import React from 'react';

interface LogoutIconProps {
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
    className = '',
    width = 16,
    height = 17,
    fill = 'none',
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">

            <path d="M2.30775 17C1.80258 17 1.375 16.825 1.025 16.475C0.675 16.125 0.5 15.6974 0.5 15.1923V1.80775C0.5 1.30258 0.675 0.875 1.025 0.525C1.375 0.175 1.80258 0 2.30775 0H8.25975C8.47242 0 8.65058 0.0718332 8.79425 0.2155C8.93775 0.359 9.0095 0.537167 9.0095 0.75C9.0095 0.962833 8.93775 1.141 8.79425 1.2845C8.65058 1.42817 8.47242 1.5 8.25975 1.5H2.30775C2.23075 1.5 2.16025 1.53208 2.09625 1.59625C2.03208 1.66025 2 1.73075 2 1.80775V15.1923C2 15.2692 2.03208 15.3398 2.09625 15.4038C2.16025 15.4679 2.23075 15.5 2.30775 15.5H8.25975C8.47242 15.5 8.65058 15.5718 8.79425 15.7155C8.93775 15.859 9.0095 16.0372 9.0095 16.25C9.0095 16.4628 8.93775 16.641 8.79425 16.7845C8.65058 16.9282 8.47242 17 8.25975 17H2.30775ZM14.6173 9.25H6.84625C6.63342 9.25 6.45517 9.17817 6.3115 9.0345C6.168 8.891 6.09625 8.71283 6.09625 8.5C6.09625 8.28717 6.168 8.109 6.3115 7.9655C6.45517 7.82183 6.63342 7.75 6.84625 7.75H14.6173L12.6943 5.827C12.5558 5.6885 12.4849 5.51958 12.4818 5.32025C12.4786 5.12092 12.5494 4.94367 12.6943 4.7885C12.8391 4.63333 13.0148 4.55317 13.2213 4.548C13.4276 4.543 13.6083 4.618 13.7635 4.773L16.8578 7.86725C17.0384 8.04808 17.1288 8.259 17.1288 8.5C17.1288 8.741 17.0384 8.95192 16.8578 9.13275L13.7635 12.227C13.6148 12.3757 13.4383 12.449 13.2338 12.447C13.0293 12.4452 12.8494 12.3667 12.6943 12.2115C12.5494 12.0563 12.4796 11.8782 12.4848 11.677C12.4898 11.4757 12.5648 11.3026 12.7098 11.1578L14.6173 9.25Z" fill={fill} />

        </svg>
    );
};

export default LogoutIcon;
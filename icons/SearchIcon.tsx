import React from 'react';

interface SearchIconProps {
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
    className = '',
    width = 20,
    height = 20,
    fill = 'none',
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg">

            <mask id="mask0_508_1776" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                <rect width="18" height="18" transform="matrix(-1 0 0 1 18 0)" fill={fill} />
            </mask>
            <g mask="url(#mask0_508_1776)">
                <path d="M10.8605 11.7119C12.1413 11.7119 13.2259 11.2677 14.1144 10.3794C15.0028 9.49087 15.447 8.40625 15.447 7.1255C15.447 5.84475 15.0028 4.76013 14.1144 3.87163C13.2259 2.98325 12.1413 2.53906 10.8605 2.53906C9.57977 2.53906 8.49515 2.98325 7.60665 3.87163C6.71827 4.76013 6.27409 5.84475 6.27409 7.1255C6.27409 7.66112 6.36396 8.17269 6.54371 8.66019C6.72359 9.14769 6.96352 9.57169 7.26352 9.93219L2.94802 14.2477C2.84415 14.3514 2.79102 14.4819 2.78865 14.6392C2.78627 14.7964 2.8394 14.9294 2.94802 15.038C3.05665 15.1466 3.1884 15.2009 3.34327 15.2009C3.49802 15.2009 3.62971 15.1466 3.73834 15.038L8.05384 10.7225C8.42884 11.0321 8.86009 11.2744 9.34759 11.4494C9.83509 11.6244 10.3394 11.7119 10.8605 11.7119ZM10.8605 10.5871C9.89415 10.5871 9.07565 10.2517 8.40502 9.581C7.73427 8.91037 7.3989 8.09187 7.3989 7.1255C7.3989 6.15912 7.73427 5.34062 8.40502 4.67C9.07565 3.99925 9.89415 3.66387 10.8605 3.66387C11.8269 3.66387 12.6454 3.99925 13.316 4.67C13.9868 5.34062 14.3221 6.15912 14.3221 7.1255C14.3221 8.09187 13.9868 8.91037 13.316 9.581C12.6454 10.2517 11.8269 10.5871 10.8605 10.5871Z" fill={fill} />
            </g>

        </svg>
    );
};

export default SearchIcon;


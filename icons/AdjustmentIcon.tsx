import React from 'react';

interface AdjustmentIconProps {
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
}

const AdjustmentIcon: React.FC<AdjustmentIconProps> = ({
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

            <path d="M2.37499 14.2368C2.19791 14.2368 2.0495 14.1769 1.92978 14.0572C1.80992 13.9373 1.74999 13.7888 1.74999 13.6116C1.74999 13.4345 1.80992 13.2861 1.92978 13.1663C2.0495 13.0468 2.19791 12.987 2.37499 12.987H3.25645V6.76884C3.25645 5.64815 3.60235 4.65724 4.29416 3.79613C4.98582 2.93502 5.87388 2.38426 6.95832 2.14384V1.62467C6.95832 1.33537 7.0595 1.0894 7.26187 0.886758C7.46423 0.684258 7.70992 0.583008 7.99895 0.583008C8.28812 0.583008 8.53416 0.684258 8.73707 0.886758C8.94013 1.0894 9.04166 1.33537 9.04166 1.62467V2.14384C10.1261 2.38426 11.0142 2.93502 11.7058 3.79613C12.3976 4.65724 12.7435 5.64815 12.7435 6.76884V12.987H13.625C13.8021 12.987 13.9505 13.0468 14.0702 13.1666C14.1901 13.2864 14.25 13.435 14.25 13.6122C14.25 13.7893 14.1901 13.9377 14.0702 14.0574C13.9505 14.177 13.8021 14.2368 13.625 14.2368H2.37499ZM7.99853 16.5766C7.58395 16.5766 7.22951 16.4291 6.9352 16.1341C6.64076 15.8391 6.49353 15.4844 6.49353 15.0701H9.50645C9.50645 15.4858 9.35881 15.8408 9.06353 16.1351C8.76826 16.4294 8.41325 16.5766 7.99853 16.5766ZM4.50645 12.987H11.4935V6.76884C11.4935 5.80412 11.1525 4.98072 10.4704 4.29863C9.78819 3.61641 8.96471 3.2753 7.99999 3.2753C7.03527 3.2753 6.2118 3.61641 5.52957 4.29863C4.84749 4.98072 4.50645 5.80412 4.50645 6.76884V12.987ZM0.808532 6.76092C0.628532 6.76092 0.478671 6.69336 0.358949 6.55822C0.239366 6.42308 0.188116 6.26412 0.205199 6.08134C0.289505 5.11981 0.538394 4.21919 0.951866 3.37947C1.36534 2.53974 1.90006 1.80259 2.55603 1.16801C2.69395 1.04731 2.84944 0.987174 3.02249 0.987591C3.19555 0.988146 3.33812 1.0603 3.4502 1.20405C3.56242 1.3478 3.60999 1.50405 3.59291 1.6728C3.57582 1.84155 3.49839 1.99058 3.36062 2.11988C2.84034 2.63905 2.41721 3.23759 2.09124 3.91551C1.76541 4.59343 1.56034 5.32287 1.47603 6.10384C1.45353 6.28648 1.38166 6.44169 1.26041 6.56947C1.13916 6.6971 0.988532 6.76092 0.808532 6.76092ZM15.1954 6.76092C15.0128 6.76092 14.8608 6.6971 14.7396 6.56947C14.6183 6.44169 14.5465 6.28648 14.524 6.10384C14.4396 5.32287 14.2359 4.59474 13.9127 3.91947C13.5895 3.24433 13.1678 2.64711 12.6475 2.1278C12.5078 1.99905 12.4271 1.84884 12.4056 1.67717C12.3841 1.50551 12.4294 1.3478 12.5417 1.20405C12.6539 1.0603 12.7978 0.989536 12.9735 0.991758C13.1492 0.993841 13.306 1.05523 13.444 1.17592C14.0999 1.81065 14.6346 2.54648 15.0481 3.38342C15.4616 4.22051 15.7105 5.11981 15.7948 6.08134C15.8119 6.26412 15.7605 6.42308 15.6408 6.55822C15.521 6.69336 15.3725 6.76092 15.1954 6.76092Z" fill={fill} />

        </svg>
    );
};

export default AdjustmentIcon;

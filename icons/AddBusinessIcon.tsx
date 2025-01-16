import React from 'react';

interface AddBusinessIconProps {
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    [key: string]: any;
}

const AddBusinessIcon: React.FC<AddBusinessIconProps> = ({
    className = '',
    width = 22,
    height = 19,
    fill = 'none',
    ...props
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 22 19"
            fill="currentColor"
            {...props}
            xmlns="http://www.w3.org/2000/svg">

            <path d="M17 15.5H14.75C14.5375 15.5 14.3593 15.4281 14.2155 15.2843C14.0718 15.1404 14 14.9622 14 14.7498C14 14.5371 14.0718 14.359 14.2155 14.2155C14.3593 14.0718 14.5375 14 14.75 14H17V11.75C17 11.5375 17.0719 11.3593 17.2157 11.2155C17.3596 11.0718 17.5377 11 17.7502 11C17.9629 11 18.141 11.0718 18.2845 11.2155C18.4282 11.3593 18.5 11.5375 18.5 11.75V14H20.75C20.9625 14 21.1406 14.0719 21.2842 14.2158C21.4281 14.3596 21.5 14.5378 21.5 14.7503C21.5 14.9629 21.4281 15.141 21.2842 15.2845C21.1406 15.4282 20.9625 15.5 20.75 15.5H18.5V17.75C18.5 17.9625 18.4281 18.1406 18.2842 18.2843C18.1404 18.4281 17.9622 18.5 17.7497 18.5C17.5371 18.5 17.359 18.4281 17.2155 18.2843C17.0718 18.1406 17 17.9625 17 17.75V15.5ZM2.51924 15.75C2.26324 15.75 2.04857 15.6634 1.87524 15.4902C1.70207 15.3169 1.61549 15.1022 1.61549 14.8462V9.75H1.30574C1.02124 9.75 0.786986 9.63875 0.602986 9.41625C0.418986 9.19392 0.36032 8.94042 0.426986 8.65575L1.42699 3.9635C1.47249 3.75533 1.57882 3.58442 1.74599 3.45075C1.91299 3.31692 2.10282 3.25 2.31549 3.25H15.1845C15.3972 3.25 15.5871 3.31692 15.7542 3.45075C15.9212 3.58442 16.0275 3.75533 16.073 3.9635L17.073 8.65575C17.1397 8.94042 17.081 9.19392 16.897 9.41625C16.7132 9.63875 16.4789 9.75 16.1942 9.75H15.8845V12.1348C15.8845 12.3471 15.8127 12.5252 15.669 12.669C15.5252 12.8127 15.3469 12.8845 15.1342 12.8845C14.9217 12.8845 14.7437 12.8127 14.6 12.669C14.4565 12.5252 14.3847 12.3471 14.3847 12.1348V9.75H10.1155V14.8462C10.1155 15.1022 10.0288 15.3169 9.85549 15.4902C9.68232 15.6634 9.46765 15.75 9.21149 15.75H2.51924ZM3.11549 14.25H8.61549V9.75H3.11549V14.25ZM2.32699 1.75C2.11449 1.75 1.93632 1.67808 1.79249 1.53425C1.64882 1.39042 1.57699 1.21225 1.57699 0.99975C1.57699 0.787083 1.64882 0.609 1.79249 0.4655C1.93632 0.321833 2.11449 0.25 2.32699 0.25H15.173C15.3855 0.25 15.5637 0.321917 15.7075 0.46575C15.8512 0.609583 15.923 0.78775 15.923 1.00025C15.923 1.21292 15.8512 1.391 15.7075 1.5345C15.5637 1.67817 15.3855 1.75 15.173 1.75H2.32699ZM2.03074 8.25H15.4692L14.7057 4.75H2.79424L2.03074 8.25Z" fill='currentColor' />

        </svg>
    );
};

export default AddBusinessIcon;

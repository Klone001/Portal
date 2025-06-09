import React from 'react';

interface AuthTitleProps {
    title: string;
    desc: string;
}

const AuthTitle: React.FC<AuthTitleProps> = ({ title, desc }) => {
    return (
        <div className=''>
            <h2 className='text-black font-bold text-2xl pb-1'> {title} </h2>
            <p className="text-xs lg:text-sm text-black/80"> {desc} </p>
        </div>
    );
};

export default AuthTitle;

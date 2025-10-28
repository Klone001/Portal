import React, { useEffect } from 'react';
import { CountdownTimer } from "nextjs-countdown-timer";

interface ResendCountProps {
    onResendClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
    countdown: number;
    setCountdown: React.Dispatch<React.SetStateAction<number>>;
    setShowResend: React.Dispatch<React.SetStateAction<boolean>>;
    showResend: boolean;
}

const ResendCount: React.FC<ResendCountProps> = ({ onResendClick, loading, countdown, setCountdown, setShowResend, showResend }) => {
    useEffect(() => {
        if (countdown > 0) {
            const counter = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
            return () => clearInterval(counter);
        } else {
            setShowResend(true); 
        }
    }, [countdown, setCountdown, setShowResend]);

    return (
        <>
            <button onClick={onResendClick} disabled={!showResend} type='button' className={`text-success ${!showResend && 'disabled'} underline`}>
                {loading ? ' Resending.....' : 'Resend code'}
            </button>

            {!showResend && (
                <>
                    <p className='text-black'>in</p>
                    <p className='text-success'>
                        <CountdownTimer
                            initialSeconds={countdown}
                            onTimerEnd={() => setShowResend(true)}
                        />
                    </p>
                </>
            )}
        </>
    );
}

export default ResendCount;

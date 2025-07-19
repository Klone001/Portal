import { Button } from '@/components/ui'
import React, { FormEvent, useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { getCookie, initializeOnboardingToken } from '@/lib';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils';
import { useRouter } from 'next/navigation';
import { ResendCount } from '@/components';
import { resendOtp, verifyEmailAddress } from '@/services';

const VendorEmailVerification = ({ onNextStep } : { onNextStep: () => void; }) => {

    const router = useRouter()

    // State to manage the countdown visibility
    const [showResend, setShowResend] = useState(false);
    const counts = 60;
    const [countdown, setCountdown] = useState(counts);

    // OTP CODE
    const [otp, setOtp] = useState('');
    const isOtpValid: boolean = otp.length === 6;

    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function getEmail() {
            const email: string | undefined = await getCookie("vendor_email")
            if (email !== undefined && email !== null) {
                setEmail(email);
            }
        }
        getEmail();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setLoading(true);

        try {

            const payload = {
                email,
                code: otp
            };

            const response = await verifyEmailAddress(payload);
            toast.success(response.result?.message);

            initializeOnboardingToken(email);
            
            onNextStep()

        } catch (error) {
            const message = getErrorMessage(error);
            toast.error(message);
        } finally {
            setOtp("");
            setLoading(false);
        }
    };

    //  RESEND VERIFICATION OTP
    const handleResend = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()

        setIsLoading(true)

        try {

            if (!email) {
                return;
            }

            const response = await resendOtp(email || '');

            if (response?.result) {
                toast.success(response.result?.message);
            } else {
                toast.error(response.errorMessage)
            }

        } catch (error) {

            const message = getErrorMessage(error);
            toast.error(message);

        } finally {
            setIsLoading(false);
            setCountdown(counts);
            setShowResend(false);
        }
    }

    return (
        <div className="max-w-xl m-auto flex items-center justify-center h-[50vh]">
            <form onSubmit={handleSubmit}>

                <div className="pb-12">

                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        inputType="tel"
                        numInputs={6}
                        inputStyle={{ width: '55px', height: '55px' }}
                        containerStyle="flex items-center gap-x-1 sm:gap-x-2 justify-center"
                        renderInput={(props, index) => (
                            <React.Fragment key={index}>
                                <input {...props} className="form-control max-w-12 max-h-12 md:max-w-14 md:max-h-14 text-lg font-semibold text-dark rounded-full" />
                                {index === 2 && <span className="mx-2 hidden md:block">-</span>}
                            </React.Fragment>
                        )}
                    />
                </div>

                <Button isLoading={loading} type="submit" className="mt-6 py-6 w-full" isDisabled={!isOtpValid}>
                    Continue
                </Button>

                <div className="flex items-center justify-center gap-x-1 text-center pt-5 text-xs lg:text-sm">
                    <p className="text-black"> Didn’t get a code? </p>
                    <ResendCount loading={isLoading} onResendClick={handleResend} countdown={countdown}
                        setCountdown={setCountdown}
                        setShowResend={setShowResend}
                        showResend={showResend} />
                </div>

            </form>
        </div>
    )
}

export default VendorEmailVerification
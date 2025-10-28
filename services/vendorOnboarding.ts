import { axiosNoAuth, onboardingAxios, setCookie } from "@/lib";
import { AuthType } from "@/types";

export const checkEmailAvailability = async ({ email }: { email: string }) => {
    const response = await axiosNoAuth.post('onboarding/check-email-availability', {
        email
    });
    return response.data;
};

export async function vendorRegisteration(payload: Omit<AuthType, | 'deviceImei'>) {
    const response = await axiosNoAuth.post("onboarding/signup", payload);
    const email = payload?.email || ''; 
    await setCookie("vendor_email", email);
    
    return response.data;
};

export const resendOtp = async (email: string) => {
    const response = await axiosNoAuth.post('onboarding/send-verification-code', { email });
    if (email) {
        await setCookie("vendor_email", email);
    } else {
        throw new Error("Email is undefined");
    }
    return response.data;
};

export const verifyEmailAddress = async (payload: { email: string; code: string }) => {
    const response = await axiosNoAuth.post('onboarding/signup-verification', payload);
    return response.data;
};

export const createVendorProfile = async (payload: FormData, timezone?: string) => {
    const response = await onboardingAxios.post('vendors/add-vendor-profile', payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Timezone': timezone || '',
        },
    });
    return response.data;
};

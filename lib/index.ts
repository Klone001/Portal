import { destroyCookie, getCookie, setCookie } from "./cookies";
import { EFCircular } from "./fonts";
import { formatCurrency } from "./formatCurrency";
import { cn } from "./utils";
import { AuthProvider } from "./authProvider";
import authOptions from "./authOptions";
import axios, { axiosNoAuth } from './axiosConfig'
import onboardingAxios, { initializeOnboardingToken } from "./onboardingAxios";

export {
    destroyCookie, 
    getCookie, 
    setCookie,
    EFCircular,
    formatCurrency,
    cn,
    AuthProvider,
    authOptions,
    axios,
    axiosNoAuth,

    onboardingAxios,
    initializeOnboardingToken
}
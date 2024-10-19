import { AxiosError } from 'axios';

export function getErrorMessage(error: unknown): string {
    // Function to remove the "Validation errors:" prefix if it exists
    const removeValidationPrefix = (message: string): string => {
        const prefix = "Validation errors:";
        if (message.startsWith(prefix)) {
            return message.slice(prefix.length).trim();
        }
        return message;
    };

    // Check if the error is an Axios error
    if (error instanceof AxiosError) {
        // Check for the presence of the errorMessage in the response data
        let validationErrorMessage = error.response?.data?.errorMessage as string;

        // If there's a validation error, remove the "Validation errors:" prefix
        if (validationErrorMessage) {
            validationErrorMessage = removeValidationPrefix(validationErrorMessage);
        }

        // Then, check for a nested result.message in the response data
        const resultMessage = error.response?.data?.result?.message as string;

        // Fallback to the general Axios error message or string representation
        const axiosMessage =
            (error.response?.data?.message as string) ||
            error.message ||
            error.toString();

        // Return the most specific error message found
        return validationErrorMessage || resultMessage || axiosMessage;
    }

    // Check if the error is a Fetch error
    if (error instanceof Error) {
        return error.message || error.toString();
    }
    
    // If the error type is unexpected, return it as a string
    return String(error);
}

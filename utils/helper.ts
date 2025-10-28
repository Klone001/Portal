'use client'

import exifr from 'exifr';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function useQueryParams() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const updateQueryParams = (newParams: Record<any, unknown | null>) => {
        const params = new URLSearchParams(searchParams);

        Object.entries(newParams).forEach(([key, value]) => {
            if (value === null) {
                params.delete(key);
            } else {
                params.set(key, String(value));
            }
        });

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const clearAllQueryParams = () => {
        router.push(`${pathname}`, { scroll: false });
    };

    const clearQueryParams = (keys: string[]) => {
        const params = new URLSearchParams(searchParams);
        keys.forEach(key => params.delete(key));
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return {
        searchParams,
        updateQueryParams,
        clearAllQueryParams,
        clearQueryParams,
    };
}

interface ImageMetadata {
    latitude?: number;
    longitude?: number;
}

export const getImageCoordinates = async (
    file: File | Blob
): Promise<{ lat: number; lon: number } | null> => {
    try {

        const metadata: ImageMetadata = await exifr.parse(file);

        if (metadata?.latitude && metadata?.longitude) {
            return {
                lat: metadata.latitude,
                lon: metadata.longitude,
            };
        }

        return null;
    } catch (error) {
        console.error('Error extracting image metadata:', error);
        return null;
    }
};

export const buildFormData = (
    values: Record<string, any>,
    extras: Record<string, any> = {},
    fileKeys: string[] = [],
) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
        if (
            value !== undefined &&
            value !== '' &&
            !fileKeys.includes(key)
        ) {
            formData.append(key, value);
        }
    });

    Object.entries(extras).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
            formData.append(key, value.toString());
        }
    });

    fileKeys.forEach((key) => {
        const file = values[key];
        if (file instanceof File) {
            formData.append(key, file);
        }
    });

    return formData;
};

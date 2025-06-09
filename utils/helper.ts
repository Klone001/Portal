'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const geocodeAddress = (address: string): Promise<{ lat: number, lng: number }> => {
    return new Promise((resolve, reject) => {
        const geocoder = new window.google.maps.Geocoder()

        geocoder.geocode({ address }, (results: any[], status: string) => {
            if (status === 'OK' && results[0]) {
                const { lat, lng } = results[0].geometry.location
                resolve({ lat: lat(), lng: lng() })
            } else {
                reject(`Geocode failed: ${status}`)
            }
        })
    })
}

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

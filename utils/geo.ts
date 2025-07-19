type GeocodeResult = {
    lat: number;
    lng: number;
    formatted_address: string;
    city?: string;
    state?: string;
    country?: string;
    country_code?: string;
    postal_code?: string;
    timezone_id?: string;
    timezone_name?: string;
};

type GeocodeInput =
    | { address: string }
    | { lat: number; lng: number };

export const geoDecodeLocation = async (
    input: GeocodeInput
): Promise<GeocodeResult> => {
    const geocoder = new window.google.maps.Geocoder();

    const geocodeResult: GeocodeResult = await new Promise((resolve, reject) => {
        const geocodeCallback = (results: any[], status: string) => {
            if (status === 'OK' && results[0]) {
                const result = results[0];
                const location = result.geometry.location;

                const getComponent = (type: string) =>
                    result.address_components.find((comp: any) =>
                        comp.types.includes(type)
                    )?.long_name;

                const getShortComponent = (type: string) =>
                    result.address_components.find((comp: any) =>
                        comp.types.includes(type)
                    )?.short_name;

                resolve({
                    lat: location.lat(),
                    lng: location.lng(),
                    formatted_address: result.formatted_address,
                    city:
                        getComponent('locality') ||
                        getComponent('administrative_area_level_2'),
                    state: getComponent('administrative_area_level_1'),
                    country: getComponent('country'),
                    country_code: getShortComponent('country'),
                    postal_code: getComponent('postal_code'),
                });
            } else {
                reject(`Geocode failed: ${status}`);
            }
        };

        if ('address' in input) {
            geocoder.geocode({ address: input.address }, geocodeCallback);
        } else {
            const latlng = new window.google.maps.LatLng(input.lat, input.lng);
            geocoder.geocode({ location: latlng }, geocodeCallback);
        }
    });

    const timestamp = Math.floor(Date.now() / 1000); 
    const TIMEZONE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

    try {
        const timezoneRes = await fetch(
            `https://maps.googleapis.com/maps/api/timezone/json?location=${geocodeResult.lat},${geocodeResult.lng}&timestamp=${timestamp}&key=${TIMEZONE_API_KEY}`
        );
        const timezoneData = await timezoneRes.json();

        if (timezoneData.status === 'OK') {
            geocodeResult.timezone_id = timezoneData.timeZoneId;
            geocodeResult.timezone_name = timezoneData.timeZoneName;
        }
    } catch (error) {
        console.warn('Failed to fetch timezone:', error);
    }

    return geocodeResult;
};

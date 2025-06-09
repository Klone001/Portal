import React, { useEffect, useRef, useState } from 'react'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import { geocodeAddress } from '@/utils';
import toast from 'react-hot-toast';

declare global {
    interface Window {
        google: any;
    }
}

type Address = {
    latitude: number;
    longitude: number;
};

const LocationInput = ({ setCoordinates, location }: { setCoordinates: (value: Address) => void; location: Address }) => {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const [address, setAddress] = useState<string>('')
    const [predictions, setPredictions] = useState<any[]>([])

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement('script')
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`
            script.async = true
            script.onload = () => {
            }
            document.body.appendChild(script)
        }
    }, [])

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setAddress(query)

        if (!query) {
            setPredictions([])
            return
        }

        const service = new window.google.maps.places.AutocompleteService()
        service.getPlacePredictions(
            { input: query, componentRestrictions: { country: ['ng', 'gb'] } },
            (predictions: any[], status: string) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPredictions(predictions)
                }
            }
        )
    }

    const getAddressFromCoordinates = async (latitude: number, longitude: number): Promise<string> => {
        const geocoder = new window.google.maps.Geocoder()
        return new Promise<string>((resolve, reject) => {
            const location = { lat: latitude, lng: longitude }
            geocoder.geocode({ location }, (results: any[], status: string) => {
                if (status === 'OK' && results[0]) {
                    resolve(results[0].formatted_address)
                } else {
                    console.error('Geocoder failed due to:', status)
                    reject('Failed to get address')
                }
            })
        })
    }

    const handleSelectPrediction = async (prediction: string) => {
        setAddress(prediction)
        const { lat, lng } = await geocodeAddress(prediction)
        setCoordinates({ latitude: lat, longitude: lng });
        setPredictions([])
    }

    useEffect(() => {
        if (location.latitude !== 0 && location.longitude !== 0) {
            (async () => {
                try {
                    const address = await getAddressFromCoordinates(location.latitude, location.longitude);
                    setAddress(address);
                    if (inputRef.current) {
                        inputRef.current.value = address;
                    }
                } catch (error) {
                    console.error('Error getting address from coordinates:', error);
                }
            })();
        }
    }, [location]);

    return (
        <>

            <input
                type="search"
                ref={inputRef}
                value={address}
                onChange={handleInputChange}
                className="form-control rounded-full border-[#E1E4E4] placeholder:text-gray-600 border py-2.5 !text-xs"
                placeholder="Where do you want your services" />

            <div className="flex flex-col gap-y-0.5 px-1 pt-3">

                {predictions.length > 0 && (
                    predictions.map((prediction, index) => (
                        <Button
                            key={index}
                            onPress={() => handleSelectPrediction(prediction.description)}
                            variant="light"
                            className="flex items-center justify-start !font-normal !py-1 gap-x-2 text-off-black text-[11px] px-3 rounded-md tracking-wide">
                            <MapPinIcon className='size-4' />
                            {prediction.description}
                        </Button>
                    ))
                )}

            </div>

        </>
    )
}

export default LocationInput

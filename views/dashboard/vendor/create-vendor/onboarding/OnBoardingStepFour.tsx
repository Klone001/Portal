import { AuthTitle } from '@/components';
import { LocationInput, MapWithMarker } from '@/components/reusable';
import { Button } from '@/components/ui';
import React, { useState } from 'react'

const OnBoardingStepFour = ({ onNextStep }: { onNextStep: () => void; }) => {

    const [loading, setLoading] = useState(false)
    const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

    const handleSubmit = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            onNextStep()
        }, 300);
    }

    return (
        <>

            <AuthTitle
                title="Set location"
                desc="Set your store location"
            />

            <div className="space-y-5 py-8">

                <div className="form-group max-w-lg ">
                    <label className="form-label text-xs mb-1">Business address</label>
                    <LocationInput setCoordinates={setCoordinates} location={coordinates} />
                </div>

                <div className="form-group ">
                    <label className="form-label text-xs mb-1">Is this pinned in the correct location?</label>
                    <MapWithMarker coordinates={coordinates} setCoordinates={setCoordinates} />
                </div>

            </div>

            <div className="flex justify-center pb-5">
                <Button onPress={handleSubmit} type="submit" className="py-6 w-full max-w-md" loading={loading}>
                    Continue
                </Button>
            </div>

        </>
    )
}

export default OnBoardingStepFour
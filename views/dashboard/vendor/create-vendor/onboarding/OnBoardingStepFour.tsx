import { AuthTitle, FileUpload } from '@/components';
import { LocationInput, MapWithMarker } from '@/components/reusable';
import { Button } from '@/components/ui';
import { PROFILE_UPDATE_ACTIONS } from '@/data';
import { geoDecodeLocation, getImageCoordinates } from '@/utils';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const OnBoardingStepFour = ({
    updateFormData,
    handleSubmit,
}: {
    updateFormData: (data: Record<string, any>) => void;
    handleSubmit: (data: Record<string, any>) => Promise<void>;
}) => {

    const [loading, setLoading] = useState(false)
    const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });
    const [storeCoords, setStoreCoords] = useState<{ latitude: number; longitude: number } | null>(null);

    const initialValues = {
        BusinessStoreFrontImage: null,
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {

                const location = await geoDecodeLocation({ lat: coordinates.latitude, lng: coordinates.longitude });

                setLoading(true);

                let extractedCoords = storeCoords;

                if (values.BusinessStoreFrontImage) {
                    try {
                        const result = await getImageCoordinates(values.BusinessStoreFrontImage);

                        if (result) {
                            extractedCoords = { latitude: result.lat, longitude: result.lon };
                            setStoreCoords(extractedCoords);
                        } else {
                            toast.error('No GPS data found in this image. Please upload another image taken with a GPS-enabled device.');
                            setStoreCoords(null);
                            setLoading(false);
                            return;
                        }
                    } catch (err) {
                        console.log('Could not extract GPS from image:', err);
                        toast.error('Error reading GPS data.');
                        setStoreCoords(null);
                        setLoading(false);
                        return;
                    }
                }

                const updatedValues = {
                    ...values,
                    AddressLongitude: coordinates.longitude || '',
                    AddressLatitude: coordinates.latitude || '',
                    deviceLatitude: extractedCoords?.latitude || '',
                    deviceLongitude: extractedCoords?.longitude || '',
                    location: location?.formatted_address || '',
                    state: location?.state || '',
                    city: location?.city || '',
                    country: location?.country || '',
                    countryCode: location?.country_code || '',
                    Timezone: location?.timezone_id || '',
                    uploadAction: PROFILE_UPDATE_ACTIONS.BUSINESS_LOCATION,
                };

                updateFormData(updatedValues);

                await handleSubmit(updatedValues);
                setLoading(false);

            }}>
            {({ touched, errors }) => (
                <Form autoComplete="off">

                    <AuthTitle
                        title="Set location"
                        desc="Set your store location"
                    />

                    <div className="space-y-5 py-8">

                        <div className='max-w-lg'>

                            <label className="form-label text-xs mb-1">Store front picture</label>

                            <FileUpload name="BusinessStoreFrontImage"
                                title=""
                                label="Upload a picture of the front of your store"
                                multiple={false}
                                accept="image/*"
                            />

                        </div>

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
                        <Button isDisabled={
                            loading ||
                            !coordinates.latitude ||
                            !coordinates.longitude
                        }
                            type="submit" className="py-6 w-full max-w-md" loading={loading}>
                            Complete
                        </Button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}

export default OnBoardingStepFour
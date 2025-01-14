import { FC, useState, ChangeEvent } from "react";
import { UploadIcon } from '@/icons';
import { cn } from '@/lib';

interface ImageUploaderProps {
    defaultImage?: string;
    onFileChange?: (file: File) => void; 
    className?: string;
}

const ImageUploader: FC<ImageUploaderProps> = ({
    defaultImage = "https://via.placeholder.com/350x64",
    onFileChange,
    className = "",
}) => {

    const [preview, setPreview] = useState<string>(defaultImage);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            if (onFileChange) onFileChange(file);
        }
    };

    return (
        <div className={cn("relative size-16 rounded-full overflow-hidden",
            className)}>

            <img alt="Preview" className="object-cover w-full h-full" src={preview} />

            <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
                onChange={handleFileChange}
            />

            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex items-center justify-center bg-white p-1.5 rounded-full shadow">
                    <UploadIcon className="text-black h-5 w-5" />
                </div>
            </div>

        </div>
    );
};

export default ImageUploader;

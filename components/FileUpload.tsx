import React, { useState, useRef, ChangeEvent } from 'react';
import { useField } from 'formik';
import Image from 'next/image';
import PDFIMAGE from '@/public/images/pdf_image.png';
import Others from '@/public/images/file_image.png';
import { UploadIcon } from '@/icons';
import { cn } from '@/lib';
import {Image as NextImage} from "@nextui-org/image";

interface FileUploadProps {
    name: string;
    title: string;
    label: string;
    className?: string;
    multiple?: boolean;
    accept?: string;
    maxSize?: number;
    error?: boolean;
    imgSrc?: string;
}

type FileType = File | null;

const FileUpload: React.FC<FileUploadProps> = ({
    name,
    title,
    label,
    className = '',
    multiple = false,
    accept,
    maxSize,
    error,
    imgSrc,
}) => {
    const [_, meta, helpers] = useField(name);
    const [files, setFiles] = useState<FileType[] | FileType>(multiple ? [] : null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);

        if (!validateFileSize(selectedFiles)) {
            alert('File size exceeds the limit.');
            return;
        }

        const newFiles = multiple ? [...(files as FileType[]), ...selectedFiles] : selectedFiles[0];
        setFiles(newFiles);
        helpers.setValue(newFiles);
    };

    const validateFileType = (files: File[]): boolean => {
        if (!accept) return true;
        const allowedTypes = accept.split(',');
        return files.every(file => {
            const fileType = file.type || '';
            const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
            return allowedTypes.includes(fileType.toLowerCase()) || fileExtension === 'dcm';
        });
    };

    const validateFileSize = (files: File[]): boolean => {
        if (!maxSize) return true;
        return files.every(file => file.size <= maxSize);
    };

    const handleRemoveFile = (index?: number) => {
        if (multiple && typeof index === 'number') {
            const newFiles = (files as FileType[]).filter((_, i) => i !== index);
            setFiles(newFiles);
            helpers.setValue(newFiles);
        } else {
            setFiles(null);
            helpers.setValue(null);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const droppedFiles = Array.from(event.dataTransfer.files);

        if (!validateFileType(droppedFiles)) {
            alert('Invalid file type.');
            return;
        }

        if (!validateFileSize(droppedFiles)) {
            alert('File size exceeds the limit.');
            return;
        }

        const newFiles = multiple ? [...(files as FileType[]), ...droppedFiles] : droppedFiles[0];
        setFiles(newFiles);
        helpers.setValue(newFiles);
    };

    return (
        <>
            <div className={cn("bg-white rounded-xl px-3 md:px-5 py-4 border border-dashed border-gray-400",
                error ? "border-error-500" : "", className)}>

                <div onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className='cursor-pointer'
                    onClick={() => fileInputRef.current?.click()}>

                    <input type="file" onChange={handleFileChange} ref={fileInputRef}
                        style={{ display: 'none' }} multiple={multiple} accept={accept} />

                    <div className="flex flex-col gap-y-3 text-center justify-center items-center">

                        <h2 className="text-sm md:text-base text-gray-700 font-medium">{title}</h2>

                        {/* File Display Box */}
                        <div className="flex items-center justify-center w-20 h-20 bg-neutral-50 rounded-xl border border-dashed border-spacing-10 border-[#d9d9d9]">
                            {files && !Array.isArray(files) ? (
                                files.type.startsWith("image/") ? (
                                    <Image width={100} height={100}
                                        src={URL.createObjectURL(files)}
                                        alt="Uploaded Image"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                ) : files.type === "application/pdf" ? (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <Image className="h-[50px] w-[50px]" height={50} width={50} src={PDFIMAGE} alt='PDF icon' />
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <Image className="h-[50px] w-[50px]" height={50} width={50} src={Others} alt='File' />
                                    </div>
                                )
                            ) : imgSrc ? (
                                <NextImage
                                    width={500}
                                    src={imgSrc}
                                    alt="Initial Image"
                                    className="w-20 h-20 object-cover rounded-xl"
                                />
                            ) : (
                                <UploadIcon className='text-black size-10' />
                            )}
                        </div>

                        <p className="text-xs text-gray-400">{label}</p>

                    </div>

                </div>

            </div>

            {Array.isArray(files) && files.length > 0 && (
                files.map((file, index) => (
                    
                    <div key={index} className="flex border rounded-lg p-1.5 border-gray-500 mt-3 w-full items-center relative">
                        {file && file.type.startsWith("image/") ? (
                            <Image src={URL.createObjectURL(file)} width={100} height={100}
                                alt={`Image ${index}`}
                                className="size-7 object-cover rounded" />
                        ) : file && file.type === "application/pdf" ? (
                            <div className="bg-white flex items-center justify-center rounded">
                                <Image className="size-7 object-cover rounded" height={60} width={60} src={PDFIMAGE} alt='PDF icon' />
                            </div>
                        ) : (
                            <div className="bg-white flex items-center justify-center rounded">
                                <Image className="size-7 object-cover rounded" height={60} width={60} src={Others} alt='File' />
                            </div>
                        )}

                        <p className="text-xs text-[#333] pt-0 px-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{file?.name || 'Unknown file'}</p>

                        <button
                            type='button'
                            onClick={() => handleRemoveFile(index)}
                            className="absolute -top-2 right-0 flex items-center justify-center bg-black px-1 rounded-full h-4 w-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                    </div>
                ))
            )}
        </>
    );
};

export default FileUpload;

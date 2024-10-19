import React from 'react';
import { useField, FieldHookConfig } from 'formik';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    className?: string;
    formGroupClass?: string;
    name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, className, formGroupClass, name, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <div className={`form-group ${formGroupClass || 'mb-1'}`}>
            <label className="form-label text-xs mb-1">{label}</label>
            <input
                {...field}
                {...props}
                className={`form-control shadow-none ${meta.touched && meta.error ? 'is-invalid' : ''} ${className || ''}`}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-600 text-xs font-light mt-2">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default CustomInput;

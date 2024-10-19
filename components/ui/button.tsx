import React from 'react';
import { Button, ButtonProps, Spinner } from '@nextui-org/react';

type CustomButtonColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type NormalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonVariants = 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow';
type SpinnerSizes = 'sm' | 'md' | 'lg' | undefined;

interface CustomButtonProps extends Omit<ButtonProps, 'color' | 'icon' | 'size' | 'disabled' | 'variant'> {
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color?: CustomButtonColor;
    size?: NormalSizes;
    className?: string;
    loading?: boolean;
    spinnerColor?: CustomButtonColor;
    spinnerSize?: SpinnerSizes;
    children?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    bordered?: boolean;
    variant?: ButtonVariants;
}

const button: React.FC<CustomButtonProps> = ({
    type = 'button',
    isDisabled = false,
    onClick,
    color = 'primary',
    size = 'md',
    className,
    loading = false,
    spinnerColor = 'default',
    spinnerSize = 'sm',
    children,
    startContent,
    endContent,
    bordered,
    variant = 'solid',
    ...rest
}) => {
    const buttonClasses = `${className || ''} ${
        isDisabled && 'bg-[#B4C1C0] cursor-not-allowed'
    }`;

    return (
        <Button
            type={type}
            isDisabled={isDisabled || loading}
            onClick={onClick}
            color={color}
            variant={variant}
            className={`${buttonClasses} flex items-center gap-2 rounded-full text-xs`}
            bordered={bordered}
            {...rest}
        >
            {loading ? (
                <Spinner color={spinnerColor} size={spinnerSize} />
            ) : (
                <>
                    {startContent && <span className="mr-2">{startContent}</span>}
                    {children}
                    {endContent && <span className="ml-2">{endContent}</span>}
                </>
            )}
        </Button>
    );
};

export default button;

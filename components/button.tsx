import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

interface ButtonProps extends VariantProps<typeof buttonClasses>{
    children: React.ReactNode;
    href: string;
    classNames?: string;
};

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: [
                "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]",
                "[&_.highlight]:ml-2",
            ],
            secondary: "",
            tertiary: "",
        },
        size: {
            small: "text-xs px-3 h-7 mr-[1.4rem]",
            medium: "text-sm px-4 h-8",
            large: "text-md px-6 h-12",
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
        },
    },
});

export const Button = ({ children, href, variant, classNames, size }: ButtonProps) => {
    return (
        <Link href={href} className={`${buttonClasses({ variant, size })} ${classNames}`}>
            {children}
        </Link>
    );
};
import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    startIcon?: React.ReactNode
    children: React.ReactNode
    variant: 'dark' | 'light'
}

export function Button({ startIcon, children, variant = 'light', ...props }: Props) {
    return (
        <button
            className={[
                'w-full py-4 rounded-xl mb-4 inline-flex items-center justify-center leading-8 gap-2 font-bold text-[18px]',
                variant === 'light'
                    ? ['bg-dark text-light hover:bg-teal ']
                    : ['bg-light text-dark hover:bg-orange'],
            ].join(' ')}
            {...props}
        >
            {startIcon}
            <span>{children}</span>
        </button>
    )
}

import React from 'react'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    children: React.ReactNode
}

export function Link({ href, children, ...props }: Props) {
    return (
        <a href={href} className="hover:text-salmon" target="_blank" rel="noreferrer" {...props}>
            {children}
        </a>
    )
}

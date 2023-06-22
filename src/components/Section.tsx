import React, { ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: ReactNode
}//is use for now explict defination type
//default prop is deprecated

export const Section = ({ children, title="My Section   " }: SectionProps) => {
    return(
        <>
        <h2>{title}</h2>
        <h2>{children}</h2>
        </>
    )
}



/*export const Section: React.FC<{ title: string}> = ({ children, title }) => {
    return (
        <section>
            <h2>{title}</h2>
            <h2>{children}</h2>
        </section>
    )
}
This old with implict defination of children

*/
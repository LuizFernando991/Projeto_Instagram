import Image from 'next/image'

export type TextLogoProps = {
    width: string
    height: string
}

export function TextLogo({ width, height }: TextLogoProps) {
    return (
        <Image
            src="/assets/images/instagram-text-logo.png"
            width={width}
            height={height}
            alt="logo"
        />
    )
}

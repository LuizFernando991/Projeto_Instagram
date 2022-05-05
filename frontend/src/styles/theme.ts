export const theme = {
    colors: {
        primaryColor: '#0A1128',
        secondaryColor: '#dc143c',
        white: '#fff',
        blue: '#0095f6',
    },
    backgroundColors: {
        grey: '#FAFAFA',
        white: '#FFF',
    },
    borderColor: {
        default: 'rgba(112, 112, 112, 0.4)',
        focus: 'rgba(112, 112, 112, 0.8)',
    },
    font: {
        family: {
            default: "'Segoe UI', Roboto, sans-serif",
            secondary: "'Montserrat', Roboto, sans-serif",
        },
    },
    media: {
        lteMedium: '(max-width: 768px)',
    },
    spacings: {
        xsmall: '8rem',
        small: '1.6rem',
        medium: '2.4rem',
        large: '3.2rem',
        xlarge: '4.0rem',
        xxlarge: '4.8rem',
        huge: '5.6rem',
        xhuge: '6.4rem',
    },
} as const

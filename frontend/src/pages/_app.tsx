import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { AuthProvider } from '../contexts/AuthContext'
import { GlobalStyles } from '../styles/global-styles'
import { AppProps } from 'next/dist/next-server/lib/router/router'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default MyApp

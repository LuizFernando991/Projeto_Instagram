import Link from 'next/link'
import { SearchBar } from '../SearchBar'
import { GrInstagram } from 'react-icons/gr'
import { TextLogo } from '../TextLogo'
import * as Styled from './styles'

export function Header() {
    return (
        <Styled.HeaderContainer>
            <Styled.Header>
                {/* Logo */}
                <div className="text-logo">
                    <Link href="/">
                        <a>
                            <TextLogo width="103" height="29" />
                        </a>
                    </Link>
                </div>
                <div className="icon-logo">
                    <Link href="/">
                        <a>
                            <GrInstagram />
                        </a>
                    </Link>
                </div>
                {/* Search */}
                <SearchBar />
                {/* Navbar */}
            </Styled.Header>
        </Styled.HeaderContainer>
    )
}

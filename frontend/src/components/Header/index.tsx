import Link from 'next/link'
import { SearchBar } from '../SearchBar'
import { NavBar } from '../NavBar'
import { GrInstagram } from 'react-icons/gr'
import { TextLogo } from '../TextLogo'
import { ReactElement } from 'react'
import * as Styled from './styles'

export function Header(): ReactElement {
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
                <div>
                    <SearchBar />
                </div>
                {/* Navbar */}
                <div>
                    <NavBar />
                </div>
            </Styled.Header>
        </Styled.HeaderContainer>
    )
}

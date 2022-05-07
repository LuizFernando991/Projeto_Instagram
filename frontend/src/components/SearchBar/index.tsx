import { useState } from 'react'
import { SearchDropdown } from '../SearchDropdown'
import { AiOutlineSearch } from 'react-icons/ai'
import * as Styled from './styles'
import { api } from '../../helpers/api'

export type SearchUser = {
    _id: string
    imageProfile: string
    name: string
    username: string
}

export function SearchBar() {
    const [isOnFocus, setIsOnFocus] = useState<boolean>(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchResults, setSearchResults] = useState<Array<SearchUser> | null>()

    async function handleOnChange(event: { target: HTMLInputElement }) {
        if (event.target.value !== '') {
            setIsDropdownOpen(true)
            setIsLoading(true)
            const data = await api.post('/user/searchuser', {
                query: event.target.value,
            })
            if (data.data.users.lenght === 0) {
                setSearchResults(null)
            } else {
                console.log(data.data.users)
                setSearchResults(data.data.users)
            }
            setIsLoading(false)
        } else {
            setIsDropdownOpen(false)
        }
    }

    return (
        <Styled.SearchBarContainer isOnFocus={isOnFocus}>
            {isOnFocus ? '' : <AiOutlineSearch />}
            <input
                onChange={handleOnChange}
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)}
                placeholder="Search"
                type="search"
            />
            <SearchDropdown isOpen={isDropdownOpen} isLoading={isLoading} searchResults={searchResults} />
        </Styled.SearchBarContainer>
    )
}

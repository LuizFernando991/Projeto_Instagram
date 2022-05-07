import { LoadingIcon } from '../LoadingIcon'
import { SearchUser } from '../SearchBar'
import { ProfileItem } from '../ProfileItem'
import * as Styled from './styles'

type DropDownDivProps = {
    isOpen?: boolean
    isLoading?: boolean
    searchResults: Array<SearchUser>
}

export function SearchDropdown({ isOpen = true, isLoading = false, searchResults }: DropDownDivProps) {
    return (
        <Styled.DropdownContainer isOpen={isOpen}>
            <Styled.Arrow />
            {isLoading ? (
                <div className="loading">
                    <LoadingIcon />
                </div>
            ) : (
                <Styled.SearchResultList>
                    {searchResults?.map((item) => (
                        <ProfileItem
                            key={item._id}
                            name={item.name}
                            imageProfile={item.imageProfile}
                            username={item.username}
                        />
                    ))}
                </Styled.SearchResultList>
            )}
        </Styled.DropdownContainer>
    )
}

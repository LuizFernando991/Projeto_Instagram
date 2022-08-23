import { useRef, useState } from 'react'
import { api } from '../../helpers/api'
import { CropComponent } from '../CropComponent'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { UserStoriesType } from '../../pages'
import * as Styled from './styles'

export type CreateNewStorieProps = {
    setIsCreatePostOpen: (isCreatePostOpen: boolean) => void
    setAllCurrentUserStories?: (allCurrentUserStories: UserStoriesType) => void
}

export function CreateNewStorie({ setIsCreatePostOpen, setAllCurrentUserStories }: CreateNewStorieProps) {
    const [uploadImage, setUpLoadImage] = useState(null)
    const inputRef = useRef<null | HTMLInputElement>(null)

    function handleOnIconClick() {
        if (useRef) {
            inputRef.current.click()
        }
    }

    async function handleOnSubmit(editedImage: File) {
        const formData = new FormData()
        if (!editedImage) {
            return
        }
        formData.append('image', editedImage)
        const response = await api.post('/storie/createstorie', formData)
        if (setAllCurrentUserStories) {
            setAllCurrentUserStories(response.data)
        }
        setIsCreatePostOpen(false)
    }

    function handleOnInputChange(event: { target: HTMLInputElement }) {
        if (event.target.files || event.target.files.length > 0) {
            setUpLoadImage(event.target.files[0])
        }
    }
    return (
        <Styled.CreateNewPostContainer>
            {!uploadImage ? (
                <>
                    <div className="input-icon" onClick={handleOnIconClick}>
                        <input type="file" style={{ display: 'none' }} ref={inputRef} onChange={handleOnInputChange} />
                        <BsPlusCircleDotted />
                    </div>
                    <h3>Select Photo</h3>
                </>
            ) : (
                <CropComponent uploadImage={uploadImage} format={4 / 7} handleOnImageCrop={handleOnSubmit} />
            )}
        </Styled.CreateNewPostContainer>
    )
}

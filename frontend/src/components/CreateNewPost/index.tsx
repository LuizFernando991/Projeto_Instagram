import { useState, useRef, useContext } from 'react'
import Image from 'next/image'
import { AuthContext } from '../../contexts/AuthContext'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsPlusCircleDotted } from 'react-icons/bs'
import * as Styled from './styles'
import { CropComponent } from '../CropComponent'
import { api } from '../../helpers/api'

export type CreateNewPostProps = {
    setIsCreatePostOpen: (isCreatePostOpen: boolean) => void
}

export function CreateNewPost({ setIsCreatePostOpen }: CreateNewPostProps) {
    const [allImages, setAllImage] = useState<Array<File>>([])
    const [uploadImageInput, setUploadImageInput] = useState<null | File>(null)
    const [currentSliderImage, setCurrentSliderImage] = useState<number>(0)
    const [description, setDescription] = useState<null | string>(null)
    const inputRef = useRef(null)
    const { user } = useContext(AuthContext)

    function handleOnIconClick() {
        if (inputRef) {
            inputRef.current.click()
        }
    }

    function handleOnDescriptionChange(event: { target: HTMLTextAreaElement }) {
        setDescription(event.target.value)
    }

    function handleOnInputChange(event: { target: HTMLInputElement }) {
        if (event.target.files || event.target.files.length > 0) {
            setUploadImageInput(event.target.files[0])
        }
    }

    function handleOnCropImage(cropedImage: File) {
        setAllImage((e) => [...e, cropedImage])
        setUploadImageInput(null)
        console.log(allImages)
    }

    function handleLeftArrowClick() {
        if (currentSliderImage > 0) {
            setCurrentSliderImage((e) => e - 1)
        }
    }

    function handleRightArrowClick() {
        if (currentSliderImage < allImages.length - 1) {
            setCurrentSliderImage((e) => e + 1)
        }
    }

    async function handleOnSubmit() {
        const formData = new FormData()
        formData.append('title', description)
        allImages.forEach((image) => {
            formData.append('images', image)
        })
        await api.post('/post/create', formData)
        setIsCreatePostOpen(false)
    }

    return (
        <Styled.CreateNewPostContainer>
            {uploadImageInput ? (
                <CropComponent uploadImage={uploadImageInput} format={1} handleOnImageCrop={handleOnCropImage} />
            ) : (
                <>
                    <Styled.ImagesContainer>
                        {allImages?.length ? (
                            <Styled.Slider isArrowShow={allImages.length >= 2}>
                                <div className="images-container" style={{ marginLeft: -(currentSliderImage * 480) }}>
                                    {allImages.map((image, key) => (
                                        <img key={key} src={URL.createObjectURL(image)} />
                                    ))}
                                </div>
                                <BsFillArrowLeftCircleFill className="arrow leftArrow" onClick={handleLeftArrowClick} />
                                <BsFillArrowRightCircleFill
                                    className="arrow rightArrow"
                                    onClick={handleRightArrowClick}
                                />
                            </Styled.Slider>
                        ) : (
                            <Styled.Input className="input-icon" onClick={handleOnIconClick}>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={inputRef}
                                    onChange={handleOnInputChange}
                                />
                                <BsPlusCircleDotted />
                                <h1>Select a photo</h1>
                            </Styled.Input>
                        )}
                    </Styled.ImagesContainer>
                    {allImages?.length ? (
                        <>
                            <Styled.DescriptionContainer>
                                <div className="user-info">
                                    {user?.imageProfile ? (
                                        <Image
                                            width="35"
                                            height="35"
                                            src={`http://localhost:5050/images/profileImages/${user?.imageProfile}`}
                                        />
                                    ) : (
                                        <Image width="35" height="35" src="/assets/images/defaultImageProfile.jpg" />
                                    )}
                                    <h3>{user?.username}</h3>
                                </div>
                                <textarea
                                    placeholder="Write a caption..."
                                    name="description"
                                    cols={30}
                                    rows={10}
                                    onChange={(e) => handleOnDescriptionChange(e)}
                                    value={description}
                                ></textarea>
                                <Styled.Input onClick={handleOnIconClick}>
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                        onChange={handleOnInputChange}
                                    />
                                    <BsPlusCircleDotted />
                                    <h1>Add more photos</h1>
                                </Styled.Input>
                            </Styled.DescriptionContainer>
                            <Styled.ButtonContainer>
                                <button onClick={handleOnSubmit}>Share</button>
                            </Styled.ButtonContainer>
                        </>
                    ) : (
                        ''
                    )}
                </>
            )}
        </Styled.CreateNewPostContainer>
    )
}

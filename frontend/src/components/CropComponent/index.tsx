import { useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import getCroppedImg from '../../helpers/cropImage'
import * as Styled from './styles'

export type CropComponentProps = {
    uploadImage: File
    handleOnImageCrop: (editedImage: File) => void
    format: number
}

export function CropComponent({ uploadImage, format, handleOnImageCrop }: CropComponentProps) {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState<number>(1)
    const [rotation, setRotation] = useState<number>(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<null | Area>(null)
    const image = URL.createObjectURL(uploadImage)

    function cropComplete(croppedArea: Area, croppedAreaPixels: Area) {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    async function cropImage() {
        const { file } = await getCroppedImg(image, croppedAreaPixels, rotation)
        const newFile = new File([file], 'storieImage.jpg', { type: 'image/jpeg', lastModified: new Date().getTime() })
        handleOnImageCrop(newFile)
    }
    return (
        <Styled.CropperContainer>
            <Styled.CropperImage>
                <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={format}
                    onZoomChange={setZoom}
                    onRotationChange={setRotation}
                    onCropChange={setCrop}
                    onCropComplete={cropComplete}
                />
            </Styled.CropperImage>
            <Styled.SliderContainer>
                <span className="zoom-label">Zoom:</span>
                <Slider
                    valueLabelDisplay="auto"
                    valueLabelFormat={ZoomPercent}
                    min={1}
                    max={3}
                    step={0.01}
                    value={zoom}
                    onChange={(e, zoom: number) => setZoom(zoom)}
                />
                <span className="zoom-label">Rotation:</span>
                <Slider
                    valueLabelDisplay="auto"
                    min={0}
                    max={180}
                    value={rotation}
                    onChange={(e, rotation: number) => setRotation(rotation)}
                />
            </Styled.SliderContainer>
            <Styled.ButtonContainer>
                <button onClick={cropImage}>Submit</button>
            </Styled.ButtonContainer>
        </Styled.CropperContainer>
    )
}

function ZoomPercent(value: number) {
    return `${Math.round(value * 100) - 100}%`
}

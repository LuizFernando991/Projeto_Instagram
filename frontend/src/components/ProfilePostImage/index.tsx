import * as Styled from './styles'
import { PostType } from '../../pages/[username]'
import { BsFillHeartFill } from 'react-icons/bs'
import { TbBoxMultiple } from 'react-icons/tb'
import { FaComment } from 'react-icons/fa'

export type ProfilePostImageProps = {
    post: PostType
    index: number
    handleOnPreviewImageClick: (postIndex: number) => void
}

export function ProfilePostImage({ post, handleOnPreviewImageClick, index }: ProfilePostImageProps) {
    const numberOfLikes = post.postLikes.length
    const numberOfComments = post.postComments.length
    return (
        <Styled.PostImagePreviewContainer>
            <img width="300" height="300" src={`http://localhost:5050/images/postImages/${post.images[0]}`} />
            <Styled.HoverContainer onClick={() => handleOnPreviewImageClick(index)}>
                <div>
                    <span>
                        <p>{numberOfLikes}</p>
                        <BsFillHeartFill />
                    </span>
                    <span>
                        <p>{numberOfComments}</p>
                        <FaComment />
                    </span>
                </div>
            </Styled.HoverContainer>
            {post.images.length > 1 ? (
                <div className="multipleIcon">
                    <TbBoxMultiple />
                </div>
            ) : (
                ''
            )}
        </Styled.PostImagePreviewContainer>
    )
}

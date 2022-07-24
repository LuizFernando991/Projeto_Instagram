import { useEffect, useRef } from 'react'

export type InfiniteScrollProps = {
    getMorePosts: () => void
}

export function InfiniteScroll({ getMorePosts }: InfiniteScrollProps) {
    const divRef = useRef()

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                observer.disconnect()
                getMorePosts()
            }
        }, options)
        observer.observe(divRef.current)

        return () => {
            observer.disconnect()
        }
    })
    return <div ref={divRef} />
}

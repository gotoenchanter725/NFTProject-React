import React, { FC, useEffect, useState } from 'react'
import './styles.scss'

interface CarouselProps {
  children: any
}
const Carousel:FC<CarouselProps> = (props: CarouselProps) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length )) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex >= 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="m_carousel-container">
            <div className="m_carousel-wrapper">
                <div
                    className="m_carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`m_carousel-content m_show-2`}
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`, marginLeft: 50 }}
                    > 
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
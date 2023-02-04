/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react';
import jellyfish from "../../assests/images/Jellyfish.svg";
import "./style.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Bg: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef<any>(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(
            element.querySelector(".m_jellyfish-1"),
            {
                y: 600
            },
            {
                y: 0,
                duration: 0.7,
                ease: "power4",
                scrollTrigger: {
                    trigger: element.querySelector(".m_small-9"),
                    start: "-150 40%",
                    end: "+=100",
                    scrub: true,
                }
            }
        );
    }, []);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(
            element.querySelector(".m_jellyfish-2"),
            {
                y: 300
            },
            {
                y: 0,
                duration: 0.9,
                ease: "power4",
                scrollTrigger: {
                    trigger: element.querySelector(".m_small-2"),
                    start: "-150 40%",
                    end: "+=200",
                    scrub: true,
                }
            }
        );
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(element.querySelector(".m_jellyfish-3"), {
            y: 300
        }, {
            y: 0,
            ease: "power4",
            scrollTrigger: {
                trigger: element.querySelector(".m_small-8"),
                scrub: true,
                start: "-150 60%",
                end: "+=200",
            }
        });
    }, []);

    const renderJellyFish = () => {
        return <>
            <img src={jellyfish} className="m_jellyfish-1" />
            <img src={jellyfish} className="m_jellyfish-2" />
            <img src={jellyfish} className="m_jellyfish-3" />
        </>
    }

    const renderBubbles = () => {
        return <>
            <div className="m_small-1"></div>
            <div className="m_small-2"></div>
            <div className="m_small-3"></div>
            <div className="m_small-4"></div>
            <div className="m_small-5"></div>
            <div className="m_small-6"></div>
            <div className="m_small-7"></div>
            <div className="m_small-8"></div>
            <div className="m_small-9"></div>
        </>
    }

    return (
        <div className="m_background scroll-triger" ref={ref}>
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}
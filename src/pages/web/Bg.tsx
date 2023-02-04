/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react';
import jellyfish from "../../assests/images/Jellyfish.svg";
import "./style.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Bg:React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef<any>(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(
            element.querySelector(".jellyfish-1"),
            {
                y: 800
            },
            {
                y: -100,
                duration: 0.6,
                ease: "none",
                scrollTrigger: {
                    trigger: element.querySelector(".small-1"),
                    start: "0 30%",
                    end: "+=300",
                    scrub: true,
                }
            }
        );
    }, []);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(
            element.querySelector(".jellyfish-2"),
            {
                y: 700
            },
            {
                y: 0,
                duration: 1.4,
                ease: "none",
                scrollTrigger: {
                    trigger: element.querySelector(".small-2"),
                    start: "0 50%",
                    end: "+=300",
                    scrub: true,
                }
            }
        );
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(element.querySelector(".jellyfish-3"), {
            y: 700
        }, {
            y: 0,
            ease: "none",
            duration: 1.8,
            scrollTrigger: {
                trigger: element.querySelector(".small-7"),
                scrub: true,
                start: "200 40%",
                end: "+=200",
            }
        });
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        gsap.fromTo(element.querySelector(".jellyfish-4"), {
            y: 800
        }, {
            y: 0,
            ease: "none",
            duration: 1.0,
            scrollTrigger: {
                trigger: element.querySelector(".small-7"),
                scrub: true,
                start: "0 60%",
                end: "+=200",
            }
        });
    }, []);

    const renderJellyFish = () => {
        return <div className="home-bg">
            <img src={jellyfish} className="jellyfish-home-1"/>
            <img src={jellyfish} className="jellyfish-home-2"/>
            <img src={jellyfish} className="jellyfish-home-3"/>
            <img src={jellyfish} className="jellyfish-home-4"/>
        </div>
    }

    const renderBubbles = () => {
        return <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
    </div>
    }

    return (
        <div className="background" ref={ref}>
            {renderBubbles()}
            {renderJellyFish()}
        </div>
    );
}
/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

function useOnScreen(ref: any, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let currentRef: any = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin
            }
        );
        if (ref.current) {
            currentRef = ref.current;
            observer.observe(currentRef);
        }
        return () => {
            observer.unobserve(currentRef);
        };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}
interface props {
    children: any;
    direction: string
}

const LazyShow: FC<props> = ({ children, direction }) => {
    const controls = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    useEffect(() => {
        if (onScreen) {
            controls.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                }
            });
        } else {
            controls.start(initial());
        }
    }, [onScreen, controls]);

    const initial = () => {
        if(direction === "left") return { opacity: 0, x: -120 }
        else if(direction === "right") return { opacity: 0, x: 120 }
        else if (direction === "top") return { opacity: 0, y: 120 }
        else if (direction === "down") return { opacity: 0, y: -120 }
        else return {}
    };

    return (
        <motion.div
            className="lazy-div"
            ref={rootRef as any}
            initial={initial()}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default LazyShow;

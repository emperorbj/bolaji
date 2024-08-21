
"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
import { Button } from "./ui/button";
const WorkSliderButtons = ({containerStyles, btnStyles, iconStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <Button className={btnStyles} onClick={() => swiper.slidePrev()} >
                <PiCaretLeftBold className={iconStyles}/>
            </Button>
            <Button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyles}/>
            </Button>
        </div>
    )
}

export default WorkSliderButtons

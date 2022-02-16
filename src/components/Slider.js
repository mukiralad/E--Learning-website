import React from 'react';
import '../styles/Slider.css';
import { useInView } from 'react-intersection-observer';


const Slider = ({ imageSrc, title, subtitle, courseRoute, flipped}) => {
    
    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    const renderContent = () => {
        if(!flipped){
            return <>
                <img src={imageSrc} alt='Image1' className="slider__image" onClick={()=>{window.location.pathname = courseRoute}}/>
                <div className='slider__content'>
                    <h2 className='slider__title'> {title} </h2>
                    <p> {subtitle} </p>
                </div>
            </>
        } else{
            return <>
                <div className='slider__content'>
                    <h2 className='slider__title'> {title} </h2>
                    <p> {subtitle} </p>
                </div>
                <img src={imageSrc} alt='Image2' className="slider__image" onClick={()=>{window.location.pathname = courseRoute}}/>
            </>
        }
    }

    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    )
}

export default Slider;
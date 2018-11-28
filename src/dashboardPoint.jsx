import React from 'react';

export const Circle = (props) => {
    let circleStyle = props.min ? 'c100 p12 small' : 'c100 p50 small';
    return(
        <div>
            <span>{props.title}</span><br></br>
            <div className={circleStyle}>
                <span>{props.min && props.point ? 1 : props.point}</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>  
            </div>
        </div>
    );
};
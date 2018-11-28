import React from 'react';
export const Story = (props) => {
    return(
        <div className='col-12 jumbotron' style={{height:'100px'}}>
            <div style={{marginTop:'-30px'}}>
                <h5>
                    <span>{props.stories[0].title}</span>
                </h5>
                <p>{props.stories[0].description}</p>
            </div>
        </div>
    );
}
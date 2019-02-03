import React from 'react';

export default class ImageRow extends React.Component {
    render() {
        const imgPaths = ['./images/r1.png', './images/r2.png', './images/r3.png', 
        './images/r4.png', './images/r5.png', './images/r6.jpg', 
        './images/r7.png', './images/r8.png', './images/r9.png', './images/r10.png'];

        let imgList = imgPaths.map(image => 
            <input key={image} type={'image'} src={image} className={image}></input>
        );

        return (
            <div className='img_row_container'>
                {imgList}
            </div>
        );
    }
}

/* This prop is used for testing */
ImageRow.defaultProps = {
    isReversed: false
}

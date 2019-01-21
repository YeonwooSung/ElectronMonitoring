import React from 'react';

import ImageRow from './ImageRow';

export default class Monitor extends React.Component {
    render() {
        return (
            <div id='monitor'>
                <ImageRow></ImageRow>
                <ImageRow isReversed={true}></ImageRow>
                <ImageRow></ImageRow>
                <ImageRow isReversed={true}></ImageRow>
                <ImageRow></ImageRow>
            </div>
        );
    }
}

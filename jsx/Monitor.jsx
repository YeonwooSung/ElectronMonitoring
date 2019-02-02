import React from 'react';

import ImageRow from './ImageRow';

export default class Monitor extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "./public/javascripts/getImageViaAjax.js";
        script.async = true;

        document.head.appendChild(script);
    }

    render() {
        return (
            <div id='monitor'>
                <ImageRow></ImageRow>
                <ImageRow></ImageRow>
                <ImageRow></ImageRow>
                <ImageRow></ImageRow>
                <ImageRow></ImageRow>
            </div>
        );
    }
}

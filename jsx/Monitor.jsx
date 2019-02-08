import React from 'react';

import ImageRow from './ImageRow';

export default class Monitor extends React.Component {
    componentDidMount() {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");

        script1.src = "./public/javascripts/loader.js";
        script1.async = true;

        script2.src = "./public/javascripts/openChatRoom.js";
        script2.async = true;

        document.head.appendChild(script1);
        document.head.appendChild(script2);
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

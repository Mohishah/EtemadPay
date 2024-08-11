'use client'
import {
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share'

import React from 'react';

const Share = ({myId,title}) => {
    return (
        <div>
            <EmailShareButton url={`http://127.0.0.1:8000/blog/${myId}`} subject={title} body="body">
                <EmailIcon size={32} round />
            </EmailShareButton>
            <TelegramShareButton url={`http://127.0.0.1:8000/blog/${myId}`} title={title}>
                <TelegramIcon size={32} round />
            </TelegramShareButton>
            <WhatsappShareButton url={`http://127.0.0.1:8000/blog/${myId}`} title={title} separator=":: ">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={`http://127.0.0.1:8000/blog/${myId}`}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </div>
    );
}

export default Share;

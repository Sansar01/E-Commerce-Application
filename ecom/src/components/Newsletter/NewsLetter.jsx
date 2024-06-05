import React from 'react'
import Button from '@mui/material/Button'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import './NewsLetter.css'

function NewsLetter() {
    return (
        <div className="newsletterBanner">
            <SendOutlinedIcon />
            <input type="text" placeholder="Your Email Address" />
            <Button className="bg-g">Subscribe</Button>
        </div>
    )
}

export default NewsLetter
import React from 'react'
import Button from '@mui/material/Button'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

function NewLetter() {
    return (
        <div className="newsletterBanner">
            <SendOutlinedIcon />
            <input type="text" placeholder="Your Email Address" />
            <Button className="bg-g">Subscribe</Button>
        </div>
    )
}

export default NewLetter
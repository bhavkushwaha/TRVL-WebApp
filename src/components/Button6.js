import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES= ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', "btn--large"]

export const Button6 = ({children,type,onClick,buttonStyle,buttonSize}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/offers' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>

            {/* <Button>
                Get Started
            </Button> */}
        </Link>
    )
}
import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage.js'
import { Logo } from '../components'
import { useNavigate } from 'react-router-dom'


export default function Landing() {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/register')
    }


  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="conatiner page">
            {/* info */}
            <div className="info">
                <h1>
                    job<span>tracking</span> app
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum placeat, architecto esse, itaque labore voluptatum, eligendi odit sequi eveniet illo dicta atque accusamus.
                </p>
                <button className='btn btn-hero' onClick={handleClick}>Login/Register</button>
            </div>
            <img src={main} alt='job-hung-img' className='img main-img' />
        </div>
    </Wrapper>
  )
}

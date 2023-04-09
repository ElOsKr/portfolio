import React from 'react'
import { CopyrightContainer, MainContainer, SocialContainer } from './FooterStyle'
import { user } from '../../data/user'

function Footer() {
  return (
    <MainContainer>
        <CopyrightContainer>
            © Óscar José Alcivar Quijije
        </CopyrightContainer>
        <SocialContainer>
            {user.social.map((item) =>
                <a href={item.link} target='_blank' key={item.id}>
                    <svg width={item.width} height={item.height}>
                        <path d={item.icon} fill='white'></path>
                    </svg>
                </a>
            )}
        </SocialContainer>
    </MainContainer>
  )
}

export default Footer
import React from 'react'
import { ImgContainer, MainContainer, UserCV, UserDescription, UserJob, UserMedia, UserName } from './IntroductionStyle'
import { user } from '../../data/user'

function Introduction() {

  return (
    <MainContainer>
        <ImgContainer>
            <img src={user.image} alt="oscarImg" />
        </ImgContainer>
        <UserName>
            {user.name}
        </UserName>
        <UserJob>
            {user.job+` </>`}
        </UserJob>
        <UserCV href={user.cv} target='_blank'>
            Mi Curriculum
        </UserCV>
        <UserDescription>
            <UserMedia>
                {user.social.map((item) =>
                    <p key={item.id}>
                        <a href={item.link} target='_blank'>
                            <svg width={item.width} height={item.height}>
                                <path d={item.icon} fill='white'></path>
                            </svg>
                        </a>
                    </p>
                )}
            </UserMedia>
            <h1>Sobre mi</h1>
            <div>
                {user.aboutMe.map((p,i)=>
                    <p key={i}>
                        {p}
                    </p>
                )}
            </div>
        </UserDescription>
    </MainContainer>
  )
}

export default Introduction
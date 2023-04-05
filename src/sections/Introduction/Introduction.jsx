import React from 'react'
import { ImgContainer, MainContainer, UserDescription, UserJob, UserName } from './IntroductionStyle'
import img from '../../assets/foto_placeholder.jpg'

function Introduction() {
  return (
    <MainContainer>
        <ImgContainer>
            <img src={img} alt="oscarImg" />
        </ImgContainer>
        <UserName>
            Óscar José Alcivar Quijije
        </UserName>
        <UserJob>
            FullStack Developer {`</>`}
        </UserJob>
        <UserDescription>
            <h1>Sobre mi</h1>
            <p>
                ¡Muy buenas! Me llamo Óscar
            </p>
        </UserDescription>
    </MainContainer>
  )
}

export default Introduction
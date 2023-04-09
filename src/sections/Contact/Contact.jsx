import React from 'react'
import { MailContainer, MainContainer } from './ContactStyle'

function Contact() {
  return (
    <MainContainer>
        <h1>Contacto</h1>
        <MailContainer>
            <p>Contáctame a través de mi correo electrónico</p>
            <a href="mailto:eloskr16@gmail.com" target='_blank' rel='noreferrer'>eloskr16@gmail.com</a>
        </MailContainer>
    </MainContainer>
  )
}

export default Contact
import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
      {text}
    </p>
    <Link to={link} className='neo-brutalism-white neo-btn' >
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Salut, moi c'est <span className='font-semibold'> Alex Balomog</span> 👋🏽
      <br />
      Développeur web résidant en France
    </h1>
  ),
  2: (
    <InfoBox 
      text="J'ai travaillé avec diverses entreprises et acquis des compétences avec le temps"
      link='/about'
      btnText='En savoir plus'
    />
  ),
  3: (
    <InfoBox 
      text="Curieux de connaître l'impact de mon travail?"
      link='/projects'
      btnText='Visitez mon Portfolio'
    />
  ),
  4: (
    <InfoBox 
      text="Un projet réaliser ou recherche d'un développeur ? Je ne suis qu'à quelques frappes de votre clavier"
      link='/contact'
      btnText="Parlons-en"
    />
  )
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
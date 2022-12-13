import React from 'react'
import logo from '../img/quiz.png'

export default function LandingPage(props) {

  const [options, onStart, isVisible] = [props.options, props.onStart, props.isVisible]

  // prints out name of category on landing page based on user input
  let category = ''
  switch(options[1]) {
    case '9':
      category = 'general knowledge'
      break
    case '17':
      category = 'science & nature'
      break
    case '18':
      category = 'computers'
      break
    case '19':
      category = 'mathematics'
      break
    case '20':
      category = 'mythology'
      break
    case '21':
      category = 'sports'
      break
    case '22':
      category = 'geography'
      break
    case '23':
      category = 'history'
      break
    case '24':
      category = 'politics'
      break
    case '25':
      category = 'art'
      break
    case '26':
      category = 'celebrities'
      break
    case '27':
      category = 'animals'
      break
    case '28':
      category = 'vehicles'
      break
    case '31':
      category = 'Japanese anime & manga'
      break
    default: break
  }

  const showMenu = () => {
    isVisible(true)
  }

  return (
    <div className="flex-wrapper">
      <div className="content">

        <div className='absolute bottom-[234px] left-[660px]'>
        <button className='bg-transparent text-white font-poppins py-1 px-2 text-sm rounded md:ml-8 hover:text-red-500 duration-500'>
        LOGIN
        </button>
        </div>
      
        <div className='relative top-[10px]'>
        <span className='text-8xl mr-1 pt-2 text-white'>
        <ion-icon name="book-outline"></ion-icon>
        </span>
        </div>
        
        <h1>TRIVIA QUIZ</h1>
        <p> Test your knowledge! When you start the quiz, you will have to answer { options[2] ? options[2] : 5}{ options[1] ? ` ${category} questions` :  ` random questions` }. 
        Modify quiz preferences <span className="modify-settings" onClick={showMenu}>above</span>. Good luck!</p>
        <button className="quizzical-button" onClick={onStart}> Start quiz!</button>
      </div>
      <div className="footer">
        <footer> Meticulously made by <a href="https://github.com/aakeohane/react-trivia" rel="noreferrer" target="_blank">Aaron</a></footer>
      </div>
    </div>
  )
}
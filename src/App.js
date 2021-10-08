
import { useState } from 'react'
import './App.css';

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <div className='wrapper'>
      <div className='accordian'>

        {data.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? '-' : '+'}</span>
            </div>
            <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}

      </div>
    </div>
  )
}

const data = [
  {
    question: 'Why Us',
    answer:
    <img src='https://static.javatpoint.com/images/javatpoint-training60.png' alt="sample image" width="400" height="200"></img>  
    // 'images/background.jpg'
  },
  {
    question: 'Our Story',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
  },
  {
    question: 'Company Direction',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
  }

]

export default App;

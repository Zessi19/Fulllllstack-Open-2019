import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=({handleClick, text}) => {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}

const Statistic=({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics=({good, neutral, bad}) => {
  const sum=() => {
    return (good + neutral + bad)
  }
  
  const average=() => {
    return (good*1 + neutral*0 + bad*(-1))/sum()
  }

  const posPercent=() => {
    return (good/sum())*100 + " %"
  }

  if (sum() === 0) {
    return (
        <p>No feedback given</p>
    )
  }

  return (
      <table>
        <Statistic text="Good:" value={good}/>
        <Statistic text="Neutral:" value={neutral}/>
        <Statistic text="Bad:" value={bad}/>

        <Statistic text="All:" value={sum()}/>
        <Statistic text="Average:" value={average()}/>
        <Statistic text="Positive:" value={posPercent()}/>
      </table>
  )
}

const App=() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Give Feedback</h1>
        <div>
            <Button handleClick={() => setGood(good + 1)} text="Good"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
            <Button handleClick={() => setBad(bad + 1)} text="Bad"/>  
        </div>

        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Anecdote=({element, voteList}) => {
    return (
        <div>
            <p>{anecdotes[element]}</p>
            <p>Votes: {voteList[element]}</p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(Math.floor(6*Math.random()))
    const [voteList, setVoteList] = useState([0,0,0,0,0,0])

    const addVote=() => {
        const copy = {...voteList}
        copy[selected] += 1
        setVoteList(copy)
    }

    const mostVotedElement=() => {
        let iMax = 0
        let valueMax = 0

        for (let i=0; i<anecdotes.length; i++) {
            if (valueMax < voteList[i]) {
                iMax = i
                valueMax = voteList[i]
            }
        }

        return iMax
    }
   
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote element={selected} voteList={voteList}/>

            <button onClick={() => addVote()}>
                Vote 
            </button>
            
            <button onClick={() => setSelected(Math.floor(6*Math.random()))}> 
                Next anecdote 
            </button>

            <h1>Most voted anecdote</h1>
            <Anecdote element={mostVotedElement()} voteList={voteList}/>
        </div>
    )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

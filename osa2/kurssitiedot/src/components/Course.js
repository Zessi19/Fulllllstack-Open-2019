import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/> 
    </div>
  )
}

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}

const Content = ({parts}) => { 
  const contentRows = () =>
    parts.map(i => <Part key={i.id} name={i.name} ex={i.exercises}/>)

  return (
    <div>
      {contentRows()}
    </div> 
  )
}

const Part = ({name, ex}) => {
  return (
    <p>{name} {ex}</p>
  )
}

const Total = ({parts}) => {
  const countExercises = () =>
    parts.reduce((sum, i) => sum + i.exercises, 0)

  return (
    <p style={{fontWeight:"bold"}}> Total of {countExercises()} exercises </p>    
  )
}

export default Course
import React from 'react'

// function person() {
//     return <h2>This works!</h2>
// }

// var person = function() {
//     return <h2>This is the es5 syntax.  Alson works but not what we will be using.</h2>
// }

// ES6 syntax - preferred
const person = (props) => {
    return <p>I am {props.name} and I am {props.age} years old</p>
}

export default person
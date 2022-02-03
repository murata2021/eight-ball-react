import React,{useState} from 'react';
import './EightBall.css'


const EightBall=(props)=>{

    const initialState={msg:'think of a question',color:'black'}
    const initialCounter={};

    // const answers=[
    //     { msg: "It is certain.", color: "green" },
    //     { msg: "It is decidedly so.", color: "green" },
    //     { msg: "Without a doubt.", color: "green" },
    //     { msg: "Yes - definitely.", color: "green" },
    //     { msg: "You may rely on it.", color: "green" },
    //     { msg: "As I see it, yes.", color: "green" },
    //     { msg: "Most likely.", color: "green" },
    //     { msg: "Outlook good.", color: "green" },
    //     { msg: "Yes.", color: "green" },
    //     { msg: "Signs point to yes.", color: "goldenrod" },
    //     { msg: "Reply hazy, try again.", color: "goldenrod" },
    //     { msg: "Ask again later.", color: "goldenrod" },
    //     { msg: "Better not tell you now.", color: "goldenrod" },
    //     { msg: "Cannot predict now.", color: "goldenrod" },
    //     { msg: "Concentrate and ask again.", color: "goldenrod" },
    //     { msg: "Don't count on it.", color: "red" },
    //     { msg: "My reply is no.", color: "red" },
    //     { msg: "My sources say no.", color: "red" },
    //     { msg: "Outlook not so good.", color: "red" },
    //     { msg: "Very doubtful.", color: "red" },
    //   ]

      const randomGen=(arr)=>{
          const randomIdx=Math.floor(Math.random()*arr.length)
          return arr[randomIdx]
      }

      const askQuestion=()=>{
          const randomQ=randomGen(props.answers)
          console.log(randomQ)
        
        if (randomQ.color!=='black' || true){
            counter[randomQ.color]=(counter[randomQ.color]|0)+1
            setCounter(counter)
        }
        setQuestion(randomQ)
      }

      const restart=()=>{
          setQuestion(initialState)
          setCounter({})
      }

    const [question,setQuestion]=useState(initialState)
    const [counter,setCounter]=useState(initialCounter)

    console.log(counter)

    return (
        <div className='circle_container'>
            <div  style={{backgroundColor: question.color}} className='circle_main
'>
		<       div className="circle_text_container">
                    <div className='circle_text'>
                        <h1 onClick={()=>askQuestion()}>{question.msg}</h1>
                        <button onClick={()=>restart()}>Restart</button>
                    </div>
                </div>
            </div>
            <div>
                <p>So far  red:{counter.red || 0},  green: {counter.green || 0},  goldenrod: {counter.goldenrod || 0} answers have been given.</p>
            </div>
        </div>
    )
}

EightBall.defaultProps={
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
    
}

export default EightBall
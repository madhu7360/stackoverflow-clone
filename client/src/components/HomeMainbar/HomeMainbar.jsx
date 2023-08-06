import React from 'react'
import {  useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
//import Loader from "../Loader/Loader";

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)
  //console.log(questionsList)

  // var questionList = [{
  //   _id:1,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "what is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node.js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn:"jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id:2,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "what is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn:"jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id:3,
  //   upVotes:4,
  //   downVotes:2,
  //   noOfAnswers: 3,
  //   questionTitle: "what is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node.js", "mongodb"],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn:"jan 2",
  //     userId:2,
  //   }]
  // }]

  

  const checkAuth = () =>{
    if(user === null){
      alert("login or signup to ask question")
      navigate('./Auth')
    }else{
      navigate('./AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1> Top Questions</h1> : <h1> All Question</h1>
          }
          <button  onClick= {checkAuth} className='ask-btn'> Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1>:
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList = {questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar

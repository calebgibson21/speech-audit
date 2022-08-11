import React, {useEffect, useState, useReducer} from 'react';
import {supabaseClient} from '../lib/supabase';
import Answers from './Answers';
import Question from './Question';
import useRenderCounter from '../hooks/renderCounter';
import AnswerTiles from './AnswerTiles';




const Body = () => {
    // const [question, setQuestion] = useState(getRandomQuestion());
    const [answerGiven, setAnswerGiven] = useState(false);
    const [supabaseQuestion, setSupabaseQuestion] = useState();
    


    // const initialState = {
    //     answetGiven: false,
    //     supabaseQuestion: {},
    //     isFetched: false,
    //     isAnswered: false,
    //     answered: false,
    //     correctAnswer: "",
    //     options: [],
    //     question: "",
    //     promptAnswer: "",
    //     isCorrectTile: false,
    //     tileColor: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    // }

    useRenderCounter('Body');


    //fetches a random question from the database
    const getSupabaseData = async () => {
        const {data, error} = await supabaseClient
        .from("randomized_prompts")
        .select("*")
        .limit(1)
        .single()
        setSupabaseQuestion(data);
        if (error) {
            console.error(error);
        }
        console.log("Database info retrieved");
        setAnswerGiven(false);
        return data;
       }
       


       useEffect(() => {
        getSupabaseData();
    }, [])



    //if the question is answered, set the answerGiven to true
    function handleAnswerGiven () {
        setAnswerGiven(true);
    }

    function handleNewPrompt () {
        getSupabaseData();
    }


    return (<>
        {supabaseQuestion &&
        <div className='container'>
            <div className='flashcard-grid'>
                <div className='grid-wrapper'>
                    <h2>Question Type</h2>
                        <ul style={{width: "100%", listStyleType: "none", padding: "0px", margin: "0px"}}>

                            {supabaseQuestion.options.map((answers, index) => {
                                return (
                                <AnswerTiles 
                                    key={index} 
                                    answers={answers} 
                                    correctAnswer={supabaseQuestion.answer} 
                                    answered={handleAnswerGiven} 
                                    isAnswered={answerGiven}
                                    handleNewPrompt={handleNewPrompt}/>
                            )})}
                        </ul>
                </div>
                <div className='grid-wrapper'>
                    <h2>Prompt</h2>
                    <div className='card'>
                        {supabaseQuestion.prompt}
                    </div>
                    <button className='button' onClick={handleNewPrompt}>
                        {answerGiven ? "Next Prompt" : "Shuffle Prompt"}
                    </button>
                </div>
            </div>
        </div>
}
        </>
    )
    }

export default Body
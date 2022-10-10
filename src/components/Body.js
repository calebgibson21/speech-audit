import React, {useEffect, useState, useReducer} from 'react';
import {supabaseClient} from '../lib/supabase';
import useRenderCounter from '../hooks/renderCounter';
import AnswerTiles from './AnswerTiles';
import TimerController from '../pages/mock-interview';
import styled from 'styled-components';




const Body = () => {
    // const [question, setQuestion] = useState(getRandomQuestion());
    const [answerPending, setAnswerPending] = useState(true);
    const [supabaseQuestion, setSupabaseQuestion] = useState();
    
    

    const initialState = {
        answerPending: true,
        supabaseQuestion: {} 
    }

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
        setAnswerPending(true);
        return data;
       }
       


       useEffect(() => {
        getSupabaseData();
    }, [])



    //if the question is answered, set the answerPending to false
    function handleAnswerPending () {
        setAnswerPending(false);
    }

    function handleNewPrompt () {
        getSupabaseData();
    }


    return (<>
        {supabaseQuestion &&
        <div className='container'>
            <div className='flashcard-grid'>
                <div className='grid-wrapper-1'>
                    <h2>Question Type</h2>
                        <ul style={{width: "100%", listStyleType: "none", padding: "0px", margin: "0px"}}>

                            {supabaseQuestion.options.map((answers, index) => {
                                return (
                                <AnswerTiles 
                                    key={index} 
                                    answers={answers} 
                                    correctAnswer={supabaseQuestion.answer} 
                                    pendingAnswer={handleAnswerPending}
                                    stillPending={answerPending}
                                    handleNewPrompt={handleNewPrompt}/>
                            )})}
                        </ul>
                </div>
                <div className='grid-wrapper-2'>
                    <h2>Prompt</h2>
                    <div className='card'>
                        {supabaseQuestion.prompt}
                    </div>
                    <button className='button' onClick={handleNewPrompt}>
                        {!answerPending ? "Next Prompt" : "Shuffle Prompt"}
                    </button>
                </div>
            </div>
        </div>
}
        </>
    )
    }

export default Body



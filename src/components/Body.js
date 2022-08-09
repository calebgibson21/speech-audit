import React, {useEffect, useState} from 'react';
import {supabaseClient} from '../lib/supabase';
import Answers from './Answers';
import Question from './Question';
import useRenderCounter from '../hooks/renderCounter';




const Body = () => {
    // const [question, setQuestion] = useState(getRandomQuestion());
    const [answerGiven, setAnswerGiven] = useState(false);
    const [supabaseQuestion, setSupabaseQuestion] = useState();
    const [isFetched, setIsFetched] = useState(false);

    useRenderCounter('Body');


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
        return data;
       }


       useEffect(() => {
        getSupabaseData();
    }, [])



    //if the question is answered, set the answerGiven to true
    function handleAnswerGiven () {
        setAnswerGiven(true);
    }

    // function getRandomQuestion() {
    //     const randomQuestion = cardData[Math.floor(Math.random() * cardData.length)]
    //     return randomQuestion
    // }

    // function questionShuffle() {
    //     setQuestion(getRandomQuestion())
    // }


    
    // function answeredQuesiton() {
    //     setAnswered(true)
    // }

    // const promptAnswer = question.answer


    return (<>
        {supabaseQuestion &&
        <div className='container'>
        <div className='flashcard-grid'>
            <Answers 
                question={supabaseQuestion.prompt} 
                promptAnswer={supabaseQuestion.answer} 
                options={supabaseQuestion.options} 
                answered={handleAnswerGiven}
               />
            <Question 
                question={supabaseQuestion.prompt} 
                shuffle={getSupabaseData} 
                isAnswered={answerGiven}
                />
        </div>
        </div>
}

        </>
    )
    }

export default Body
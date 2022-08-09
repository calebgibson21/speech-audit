import React, {useEffect, useState} from 'react';
import {supabaseClient} from '../lib/supabase';
import Answers from './Answers';
import Question from './Question';
import cardData from '../data/cardData';
import useRenderCounter from '../hooks/renderCounter';




const Body = () => {
    // const [question, setQuestion] = useState(getRandomQuestion());
    // const [answered, setAnswered] = useState(false);
    const [supabaseQuestion, setSupabaseQuestion] = useState({});

    useRenderCounter('Body');

    useEffect(() => {
        getSupabaseData();
        console.log(supabaseQuestion.options);
    }, [])

    async function getSupabaseData () {
        const {data, error} = await supabaseClient
        .from("randomized_prompts")
        .select("*")
        .limit(1)
        .single()
        setSupabaseQuestion(data);
        console.log(data);
        if (error) {
            console.error(error);
        }
        return data;
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


    return (
        <div className='container'>
            <div className='flashcard-grid'>
                <Answers question={supabaseQuestion.prompt} promptAnswer={supabaseQuestion.answer} options={supabaseQuestion.options}/>
                <Question question={supabaseQuestion.prompt} />
            </div>
        </div>
    )
    }

export default Body
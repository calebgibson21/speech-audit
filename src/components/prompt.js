import React, {useEffect, useState, useReducer} from 'react';
import {supabaseClient} from '../lib/supabase';

const Prompt = () => {
    const [supabaseQuestion, setSupabaseQuestion] = useState();

    const getPromptData = async () => {
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
        return data;
       }
       


       useEffect(() => {
        getPromptData();
    }, [])


    function handleNewPrompt () {
        getPromptData();
        // props.handleReset()
    }

  return (<>
  {supabaseQuestion &&
    <div className='grid-wrapper-2'>
        <div className='card'>
            {supabaseQuestion.prompt}
        </div>
        <button className='button' onClick={handleNewPrompt}>
            New Prompt
        </button>
    </div>
}
  </>
  )
}

export default Prompt
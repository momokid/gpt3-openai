import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGP3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__padding' id='whgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT3" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."/>
                <div className='gpt3__whatgpt3-heading'>
                    <h1 className='gradient__text'>
                        The possibilities are beyond your imagination
                    </h1>
                    <p>Explore The Library</p>
                </div>

                <div className="gpt3__whatgpt3-container">
                    <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
                    <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
                    <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
                </div>
            </div>
        </div>
    )
}

export default WhatGP3

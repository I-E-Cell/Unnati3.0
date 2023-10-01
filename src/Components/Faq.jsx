// ------------------------------component----------------------------------//

import React, { useState } from 'react';

const Faq = () => {
  const [expanded, setExpanded] = useState(Array(6).fill(false)); // Initialize with 6 questions

  const toggleQuestion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const questions = [
    {
      question: 'What are the perks of participating in UNNATI ?',
      answer: 'You get to compete with best young minds of AIT, a 48-hour event with amazing problem statements and prizes! Goodies and Swags. Cmon, still need more?',
    },
    {
      question: 'Is there any registration fees to attend UNNATI?',
      answer: "NO, it's FREE! Just bring your team members along.",
    },
    {
      question: 'Is UNNATI online or offline?',
      answer: 'Both the rounds of UNNATI are offline.',
    },
    {
      question: 'Any specific qualifications to be a participant ?',
      answer: 'You love to speak, ideate or work in groups, then you are more than welcome to participate in the Event.',
    },
    {
      question: 'Will Participants receive Certificates?',
      answer: 'Yes, participation certificates will be provided to all the participants.',
    },
    {
      question: 'Who can attend UNNATI?',
      answer: 'All the FE and SE students of AIT irrespective of their stream/branch are welcome to participate in the event. But remember, you get extra points for forming an inter-branch team or girl members team.',
    },
  ];

  return (
    <div id='faq' className="container mx-auto  p-4">
       <div className=' text-white lg:text-5xl md:text-4xl sm:text-3xl px-20 text-center font-semibold pb-6  text-2xl my-1'> <h1 className='heading'>Frequently Asked Questions</h1></div>
      <div className="grid  md:mx-14 my-8 pb-9 mx-0  grid-cols-1 sm:grid-cols-2 gap-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className=" p-4 shadow-md cursor-pointer  border-[1px] rounded-xl border-white/40 text-white"
            onClick={() => toggleQuestion(index)}
          >
            <h2 className="text-xl font-semibold">{q.question}</h2>
            {expanded[index] && <p className="mt-2">{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
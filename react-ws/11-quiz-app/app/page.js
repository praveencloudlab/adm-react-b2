"use client"
import {useState} from 'react';

const page = () => {

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  
  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }
  
  

  return (
    <div className='text-3xl ml-5'>
      <h1>Quize APP</h1> <hr/>
      <div >
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea className="ring-1"
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button className="rounded-md  px-2.5 py-1.5 text-sm  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status}
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
      </div>

    </div>
  );
};
export default page;

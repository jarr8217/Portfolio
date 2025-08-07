import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING');
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mldloezo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    };

    return (
        <section className='py-12 md:py-6 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-2xl md:text-3xl font-bold mb-6 text-white tracking-wide'>Contact Me</h2>
                <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6 border p-4 md:p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto'>
                    {status === 'SUCCESS' && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    {status === 'ERROR' && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            Oops! There was a problem sending your message. Please try again.
                        </div>
                    )}
                    <div>
                        <label className='block text-left mb-2 text-sm md:text-base' htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='w-full p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-base'
                            placeholder='Your Name'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-left mb-2 text-sm md:text-base' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-base'
                            placeholder='Your Email'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-left mb-2 text-sm md:text-base' htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            className='w-full p-2 md:p-3 border border-gray-300 rounded-lg text-sm md:text-base'
                            placeholder='Your Message'
                            rows='4'
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type='submit'
                            disabled={status === 'SENDING'}
                            className='w-full sm:w-auto inline-block bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg border-none cursor-pointer text-sm md:text-base disabled:cursor-not-allowed'
                            style={{
                                backgroundColor: status === 'SENDING' ? '#9ca3af' : '#2563eb',
                                color: 'white',
                                border: 'none',
                                outline: 'none'
                            }}
                        >
                            {status === 'SENDING' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;

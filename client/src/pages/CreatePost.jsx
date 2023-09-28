import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {}
  const handleChange = (e) => {}
  const handleSurpriseMe = () => {}

  return (
    <section className='max-w-7xl mx-auto '>
      <div>
        <h1 className='font-normal text-[52px] from-yellow-200 via-purple-400 to-cyan-400 bg-gradient-to-r bg-clip-text text-transparent'>The Community Showcase</h1>
        <p className='mt-5 text-[#dfdfdf] text-[16px] max-w-[500px]'>Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='teddy bears shopping for groceries in Japan, ukiyo-e'
            value={form.prompt}
            handleChange={handleChange}
            isSupriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost
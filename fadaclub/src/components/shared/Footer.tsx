"use client"

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [(e.target as HTMLTextAreaElement).name]: e.target.value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";
  
    
    if (formRef.current) {
      emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
      
      toast.success("Email Sent Successfully!")
      setForm({ name: '', email: '', message: '' });
    }
  };


  return (
    <div className='px-32'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row text-nowrap">
        Any Doubts?
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col justify-center  items-center'>
        <div className='flex flex-col md:flex-row gap-5 justify-center'>
          <Textarea
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className='my-5 w-80 md:w-48'
          />
          <Textarea
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className='my-5 w-80'
          />
        </div>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className='my-5 w-80 md:w-[675px] h-[200px]'
        />
        <Button type="submit" className="flex flex-row mt-4 mb-6" >Submit</Button>
      </form>
      <h3 className="scroll-m-20 font-semibold tracking-tight px-1 py-4 flex flex-row justify-center whitespace-nowrap"> © Fada Club 2024</h3>
    </div>
  );
};

export default Footer;
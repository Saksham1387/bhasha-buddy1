"use client"
import React, { useState,useEffect } from 'react';
import CurrentDateTime from './currentDate';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import Link from "next/link";
import CustomAlert from './alert';
const MyDiary = () => {
  // State to keep track of the current input text
  const [inputText, setInputText] = useState('');
  const [inputValuetitle,setInputValuetitle] = useState("")
  const [inputValuecontent,setinputValuecontent] = useState("")
  const [showAlert, setShowAlert] = useState(false);
  // State to store all added texts
  const [texts, setTexts] = useState([]);

  // Function to handle input text change
  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    // Show the alert when the component mounts
    setShowAlert(true);
}, []);

  // Function to add the current input text to the texts array
  const handleAddText = () => {
    if (inputText.trim() !== '') {
        //@ts-ignore
      setTexts([...texts, inputText]);
      setInputText(''); // Clear the input box after adding
    }
  };

  return (
    <div className=" w-full  p-10 pt-5 h-screen mb-10">
       <CustomAlert />
      <div className='text-3xl font-bold text-center mb-10'>
        Your Diary
      </div>
      <div className=' rounded-xl p-10 shadow-lg'>
          <CurrentDateTime></CurrentDateTime>
          <input
            onChange={(e)=>{
              setInputText(e.target.value)
            }}
            type="text"
            className="bg-gray-50  border-gray-300 rounded-xl text-gray-900 text-sm  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400   "
            placeholder="Your title"
            required
          />
          <br />
          
          <input
            type="text"
            placeholder="Express your thoughts here"
            className="bg-gray-50 h-80 border-gray-300 rounded-xl text-gray-900 text-sm block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 resize-none"
            required
          />
          
          <br />
          <button
           
            type="button"
            className="text-white bg-slate-950 hover:bg-blue-800 focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create
          </button>
          
          </div>
         
        </div>

  );
};

export default MyDiary;

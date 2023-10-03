import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Onboarding from './components/Onboarding'

import a from '../src/assets/images/a.png'
import b from '../src/assets/images/b.png'
import c from '../src/assets/images/c.png'

const onboardingGuides = [
  {
    stepNumber: 1,
    title: "AI-Powered Social Media Kickstart",
    imageUrl: a,
    description: "Get started swiftly with AI-driven tools. Learn to set up your account and harness the power of AI for content creation."
  },
  {
    stepNumber: 2,
    imageUrl: b,
    title: "AI-Enhanced Content Crafting",
    description: "Craft captivating content effortlessly with AI assistance. Follow our step-by-step guide to create stunning social media posts."
  },
  {
    stepNumber: 3,
    imageUrl: c,
    title: "AI Analytics and Optimization",
    description: "Elevate your social media strategy with AI analytics. Discover how AI can help you analyze data and optimize your content for better results."
  }
];


function App() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  return (
    <div className='max-w-6xl bg-gray-200'>
      <Onboarding isOpen={isOpen} closeModal={closeModal} onboardingGuides={onboardingGuides} />
    </div>
  )
}

export default App

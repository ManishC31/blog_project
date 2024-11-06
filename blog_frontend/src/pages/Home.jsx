import React, { useContext } from 'react'
import landingImage from '../assets/images/landing_page.jpg'
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../store/AuthContext";

const Home = () => {
  const navigate = useNavigate()
  const { isAuth } = useContext(AuthContext)
  return (
    <div className="flex items-center h-screen bg-gradient-to-b from-white to-white">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Welcome to Our Blog
          </h1>
          <p className="text-lg md:text-xl">
            Discover insightful articles and stay up-to-date with the latest trends in tech, lifestyle, and more.
          </p>
          <Button color="info" pill size="lg" className="mt-4" onClick={() => {
            if (isAuth) {
              navigate('/dashboard')
            } else {
              navigate('/login')
            }
          }}>
            Start Reading
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img className="" src={landingImage} alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default Home
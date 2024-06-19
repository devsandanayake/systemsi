
import React from 'react';
import './footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



function Footer() {
  const text1 = "Powered by ".split("").map((char, index) => (
    <span className={`animate-letter delay-${index}s`} key={index}>{char}</span>
  ));
  const text2 = "Digital Projects".split("").map((char, index) => (
    <span className={`animate-letter delay-${index}s`} key={index}>{char}</span>
  ));
  const text3 = "Sri Lanka Telecom PLC".split("").map((char, index) => (
    <span className={`animate-letter delay-${index}s`} key={index}>{char}</span>
  ));
  return (
    <footer className="footer">
    <div className='text-center'>
        <span className='text-blue-700'>{text1}</span> <span className='text-green-500'>{text2}</span>
    </div>
    <div className='text-sm text-center text-gray-300'>
        {text3}
        <div className='flex justify-center items-center gap-3 mt-2'>
            <a href="https://www.facebook.com/SLTMobitel/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/slt_mobitel" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/sltmobitel_official/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
         
    </div>
</footer>
  );
}

export default Footer;

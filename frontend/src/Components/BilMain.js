import React from 'react';
import background from '../Images/bg1.jpg';
import { useNavigate } from 'react-router-dom';

export default function BilMain() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="justify-center items-center h-screen" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="flex flex-col justify-center items-center h-screen space-y-14">
        <a href='/bil'>
          <button className="styled-button">
            BIL Monthly Rental
            <div className="inner-button">
              <svg
                id="Arrow"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                width="30px"
                className="icon"
              >
                <defs>
                  <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
                    <stop style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} offset="0%"></stop>
                    <stop style={{ stopColor: '#AAAAAA', stopOpacity: 1 }} offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#iconGradient)"
                  d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
                ></path>
              </svg>
            </div>
          </button>
        </a>

          <a href='/bilinitiationmain'>
          <button className="styled-button">
            BIL Initiation Charge
            <div className="inner-button">
              <svg
                id="Arrow"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                width="30px"
                className="icon"
              >
                <defs>
                  <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
                    <stop style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} offset="0%"></stop>
                    <stop style={{ stopColor: '#AAAAAA', stopOpacity: 1 }} offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#iconGradient)"
                  d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
                ></path>
              </svg>
            </div>
          </button>
          </a>

   <button className="styled-button" 
   onClick={handleBack}>
    Back
    <div className="inner-button">
      <svg
        id="Arrow"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        width="30px"
        className="icon"
      >
        <defs>
          <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
            <stop style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} offset="0%"></stop>
            <stop style={{ stopColor: '#AAAAAA', stopOpacity: 1 }} offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#iconGradient)"
          d="M28 17H8.414l4.292-4.292a1 1 0 0 0-1.414-1.414l-6 6a.99.99 0 0 0-.292.702v.004c0 .13.026.26.078.382a.99.99 0 0 0 .216.324l6 6a1 1 0 1 0 1.414-1.414L8.414 18H28a1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </div>
  </button>
 
         </div>
      </div>
    </>
  );
}

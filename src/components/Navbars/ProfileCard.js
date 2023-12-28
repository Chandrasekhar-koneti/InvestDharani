import React, { useEffect, useRef, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import "./profilecard.css";

const ProfileCard = ({ profileIconRef }) => {
  const [isCardOpen, setCardOpen] = useState(false);

  const { phoneNumber } = useParams();

  const cardRef = useRef(null);

  const toggleCard = () => {
    setCardOpen(!isCardOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (cardRef.current && cardRef.current.contains(e.target)) {
        return; // Click inside the card, do nothing
      }

      if (profileIconRef.current && profileIconRef.current.contains(e.target)) {
        setCardOpen(!isCardOpen);
      } else {
        setCardOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [profileIconRef]);

  return (
    <>
      {isCardOpen && (
        <>
          <div className="backdrop" onClick={toggleCard}></div>
          <div className="card" ref={cardRef}>
            <div className="profilecard-container">
              <MdAccountCircle className="MdAccountCircle-icon" />
              <div>
                <div>
                  <div className="prfoilecard-body">
                    <p>Hello</p> <span>👋</span>
                  </div>
                  <div className="profilecard-svg-text">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                      </svg>
                    </span>
                    <p>Easy Contact with sellers</p>
                  </div>
                  <div className="profilecard-svg-text">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                      </svg>
                    </span>
                    <p>Personalized experience</p>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/login">
                  <button className="login-btn">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
{
}

export default ProfileCard;

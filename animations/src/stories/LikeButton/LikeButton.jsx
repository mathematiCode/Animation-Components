import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './likeButton.css';

/**
 * LikeButton component with particle animation effects
 */
export const LikeButton = ({
  size = 'medium',
  onLike = () => {},
  onUnlike = () => {},
  isLiked = false,
  ...props
}) => {
  const [liked, setLiked] = useState(isLiked);
  const buttonRef = useRef(null);

  const handleClick = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    if (newLikedState) {
      onLike();
      explodeParticles(35);
    } else {
      onUnlike();
    }
  };

  const explodeParticles = numParticles => {
    if (!buttonRef.current) return;

    // First wave of particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }

    // Second wave of particles after delay
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        createParticle();
      }
    }, 200);
  };

  const createParticle = () => {
    if (!buttonRef.current) return;

    const particle = document.createElement('span');
    particle.classList.add('particle');

    // Random position
    const top = Math.random() * 94;
    const left = Math.random() * 94;
    particle.style.top = `${top}%`;
    particle.style.left = `${left}%`;

    // Random color
    const hue = Math.random() * 360;
    particle.style.background = `hsl(${hue}, 70%, 60%)`;

    buttonRef.current.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 1000);
  };

  const sizeClasses = {
    small: 'like-button--small',
    medium: 'like-button--medium',
    large: 'like-button--large',
  };

  return (
    <button
      ref={buttonRef}
      className={`like-button ${sizeClasses[size]} ${liked ? 'liked' : ''}`}
      onClick={handleClick}
      aria-label={liked ? 'Unlike this post' : 'Like this post'}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="visually-hidden">
        {liked ? 'Unlike this post' : 'Like this post'}
      </span>
    </button>
  );
};

LikeButton.propTypes = {
  /** Size of the like button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Callback fired when the button is liked */
  onLike: PropTypes.func,
  /** Callback fired when the button is unliked */
  onUnlike: PropTypes.func,
  /** Whether the button is initially liked */
  isLiked: PropTypes.bool,
};

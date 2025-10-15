import './App.css';
import { useState } from 'react';
import { LikeButton } from './stories/LikeButton/LikeButton';
import { OptimalLayout } from './stories/OptimalLayout/OptimalLayout';
import { range } from 'lodash';

function App() {
  const [numItems, setNumItems] = useState(75);
  const [spacing, setSpacing] = useState(5);
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(300);
  function handleNumItems(event) {
    setNumItems(event.target.value);
  }

  function handleSpacingInput(event) {
    setSpacing(event.target.value);
  }

  const updateWidth = () => {
    setWidth(event.target.value);
  };

  const updateHeight = () => {
    setHeight(event.target.value);
  };
  return (
    <>
      <h1>Calculate Optimal Size of Square Items </h1>
      <div className="inputs">
        <label htmlFor="num-items-input">
          Number of Items
          <input
            id="num-items-input"
            className="num-items-input"
            type="number"
            placeholder="number of items"
            value={numItems}
            onChange={event => handleNumItems(event)}
          />
        </label>
        <label htmlFor="spacing-input">
          Minimum Spacing
          <input
            id="spacing-input"
            className="spacing-input"
            type="number"
            step={10}
            placeholder="Spacing"
            value={spacing}
            onChange={event => handleSpacingInput(event)}
          />
        </label>
        <label htmlFor="width-input">
          Container Width
          <input
            id="width-input"
            step={10}
            className="width-input"
            type="number"
            placeholder="width"
            value={width}
            onChange={event => updateWidth(event)}
          ></input>
          {/* <span className="back-unit">px</span > */}
        </label>
        <label htmlFor="height-input">
          Container Height
          <input
            id="height-input"
            className="height-input"
            type="number"
            placeholder="height"
            value={height}
            onChange={event => updateHeight(event)}
          />
        </label>
      </div>
      <OptimalLayout
        width={width}
        height={height}
        horizontalSpacing={spacing}
        verticalSpacing={2}
      >
        {range(numItems).map((item, index) => {
          return (
            <div className="item" key={index}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
                  stroke="pink"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {/*  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {index % 5 === 0 ? '🐐' : <LikeButton />}
                <path
                  d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
                  stroke="pink"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
                  stroke="pink"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg> */}
            </div>
          );
        })}
      </OptimalLayout>
      {/* <LikeButton
        isLiked={false}
        heartColor={'rgb(255, 49, 186)'}
        hueMin={315}
        hueMax={360}
        saturation={80}
        luminence={60}
      />
      <LikeButton isLiked={false} /> */}
    </>
  );
}

export default App;

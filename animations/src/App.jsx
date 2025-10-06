import './App.css';
import { LikeButton } from './stories/LikeButton/LikeButton';

function App() {
  return (
    <>
      <LikeButton
        isLiked={false}
        heartColor={'rgb(255, 49, 186)'}
        hueMin={315}
        hueMax={360}
        saturation={80}
        luminence={60}
      />
      <LikeButton isLiked={false} />
    </>
  );
}

export default App;

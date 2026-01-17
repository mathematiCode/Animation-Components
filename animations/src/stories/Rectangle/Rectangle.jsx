function Rectangle({ width, height }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 100 100"
      stroke="black"
      fill="none"
      strokeWidth="5"
    >
      <rect x="0" y="0" width={width} height={height} />
    </svg>
  );
}

export default Rectangle;

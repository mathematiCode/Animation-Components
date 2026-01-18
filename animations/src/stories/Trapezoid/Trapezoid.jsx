function Trapezoid({ width1, width2, height, topLeft = 0, bottomLeft = 0 }) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      stroke="black"
      fill="none"
      strokeWidth="15"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        d={`
          M ${topLeft},0
          l ${width1},0
          L ${width2 + bottomLeft},${height}
          L ${bottomLeft},${height}
          Z   
          `}
      />
    </svg>
  );
}

export default Trapezoid;

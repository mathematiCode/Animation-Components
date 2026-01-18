function Circle({
  center,
  radius,
  svgWidth = 200,
  svgHeight = 200,
  fill = 'none',
  strokeColor = 'black',
  strokeWidth = 5,
}) {
  return (
    <div>
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox="0 0 100 100"
        fill={fill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      >
        <circle cx={center.x} cy={center.y} r={radius}></circle>
      </svg>
    </div>
  );
}

export default Circle;

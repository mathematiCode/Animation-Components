import './Parallelogram.css';

function Parallelogram({
  width,
  height,
  unit = '',
  offset = 30,
  strokeColor = 'black',
  fillColor = 'none',
  labelColor = 'black',
  strokeWidth = 5,
  svgWidth = 300,
  svgHeight = 300,
  textSize = 12,
}) {
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 100 100"
      stroke={strokeColor}
      fill={fillColor}
      strokeWidth={strokeWidth}
    >
      <path
        d={`
      M 0,0
      L ${width}, 0
      L ${width + offset}, ${height}
      L ${offset}, ${height}
      Z 
      `}
      ></path>
      <line x1={width} y1={0} x2={width} y2={height} strokeDasharray="5 4" />
      <text
        x={(width + offset) / 2}
        y={height + 14}
        style={{
          fill: labelColor,
          strokeWidth: '0px',
          fontSize: `${textSize}px`,
        }}
      >
        {width + ' ' + unit}
      </text>
      <text
        x={width - 20}
        y={height / 2 + textSize / 2}
        style={{
          fill: labelColor,
          strokeWidth: '0px',
          fontSize: `${textSize}px`,
        }}
      >
        {height + ' ' + unit}
      </text>
    </svg>
  );
}

export default Parallelogram;

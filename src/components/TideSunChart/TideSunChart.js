import React, { useEffect } from 'react';
const chartRef = React.createRef();
const TideSunChart = () => {
    const chartWidth = window.innerWidth;
    const chartHeight = window.innerHeight
    // const canvasWidth = chartWidth;
    const draw = () => {
        const ctx = chartRef.current && chartRef.current.getContext("2d");
        var angle = Math.PI,                    // we'll use radians here, 0 to Math.PI (=180)
            centerX = ctx.canvas.width * 0.5,   // center of arc
            bottomY = ctx.canvas.height,
            radiusX = ctx.canvas.width * 0.5,  // radius, 80% of width in this example
            radiusY = ctx.canvas.height * 0.9;  // radius, 90% of height in this example

        // goes 180 to 360°, in radians PI to 2xPI
        for (; angle < Math.PI * 2; angle += 0.1) {
            var x = centerX + radiusX * Math.cos(angle);
            var y = bottomY + radiusY * Math.sin(angle);
            // ctx.fillRect(x - 2, y - 2, 4, 4);     // dummy sun for now
            ctx.lineTo(x - 2, 4);
            ctx.lineTo(y - 2, 4);

            ctx.fillStyle = "#c1e5f7";
            ctx.strokeStyle = "#c1e5f7";
            ctx.fill();
        }
    }

    useEffect(() => {
        draw();
    }, [draw])

    return (
        <canvas className="chart-canvas" ref={chartRef}></canvas>
    )
}

export default TideSunChart;
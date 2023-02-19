import React, { useEffect, useState } from "react";
import './Stopwatch.css';


const Stopwatch = () => {
	const [isActive, setiIsActive] = useState(false);
	const [ispaused, setisPaused] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;

		if (isActive && ispaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, ispaused]);

	const handleStart = () => {
		setiIsActive(true);
		setisPaused(false);
	};

	const handlePaused = () => {
		setisPaused(!ispaused);
	};

	const handleReset = () => {
		setiIsActive(false);
		setTime(0);
	};

	return (
		<div className='stopwatch flex-column'>
			<div className='stopwatch-header'>
				<h1>Stopwatch</h1>
			</div>
			{console.log('time', time)}

			<div>
				<div className='stopwatch-time-display flex-row'>
					<p className='stopwatch-numbers'>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}</p>
					<p className='stopwatch-numbers'>:</p>
					<p className='stopwatch-numbers'>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</p>
					<p className='stopwatch-numbers'>:</p>
					<p className='stopwatch-numbers'>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</p>
				</div>
			</div>

			{isActive ? (
				<div>
					{ispaused ? (
						<div>
							<button onClick={handleStart}>Start</button>
						</div>
					) : (
						<div>
							<button onClick={handlePaused}>stop</button>
						</div>
					)}
					<div>
						<button onClick={handleReset}>Reset</button>
					</div>
				</div>
			) : (
				<div>
					<div>
						<button onClick={handleStart}>Start</button>
					</div>
				</div>
			)}
		</div>
	);
};


export default Stopwatch;

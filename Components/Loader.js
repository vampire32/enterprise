import React from 'react'
import Link from "next/link";

const Loader = () => {
  return (
		<div className="body">
			<div className="wrapper">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="shadow"></div>
				<div className="shadow"></div>
				<div className="shadow"></div>
				<span>Uss   Enterprise</span>
			</div>
		</div>
	);
}

export default Loader

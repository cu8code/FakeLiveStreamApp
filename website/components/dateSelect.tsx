"use client";
import { useState } from "react";

export function SelectionDate() {
	const [selected, setSelected] = useState("Year");

	const options = ["Week", "Daily", "Month", "Year"];

	return (
		<div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
			<p className="text-xl md:text-2xl text-gray-800">Infringements Detected</p>
			<div className="flex space-x-1 text-sm bg-gray-100 p-2 rounded-2xl">
				{options.map((option) => (
					<div
						key={option}
						className={`cursor-pointer px-3 py-1 rounded-md transition ${selected === option ? "bg-black text-white" : ""
							}`}
						onClick={() => setSelected(option)}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	);
}
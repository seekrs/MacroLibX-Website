import type { Component } from "solid-js";

export const ScriptComp: Component = () => {
	const handleOnMouseMove = (e: any) => {
		const { currentTarget: target } = e;

		if(!target)
			return;
		const rect = target.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top;

		target.style.setProperty("--mouse-x", `${x}px`);
		target.style.setProperty("--mouse-y", `${y}px`);
	};

	for(const card of document.querySelectorAll(".card"))
	{
		//@ts-ignore
		card.onmousemove = (e) => handleOnMouseMove(e);
	}

	return <></>
}

import type { Component } from "solid-js";

export const Footer: Component = () => {
	const currentYear  = new Date().getFullYear();
	return (
		<footer style="text-align: center">Copyright(c) 2023 - { currentYear } &nbsp; <a href="https://portfolio.kbz8.me/">kbz_8</a> &nbsp; | &nbsp;  Contact: <a href="mailto:contact@kbz8.me">contact@kbz8.me</a></footer>
	)
}


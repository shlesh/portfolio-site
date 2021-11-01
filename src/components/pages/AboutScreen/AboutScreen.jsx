import React, { useEffect } from "react";
import { topObserver } from "../../../utils/intersectionObserver";
import {
	AboutMe,
	Container,
	PortfolioLink,
	Section1,
	Section2,
	Section3,
	Skills,
} from "./AboutScreen.styles";
import firebaseIcon from "../../../images/icons/firebase.svg";
import ad from "../../../images/icons/adobe1.svg";
import ad1 from "../../../images/icons/adobe.svg";
// import boot from '../../../images/icons/bootstrap.svg';
import css from "../../../images/icons/css.svg";
import gith from "../../../images/icons/github.svg";
import html from "../../../images/icons/html-5.svg";
import js from "../../../images/icons/javascript.svg";
import ph from "../../../images/icons/photoshop.svg";
import ra from "../../../images/icons/reaccionar.svg";
import sass from "../../../images/icons/sass.svg";
import wrd from "../../../images/icons/wordpress.svg";
import triangle from "../../../images/triangle.png";
import affEff from "../../../images/icons/afterEffect.png";
import ts from "../../../images/icons/typescript.png";
import rd from "../../../images/icons/redux.png";
import nt from "../../../images/icons/native.png";
import nd from "../../../images/icons/node.png";
import psql from "../../../images/icons/psql.png";
import bootstrap from "../../../images/icons/bootstrap.png";
import figma from "../../../images/icons/figma.png";
import webpack from "../../../images/icons/webpack.png";
import express from "../../../images/icons/express.png";
import { useSelector } from "react-redux";
import ButtonAnim from "../../ui/Button/ButtonAnim";

const About = () => {
	const { about } = useSelector(state => state.data.pageContent);

	useEffect(() => {
		window.scrollTo(0, 0);
		topObserver();
		document.title = "About Me | Shailesh Tiwari | Frontend Developer";
	}, []);

	const move = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
	};

	return (
		<>
			<Section1 id="top">
				<h1>{about.abh1}</h1>
				<img src={triangle} alt="triangle" />
				<img
					onClick={move}
					src="https://icongr.am/entypo/chevron-small-down.svg?size=128&color=000000"
					alt="arrow"
					color="white"
				/>
			</Section1>

			<Section2>
				<div className="container">
					<AboutMe>
						<h1>{about.abh1}</h1>
						<div>
							<p>{about.abp1}</p>
							<p>{about.abp2}</p>
							<p>{about.abp3}</p>
						</div>
					</AboutMe>
					<AboutMe>
						<h1>{about.skh1}</h1>
						<div>
							<p>{about.skp1}</p>
							<h4>{about.skh42}</h4>
							<Skills>
								<ul>
									<li>
										<img src={html} alt="firebase" />
										HTML
									</li>
									<li>
										<img src={css} alt="firebase" />
										CSS
									</li>
									<li>
										<img src={js} alt="firebase" />
										JavaScript
									</li>

									<li>
										<img src={ra} alt="firebase" />
										React
									</li>
								</ul>
								<ul>
									<li>
										<img src={nt} alt="firebase" />
										React Native
									</li>
									<li>
										<img src={nd} alt="firebase" />
										Node
									</li>
									<li>
										<img src={express} alt="express" />
										Express
									</li>
									<li>
										<img src={firebaseIcon} alt="firebase" />
										Firebase
									</li>
								</ul>
								<ul>
									<li>
										<img src={sass} alt="firebase" />
										Sass
									</li>
									<li>
										<img src={bootstrap} alt="bootstrap" />
										Bootstrap
									</li>
									<li>
										<img src={gith} alt="firebase" />
										Git/GitHub
									</li>
								</ul>
							</Skills>
							<h4>{about.skh41}</h4>
							<Skills>
								<ul>
									<li>
										<img src={figma} alt="Figma" />
										Figma
									</li>
									<li>
										<img src={ad} alt="Illustrator" />
										Illustrator
									</li>
									<li>
										<img src={ad1} alt="Adobe XD" />
										Adobe XD
									</li>
								</ul>
							</Skills>
						</div>
					</AboutMe>
				</div>
			</Section2>
			<PortfolioLink>
				<ButtonAnim text={about.bt} path="/portfolio" />
			</PortfolioLink>
			<Section3>
				<Container className="container">
					<h3>{about.mhh3}</h3>
					<p>~ Confucius</p>
				</Container>
			</Section3>
		</>
	);
};

export default About;

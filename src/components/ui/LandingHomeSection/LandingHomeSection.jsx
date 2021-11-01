import React from "react";
import proximoIcon from "../../../images/proximo.svg";
import { useSelector } from "react-redux";
import { Section1 } from "./LandingHomeSection.styles";
import { Link } from "react-router-dom";

const LandingHomeSection = () => {
	const { pageContent } = useSelector(state => state.data);

	return (
		<>
			{/* <!-- SECTION 1 (LANDING)
      =============================== --> */}
			<Section1 className="sect-1">
				<picture className="picture">
					<source
						media="(min-width: 768px)"
						srcset="https://res.cloudinary.com/dsgtwehup/image/upload/v1635773118/triangle_main.png"
					/>
					<source
						media="(min-width: 300px) and (max-width: 768px)"
						srcset="https://res.cloudinary.com/dsgtwehup/image/upload/v1635773118/triangle_main.png"
					/>
					<img
						src="https://res.cloudinary.com/dsgtwehup/image/upload/v1635773118/triangle_main.png"
						alt="Triangles"
					/>
				</picture>

				<div className="name-container">
					<h1 className="name">Shailesh Tiwari</h1>
					<h2 className="prof">Web Developer</h2>
				</div>
				<div className="portf-container">
					<Link to="/portfolio">
						<p className="name">
							<i>
								<img src={proximoIcon} alt="arrow" />
							</i>{" "}
							{pageContent.pl.toUpperCase()}
						</p>
					</Link>
				</div>
			</Section1>
		</>
	);
};

export default LandingHomeSection;

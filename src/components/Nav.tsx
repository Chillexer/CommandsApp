import React, { ReactElement } from "react";
import AppsIcon from "@mui/icons-material/Apps";
interface Props {}

function Nav({}: Props): ReactElement {
	return (
		<div>
			<nav className="h-14 bg-blue-400 flex md:justify-start">
				<div className="flex-1 my-auto md:flex-none">
					<AppsIcon sx={{ color: "white", fontSize: 40 }} className="text-white ml-2"></AppsIcon>
				</div>
				<h1 className="my-auto md:ml-8 text-xl text-white">Commands App</h1>
				<div className="flex-1 md:flex-none"></div>
			</nav>
		</div>
	);
}

export default Nav;

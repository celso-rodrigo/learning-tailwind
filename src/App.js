import React from "react";
import Profile from "./components/Profile";

function App() {
	return (
		<div 
			className="bg-[url('assets/bg.jpg')] h-screen bg-cover bg-center
			 bg-no-repeat flex flex-row justify-center"
		>
			<Profile />
		</div>
	);
}

export default App;

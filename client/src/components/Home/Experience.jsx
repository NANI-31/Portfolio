import React, { useRef } from 'react';
const Experience = () => {
	const sectionRefs = {
		experience: useRef(null),
		welcome: useRef(null),
	};

	// const activeSection = useActiveSectionObserver(sectionRefs);

	return (
		<>
			<section
				id="experience"
				ref={sectionRefs.experience}
				style={{
					height: '100vh',
					background: '#555',
					fontSize: '3rem',
					color: 'white',
					overflow: 'hidden',
				}}
				className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#a1a1a100] via-[#a1a1a166] via-[#a1a1a12d] to-[#a1a1a1] 
"
			>
				<div data-scroll data-scroll-speed="3">
					{/* Welcome to Smooth Scroll ✨ */}EXPERIENCE
				</div>
			</section>
			<section
				id="welcome"
				ref={sectionRefs.welcome}
				style={{
					height: '100vh',
					background: '#999',
					fontSize: '3rem',
					color: 'white',
					overflow: 'hidden',
				}}
			>
				<div data-scroll data-scroll-speed="3">
					Welcome to Smooth Scroll ✨
				</div>
			</section>
		</>
	);
};

export default Experience;

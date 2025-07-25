import { useEffect, useState } from 'react';

export const TypeWriterEffectText = () => {
	const [displayText, setDisplayText] = useState('');

	useEffect(() => {
		const texts = ['Imran Hussain Barbhuiya', 'Parbez Barbhuiya'];
		let currentTextIndex = 0;
		let currentCharIndex = 0;
		let isDeleting = false;
		let pauseEnd = 0;

		const typewriterEffect = () => {
			const currentText = texts[currentTextIndex];

			if (pauseEnd > Date.now()) {
				setTimeout(typewriterEffect, 50);
				return;
			}

			if (isDeleting) {
				setDisplayText(currentText.slice(0, currentCharIndex - 1));
				currentCharIndex--;

				if (currentCharIndex === 0) {
					isDeleting = false;
					currentTextIndex = (currentTextIndex + 1) % texts.length;
					pauseEnd = Date.now() + 500;
				}
			} else {
				setDisplayText(currentText.slice(0, currentCharIndex + 1));
				currentCharIndex++;

				if (currentCharIndex === currentText.length) {
					isDeleting = true;
					pauseEnd = Date.now() + 2_000;
				}
			}

			const speed = isDeleting ? 50 : 100;
			setTimeout(typewriterEffect, speed);
		};

		typewriterEffect();
	}, []);

	return displayText;
};

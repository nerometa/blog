const storageKey = "theme";

// comments use to explain myself
const getColorPreference = () => {
	let preference = localStorage.getItem(storageKey);

	// if not set, try to get prefers-color-scheme from the system
	// then set accordingly
	if (!preference) {
		preference = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	return preference;
};

// use to indicate theme for document
const setPreference = (themeName) => {
	localStorage.setItem(storageKey, themeName);

	document.firstElementChild.setAttribute("data-theme", themeName);
};

const togglePreference = () => {
	setPreference(getColorPreference() === "dark" ? "light" : "dark");
};

(() => {
	const theme = getColorPreference();
	setPreference(theme);

	// use after-swap listener to persist theme change
	document.addEventListener("astro:after-swap", () => {
		const theme = getColorPreference();
		setPreference(theme);
	});
})();

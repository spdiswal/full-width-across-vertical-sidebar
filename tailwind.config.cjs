/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			gridRow: {
				"span-7": "span 7 / span 7",
				"span-8": "span 8 / span 8",
				"span-9": "span 9 / span 9",
				"span-10": "span 10 / span 10",
				"span-11": "span 11 / span 11",
				"span-12": "span 12 / span 12",
				"span-13": "span 13 / span 13",
				"span-14": "span 14 / span 14",
				"span-15": "span 15 / span 15",
				"span-16": "span 16 / span 16",
			},
			gridRowStart: {
				"8": "8",
				"9": "9",
				"10": "10",
				"11": "11",
				"12": "12",
				"13": "13",
				"14": "14",
				"15": "15",
				"16": "16",
			},
		},
	},
}

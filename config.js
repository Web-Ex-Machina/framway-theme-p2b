module.exports = {
	'colors' : {
		'blue' : '#2878e4',
		'yellow' : '#F2CA52',
		'yellowlight' : '#f2d06b',
		'yellowlighter' : '#ffff71',
		'p2bblack': '#0a0a0a'
	},
	'primary': 'colors(yellow)',
	'secondary': 'colors(blacklight)',

	'body': {
		'background': 'colors(white)',
		'block-background': 'colors(white)',
		'font-color': 'colors(blacklight)',
		// 'font-color-title': 'change-color(primary,$lightness:10%)',
		// 'font-color-title': 'colors(greystronger)',
	},
	'header': {
		'background': 'secondary',
		'font-color': 'contrastFW(colors(white),secondary)',
	},
	'footer': {
		'background': 'header(background)',
		'font-color': 'header(font-color)',
	},

};
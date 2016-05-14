var jss = require('jss')

const styles = {
	// This class does not seem to exist in the generated output unless I explicly
	// give it some properties even though it has a media query with properties below.
	alpha: {
		width: '500px',
	},
	// By adding in this media query we break the class names of the media 
	// queries below. And in all cases this media query is ignored, it only 
	// seems to cause the breaking of the media queries below
	'@media (min-width: 992px)': {
		alpha: {
			width: '400px',
		},
	},
	bravo: {
		width: '100px',
	},
	'@media (max-width: 992px)': {
		bravo: {
			width: '200px'
		}
	},
	'@media (min-width: 992px)': {
		// This class ends up with it's own classname instead of being linked to
		// the two above.
		bravo: {
	    width: '300px',
		},
	},
}


const sheet = jss.createStyleSheet(styles)
console.log(sheet.toString())
const EMBEDDED_CONTENT_CONTAINER = '#embedded-content';
const NAV_ELEMENT = '.navigation a';

const embedItems = [
	'embedZype.html', 
	'embedYoutube.html',
	'embedPlaylist.html',
	'embedAccount.html'
];

// handleNavBtnClicked
function handleNavBtnClicked() {
	console.log('btn clicked');

	// get index of item clicked
	const navIndex = $(this).closest('li').index();

	// remove all instances of 'active' class
	removeActiveClass();

	// add active class to nav item
	$(this).addClass('active');

	// add active class to embed content
	// activateContent(navIndex);

	// clear currently embedded content
	$(EMBEDDED_CONTENT_CONTAINER).empty();

	// add selected embed content
	loadEmbedContent(navIndex);
}

// removeActiveClass
function removeActiveClass() {
	$('.active').removeClass('active');
}

// getEmbedContent
// get embed content based on index of nav item clicked
function loadEmbedContent(index) {
	$(EMBEDDED_CONTENT_CONTAINER).attr('src', embedItems[index]);
}

// assignEventHandlers
function assignEventHandlers() {
	$(NAV_ELEMENT).on('click', handleNavBtnClicked);
}

function runApp() {
	console.log('app is running');
	assignEventHandlers();
	loadEmbedContent(0);
}

$(runApp());
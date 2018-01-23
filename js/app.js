const EMBEDDED_CONTENT_CONTAINER = '.embedded-content';
const TEST_EMBED = '#test-embed';

function getExternalHtml() {
	$.get('embedAccount.html', function(data) {
		$(TEST_EMBED).html(data);
	});
}

function displayExternalHtml(data) {
	$(TEST_EMBED).html(data);
}

function assignEventHandlers() {
	$('.navigation a').on('click', handleNavBtnClicked);
}

function handleNavBtnClicked() {
	console.log('btn clicked');

	// get index of item
	const navIndex = $(this).closest('li').index();

	// remove all instances of active class
	removeActiveClass();

	// add active class to nav item
	$(this).addClass('active');

	// add active class to embed content
	activateContent(navIndex);
}


function activateContent(index) {
	$(EMBEDDED_CONTENT_CONTAINER).find(`.embed:eq(${index})`).addClass('active');
}

function removeActiveClass() {
	$('.active').removeClass('active');
}

function runApp() {
	console.log('app is running');
	assignEventHandlers();
	getExternalHtml();
}

$(runApp());

document.querySelectorAll('a').forEach(item => {
	item.addEventListener('click', event => { event.preventDefault() })
})

$(document).ready(function () {
	const $general_title = $('title')
	const $main_content = $('.main-content')
	// initial Loads - body
	$main_content.load("../content.php .container")
	/*NAV-BAR */
	// Dar datos
	const $links = document.querySelectorAll(".nav-item .nav-link")
	var linkInicio = null
	var linkContacto = null
	$links.forEach(element => {
		if ("Inicio" == element.textContent) linkInicio = element
		if ("Contacto" == element.textContent) linkContacto = element
	})
	function list_remove_class(arr_nodes, attr) {
		arr_nodes.forEach(item => { item.classList.remove(attr) })
	}
	function render_functions_page(element) {
		$(element).click(() => {
			//render class 'active' from navbar
			$links.forEach(item => { item.classList.remove('active') })
			$(this).addClass('active')
			// render title
			$general_title.text(`Sistema de boletos|${element.textContent}`)
		})
	}
	render_functions_page(linkInicio)
	render_functions_page(linkContacto)
})

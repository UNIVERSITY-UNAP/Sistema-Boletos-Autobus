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
	// const a = document.querySelectorAll(".tab-pane > .row > div")
	// a.forEach(item=>{
	//   console.log(item)
	// })



	//Modyfing responsive styles
	const $pe = $(".tab-pane > .row > div")
	$pe.even().addClass("col-md-3")
	$pe.odd().addClass("col-md-9")

	// $pe.even().addClass("")

	var $sidebar_content_image = $(".tab-pane > .row > .border-right")
	function renderBorderSideContent() {
		if ($(window).width() <= 768)
			$sidebar_content_image.removeClass("border-right border-gray border-primary border-danger border-sucess border-warning")
		else
			$sidebar_content_image.addClass("border-right border-gray")
	}
	renderBorderSideContent()
	$(window).resize(() => {
		renderBorderSideContent()
	})

	///Modifing validation
	'use strict'
	window.addEventListener('load', () => {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation')
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, form => {
			form.addEventListener('submit', event => {
				if (form.checkValidity() === false) {
					event.preventDefault()
					event.stopPropagation()
				}
				form.classList.add('was-validated')
			}, false)
		})
	}, false)
})

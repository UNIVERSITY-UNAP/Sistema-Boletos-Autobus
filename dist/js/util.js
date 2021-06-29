function activar_titulo_navbar() {
	const $a = document.querySelectorAll(".navbar-nav > li.nav-item")
	const $title = document.querySelector("title").textContent
	$a.forEach(item => {
		item.classList.remove("active")
		if($title == item.textContent)
			item.classList.add("active")
	})
}
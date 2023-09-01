const joke = document.querySelector("p")
const btn = document.querySelector("button")
let xhr = new XMLHttpRequest()

generateJoke = () => {
	xhr.open("GET", "https://api.chucknorris.io/jokes/random")
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let data = JSON.parse(xhr.responseText)
			joke.innerText = data.value
		} else {
			joke.innerText = "Not in mood :/"
		}
	}
	xhr.send()
}

btn.addEventListener("click", generateJoke)
document.addEventListener("DOMContentLoaded", generateJoke)

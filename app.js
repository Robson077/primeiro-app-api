
let url = "https://api.thedogapi.com/v1/images/search"
const div = document.getElementById("test")


async function api() {
    const api = await fetch(url)

    const json = await api.json()

    let novadiv = ""
    json.forEach(element => {
        novadiv = novadiv + `
            <img src="${element.url}" width=310px>
        `

        div.innerHTML = novadiv
    })
}

api()
let __instance = null

export default class API {
    #token = localStorage.getItem('token') || null

    static instance() {
        if (__instance == null)
            __instance = new API()

        return __instance
    }

    async login(email, pass) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: pass })
        }

        const response = await fetch(`http://localhost:8080/login`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            localStorage.setItem('user', email)
            localStorage.setItem('token', response.headers.get("Authentication"))
            this.#token = response.headers.get("Authentication")
            return true
        }
        return false
    }

    async logout() {
        this.#token = null
        localStorage.clear()

        return true
    }

    async findUser(id) {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.#token
            }
        }

        const response = await fetch(`http://localhost:8080/users/${id}`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            return await response.json()
        }
        return ''
    }

    async createUser(user) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": this.#token
            },
            body: JSON.stringify({
                email: user.email,
                nome: user.nome,
                apelidos: user.apelidos,
                password: user.password,
                roles: user.roles
            })
        }

        const response = await fetch(`http://localhost:8080/users`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            return true
        }
        return false
    }

    async findNormas(query) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.#token
            }
        }

        const response = await fetch(`/local/${query}`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            return await response.json()
        }
        return ''
    }

    async findFinalDocument(sumario) {
        console.log(sumario)
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.#token
            }
        }
        const response = await fetch(`/local/${sumario}`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            return await response.json()
        }
        return ''
    }

    async findHtmlDoc(sumario) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.#token
            }
        }

        const response = await fetch(`/local/${sumario}/htmlDoc`, requestOptions)
            .then(response => response.text())
            .then(text => {
                const parser = new DOMParser()
                return parser.parseFromString(text, "text/xml")
            })
            .catch(error => console.log(error))

        return response
    }

    async updateFinalDocument(finalDocument) {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.#token
            },
            body: JSON.stringify({
                id: finalDocument.id,
                sumario: finalDocument.sumario,
                borrador: finalDocument.borrador,
                notes: finalDocument.notes,
                changes: finalDocument.changes,
                laws: finalDocument.laws,
                headerItems: finalDocument.headerItems,
                linkedChanges: finalDocument.linkedChanges,
                urlDog: finalDocument.urlDog
            })
        }

        const response = fetch(`/local/${finalDocument.id}`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            return true
        }
        return false
    }

    async updateEstadoVinculada(leiModificada) {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.#token
            },
            body: JSON.stringify({
                sumario: leiModificada.sumario,
                borrador: leiModificada.borrador
            })
        }

        const response = fetch(`/local/${leiModificada.sumario}`, requestOptions).catch(error => console.log(error))

        if (response.status === 200) {
            return true
        }
        return false
    }

    async deleteFinalDocument(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.#token
            }
        }
        const response = await fetch(`/local/${id}`, requestOptions).catch(error => console.log(error))

        if (response.status === 204) {
            return true
        }
        return false
    }
}
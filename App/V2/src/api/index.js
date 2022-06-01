import * as jsonpatch from 'fast-json-patch/index.mjs';

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
        };

        const response = await fetch(`http://localhost:8080/login`, requestOptions);

        if (response.status === 200) {
            localStorage.setItem('user', email)
            localStorage.setItem('token', response.headers.get("Authentication"))
            this.#token = response.headers.get("Authentication")
            return true
        } else {
            return false
        }
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
        };

        const response = await fetch(`http://localhost:8080/users/${id}`, requestOptions);

        if (response.status === 200) {
            return await response.json()
        }
    }

    async createUser(user) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                nome: user.nome,
                apelidos: user.apelidos,
                password: user.password,
                roles: ["ROLE_USER"]
            })
        };

        const response = await fetch(`http://localhost:8080/users`, requestOptions);

        if (response.status === 200) {
            return await response.json()
        }
    }

    async updateUser(id, user) {
        var diff = jsonpatch.compare(await this.findUser(id), user.user);

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": this.#token
            },
            body: JSON.stringify(diff)
        };

        const response = await fetch(`http://localhost:8080/users/${id}`, requestOptions);

        if (response.status === 200) {
            return await response.json()
        }
    }

    async deleteUser(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Authorization": this.#token
            }
        };

        const response = await fetch(`http://localhost:8080/users/${id}`, requestOptions);

        if (response.status === 204) {
            return true
        } else {
            return false
        }
    }
}
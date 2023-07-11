import axios from 'axios'

export const defaultAxios = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v4/',
	headers: {
		'Content-Type': 'application/json'
	}
})

import axios from 'axios'

export const defaultAxios = axios.create({
	baseURL: 'https://elon-musk-back-end.onrender.com/api/v4/',
	headers: {
		'Content-Type': 'application/json'
	}
})

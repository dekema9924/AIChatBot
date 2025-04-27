export const API_BASE_URL = 'http://localhost:3000'

export const ROUTES = {
    login: `${API_BASE_URL}/auth/login`,
    profile: `${API_BASE_URL}/auth/profile`,
    register: `${API_BASE_URL}/auth/register`,
    googleOAuth: `${API_BASE_URL}/auth/google`,
    githubOAuth: `${API_BASE_URL}/auth/github`,
}
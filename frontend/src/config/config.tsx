
export const API_BASE_URL =
    import.meta.env.MODE === 'development'
        ? import.meta.env.VITE_API_BASE_URL
        : import.meta.env.VITE_API_RENDER_URL;

export const ROUTES = {
    login: `${API_BASE_URL}/auth/login`,
    profile: `${API_BASE_URL}/auth/profile`,
    register: `${API_BASE_URL}/auth/register`,
    googleOAuth: `${API_BASE_URL}/auth/google`,
    githubOAuth: `${API_BASE_URL}/auth/github`,
};



//debugging
if (import.meta.env.MODE === 'development') {
    console.log('Running in development mode');
    console.log('API:', import.meta.env.VITE_API_BASE_URL);
}
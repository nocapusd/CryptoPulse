const ACCESS_TOKEN_KEY = 'accessToken';

export const authService = {
    saveToken: (token: string) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },
    getToken: () => {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },
    removeToken: () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
    isAuthenticated: (): boolean => {
        return !!localStorage.getItem(ACCESS_TOKEN_KEY);
    },
}


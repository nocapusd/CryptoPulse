import type {LoginRequest, LoginResponse} from "../types/auth.types.ts";
import {authAPI} from "./axios.instance.ts";

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await authAPI.post<LoginResponse>(
        '/auth/login',
        credentials
    )

    return response.data;
}
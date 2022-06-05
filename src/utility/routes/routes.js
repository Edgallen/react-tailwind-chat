import {Login, Chat, Register, ForgotPassword} from "../../pages";

export const publicRoutes = [
    {
        path: '/login',
        Page: Login
    },
    {
        path: '/register',
        Page: Register
    },
    {
        path: '/forgotPassword',
        Page: ForgotPassword
    }
];

export const privateRoutes = [
    {
        path: '/chat',
        Page: Chat
    }
];
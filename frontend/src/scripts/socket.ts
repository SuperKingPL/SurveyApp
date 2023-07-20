import {io} from 'socket.io-client';
import AuthService from '../services/AuthService';
export const socket = io('http://localhost:2115', {auth: {
    token: AuthService.GetToken()
}});
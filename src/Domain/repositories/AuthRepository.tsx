import { ResponseApiDelivery } from 
"../../Data/sources/remote/models/ResponseApiDelivery"; 
import { User } from "../entities/User"; 
 
export interface AuthRepository { 
    login(correo: string, contraseña: string ): Promise<ResponseApiDelivery>; 
    register(user: User): Promise<ResponseApiDelivery>; 
 
}
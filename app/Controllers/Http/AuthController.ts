import { Hash } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
    public async login({ auth, request, response }: HttpContextContract) {
        try {
            const email = request.input("email");
            const password = request.input("password");

            const token = await auth.use("api").attempt(email, password);
            return token
        }
        catch (err) {
            response.status(500);
            return err
        }
    }

    public async register({ auth, request, response }: HttpContextContract) {
        try {
            const user = await User.create(request.body());
            const token = auth.login(user)

            return token;
        }
        catch (err) {
            return err.errno;
        }
    }
}
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Employee from "App/Models/Employee";

export default class EmployeeController {
    public async getAllEmployees() {
        try {
            const employees = await Employee.query().select("id", "name", "role", "salary", "address", "pincode", "mobile")

            return employees;
        }
        catch (err) {
            return err;
        }
    }

    public async createEmployee({ request }: HttpContextContract) {
        try {
            const employee = await Employee.createMany([request.body()]);

            return employee;
        }
        catch (err) {
            return err;
        }
    }

    public async getEmployee({ request }: HttpContextContract) {
        try {
            const employee = await Employee.find(parseInt(request.params().id));

            return employee;
        }
        catch (err) {
            return err;
        }
    }

    public async updateEmployee({ request }: HttpContextContract) {
        try {
            console.log(request.body());

            const newEmployee = await Employee.findOrFail(parseInt(request.params().id));
            newEmployee.merge(request.body()).save();

            return newEmployee;
        }
        catch (err) {
            return err;
        }
    }

    public async deleteEmployee({ request }: HttpContextContract) {
        try {
            const employee = await Employee.findOrFail(parseInt(request.params().id));
            employee.delete();

            return employee;
        }
        catch (err) {
            return err;
        }
    }
} 
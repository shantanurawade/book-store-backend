import * as userServices from '../services/user.services.js';
import HttpStatus from 'http-status-codes'
import bcrypt from 'bcrypt'
import userData from '../models/user.model.js'


export const getAllUser = async (req, res) => {
    const data = await userServices.getAll();
    res.send({
        message: "All users fetched successfully...",
        data: data
    });
}

export const login = async (req, res) => {
    const body = req.body;
    const { data, token } = await userServices.login(body);
    if (data == 0) {
        return res.status(HttpStatus.NOT_FOUND).send({
            responce: 0
        });
    }
    if (data == -1) {
        return res.status(HttpStatus.UNAUTHORIZED).send({
            responce: 0
        });
    }
    return res.status(HttpStatus.OK).send({
        message: "User login successfully...",
        data,
        token,
        responce: 1
    });
}

export const getUser = async (req, res) => {
    const data = await userServices.getUser(req);
    res.status(HttpStatus.ACCEPTED).send(data);
}
export const registerUser = async (req, res) => {

    const reqData = req.body;
    const existingUser = await userServices.findUser(reqData);

    if (existingUser) return res.status(HttpStatus.CONFLICT).send({
        message: "User already exists, try sign in..."
    });

    const hashedPassword = await bcrypt.hash(reqData.password, 16);

    const data = await userData.create({
        firstName: reqData.firstName,
        lastName: reqData.lastName,
        email: reqData.email,
        password: hashedPassword
    });
    res.status(HttpStatus.CREATED).send({
        data: data,
        message: "User saved successfully..."
    })

}

export const addToCart = async (req, res) => {
    const userId = req.user.id;
    const reqData = req.body;

    const data = await userServices.addToCart(userId, reqData);
    res.status(HttpStatus.OK).send({
        data: data,
        message: "Item added to cart successfully..."
    })
}

export const placeOrder = async (req,res) => {
   
    const userId = req.user.id;
    await userServices.placeOrder(userId);
    res.send({ success: 'done' })
}

export const addToWishlist = async (req, res) => {
  
    const userId = req.user.id;
    const reqData = req.body;
    const data = await userServices.addToWishlist(userId, reqData);
    res.status(HttpStatus.OK).send({
        data: data,
        message: "Item added to cart successfully..."
    })
}
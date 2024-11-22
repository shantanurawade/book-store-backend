import jwt from 'jsonwebtoken'


export const authenticateuser = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];


    jwt.verify(token, process.env.SECURITY_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        
        req.user = user;
    
        next();
    });

}
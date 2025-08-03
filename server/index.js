import express from "express";
import passport from "passport";
import session from "express-session";
import "./config/passport.js";
import authRoutes from "./routes/authRoutes.js"

const app = express();
const port = 3001;

//middlewares
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/auth", authRoutes);


app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});
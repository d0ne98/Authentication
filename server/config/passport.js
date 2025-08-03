import {Strategy as LocalStrategy} from "passport-local";
import bcrypt from "bcrypt";
import * as UserModel from "../models/user.js";
import passport from "passport";


passport.use('local', new LocalStrategy(async (username , password, done)=>{
    try {
        const user = await UserModel.findByUsername(username);
        if(!user) return done(null, false, {message: "User not found"});
        const matched = await bcrypt.compare(password, user.password);
        if(!matched) return done(null, false, {message: "Invalid password"});

        return done(null, user);
    } catch (err) {
        done(err);
    }
}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
    try {
        const user = await UserModel.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
    
})
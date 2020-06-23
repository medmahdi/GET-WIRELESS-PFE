import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';


export const UserSchema = new mongoose.Schema({
    username: { type: String, default: "" },
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    password: String,
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    avatarUrl: { type: String, default: "" },
    status: { type: Boolean, default: false },
    roles   : [String]
}, { timestamps: true });

export interface  User extends mongoose.Document {
    readonly _id  : string;
    readonly username: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly password: string;
    readonly phone: string,
    readonly email: string,
    readonly avatarUrl: string;
    readonly status: boolean;
    readonly roles   : string[]; 
}

export class  CreateUserDto {
    readonly username: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly password: string;
    readonly roles   : string[]; 
}

UserSchema.pre('save', function (next) {
    let user = this as any;
    // Make sure not to rehash the password if it is already hashed
    if (!user.isModified('password')) return next();
    // Generate a salt and use it to hash the user's password
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.checkPassword = function (attempt, callback) {
    let user = this;
    bcrypt.compare(attempt, user.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};
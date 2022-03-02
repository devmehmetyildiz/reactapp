import React, { Component, useState } from "react";
import { login } from "../../slice/userSlice"
import { useSelector, useDispatch } from 'react-redux'
import "../../styles/Login.css"
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        }))
    }

    return (
        <div className="backgroundlogin">
            <div className="login">
                <h3 style={{ color: 'white' }}>Star Note Veri Takip Uygulaması</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <a style={{ color: '#ffffff' }}>Kullanıcı Adı</a>
                        <input type="name" placeholder="Kullanıcı Adı" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <a style={{ color: '#ffffff' }}>Email</a>
                        <input type="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <a style={{ color: '#ffffff' }}>Parola</a>
                        <input type="password" placeholder="Parola" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Giriş Yap</button>
                </form>

                <br />

            </div>
        </div>

    );
};
export default Login;
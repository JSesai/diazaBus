import { useState, useEffect } from "react";
import { Box, Card, Typography, TextField, Button, Dialog } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import LOGO_DIAZA from "../assets/LOGO_DIAZA.png"

export default function Login() {


    //estates
    const [user, setUser] = useState({ name: "", password: "" });
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [buttonNext, setButtonNext] = useState(true);
    const [userNameField, setUserNameField] = useState(false);
    const [userPasswordField, setUserPasswordField] = useState(false);
    
const navigate = useNavigate();
    const handleSubmit = () => {
        try {
            //hacer peticion y enviar use y passwor para validacion

            //si el loguin es correcto navegar a mainhub
            navigate("/mainhub");
        } catch (error) {
            //si el logiuin es incorrecto mostrar alerta 
            
        }






    }


    // validar input nombre y setear 
    const handleUserNameChange = (event) => {
        event.target.value === '' ? setUserNameField(false) : setUserNameField(true);        
        (userNameField && userPasswordField) && setButtonNext(false) ;
        setUserName(event.target.value);
    };

    // Al entrar a la función, seteamos el valor de user con los datos del campo Password
    const handleUserPasswordChange = (event) => {
        event.target.value === '' ? setUserPasswordField(false) : setUserPasswordField(true);
        (userNameField && userPasswordField) && setButtonNext(false);
        console.log(userPasswordField);
        setUserPassword(event.target.value);
        
    };


    return (
        <>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height='100%'
            >
                <Card
                    style={{
                        borderRadius: "20px",
                        width: "610px",
                        height: '377px',
                        padding: "24px 4px",
                        boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                    }}
                >
                    {/* Logo */}
                    <figure
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: '0px'
                        }}
                    >
                        <img
                            src={LOGO_DIAZA}
                            alt="Logo de Diaza"
                            height={120}
                            width={120}
                        />
                    </figure>

                    {/* Input */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "0 55px",
                        }}
                    >
                        <div>
                            <Typography
                                color="#024995"
                                style={{
                                    padding: "13px 0 0 0",
                                    display: "flex",
                                    justifyContent: "center",
                                    fontFamily: 'roboto',
                                    fontSize: '15px'
                                }}
                            >
                                <span>Ingresa tus datos para iniciar sesión</span>
                            </Typography>

                            <TextField
                                label="Usuario"
                                fullWidth
                                value={userName}
                                onChange={handleUserNameChange}
                                style={{ margin: "13px 0px 8px 0px" }}
                            />

                            <TextField
                                id="outlined-read-only-input"
                                label="Contraseña"
                                type="password"
                                fullWidth
                                value={userPassword}
                                onChange={handleUserPasswordChange}
                                style={{ margin: "5px 0 21px 0" }}
                            />

                            <Button
                                onClick={handleSubmit}
                                variant="contained"
                                size="large"
                                style={{ margin: "15px 0 29.38px 0" }}
                                disabled={buttonNext}
                            >
                                Iniciar sesión
                            </Button>

                        </div>
                    </div>
                </Card>
            </Box>

        </>
    )
}

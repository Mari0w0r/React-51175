import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';


export default function DatosUsuario(props) {

    const { nombre, setNombre, apellido, setApellido, telefono, setTelefono, email, setEmail } = props;

    const [confirmEmail, setConfirmEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleConfirmEmailChange = (event) => {
        setConfirmEmail(event.target.value);
    };

    React.useEffect(() => {
        if (confirmEmail && email !== confirmEmail) {
        setEmailError('Los correos no coinciden');
        } else {
        setEmailError('');
        }
    }, [email, confirmEmail]);


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '40ch' },
                position: "relative",

                display: "flex",
                flexDirection: "column"
            }}
            noValidate
            autoComplete="off"
    >
        <Typography>COMPLETA TUS DATOS</Typography>
        <TextField
            required
            id="nombre"
            label="Nombre"
            variant="outlined"
            color='secondary'
            size='small'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
            required
            id="apellido"
            label="Apellido"
            variant="outlined"
            color='secondary'
            size='small'
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
        />
        <TextField
            required
            id="telefono"
            label="Telefono"
            variant="outlined"
            color='secondary'
            size='small'
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
        />
        <TextField
        required
        id="email"
        label="Correo"
        variant="outlined"
        size="small"
        color='secondary'
        value={email}
        onChange={handleEmailChange}
        error={!!emailError}
        helperText={emailError}
        />
        <TextField
        required
        id="confirmarEmail"
        label="Confirmar Correo"
        variant="outlined"
        color='secondary'
        size="small"
        value={confirmEmail}
        onChange={handleConfirmEmailChange}
        error={!!emailError}
        helperText={emailError}
        />
    </Box>
    )
};
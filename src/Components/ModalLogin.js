import React from 'react';

import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0.5px solid #000',
    borderRadius: "7px",
    boxShadow: 24,
    textAlign: 'center',
    pt: 1,
    px: 2,
    pb: 5,
};

const ModalLogin = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>
                <LoginIcon
                    style={{color: "white", marginRight: "1em"}}/>
            </Button>

            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                {/*<ClickAwayListener onClickAway={handleClose}>*/}
                    <Box sx={{...style, width: 400}}>
                        <div className="modal">
                            <CloseIcon
                                onClick={handleClose}
                                style={{position:"absolute", top:"0", right:"0", cursor:"pointer"}}
                                fontSize="large"/>
                            <h1>Connectez-vous</h1>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                placeholder="jean.dupont@email.fr"
                                margin="dense"
                                style={{margin: "1vh 0"}}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="dense"
                            />
                        </div>
                        <Button onClick={handleClose} variant="contained"
                                style={{marginTop: "2vh", backgroundColor: "#2d6a4f"}}>Connexion</Button>
                    </Box>
                {/*</ClickAwayListener>*/}
            </Modal>
        </React.Fragment>
    );
}

export default ModalLogin;
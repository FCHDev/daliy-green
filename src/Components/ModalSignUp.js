import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from "@mui/material/TextField";
import {UserAuth} from "../Context/AuthContext"
import {useState} from "react";
import {useNavigate} from "react-router-dom"


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

const ModalSignUp = () => {
    // CONST & VARIABLES
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // eslint-disable-next-line
    const [error, setError] = useState('')
    const { createUser } = UserAuth()
    const navigate = useNavigate()


    // COMPORTEMENTS
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
        setOpen(false)
    };


    return (
        <>
            <Button onClick={handleOpen}>
                <AddCircleIcon
                    style={{color: "white", marginRight: "1em"}}/>
            </Button>

            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...style, width: 400}}>
                    <div className="modal">
                        <CloseIcon
                            onClick={handleClose}
                            style={{position:"absolute", top:"0", right:"0", cursor:"pointer"}}
                            fontSize="large"/>
                        <h1>Inscrivez-vous</h1>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            placeholder="jean.dupont@email.fr"
                            margin="dense"
                            style={{margin: "1vh 0"}}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="dense"
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <Button onClick={handleSubmit} variant="contained"
                            style={{marginTop: "2vh", backgroundColor: "#2d6a4f"}}>Create Account</Button>
                </Box>
            </Modal>
        </>
    );
}

export default ModalSignUp;
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {AiFillCaretLeft, AiOutlineUserAdd} from "react-icons/ai";
import {set} from "firebase/database";
import {refDb} from "../services/firebase-config";
import {db, storage} from "../services/firebase-config";
import {MenuItem} from "@mui/material";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {Link} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const AdminPage = ({productsList}) => {
    /// UPLOAD IMAGES
    const [imageUpload, setImageUpload] = useState(null);
    const [picPreview, setPicPreview] = useState();

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImgURL(url);
                    setPicPreview(
                        <div className="photo-preview">
                            <img src={url} alt="produit"/>
                        </div>
                    );
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    /// CONST
    const optionCategory = [
        {
            value: "Décoration",
            label: "Décoration",
        },
        {
            value: "Entretien",
            label: "Entretien",
        },
        {
            value: "Hygiène",
            label: "Hygiène",
        },
    ];


    // STATES
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [description2, setDescription2] = useState("");
    const [name, setName] = React.useState("");
    const id = productsList.length;
    const [imgURL, setImgURL] = useState("");
    const [price, setPrice] = React.useState(0);
    const [stock, setStock] = React.useState("");

    // HANDLES

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleDescription2 = (event) => {
        setDescription2(event.target.value);
    };
    const handleImgURLChange = (event) => {
        setImgURL(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleStockChange = (event) => {
        setStock(event.target.value);
    };


    // FONCTION POUR CREER NOUVEAU GUITARISTE
    const writeUserData = () => {
        set(refDb(db, `/${id}`), {
            category,
            description,
            description2,
            id,
            imgURL,
            name,
            price,
            stock,

        });
        setCategory("");
        setDescription("");
        setDescription2("");
        setImgURL("");
        setName("");
        setPrice("");
        setStock("");
        setPicPreview("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        writeUserData();
        // REFRESH PAGE ET SCROLL AU TOP APRES SOUMISSION
        window.scrollTo(0, 0);
        alert("Le produit " + name + " a bien été ajouté !");
    };

    return (
        <div className="admin" id="top">
            <nav>
                <Link to="/">
                    <Button
                        variant="contained"
                        className="button-back"
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            margin: "1vh 0 0 1vw",
                            backgroundColor:"#22577a",
                        }}
                    >
                        <AiFillCaretLeft/>
                        <span>Accueil</span>
                    </Button>
                </Link>
            </nav>
            <h1 style={{marginTop: "0.5em"}}>Ajouter une photo</h1>
            <div className="upload-section">
                <label htmlFor="inputTag">
                    {" "}
                    Select Image
                    <input
                        id="inputTag"
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />{" "}
                </label>
                <label htmlFor="inputButtonTag">
                    {" "}
                    Upload Image
                    <input id="inputButtonTag" type="button" onClick={uploadImage}/>{" "}
                </label>
            </div>
            {picPreview}

            <div className="separation"></div>

            <h1 style={{marginTop: "4vh"}}>Ajouter un produit</h1>
            <form>
                <TextField
                    id="id"
                    label="ID"
                    disabled={true}
                    multiline
                    maxRows={1}
                    value={id}
                    className="search"
                    margin="normal"
                    type="text"
                    fullWidth={true}
                />
                <TextField
                    id="nom"
                    label="Nom"
                    multiline
                    maxRows={1}
                    value={name}
                    className="search"
                    margin="normal"
                    type="search"
                    fullWidth={true}
                    onChange={handleNameChange}
                />

                <TextField
                    id="category"
                    select
                    label="Catégorie"
                    value={category}
                    onChange={handleCategory}
                    className="search"
                    margin="normal"
                    helperText="Sélectionnez la catégorie"
                    fullWidth={true}
                >
                    {optionCategory.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    // id="prix"
                    label="Prix en €"
                    maxRows={1}
                    value={price}
                    onChange={handlePriceChange}
                    className="search"
                    margin="normal"
                    type="search"
                    fullWidth={true}
                />

                <TextField
                    id="stock"
                    label="Dispo en stock"
                    maxRows={1}
                    value={stock}
                    onChange={handleStockChange}
                    className="search"
                    margin="normal"
                    type="search"
                    fullWidth={true}
                />
                <TextField
                    id="description"
                    label="Description"
                    multiline
                    maxRows={20}
                    value={description}
                    onChange={handleDescription}
                    className="search"
                    margin="normal"
                    type="search"
                    fullWidth={true}
                />
                <TextField
                    id="description2"
                    label="Description (suite)"
                    multiline
                    maxRows={20}
                    value={description2}
                    onChange={handleDescription2}
                    className="search"
                    margin="normal"
                    type="search"
                    fullWidth={true}
                />

                <TextField
                    id="imgURL"
                    label="Image URL"
                    multiline
                    maxRows={4}
                    value={imgURL}
                    className="search"
                    margin="normal"
                    type="search"
                    fullWidth={true}
                    onChange={handleImgURLChange}
                />
                <div style={{marginTop: "20px"}}>
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<AiOutlineUserAdd/>}
                        onClick={handleSubmit}
                        style={{backgroundColor:"#22577a"}}
                    >
                        Ajouter
                    </Button>
                </div>
            </form>
            <ScrollToTop smooth={true}/>
        </div>
    );
};

export default AdminPage;

import {useEffect, useState} from "react";
import {storage} from "../services/firebase-config";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import {v4} from "uuid";
import "../Styles/testUploadStyle.css"

function TestUploadImg() {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListeRef = ref(storage, "images/")

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
            alert("Image uploaded")
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        listAll(imageListeRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, [])
    console.log(imageList)

    return (
        <div>
            <h1>Hello Monde</h1>
            <div className="upload-section">
                <label htmlFor="inputTag"> Select Image
                    <input id="inputTag" type="file"
                           onChange={(event) => {
                               setImageUpload(event.target.files[0])
                           }}/> </label>
                <label htmlFor="inputButtonTag"> Upload Image
                    <input id="inputButtonTag" type="button"
                           onClick={uploadImage}/> </label>
            </div>
            <div className="liste-image">
                {imageList.map((url) => {
                    return <img src={url}/>
                })}
            </div>
        </div>
    );
}

export default TestUploadImg;

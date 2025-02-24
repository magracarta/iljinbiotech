const cloudName =  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_API_PRESET;

const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


export async function uploadImage(file){
    const data = new FormData();
    data.append('file',file);
    data.append('upload_preset', uploadPreset);
    return fetch(url, {
        method: 'POST',
        body: data,
    }).then((res) => res.json())
    .then((data) => data.url);
}

export async function deleteImage(publicId) {
    url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    const data = new FormData();
    data.append("public_id", publicId);
    data.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY); 
    return fetch(url, {
        method: "POST",
        body: data,
    })
    .then((res) => res.json())
    .then((data) => console.log("삭제 결과:", data));
}
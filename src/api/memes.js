export const fetchAllMemes = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    return await response.json();
}

export default function(){
    console.log("hello world");
}
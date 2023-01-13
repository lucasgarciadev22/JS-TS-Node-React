const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //calling Original API
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');
//main function try...catch
const getCats = async()=>{
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }

};
//load cat images from API inside img div in html
const loadImg = async()=>{
    catImg.src = await getCats();
}
catBtn.addEventListener('click',loadImg);//call loadImg every time user clicks on button
loadImg();
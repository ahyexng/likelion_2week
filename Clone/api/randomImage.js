/*이미지 리스트를 받는다*/
const getRandomImage = async () => {  //비동기처리
    const randomAlbumId = Math.floor(Math.random() * (10 - 1) + 1);
    const BASE_URL = `https://jsonplaceholder.typicode.com/albums/${randomAlbumId}/photos`;

    try {
        const result = await fetch(BASE_URL);       
        const content = await result.json(); 

        return content;
    } catch (e) {
        console.log('api 에러!', e.message);
    }
};
//async를 붙이면 해당 함수는 항상 promise를 반환, await키워드를 만나면 promise가 처리될 때 까지 기다린다.
export default getRandomImage;
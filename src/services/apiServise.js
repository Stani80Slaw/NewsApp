const apiUrl = 'http://eventregistry.org/api/v1';

const apiKey= process.env.REACT_APP_API_KEY;

export const defaultData = {
    keyword: "top",
    resultType: "articles",
    articlesSortBy: "data",
    dataType: ["news","block"],
    lang: ["rus"],
    dateStart: "2023-06-01",
    };



export async function getArticles(params){
    const urlParams = new URLSearchParams({...params, apiKey});

    const response = await fetch(`${apiUrl}/article/getArticles?${urlParams}`);

    return await response.json();
};
const searchform=document.querySelector("#search-form");
const searchbox=document.querySelector("#searchBox");
const searchResult=document.querySelector("#search-result");
const showMore=document.querySelector("#show-more-btn");
const accessKey="VQ3OACZB5dw6PTYM1F9LPS47lrnMoJm_s7GMqNmp8Fg"

let keyword="";
let page=1;

async function searchEngine(){
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response=await fetch(url);
    const data=await response.json();
    const result=data.results;

    if(page === 1){
        searchResult.innerHTML="";
    }
    if(result.length === 0){
        searchResult.innerText="No result found..";
        searchResult.style.fontSize="25px";
        searchResult.style.display="flex";
        searchResult.style.justifyContent="center";
    }
    else{

        result.map((res)=>{
                const image=document.createElement("img");
                image.src=res.urls.small;
                const imageLink=document.createElement("a");
                imageLink.href=res.links.html;
                imageLink.target="_blank";
                
                imageLink.appendChild(image)
                searchResult.appendChild(imageLink);
        })
    }

    showMore.style.display="block"
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchEngine();
})

showMore.addEventListener("click",()=>{
    page++;
    searchEngine();
})
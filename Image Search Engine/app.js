let searchForm=document.querySelector("#searchForm");
let searchBox=document.querySelector("#searchBox");
let searchResult=document.querySelector("#searchResult");
let showMoreBtn=document.querySelector("#showMoreButton");

let keyword="";
let page=1;

const accessKey="p2aDREEaJBod8X49jb3ob1hCEU872rCRWdKxs4Ncmw0";

const searchImages=async()=>{
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchResult.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
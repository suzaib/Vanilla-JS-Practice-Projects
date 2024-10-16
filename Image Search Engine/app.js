//Accessing our HTML elements
let searchForm=document.querySelector("#searchForm");
let searchBox=document.querySelector("#searchBox");
let searchResult=document.querySelector("#searchResult");
let showMoreBtn=document.querySelector("#showMoreButton");

//Initialising the keyword(storing the search box value) as empty string and page as 1(one page of search result)
let keyword="";
let page=1;

//This is our accessKey
const accessKey="p2aDREEaJBod8X49jb3ob1hCEU872rCRWdKxs4Ncmw0";

//Function to search Images
//It loads images using free api that is provided by unsplash
const searchImages=async()=>{
    keyword=searchBox.value;
    
    //This api loads 12 images per page
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();

    //Storing the results
    const results=data.results;

    //iterating over the results array to fill in images by first creating an images tag then setting src from our results array
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;

        //Adding _blank makes sure that the link opens in new tab
        imageLink.target="_blank";

        //Appending the image element created to the imageLink
        imageLink.appendChild(image);

        //Appending the imageLink to searchResult
        searchResult.appendChild(imageLink);
    })

    //The show more button was hidden, setting display to block makes it visible
    showMoreBtn.style.display="block";
}

//Attaching the eventListener to searchForm 
searchForm.addEventListener("submit",(event)=>{

    //A form when submitted reloads the page, therefore we prevent this default behaviour
    event.preventDefault();
    page=1;

    //Calling the searchImages function
    searchImages();
})

//Attaching the eventListener to showMoreBtn
showMoreBtn.addEventListener("click",()=>{
    page++;

    //Here we again call the searchImages button , but this time with an increased page value
    searchImages();
})

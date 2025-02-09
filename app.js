let search = document.querySelector('input');
let button = document.querySelector("button");
let repolinks = document.querySelector(".repo")

let url = "https://api.github.com/users/";

async function repo() {
    let response = await fetch(`https://api.github.com/users/${search.value}/repos`)
    let data = await response.json();
    console.log(data)
    repolinks.innerHTML =""; 
    data.forEach(ele => {
        let a = document.createElement('a');
        a.href = ele.html_url;
        a.innerText  = ele.name;
        repolinks.appendChild(a);
    });
}


button.addEventListener('click',async ()=>{
    let response = await fetch(`https://api.github.com/users/${search.value}`);
    let data = await response.json();
    // console.log(data)

    document.querySelector("#name").innerHTML = data.name;
    
    // if bio is empty
    
    if(data.bio === null){
        document.querySelector("#bio").innerHTML = 'null';
    }
    else{
        document.querySelector("#bio").innerHTML = data.bio; 
    }
    
    document.querySelector("#followers").innerHTML = data.followers;
    document.querySelector("#Following").innerHTML = data.following;
    document.querySelector("#repo").innerHTML = data.public_repos;
    document.querySelector("#img").src = data.avatar_url;

    repo();

})
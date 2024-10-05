// Create Dynamic Category Section
const LoadCategoryButton = () =>
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoryButton(data.categories))
    .catch((err) => console.log("error", err));

const displayCategoryButton = (categories) => {
  const buttonContainer = document.getElementById("categoryButtons");
  for (const categoryName of categories) {
    buttonContent = document.createElement("div");
    buttonContent.innerHTML = `<button onclick="loadCategoryIds(${categoryName.category_id})" class="btn">${categoryName.category}
   </button>`;
    buttonContainer.append(buttonContent);
  }
};
const loadCategoryIds = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((err) => console.log("Error", err));
};
// Time Function
function getTime(time) {
  const hr = parseInt(time / 3600);
  let reaminingSeconds = time % 3600;
  const mint = parseInt(reaminingSeconds / 60);
  reaminingSeconds = mint % 60;
  return `${hr} hour ${mint} minutes ${reaminingSeconds} ago`;
}

// LoadVideos
const LoadVideos = () =>
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log("error", err));

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  if (videos.length == 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `<div class="flex justify-center items-center flex-col text-center">
    <img class="w-[100px]"src="./assets/Icon.png"/>
    <p class='py-4 text-black font-bold'> Oops!! Sorry, There is no <br>content here
    </p>
   </div>`;
    return;
  }
  videoContainer.classList.add("grid");
  videoContainer.innerHTML = "";
  videos.forEach((videos) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `<figure class="h-[200px] rounded-lg  relative">
    <img class="h-full w-full object-cover"
      src=${videos.thumbnail}/>
       ${
         videos.others.posted_date?.length === 0
           ? ""
           : `<span class="absolute right-2 bottom-2 p-2 bg-black rounded-md text-white text-xs">
      ${getTime(videos.others.posted_date)}
      </span>`
       }
      
  </figure>
  <div class="flex py-2 gap-4">
  <div>
  <img src=${videos.authors[0].profile_picture}
  class="h-[30px] w-[30px] rounded-full object-cover"/>
  </div>
  <div>
  <h1 class="text-lg font-bold text-black" >${videos.title}
  </h1>
  <div class="flex gap-2 align-center">
  <p>
  ${videos.authors[0].profile_name}
  </p>
  ${
    videos.authors[0].verified === true
      ? '<img class="h-[25px] w-[25px]" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>'
      : ""
  }

  </div>
   <p>
    ${videos.others.views} views
  </p>
  </div>
    </div>
  </div>`;
    videoContainer.append(card);
  });
};

LoadCategoryButton();
LoadVideos();

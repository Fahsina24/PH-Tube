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
    .then((data) => console.log(data.category))
    .catch((err) => console.log("Error", err));
};
// cardDemo lagbe na
const cardDemo = {
  category_id: "1001",
  video_id: "aaaa",
  thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
  title: "Shape of You",
  authors: [
    {
      profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
      profile_name: "Olivia Mitchell",
      verified: "",
    },
  ],
  others: {
    views: "100K",
    posted_date: "16278",
  },
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
};

// LoadVideos
const LoadVideos = () =>
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log("error", err));

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((videos) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `<figure class="h-[200px] rounded-lg">
    <img class="h-full w-full object-cover"
      src=${videos.thumbnail}/>
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

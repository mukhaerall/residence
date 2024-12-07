const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});```html
<!-- Add this meta tag to the head of your HTML file -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Add this CSS to your stylesheet -->
<style>
  /* Make the website responsive */
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .col-md-6 {
    flex-basis: 50%;
    padding: 20px;
  }

  .col-md-4 {
    flex-basis: 33.33%;
    padding: 20px;
  }

  .col-md-8 {
    flex-basis: 66.66%;
    padding: 20px;
  }

  /* Make the navigation menu responsive */
  .header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  .nav_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav_menu_list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .nav_menu_item {
    margin-right: 20px;
  }

  .nav_menu_item a {
    color: #fff;
    text-decoration: none;
  }

  .toggle_btn {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .nav_menu {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav_menu_list {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav_menu_item {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .toggle_btn {
      display: block;
      background-color: #333;
      color: #fff;
      border: none;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
    }

    .toggle_btn:hover {
      background-color: #444;
    }
  }

  /* Make the blog posts responsive */
  .blog-post {
    margin-bottom: 20px;
  }

  .blog-post img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }

  .blog-post .card {
    padding: 20px;
  }

  .blog-post .card-body {
    padding: 20px;
  }

  .blog-post .card-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .blog-post .card-text {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    .blog-post {
      margin-bottom: 10px;
    }

    .blog-post img {
      height: 150px;
    }

    .blog-post .card {
      padding: 10px;
    }

    .blog-post .card-body {
      padding: 10px;
    }

    .blog-post .card-title {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .blog-post .card-text {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
</style>

<!-- Modify the HTML structure to be responsive -->
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <!-- Navigation menu -->
      <div class="header">
        <div class="nav_menu">
          <ul class="nav_menu_list">
            <li class="nav_menu_item"><a href="#">Home</a></li>
            <li class="nav_menu_item"><a href="#">About</a></li>
            <li class="nav_menu_item"><a href="#">Contact</a></li>
          </ul>
          <button class="toggle_btn">Toggle Menu</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <!-- Blog posts -->
      <div class="blog-post">
        <img src="image.jpg" alt="Blog Post Image">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Blog Post Title</h2>
            <p class="card-text">Blog post text.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Add JavaScript to toggle the navigation menu on smaller screens -->
<script>
  const toggleBtn = document.querySelector('.toggle_btn');
  const navMenu = document.querySelector('.nav_menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
</script>
```

AOS.init();

// Logo
gsap.from(".logo",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

// nav menu
gsap.from(".nav_menu_list .nav_menu_item",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
    stagger:0.3,
})

// toggle btn
gsap.from(".toggle_btn",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

// main heading
gsap.from(".main-heading",{
    opacity:0,
    y:20,
    delay:2,
    duration:0.5,
})

// btn
gsap.from(".btn_wrapper",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".team_img_wrapper img",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".info-text",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".fasilitas",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

// tentang kami
gsap.from(".tentang",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

// kontak
gsap.from(".kontak",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".title_tipe_rumah",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".tipe_rumah",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".detail_tipe_rumah",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".blog",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})

gsap.from(".detail_blog",{
    opacity:0,
    y:20,
    delay:1.8,
    duration:0.5,
})


window.addEventListener('scroll', (e)=>{
    const nav = document.querySelector('.header');
    if (window.pageYOffset >= 30){
        nav.classList.add("shadow-header")
    }else{
        nav.classList.remove("shadow-header")
    }
})

// LOAD ALL TYPE RUMAH

const jsonData = {
    "rumah": [
        {
            "tipe": "A",
            "gambar_rumah":"./img/house-1.png",
            "nama": "Casa Verde",
            "luas_bangunan": 120,
            "luas_tanah": 200,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Casa Verde, rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga Anda.",
            "harga":"700Jt-an",
            "carport":"1",
            "denah_rumah":"./img/denah_rumah.jpg"
        },
        {
            "tipe": "B",
            "gambar_rumah":"./img/house-2.png",
            "nama": "Sky Villa",
            "luas_bangunan": 180,
            "luas_tanah": 250,
            "kamar_mandi": 3,
            "kamar_tidur": 4,
            "deskripsi": "Sky Villa, rumah mewah dengan pemandangan yang menakjubkan. Dengan tiga kamar mandi dan empat kamar tidur, ini adalah tempat yang sempurna untuk hidup bergaya dan bersantai di atas langit biru.",
            "harga":"800Jt-an",
            "carport":"1",
            "denah_rumah":"./img/denah_rumah.jpg"
        },
        {
            "tipe": "C",
            "gambar_rumah":"./img/house-3.png",
            "nama": "Lakeview Mansion",
            "luas_bangunan": 220,
            "luas_tanah": 300,
            "kamar_mandi": 4,
            "kamar_tidur": 5,
            "deskripsi": "Lakeview Mansion, rumah megah dengan pemandangan danau yang menakjubkan. Dengan empat kamar mandi dan lima kamar tidur, rumah ini menghadirkan keanggunan dan kenyamanan untuk gaya hidup bergengsi.",
            "harga":"900Jt-an",
            "carport":"1",
            "denah_rumah":"./img/denah_rumah.jpg"
        },
        {
            "tipe": "D",
            "gambar_rumah":"./img/house-4.png",
            "nama": "Garden Retreat",
            "luas_bangunan": 150,
            "luas_tanah": 180,
            "kamar_mandi": 2,
            "kamar_tidur": 3,
            "deskripsi": "Garden Retreat, rumah elegan dengan taman yang indah. Dua kamar mandi dan tiga kamar tidur memberikan keseimbangan sempurna antara keindahan alam dan kenyamanan rumah modern.",
            "harga":"950Jt-an",
            "carport":"1",
            "denah_rumah":"./img/denah_rumah.jpg"
        }
    ]
}

// function dynamic create html for each house
function createHouseCard(house, index, isMobileView){
    const isOdd = index % 2 === 1;

    const penjelasan = `
      <div class="col-md-6 mt-4 mb-4">
        <h2>${house.nama}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_bangunan}</h3>
              <p>Luas Bangunan</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-briefcase"></i>
              <h3>${house.luas_tanah}</h3>
              <p>Luas Tanah</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
              <i class="fa fa-shower"></i>
              <h3>${house.kamar_mandi}</h3>
              <p>Kamar Mandi</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
          <div class="card justify-content-center align-self-center  p-3 tipe_rumah_item">
            <i class="fa fa-bed"></i>
            <h3>${house.kamar_tidur}</h3>
            <p>Kamar Tidur</p>
          </div>
        </div>
        </div>
        <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn mt-1" style="text-decoration:none;">
            Selengkapnya
        </a>
      </div>
    `;

    const gambar_rumah = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid" />
        </div>
    `;

    var html = ``
    if (isOdd) {
        html = gambar_rumah + penjelasan;
    }else{
        html = penjelasan + gambar_rumah;
    }

    // handle mobile view 
    if (isMobileView){
        html = gambar_rumah+penjelasan;
    }

    return html;
}

function createTipeLain(house){
    const item = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit:cover; object-position:bottom">
            <br><br>
            <a href="./detail_rumah.html?tipe_rumah=${house.tipe}">
              <h3 class="text-center">Rumah ${house.nama}</h3>
            </a>
        </div>
    `

    return item;
}

// load data into html (web view)
const rumahContainer = document.getElementById('rumahContainer')
if (rumahContainer != null){
    jsonData.rumah.forEach((house, index) => {
        const houseCard = createHouseCard(house, index ,false);
        rumahContainer.innerHTML += houseCard;
    })
}


// load data into html (mobile view)
const rumahContainerMobile = document.getElementById('rumahContainerMobile')
if (rumahContainerMobile != null){
    jsonData.rumah.forEach((house, index) => {
        const houseCard = createHouseCard(house, index, true);
        rumahContainerMobile.innerHTML += houseCard;
    })
}

// load data tipe lain
const lihatTipeLain = document.getElementById('lihatTipeLain')
if (lihatTipeLain != null){
    jsonData.rumah.forEach((house) => {
        const tipeCard = createTipeLain(house);
        lihatTipeLain.innerHTML += tipeCard;
    });
}

// LOAD DETAIL RUMAH --------------------------------

function filterRumahByTipe(tipe){
    const filteredRumah = jsonData.rumah.find(rumah => rumah.tipe == tipe);
    return filteredRumah || null;
}

var queryString = window.location.search;

var searchParams = new URLSearchParams(queryString);

var tipeRumahValue = searchParams.get('tipe_rumah');

// load data to view html
if (tipeRumahValue != null && tipeRumahValue != ""){
    const filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase())

    if (filteredRumah == null){
        console.log("rumah not found");
    }else{
        document.getElementById("title-nama-rumah").innerText = 'Rumah '+ filteredRumah.nama;
        document.getElementById("gambar-rumah").src = filteredRumah.gambar_rumah;
        document.getElementById("nama-rumah").innerText = filteredRumah.nama;
        document.getElementById("deskripsi-rumah").innerText = filteredRumah.deskripsi;
        document.getElementById("harga-rumah").innerText = filteredRumah.harga;
        document.getElementById("luas-bangunan-rumah").innerText = filteredRumah.luas_bangunan+ 'm²';
        document.getElementById("luas-tanah-rumah").innerText = filteredRumah.luas_tanah+ 'm²';
        document.getElementById("kamar-mandi-rumah").innerText = filteredRumah.kamar_mandi;
        document.getElementById("kamar-tidur-rumah").innerText = filteredRumah.kamar_tidur;
        document.getElementById("carport-rumah").innerText = filteredRumah.carport;
        document.getElementById("denah-rumah").src = filteredRumah.denah_rumah;
    }
}

// FOR BLOG LOAD DATA --------------------------------

const blogData = [
    {
        id:1,
        title:"Perumahan Dengan Hunian Nyaman dan Modern: Casa Verde di Mukhaeral Residence",
        date:"21 Maret 2024, 09:00 AM",
        description: "Dalam dunia properti, terutama di industri perumahan, kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban. Salah satu perumahan yang menawarkan konsep tersebut adalah Mukhaeral Residence dengan tipe hunian bernama Casa Verde...",
        detail_blog:"./content/blog-1.html",
        image_blog:"./img/house-1.png"
    },
    {
        id:2,
        title: "Menikmati Kemewahan Hidup di Sky Villa : Rumah Hunian Modern dengan Pemandangan Mengagumkan",
        date:"22 Maret 2024, 08:00 AM",
        description: "Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pemandangan yang menakjubkan. Ini bukan sekadar tempat tinggal, tetapi sebuah pengalaman hidup bergaya dan bersantai di atas langit biru..",
        detail_blog:"./content/blog-2.html",
        image_blog:"./img/house-2.png"
    },
]

function generateBlogHTML(blogPost){
    return `
        <div class="card mb-4">
            <div class="row">
                <div class="col-md-4">
                    <img src="${blogPost.image_blog}" width="100%" height="100%" />
                </div>
                <div class="col-md-8 p-4">
                    <div>
                        <h5>${blogPost.title}</h5>
                        <div class="blog-date d-flex mt-1">
                            <i class="fa fa-calendar me-2 mt-1"></i>
                            <p>${blogPost.date}</p>
                        </div>
                        <p class="description-blog mt-1">${blogPost.description}</p>
                        <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore">
                           <i class="fa fa-book me-1"></i>
                           read more
                        </a
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateLatestBlogHTML(blogPost) {
    return `
        <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
            <p>${blogPost.title}</p>
            <div class="blog-date d-flex mt-1">
                <i class="fa fa-calendar me-2 mt-1"></i>
                <p>${blogPost.date}</p>
            </div>
            <hr>
        </a>
    `;
}

function renderBlogPosts(filteredBlogData, isFiltered){
    const blogContainer = document.getElementById('blogContainer');
    const latestBlogContent = document.getElementById('latestBlogContent');

    // render latest blog
    if (latestBlogContent != null){
        //clear previous content
        latestBlogContent.innerHTML = '';

        const lastTwoBlogPosts = blogData.slice(-2);
        lastTwoBlogPosts.forEach(blogPost => {
            latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost)
        });
    }

    if (blogContainer == null){
        return // skipped
    }

    // clear previous content
    blogContainer.innerHTML = '';

    // check filtering data
    if (isFiltered){
        if (filteredBlogData.length == 0){
            const emptyStateDiv = document.createElement('div');
            emptyStateDiv.textContent = "No blog posts available";
            blogContainer.appendChild(emptyStateDiv);
        }
        filteredBlogData.forEach(blogPost => {
            blogContainer.innerHTML = generateBlogHTML(blogPost)
        });
    }else{
        blogData.forEach(blogPost => {
            blogContainer.innerHTML += generateBlogHTML(blogPost)
        });
    }
}

function searchBlog(input){
    const searchTerm = input.value.toLowerCase();
    const filteredBlogData = []
    blogData.forEach(blogPost => {
        if (blogPost.title.toLowerCase().includes(searchTerm)){
            filteredBlogData.push(blogPost);
        }
    })
    console.log("blogData",blogData)
    console.log("searchTerm",searchTerm)
    console.log("filteredBlogData",filteredBlogData)

    if (searchTerm != null && searchTerm != "" && searchTerm != undefined){
        renderBlogPosts(filteredBlogData, true)
    }else{
        renderBlogPosts([], false)
    }
}

// render blog posts when page loads
window.onload = renderBlogPosts([],false);

// get value params query id
var idBlogValue = searchParams.get('id');

if (idBlogValue != null && idBlogValue != ""){
    const filteredBlogData = getBlogById(parseInt(idBlogValue,10));
    if (filteredBlogData != null && filteredBlogData != undefined){
        document.getElementById("cardDetailImg").src = filteredBlogData.image_blog;
        document.getElementById("tgl-blog").innerText = filteredBlogData.date;
        document.getElementById("title-blog").innerText = filteredBlogData.title;
        loadDetailBlog(filteredBlogData.detail_blog)
    }else{
        console.log("error on data id parameter: " + idBlogValue)
    }
}

function getBlogById(blogId){
    return blogData.filter(blog => blog.id === blogId)[0]; // assuming that id is unique
}

// function for load detail blog data
function loadDetailBlog(detailBlogURL){
    const cardDetailBlog = document.getElementById("cardDetailBlog");
    if (cardDetailBlog == null || cardDetailBlog == undefined){
        console.log("no element has id cardDetailBlog");
        return
    }

    document.getElementById("cardDetailBlog").src = detailBlogURL;
}
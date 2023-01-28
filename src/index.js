const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')

//siteContent.nav["nav-item-1"]

/* Kodlar Buradan aşağıya */

const body = document.querySelector("body")

// const newScript = document.createElement("script")

// newScript.setAttribute("src","index.js");
// body.append(newScript)

const nav = document.querySelector("nav");

const anchors = document.querySelectorAll("nav a")

nav.children[0].textContent=siteContent.nav["nav-item-1"];
nav.children[1].textContent=siteContent.nav["nav-item-2"];
nav.children[2].textContent=siteContent.nav["nav-item-3"];
nav.children[3].textContent=siteContent.nav["nav-item-4"];
nav.children[4].textContent=siteContent.nav["nav-item-5"];
nav.children[5].textContent=siteContent.nav["nav-item-6"];


// nav.classList.add("italic")


// var i=1;
// nav.forEach( (a) => {
//   a.textContent =siteContent.nav['nav-item-'+i]
//   a.setAttribute("class", "italic");
//   i++;
// })

for (const anchor of anchors) {
  anchor.classList.add("italic");
}

const img = document.querySelector(".logo")
img.setAttribute("src", siteContent.images["logo-img"])




const h1 = document.querySelector("h1")
h1.textContent=siteContent.cta.h1

const button = document.querySelector("button")
button.textContent=siteContent.cta.button

const image1 = document.querySelector("#cta-img")
image1.setAttribute( "src", siteContent.images["cta-img"])


// const firstH4 = document.querySelector("h4")
// firstH4.textContent=siteContent["ana-içerik"]["özellikler-h4"]

// const firstP = document.querySelector("p")
// firstP.textContent=siteContent["ana-içerik"]["özellikler-içerik"]

document.querySelectorAll(".main-content .top-content .text-content h4")[0].textContent = siteContent["ana-içerik"]["özellikler-h4"]
document.querySelectorAll(".main-content .top-content .text-content p")[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"]

document.querySelectorAll(".main-content .top-content .text-content h4")[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"]
document.querySelectorAll(".main-content .top-content .text-content p")[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"]

const image2 =document.querySelector("#middle-img")
image2.setAttribute("src", siteContent.images["accent-img"])

document.querySelectorAll(".bottom-content .text-content h4")[0].textContent = siteContent["ana-içerik"]["servisler-h4"]
document.querySelectorAll(".bottom-content .text-content p")[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"]

document.querySelectorAll(".bottom-content .text-content h4")[1].textContent = siteContent["ana-içerik"]["ürünler-h4"]
document.querySelectorAll(".bottom-content .text-content p")[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"]

document.querySelectorAll(".bottom-content .text-content h4")[2].textContent = siteContent["ana-içerik"]["vizyon-h4"]
document.querySelectorAll(".bottom-content .text-content p")[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"]

document.querySelectorAll(".contact h4")[0].textContent = siteContent.iletisim["iletişim-h4"]
document.querySelectorAll(".contact p")[0].textContent = siteContent.iletisim.adres
document.querySelectorAll(".contact p")[1].textContent = siteContent.iletisim.telefon
document.querySelectorAll(".contact p")[2].textContent = siteContent.iletisim.email

const footerText =document.querySelector("footer a")
footerText.classList.add("bold")
footerText.textContent=siteContent.footer.copyright
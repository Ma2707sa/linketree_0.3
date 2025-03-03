// Example data (Replace with your dynamic data)
const storeData = {
  name: "My Store",
  tagline: "The perfect place for everything you need",
  contact: "01154031550 - 01154031550",
  logo: "phone.png", // Replace with your logo image path
  links: {
      whatsapp: "https://www.whatsapp.com",
      telegram: "https://web.telegram.org/a/",
      facebook: "https://www.facebook.com",
      facebookGroup: "https://facebook.com",
      youtube: "https://youtube.com",
      tikTok: "https://www.tiktok.com",
      instagram: "https://www.instagram.com",
  },
};

// Dynamically populate the template
document.getElementById("store-name").innerText = storeData.name;
document.getElementById("store-tagline").innerText = storeData.tagline;
document.getElementById("store-contact").innerText = storeData.contact;
document.getElementById("store-logo").src = storeData.logo;

document.getElementById("whatsapp").href = storeData.links.whatsapp;
document.getElementById("telegram").href = storeData.links.telegram;
document.getElementById("facebook").href = storeData.links.facebook;
document.getElementById("facebook-group").href = storeData.links.facebookGroup;
document.getElementById("youtube").href = storeData.links.youtube;
document.getElementById("tikTok").href = storeData.links.tikTok;
document.getElementById("instagram").href = storeData.links.instagram;

document.addEventListener("DOMContentLoaded", function () {
  // Show the loading page when loading starts
  const loader = document.querySelector(".my-loader");
  loader.style.display = "block";

  // Hide the loading page after the page has finished loading
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
});

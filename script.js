// document.querySelectorAll('navbar').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener("click", smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});

document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("/submit-message", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function toggleDropdown(id) {
    var contents = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].id === id) {
            if (contents[i].style.display === "none" || contents[i].style.display === "") {
                contents[i].style.display = "block";
            } else {
                contents[i].style.display = "none";
            }
        } else {
            contents[i].style.display = "none";
        }
    }
}

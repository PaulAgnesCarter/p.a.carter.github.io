const langResource = {
    en : {
        text_nicetomeetyou: "Nice to meet you.",
        text_games: "Games",
        text_arts: "Arts",
        text_aboutme: "About me",
        text_others: "Other projects"
    },
    fr : {
        text_nicetomeetyou: "Ravi de vous rencontrer.",
        text_games: "Jeux",
        text_arts: "Peintures",
        text_aboutme: "Qui suis-je",
        text_others: "Autres projets"
    },
    ko : {
        text_nicetomeetyou: "만나서 반갑습니다.",
        text_games: "게임",
        text_arts: "그림",
        text_aboutme: "나에 대해서",
        text_others: "다른 프로젝트"
    },
    zh : {
        text_nicetomeetyou: "認識你很高興",
        text_games: "遊戲",
        text_arts: "畫",
        text_aboutme: "介紹我",
        text_others: "其他"
    },
}

window.addEventListener("load", function() {
document.getElementById("languageSelector").value = "en";
updateLanguage("en");

document.getElementById("languageSelector").addEventListener("change", function() {
    const selectedLang = this.value;
    updateLanguage(selectedLang);
});
});

function updateLanguage(lang) {
    for (let key in langResource[lang]) {
    const element = document.getElementById(key);
    if (element) {
        element.textContent = langResource[lang][key];
    }
    }
}


window.onload=()=>{
    document.querySelector('.dropbtn_click').onclick = ()=>{
      dropdown();
    }
    document.getElementsByClassName('fastfood').onclick = ()=>{
      showMenu(value);
    };
    dropdown = () => {
      var v = document.querySelector('.dropdown-content');
      var dropbtn = document.querySelector('.dropbtn')
      v.classList.toggle('show');
      dropbtn.style.borderColor = 'rgb(94, 94, 94)';
    }

    showMenu=(value)=>{
      var dropbtn_icon = document.querySelector('.dropbtn_icon');
      var dropbtn_content = document.querySelector('.dropbtn_content');
      var dropbtn_click = document.querySelector('.dropbtn_click');
      var dropbtn = document.querySelector('.dropbtn');

      dropbtn_icon.innerText = '';
      dropbtn_content.innerText = value;
      dropbtn_content.style.color = '#252525';
      dropbtn.style.borderColor = '#3992a8';
    }
  }
  window.onclick= (e)=>{
    if(!e.target.matches('.dropbtn_click')){
      var dropdowns = document.getElementsByClassName("dropdown-content");

      var dropbtn_icon = document.querySelector('.dropbtn_icon');
      var dropbtn_content = document.querySelector('.dropbtn_content');
      var dropbtn_click = document.querySelector('.dropbtn_click');
      var dropbtn = document.querySelector('.dropbtn');

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
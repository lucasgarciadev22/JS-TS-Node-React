function changeMode() {
  console.log('click!');
  changeClasses();
  changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    //cria dois estados para ser usado nas funções mais organizadamente
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    //verifica se a página toda (body) está em modo dark
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    //caso contrário...
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode';//armazena o valor darkModeClass de todas as classes
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];//declarar indice do body para pegar exatamento o elemento<body>
const footer = document.getElementsByTagName('footer')[0];//declarar indice do footer para pegar exatamento o elemento<footer>

console.log(body);//retorna um array/collection (por estar no body sem indice)

button.addEventListener('click', changeMode);
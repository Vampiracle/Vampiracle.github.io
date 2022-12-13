document.writeln('<nav id="my_menu">');
document.writeln('            <ul class="menu">');
document.writeln('                <li class="menu__link"><a href="../ItmoWeb/index.html" class="menu__a" id="menu__a__id">Главная</a></li>');
document.writeln('                <li class="menu__link"><a href="../ItmoWeb/skills.html" class="menu__a" id="menu__a__id">Скиллы и портфолио</a></li>');
document.writeln('                <li class="menu__link"><a href="../ItmoWeb/another.html" class="menu__a" id="menu__a__id">Контакты и др.</a></li>');
document.writeln('            </ul>');
document.writeln('        </nav>');

window.addEventListener('load', function() {
    let menu = document.getElementsByClassName("menu__a");
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].href === window.location.href) {
            menu[i].classList.add("active");
        }
    }
});
const tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__block');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        contents[index].classList.add('active');
        tabs[index].classList.add('active');
    });
});
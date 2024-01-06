const element = document.querySelector('.logo');
// Add the "blink" class to make the text blink
element.classList.add('blink');


const announcementBar = document.getElementById('announcementBar');

// Customize the content and style as needed
announcementBar.style.backgroundColor = '#00aaff';
announcementBar.style.padding = '0.8rem';
announcementBar.style.textAlign = 'center';
announcementBar.style.color = '#fff';
announcementBar.style.fontFamily = "Vazirmatn";
announcementBar.style.fontSize = "1rem";


document.addEventListener('DOMContentLoaded', function () {
    const articleContainer = document.getElementById('articleContainer');

    const topArticles = [
        {
            title: 'مقاله 1',
            image: '../gamed.ir/main-images/logo-gamed.png',
            link: '../gamed.ir/article1.html',
        },
        {
            title: 'Article 2',
            image: 'image2.jpg',
            link: 'article2.html',
        },
        {
            title: 'Article 3',
            image: 'image3.jpg',
            link: 'article3.html',
        },
        {
            title: 'Article 4',
            image: 'image4.jpg',
            link: 'article4.html',
        },
    ];

    // اضافه کردن مقالات به صفحه
    topArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        const imageElement = document.createElement('img');
        imageElement.src = article.image;
        articleElement.appendChild(imageElement);

        const titleElement = document.createElement('h3');
        titleElement.textContent = article.title;
        articleElement.appendChild(titleElement);

        const linkElement = document.createElement('a');
        linkElement.href = article.link;
        linkElement.textContent = 'بیشتر بخوانید...';
        articleElement.appendChild(linkElement);

        articleContainer.appendChild(articleElement);
    });
});

document.getElementById('go-to-categories').addEventListener('click', function () {
    const categoriesSection = document.getElementById('categories');

    window.scrollTo({
        top: categoriesSection.offsetTop,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('gameContainer');

    const topGames = [
        {
            title: 'بازی 1',
            image: '../gamed.ir/main-images/logo-gamed.png',
            link: '../gamed.ir/',
            description: 'لورم ایپسوم دالر.',
        },
        {
            title: 'بازی 2',
            image: '.jpg',
            link: 'a.html',
            description: 'لورم ایپسوم دالر.',
        },
        {
            title: 'بازی 3',
            image: '.jpg',
            link: '.html',
            description: 'لورم ایپسوم دالر.',
        },
        {
            title: 'بازی 4',
            image: '.jpg',
            link: '.html',
            description: 'لورم ایپسوم دالر.',
        },
    ];

    // اضافه کردن بازی ها به صفحه
    topGames.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');

        const imageElement = document.createElement('img');
        imageElement.src = game.image;
        gameElement.appendChild(imageElement);

        const titleElement = document.createElement('h3');
        titleElement.textContent = game.title;
        gameElement.appendChild(titleElement);

        const linkElement = document.createElement('a');
        linkElement.href = game.link;
        linkElement.textContent = 'بیشتر بخوانید...';
        gameElement.appendChild(linkElement);

        const descElement = document.createElement('p');
        descElement.href = game.description;
        descElement.textContent = game.description;
        gameElement.appendChild(descElement);

        gameContainer.appendChild(gameElement);
    });
});
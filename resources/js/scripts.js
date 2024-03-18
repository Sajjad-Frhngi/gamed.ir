document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('go-to-categories').addEventListener('click', function () {
        const categoriesSection = document.getElementById('categories');
        window.scrollTo({
            top: categoriesSection.offsetTop,
            behavior: 'smooth'
        });
    });

    const articleContainer = document.getElementById('articleContainer');
    const gameContainer = document.getElementById('gameContainer');

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

        const titleElement = document.createElement('h4');
        titleElement.textContent = article.title;
        articleElement.appendChild(titleElement);

        const linkElement = document.createElement('a');
        linkElement.href = article.link;
        linkElement.textContent = 'بیشتر بخوانید...';
        articleElement.appendChild(linkElement);

        articleContainer.appendChild(articleElement);
    });

    const topGames = [
        {
            title: 'بازی 1',
            image: 'game1.png', // پسوند فایل همراه با نام فایل
            link: 'a.html',
            description: 'لورم ایپسوم دالر.',
        },
        {
            title: 'بازی 2',
            image: 'game2.jpg', // پسوند فایل همراه با نام فایل
            link: 'a.html',
            description: 'لورم ایپسوم دالر.',
        },
        {
            title: 'بازی 3',
            image: 'game3.jpg', // پسوند فایل همراه با نام فایل
            link: 'a.html',
            description: 'لورم ایپسوم دالر.',
        },
        {
            title: 'بازی 4',
            image: 'game4.jpg', // پسوند فایل همراه با نام فایل
            link: 'a.html',
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

        const titleElement = document.createElement('h4');
        titleElement.textContent = game.title;
        gameElement.appendChild(titleElement);

        const linkElement = document.createElement('a');
        linkElement.href = game.link;
        linkElement.textContent = 'بیشتر بخوانید...';
        gameElement.appendChild(linkElement);

        const descElement = document.createElement('p');
        descElement.textContent = game.description; // استفاده از textContent برای توضیحات
        gameElement.appendChild(descElement);

        gameContainer.appendChild(gameElement);
    });
});
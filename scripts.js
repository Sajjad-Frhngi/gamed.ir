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

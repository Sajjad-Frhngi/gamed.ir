document.addEventListener('DOMContentLoaded', function () {
    const articleContainer = document.getElementById('articleContainer');
    const gameContainer = document.getElementById('gameContainer');

    const topArticles = [
        {
            title: 'مقاله 1',
            image: '../gamed.ir/resources/images/home_images/ps-plat.png',
            link: '../gamed.ir/article1.html',
            description: 'لورم ایپسوم دالر. یه متن تصادفی چرت پرت است که نمیداند درباره آسمان، پرتقال خورد و گفت : چه جالب است که هواپیما شنا میکند و حرف نمیزند. امیدوارم امسال لپتاپم آشغال ها را فوت کند تا خنک شوند و انقدر اذیت مان نکنند...',
        },
        {
            title: 'Article 2',
            image: '../gamed.ir/resources/images/home_images/ps-plat.png',
            link: 'article2.html',
            description: 'لورم ایپسوم دالر. یه متن تصادفی چرت پرت است که نمیداند درباره آسمان، پرتقال خورد و گفت : چه جالب است که هواپیما شنا میکند و حرف نمیزند. امیدوارم امسال لپتاپم آشغال ها را فوت کند تا خنک شوند و انقدر اذیت مان نکنند...',
        },
        {
            title: 'فوتبال سال 2024، فیفا 24',
            image: '../gamed.ir/resources/images/home_images/ps-plat.png',
            link: 'article3.html',
            description: 'لورم ایپسوم دالر. یه متن تصادفی چرت پرت است که نمیداند درباره آسمان، پرتقال خورد و گفت : چه جالب است که هواپیما شنا میکند و حرف نمیزند. امیدوارم امسال لپتاپم آشغال ها را فوت کند تا خنک شوند و انقدر اذیت مان نکنند...',
        },
        {
            title: 'Article 4',
            image: '../gamed.ir/resources/images/home_images/ps-plat.png',
            link: 'article4.html',
            description: 'لورم ایپسوم دالر. یه متن تصادفی چرت پرت است که نمیداند درباره آسمان، پرتقال خورد و گفت : چه جالب است که هواپیما شنا میکند و حرف نمیزند. امیدوارم امسال لپتاپم آشغال ها را فوت کند تا خنک شوند و انقدر اذیت مان نکنند...',
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

        const descElement = document.createElement('p');
        descElement.textContent = article.description; // استفاده از textContent برای توضیحات
        articleElement.appendChild(descElement);

        articleContainer.appendChild(articleElement);
    });

    const topGames = [
        {
            title: 'بازی 1',
            image: '../gamed.ir/resources/images/logo-gamed.png',
            link: 'a.html',
            category: 'اکشن',
        },
        {
            title: 'بازی 2',
            image: '../gamed.ir/resources/images/logo-gamed.png',
            link: 'a.html',
            category: 'ترسناک',
        },
        {
            title: 'بازی 3',
            image: '../gamed.ir/resources/images/logo-gamed.png',
            link: 'a.html',
            category: 'ماجراجویی',
        },
        {
            title: 'بازی 4',
            image: '../gamed.ir/resources/images/logo-gamed.png',
            link: 'a.html',
            category: 'ورزشی',
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
        linkElement.textContent = 'اطلاعات بیشتر...';
        gameElement.appendChild(linkElement);

        const categoryElement = document.createElement('p');
        categoryElement.textContent = "دسته‌بندی: " + game.category;
        gameElement.appendChild(categoryElement);

        gameContainer.appendChild(gameElement);
    });

    const titleElement = document.getElementById('title');

    titleElement.addEventListener('mousemove', function (event) {
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;

        const tiltX = (offsetX / titleElement.offsetWidth - 0.5) * 22;
        const tiltY = (offsetY / titleElement.offsetHeight - 0.5) * 22;

        titleElement.querySelector('.subtitle').style.transform = `translate(${tiltX}px, ${tiltY}px)`;
    });


    if ("loading" in HTMLImageElement.prototype) {
        const images = document.querySelectorAll("img[loading='lazy']");
        images.forEach(img => {
            img.setAttribute("loading", "lazy");
        });
    } else {
        console.log("مرورگر از lazy loading پشتیبانی نمی‌کند.");
    }

    if ("loading" in HTMLImageElement.prototype) {
        const headImage = document.getElementById("")
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 310) {
        alert('این سایت با اندازه عرض صفحه شما سازگاری ندارد، لطفا از دستگاه یا صفحه بزرگتر استفاده نمایید!');
        console.log("Sorry, this width is not supported!")
    }
});

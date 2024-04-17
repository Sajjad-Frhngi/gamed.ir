document.addEventListener('DOMContentLoaded', function () {
    const articleContainer = document.getElementById('articleContainer');
    const gameContainer = document.getElementById('gameContainer');

    const topArticles = [
        {
            title: 'حماسه‌ای درام و هیجان‌انگیز در موسیقی',
            image: '../gamed.ir/resources/images/games-articles/final-fantasy.png',
            link: '../gamed.ir/article1.html',
            description: 'یک موسیقی خوب و گوش‌نواز می‌تواند لذت مبارزه را دوچندان کند. همچنین موسیقی در میان‌پرده‌های سینمایی بازی هم نقش داشته و باعث می‌شود تا بازیکن بهتر بتواند با وقایع داستانی و سکانس‌های درام یا هیجان‌انگیز و حماسی بازی ارتباط برقرار کند...',
        },
        {
            title: 'شاهکار اپیک‌گیمز، بهترین بازی سال',
            image: '../gamed.ir/resources/images/games-articles/alanwake2.png',
            link: '../gamed.ir/articles/best-game.html',
            description: 'این داستان دنباله‌ای بر آلن ویک است و داستان رمان‌نویس پرفروش ترسناک آلن ویک را دنبال می‌کند که به مدت ۱۳ سال در یک بُعد جایگزین گرفتار شده‌است و تلاش می‌کند با نوشتن داستانی ترسناک که شامل یک مأمور اف‌بی‌آی به نام ساگا اندرسون است، فرار کند...',
        },
        {
            title: 'فلسفه تغییر نام، FC24',
            image: '../gamed.ir/resources/images/games-articles/fifa24.png',
            link: '../gamed.ir/articles/fc24name.html',
            description: 'درحالی که منتظر انتشار فیفا24 بودیم، این بار شرکت هنرهای الکترونیک، با نامی جدید از برترین بازی فوتبالی دنیا رونمایی کرد و کامل‌ترین نسخه تاریخ فیفا را منتشر کرد...',
        },
        // {
        //     title: 'Article 4',
        //     image: '../gamed.ir/resources/images/home_images/ps-plat.png',
        //     link: 'article4.html',
        //     description: 'لورم ایپسوم دالر. یه متن تصادفی چرت پرت است که نمیداند درباره آسمان، پرتقال خورد و گفت : چه جالب است که هواپیما شنا میکند و حرف نمیزند. امیدوارم امسال لپتاپم آشغال ها را فوت کند تا خنک شوند و انقدر اذیت مان نکنند...',
        // },
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
            title: 'کابوس های کوچک (Little nightmares)',
            image: '../gamed.ir/resources/images/games-articles/little-nightmare.png',
            link: 'a.html',
            category: 'ترسناک',
        },
        {
            title: 'خدای جنگ: رگناروک (GoW: Ragnarök)',
            image: '../gamed.ir/resources/images/games-articles/godofwar5.png',
            link: 'a.html',
            category: 'اکشن',
        },
        // {
        //     title: 'بازی 3',
        //     image: '../gamed.ir/resources/images/logo-gamed.png',
        //     link: 'a.html',
        //     category: 'ماجراجویی',
        // },
        // {
        //     title: 'بازی 4',
        //     image: '../gamed.ir/resources/images/logo-gamed.png',
        //     link: 'a.html',
        //     category: 'ورزشی',
        // },
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

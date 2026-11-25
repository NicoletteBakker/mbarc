console.log("NEWS JS FUNCIONA");

console.log("NEWS JS FUNCIONA");

console.log("NEWS JS FUNCIONA");

fetch("/data/news.json")
    .then(response => response.json())
    .then(data => {

        const container =
            document.getElementById("news-feed");

        console.log(data);
        console.log(container);

        data.news.forEach(item => {

            container.innerHTML += `

                <a
                    href="news_article.html?id=${item.id}"
                    class="news-card"
                >

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                    >

                    <div class="news-content">

                        <div class="news-type">
                            ${item.type}
                        </div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.summary}
                        </p>

                        <div class="news-date">
                            ${item.date}
                        </div>

                    </div>

                </a>

            `;

        });

    })
    .catch(error => {

        console.error(error);

    });

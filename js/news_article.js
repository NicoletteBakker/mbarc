console.log("NEWS ARTICLE FUNCIONA");

const params =
    new URLSearchParams(window.location.search);

const articleId =
    params.get("id");

console.log(articleId);

fetch("data/news.json")
    .then(response => response.json())
    .then(data => {

        const article =
            data.news.find(
                item => item.id === articleId
            );

        const container =
            document.getElementById("article-container");

        if (!article) {

            container.innerHTML = `
                <article class="news-article">
                    <h1>Article not found</h1>
                </article>
            `;

            return;
        }

        const paragraphs =
            article.content
                .map(text => `<p>${text}</p>`)
                .join("");

        container.innerHTML = `

            <article class="news-article">

                <a
                    href="news.html"
                    class="back-news"
                >
                    ← Back to News
                </a>

                <div class="article-type">
                    ${article.type}
                </div>

                <h1>
                    ${
                        article.title.replace(
                            /^M/,
                            '<span class="article-title-m">M</span>'
                        )
                    }
                </h1>

                <div class="article-date">
                    ${article.date}
                </div>

                <img
                    src="${article.image}"
                    alt="${article.title}"
                    class="article-image"
                >

                <div class="article-content">
                    ${paragraphs}
                </div>

            </article>

        `;

    })
    .catch(error => {

        console.error(error);

    });
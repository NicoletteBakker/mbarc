fetch("/data/science.json")
    .then(response => response.json())
    .then(data => {

        console.log(data);
        console.log(data.sections);
        
        const container =
            document.getElementById("science-feed");

        const buttons =
            document.querySelectorAll(".science-filters button");

        function renderCards(filter = "all") {

            container.innerHTML = "";

            const filteredItems =
                filter === "all"
                    ? data.sections
                    : data.sections.filter(
                        item => item.type === filter
                    );

            filteredItems.forEach(item => {

                container.innerHTML += `

                    <article class="science-card">

                        <img
                            src="${item.image}"
                            alt="${item.title}"
                        >

                        <div class="science-card-content">

                            <div class="science-type">
                                ${item.type}
                            </div>

                            <h3>
                                ${item.title}
                            </h3>

                            <p class="science-summary">
                                ${item.summary}
                            </p>

                            <div class="science-date">
                                ${item.date}
                            </div>

                        </div>

                    </article>

                `;
            });
        }

        renderCards();

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                buttons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");

                renderCards(
                    button.dataset.filter
                );
            });
        });
    });
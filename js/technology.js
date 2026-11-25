fetch("data/technology.json")
    .then(response => response.json())
    .then(data => {

        const container =
            document.getElementById("technology-content");

        data.sections.forEach(section => {

            const reverseClass =
                section.number % 2 === 0
                    ? "reverse"
                    : "";
            const highlights =
                section.highlights
                    .map(item => `
                        <li>${item}</li>
                    `)
                    .join("");

            container.innerHTML += `

                <section
                    class="technology-section"
                    data-type="${section.type}"
                >

                    <div class="technology-title">

                        ${section.number}. ${section.title}

                    </div>

                    <div class="technology-meta">
                        <span class="technology-type">
                            ${section.type}
                        </span>
                        <span class="technology-date">
                            ${section.date}
                        </span>
                    </div>

                    <div class="technology-layout ${reverseClass}">
                        <div class="technology-image-column">
                            <img
                                src="${section.image}"
                                alt="${section.title}"
                                class="technology-image"
                            >
                        </div>

                        <div class="technology-text-column">
                            <p class="technology-text">
                                ${section.text}
                            </p>
                            <ul class="technology-highlights">
                                ${highlights}
                            </ul>
                        </div>
                    </div>
                </section>
            `;
        });

        const filterButtons =
            document.querySelectorAll(
                ".technology-filters button"
            );

        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const filter =
                    button.dataset.filter;
                const sections =
                    document.querySelectorAll(
                        ".technology-section"
                    );
                sections.forEach(section => {
                    if (
                        filter === "all" ||
                        section.dataset.type === filter
                    ) {
                        section.style.display = "";
                    } else {
                        section.style.display = "none";
                    }
                });

                filterButtons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");

            });

        });

    })
    .catch(error => {

        console.error(error);

    });
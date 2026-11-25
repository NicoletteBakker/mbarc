fetch("data/usecases.json")
    .then(response => response.json())
    .then(data => {

        const details =
            document.getElementById("usecases-details");

        data.useCases.forEach((item, index) => {

            const reverseClass =
                index % 2 === 1
                    ? "reverse"
                    : "";

            details.innerHTML += `

                <section
                    id="${item.id}"
                    class="usecase-detail"
                >

                    <div class="usecase-title">

                        ${item.title}

                    </div>

                    <div class="usecase-layout ${reverseClass}">

                        <img
                            src="${item.image}"
                            alt="${item.title}"
                            class="usecase-image"
                        >

                        <div class="usecase-text">

                            <p>
                                ${item.description}
                            </p>

                        </div>

                    </div>

                </section>

            `;

        });

    });

    const hash = window.location.hash;

    if (hash) {

        setTimeout(() => {

            const target =
                document.querySelector(hash);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 100);

    }
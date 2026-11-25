fetch("/data/consortium.json")
    .then(response => response.json())
    .then(data => {

        const navContainer =
            document.getElementById("institution-nav");

        const contentContainer =
            document.getElementById("consortium-content");

        data.institutions.forEach(institution => {

            /* Navegación superior */

            navContainer.innerHTML += `
                <a
                    href="#${institution.id}"
                    class="institution-logo-link"
                >

                    <img
                        src="${institution.logo}"
                        alt="${institution.name}"
                    >

                </a>
            `;

            /* Participantes */

            let participantsHTML = "";

            institution.participants.forEach(person => {

                let photoHTML = "";

                if (person.photo && person.photo.trim() !== "") {

                    photoHTML = `
                        <img
                            src="${person.photo}"
                            alt="${person.name}"
                            class="participant-photo"
                        >
                    `;

                } else {

                    const initials = person.name
                        .split(" ")
                        .map(word => word.charAt(0))
                        .join("")
                        .substring(0, 2);

                    photoHTML = `
                        <div class="participant-avatar">
                            ${initials}
                        </div>
                    `;
                }

                participantsHTML += `
                    <article class="participant-card">

                        ${photoHTML}

                        <div class="participant-content">

                            <span class="participant-role">
                                ${person.position}
                            </span>

                            <h3>
                                ${person.name}
                            </h3>

                            <a
                                href="mailto:${person.email}"
                                class="participant-email"
                            >
                                ${person.email}
                            </a>

                        </div>

                    </article>
                `;
            });

            /* Institución */

            contentContainer.innerHTML += `
                <section 
                    id="${institution.id}"
                    class="institution-section"
                >

                    <div class="institution-header">

                    <div class="institution-header">

                        <h2>

                            <a
                                href="${institution.website}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${institution.name.toUpperCase()}
                            </a>

                        </h2>

                        <div class="institution-meta">

                            <span class="institution-country">
                                ${institution.country}
                            </span>

                        </div>

                    </div>


                    <div class="participants-grid">

                        ${participantsHTML}

                    </div>

                    <div class="back-top">

                        <a href="#top">
                            ↑ Back to Institutions
                        </a>

                    </div>
                    </section>
            `;
        });
    })
    .catch(error => {
        console.error("Error loading consortium data:", error);
    });
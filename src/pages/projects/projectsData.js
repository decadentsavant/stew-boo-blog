export const projects = {
    1: {
        title: "I use Arch, BTW",
        shortDesc:
            "This site and all of the projects mentioned on this page are hosted on a custom Arch server. Email, web hosting, webhook processing capabilities, SSH, TLS/SSL...",
        fullDesc: [
            {
                type: "text",
                content:
                    "I didn't choose Arch to be part of the meme; I chose it as my personal playground for understanding Linux at the granule level. My mission was to demystify cloud servers and force myself to get my hands dirty installing packages, one dependency at a time.",
            },
            {
                type: "text",
                content:
                    "Starting with almost no Linux knowledge, my first task was configuring SSH key-based authentication just to remote into the server. From there, I added email services, set up a web server, configured a SQL database, and much more. My learning curve involved mastering basic web protocols like DNS settings, port configurations, and firewall rules; grappling with fundamental Linux operations such as partitioning block storage, understanding the Filesystem Hierarchy Standard, and managing users; and diving into advanced topics like system monitoring, task scheduling with systemd, and monitoring system logs.",
            },
            {
                type: "text",
                content:
                    "But this endeavor went beyond mere systems engineering; it served as the infrastructure for my application development education and hosts the very projects you see in this portfolio. As an aspiring full-stack developer, my aim was to fully understand the symbiosis between server and application without the crutch of third-party abstractions.",
            },
            {
                type: "text",
                content:
                    "This server has truly become my all-in-one playground for delving into deployment, availability, and security.",
            },
        ],
        img: "/images/arch_penguin.png",
        alt: "penguin under arch",
    },
    2: {
        title: "Baseball Junkie",
        shortDesc:
            "Node.js application scrapes baseball statistics, writes to PostgreSQL database, crunches numbers, and sends daily email to a baseball card day trader...",
        fullDesc: [
            {
                type: "text",
                content:
                    "In a marketplace where baseball card values fluctuate dynamically based on player performances, serious traders need an edge to identify trends. This project's primary objective is to automate data-gathering, augment the data through custom calculations, and furnish a daily report to my client—essentially eliminating the daily manual process the baseball card trader had devised.",
            },
            {
                type: "text",
                content:
                    "The technical architecture for this solution is a Node.js application, situated on an Arch Linux cloud server. The application employs Puppeteer to facilitate a headless browser that fetches a Data URI containing the required statistics. ",
            },
            {
                type: "text",
                content:
                    "After capturing the Data URI, the server-side code decodes it to extract the actual CSV data. This data is first serialized and persisted in a PostgreSQL database, and then calculations are performed to provide the desired insights. The final step is writing the data to a .csv file and sending it to the client each day via a custom mail server.",
            },
            {
                type: "text",
                content:
                    "Systemd is employed to ensure that this data pipeline operates seamlessly and autonomously. The unit runs as a daily service, automating the lifecycle from scraping, to data crunching, to report generation, and error reporting.",
            },
        ],
        img: "/images/baseball_cards.png",
        alt: "monkey with baseball cards",
    },
    3: {
        title: "You've Got Mail!",
        shortDesc:
            "Postfix, Dovecot, Mutt, oh my! Fully functional mail server that complies with SPF, DKIM, DMARC, other other configurations that ensure maximum deliverability...",
        fullDesc: [
            {
                type: "text",
                content:
                    "Born of the original desire to simply send an email via a Node.js project, I went down the rabbit hole of building a fully functional mail server from scratch. Admittedly, I  underestimated just how multifaceted and intricate the engineering of reliable, secure mail servers can be.",
            },
            {
                type: "text",
                content:
                    "Hosted on a Vultr Arch Linux cloud server, the technical stack comprises Postfix as the MTA, Dovecot for secure IMAP, and Mutt as the MUA.",
            },
            {
                type: "text",
                content:
                    "I approached the project with a particular focus on ensuring maximum deliverability through compliance with industry standards. Utilizing Porkbun as the domain provider, granular attention was given to setting up DNS entries. SPF records were configured to mitigate email spoofing, DKIM was set up for email integrity and source validation, and DMARC was employed to handle and monitor security checks.",
            },
            {
                type: "text",
                content:
                    "To augment my learning journey SSL/TLS encryption was integrated to encrypt both incoming and outgoing emails. Automated certificate renewal is managed via acme.sh, communicating with and obtaining certificates from Let’s Encrypt and updating DNS records via Porkbun’s API.",
            },
            {
                type: "text",
                content:
                    "This mail server project was an intense exercise in complexity, touching on multiple layers of systems design, communications, and cybersecurity all through the coordination of different third-party services and packages.",
            },
        ],
        img: "/images/elon_musk_email.png",
        alt: "elon musk checking email",
    },
    4: {
        title: "Boo! (this site)",
        shortDesc:
            "Astro, Tailwind CSS, and keyboard grease come together to deliver this snappy, responsive site through a custom built continuous deployment pipeline...",
        fullDesc: [
            {
                type: "text",
                content:
                    "I cut my teeth on web dev with Meta's Front-End Developer Certificate focusing on React, Bootstrap, and Chakra. Wanting to learn more and showcase a portfolio, Astro was chosen for its SSR static site generator and Tailwind CSS due to its popularity and abundance of resources.",
            },
            {
                type: "text",
                content:
                    "Various JavaScript features were experimented with, such as handling DOM manipulation to create a custom cursor effect, utilizing `localStorage` for cursor persistence, and event listeners for interactivity. The user interface was also enhanced with a dynamic modal (you’re looking at it now), parsed from JSON-based project data, and used Astro's server-side features to manage the website layout components efficiently.",
            },
            {
                type: "text",
                content:
                    "The project is housed on a Linux cloud server, Porkbun manages the DNS configurations, and it is paired with Nginx for the routing of incoming HTTP requests. However, the crown jewel of this project was the learning journey of designing a custom-built continuous deployment pipeline.",
            },
            {
                type: "text",
                content:
                    "The server hosts a Node.js webhook service, designed to listen for GitHub hooks. Upon receiving notification of a new commit, the service triggers an automatic code fetch and build process. Additionally, a custom bash script pushes the commits to Github but excludes images to preserve space; instead an embedded rsync command directly communicates with the server to update the images.",
            },
            {
                type: "text",
                content:
                    "This project transcended being a learning experience for simply building a website; it's a dynamic, integrated ecosystem that marries front-end and back-end functionality.",
            },
        ],
        img: "/images/boo_icon.png",
        alt: "logo of ghost for stew.boo",
    },
};

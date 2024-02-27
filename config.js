
const config = {

    "help": [
        {
            "title": "help",
            "description": "for a list of commands(add flags '-d' for commands description)",
            "info": ["help or ls command gives the list of commands", "add '-d' flag for description of all commands also", "write command after help to get info about that specific command like 'help typing'"]
        },
        {
            "title": "clear",
            "description": "to clear the terminal",
            "info": ["clear or cls command clears the terminal"]
        },
        {
            "title": "about",
            "description": "to learn more about me",
            "info": ["use about command to learn more about me"]
        },
        {
            "title": "social",
            "description": "to see my social links (add flags '-l' for links and '-d' for detailed results)",
            "info": ["use social command to see my social links", "add '-l' flag for links and '-d' flag for detailed results"]
        },
        {
            "title": "projects",
            "description": "to see my projects",
            "info": ["use projects command to see my projects"]
        },
        // {
        //     "title": "blogs",
        //     "description": "to see my recent blogs",
        //     "info": ["use blogs command to see my recent blogs"]
        // },
        {
            "title": "contact",
            "description": "to enquire about my services",
            "info": ["use enquire command to enquire about my services"]
        },
        {
            "title": "cheer",
            "description": "to appreciate my work",
            "info": ["use cheer command to appreciate my work"]
        },
        {
            "title": "repos",
            "description": "to see my github repositories",
            "info": ["use repos command to see my github repositories"]
        },
        {
            "title": "ipconfig",
            "description": "to see your IP details",
            "info": ["use ipconfig command to see your IP details"]
        },
        {
            "title": "github",
            "description": "to see my github stats",
            "info": ["use github command to see my github stats"]
        },
        {
            "title": "contributors",
            "description": "to see all the contributors",
            "info": ["use contributors command to see all the contributors"]
        },
        {
            "title": "download",
            "description": "to download my pdf resume",
            "info": ["use download command to download my pdf resume"]
        },
        {
            "title": "calc",
            "description": "to evaluate an expression, for eg: (2 + 3)",
            "info": ["use calc command to evaluate an expression", "for eg: write 'calc 2+6*5/3'"]
        },
        {
            "title": "experience",
            "description": "to see my work experience",
            "info": ["use experience command to see my work experience"]
        },
        {
            "title": "history",
            "description": "shows the last 10 valid commands performed, use --clear flag to clear the history",
            "info": ["use history command to show your last 10 commands history", "use --clear flag to clear the history", "use history {id} command to run command of that id in your history"]
        },
        {
            "title": "skills",
            "description": "to see my skills",
            "info": ["use skills command to see my skills"]
        },
        {
            "title": "typing",
            "description": "shows typing animation status",
            "info": ["use typing command to see typing animation status", "Turn typing animation on and off by adding -on or -off flags respectively", "Also u can write a number(in ms) to set typing custom animation speed"]
        },
        {
            "title": "reset",
            "description": "to reload site",
            "info": ["use reset command to to reload site"]
        }
    ],
    "terminal": {
        "user": "$Samuel-arjasbi",
        "host": "sudo",
        "path": "~/guest"
    },
    // "blogs": [
    //     {
    //         "site": "Medium",
    //         "url": "https://medium.com/feed/@sidharth.sherry"
    //     }
    // ],
    "cheer": {
        "responseArray": [
            "Thank you! It makes my day😊😊😊",
            "It is great to hear that way!😁😁😁",
            "I would love to take credit😂😂😂",
            "That's so good to hear! I'm glad😍😍😍"
        ]
    },
    "about": "I've been passionate about programming since I was 11 years old, and it has been the driving force behind my journey in \nthe technology field. Over the years, I've explored various areas within technology, but my focus has always been on \nprogramming. \n\nMy career started with Java, and I have many fond memories of working with great teams, talented seniors, and creative \njuniors. In 2017, I made the decision to switch to Python, and it turned out to be one of the best decisions I ever made. As \nI delved deeper into the language, I became particularly interested in the Django framework, and it was then that I realized \nmy calling as a back-end developer. \n\nWith a decade of experience in programming and seven years of professional experience, I know there is always more to \nlearn. I'm eager to join a team of like-minded professionals where I can continue to grow and share my knowledge and \nexpertise.\nIt's been 10 years and now with 6 years of professional experience, I realized I can learn much much more and also share \nmy experience with great teams and as result learn from them and grow.",
    "social": [
        {
            "title": "Github",
            "link": "https://github.com/samuelarjasbi"
        },
        {
            "title": "LinkedIn",
            "link": "https://www.linkedin.com/in/arjasbi",
            "connections": "500+"
        },
        // {
        //     "title": "LeetCode",
        //     "link": "https://leetcode.com/techspiritss"
        // },
        // {
        //     "title": "Codechef",
        //     "link": "https://www.codechef.com/users/techspiritss",
        //     "rating": "1670",
        //     "rank": "22,497"
        // }
    ],
    // "projects": [
    //     {
    //         "title": "Mood Messenger",
    //         "link": "https://github.com/TechSpiritSS/Mood-Messenger",
    //         "description": "Mood Messenger is a real-time chat application built using Node.js, React.js, and Cloud SQL. It allows users to sign in with their Google account, initiate chats with other registered users based on their email, send messages, and view previous chats."
    //     },
    //     {
    //         "title": "PregChat",
    //         "link": "https://github.com/TechSpiritSS/PregChat_Dialogflow",
    //         "description": "PregChat is a chatbot designed to help expecting mothers access important information about their pregnancy in a simple, accessible and interactive way. Our chatbot is powered by Dialogflow, a Google Cloud-based natural language processing platform. With PregChat, mothers can easily ask about their symptoms and receive information regarding medical emergencies, first aid, medications, and exercises. PregChat aims to provide support and education to mothers in need, ultimately improving the health outcomes for both mother and child."
    //     },
    //     {
    //         "title": "S Movies",
    //         "link": "https://github.com/TechSpiritSS/S-Movies",
    //         "description": "This is a full fledged movie web app with profile and recommendations system. I am using ESLint configurations for clean code."
    //     },
    //     {
    //         "title": "MyChabi",
    //         "link": "https://techspiritss.github.io/MyChabi/",
    //         "description": "MyChabi is a web application to help you out with your passwords"
    //     },
    //     {
    //         "title": "Task C++",
    //         "link": "https://github.com/TechSpiritSS/Task-C-",
    //         "description": "A command-line based task management application"
    //     },
    //     {
    //         "title": "Notes Insight",
    //         "link": "https://mohityadav0903.github.io/Notes-Insight",
    //         "description": "A note taking app for visually weak and elderly who aren't comfortable with Modern UI"
    //     },
    //     {
    //         "title": "BigINT Library",
    //         "link": "https://github.com/TechSpiritSS/bigInt.git",
    //         "description": "This is my own C Library for BigINT made from scratch and it supports 2700 digits"
    //     },
    //     {
    //         "title": "50 Days of Web",
    //         "link": "https://techspiritss.github.io/50-Days-50-Projects-Web-Dev/",
    //         "description": "50 Web Apps made over the period of 50 days for learning purpose"
    //     },
    //     {
    //         "title": "Covid Vaccination Slot",
    //         "link": "https://github.com/TechSpiritSS/Covid-Vaccine",
    //         "description": "This Python Program informs about the available Covid vaccine slots at your pin code according to your age group"
    //     }
    // ],
    "contact": {
        "email": "mohammadarjasbi@gmail.com | samuelarjasbi@gmail.com"
    },
    "experience": [
        {
            "title": "Mid Python Back-End Developer at Hemmat",
            "description": "▪️ 💻 Developed an Algorithmic Trading Bot in Python to Automate stock trading in the Iranian stock market."
        },
        {
            "title": "Python Back-End Developer at Cafe Bazaar ",
            "description": "▪️ 🌐 Optimized application sorting and data processing, resulting in a 20% reduction in response time. \n ▪️ 💻Developing a service to validate applications by multiple antiviruses and services."
        },
        {
            "title": "Java Back-End Developer at Digikala.com",
            "description": "▪️ Designed and Implemented an application for Digikala Warehouse to manage product prices and quantity. enhancing overall efficiency."
        },
        {
            "title": "Freelance",
            "description": "▪️ 🌐 Collaboration on various projects, gaining valuable experience in diverse development environments."
        }
    ],
    "skills": [
        {
            "title": "Technical skills are: ",
            "description": "Python, MySQL, MongoDB, REST APIs, Linux, Microservices, Docker, Kubernetes, Kafka, Django, Flask, RabbitMQ, GraphQL"
        },
        {
            "title": "Other Skills are:",
            "description": "Problem Solving, Team Work"
        }
    ],
    "neofetch": {
        "name": "Samuel Arjasbi",
        "title": "Python Developer",
        "skills": "Backend, Cloud",
        "shell": "zsh",
        "languages": "Python, Java"
    },
}
export default config

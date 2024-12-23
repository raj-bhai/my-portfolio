const ProjectsData = [
  {
    id: 1,
    title: "Beyobo Mobile App: A Scalable E-commerce Solution",
    introduction:
      "A feature-rich B2B e-commerce marketplace connecting retailers with global suppliers.",
    description:
      "Beyobo is a cutting-edge B2B e-commerce platform designed to revolutionize the way retailers procure goods. The mobile app offers a seamless user experience, enabling retailers to browse, search, and purchase products across various categories. I focused on developing scalable and responsive frontend solutions using React Native, ensuring optimal performance and usability.",
    technologies: ["React Native", "Redux"],
    screenshots: [
      // "https://res.cloudinary.com/dm9iuudyc/image/upload/v1734968471/screenshots/beyobo-app/beyobo-ss1_okh3u0.jpg",
      // "https://res.cloudinary.com/dm9iuudyc/image/upload/v1734968471/screenshots/beyobo-app/beyobo-ss3_omjzjy.jpg",
      // "https://res.cloudinary.com/dm9iuudyc/image/upload/v1734968471/screenshots/beyobo-app/beyobo-ss4_wl2exo.jpg",
      // "https://res.cloudinary.com/dm9iuudyc/image/upload/v1734968471/screenshots/beyobo-app/beyobo-ss2_x8i7wc.jpg",
    ],
    role: "Frontend Developer",
    clientRequirements:
      "The client wanted an app with real-time inventory updates, secure transactions, and a user-friendly design for non-tech-savvy retailers.",
    myRole:
      "As the Frontend Developer, I played a pivotal role in enhancing the scalability of the application while ensuring a seamless user experience. I implemented new features to meet evolving client requirements and optimized the app for superior performance and usability.",
    keyChallenges: [
      "Handling Network Connectivity Issues.",
      "Optimizing Images and Media.",
      "Push Notifications and Real-time Updates.",
    ],
    solutionsAndApproach: [
      "Implemented offline storage and data synchronization strategies to handle network connectivity issues seamlessly, ensuring uninterrupted user experience during poor or intermittent internet connections.",
      "Utilized advanced image compression techniques and lazy loading to optimize media performance while maintaining high-quality visuals.",
      "Integrated Firebase Cloud Messaging (FCM) for reliable push notifications and used WebSocket connections to deliver real-time updates, ensuring timely and effective communication with users.",
    ],
    results: [
      "Increased supplier engagement by 30%.",
      "50,000+ downloads within 6 months, with an average rating of 4.7.",
    ],
  },
  {
    id: 2,
    title: "Beyobo Retailer Web Application",
    introduction: "A robust web platform complementing the Beyobo mobile app.",
    description:
      "The Beyobo Retailer Web Application was built to provide retailers with a comprehensive tool to manage their orders, view trending products, and interact with suppliers. Leveraging Next.js for server-side rendering and Redux for state management, the platform ensures fast load times and a smooth user experience. I collaborated with backend developers to integrate APIs and optimize data flow.",
    technologies: ["Next.js", "Redux"],
    screenshots: [],
    role: "Frontend Developer",
    clientRequirements:
      "The client wanted a web platform with real-time inventory updates, secure transactions, and a user-friendly design for non-tech-savvy retailers.",
    myRole:
      "As the Frontend Developer, I worked on building a fast, responsive web platform that integrated seamlessly with the Beyobo mobile app. I optimized the frontend using Next.js and Redux, ensuring smooth data flow, real-time updates, and high performance.",
    keyChallenges: [
      "Ensuring Mobile-First Responsiveness.",
      "Scaling for High Traffic",
      "Optimizing SEO for B2B Products"
    ],
    solutionsAndApproach: [
      "Ensured mobile-first responsiveness by using a mobile-first design approach, leveraging media queries and responsive layouts to optimize the user experience across various devices and screen sizes.",
      "Scaled for high traffic by implementing server-side rendering (SSR) with Next.js, utilizing caching strategies, and optimizing backend APIs to handle increased demand during peak traffic times.",
      "Optimized SEO for B2B products by implementing server-side rendering for better crawlability, adding structured data (JSON-LD) for products, and following best practices for metadata, URL structure, and keyword optimization."
    ],
    results: [
      "Increased supplier engagement by 30%.",
      "Successfully handled 50,000+ active users, with an average load time improvement of 40%.",
    ],
  },
  {
    id: 3,
    title: "AcadMate: An Innovative EdTech Solution",
    introduction:
      "A powerful mobile app transforming education for schools, coaching institutes, and educational organizations.",
    description:
      "AcadMate is an all-in-one educational platform designed to simplify management for schools, coaching institutes, and educational organizations. It offers three types of accounts: Admin (for school/college/organization owners), Teacher, and Student. The app includes tools for managing assignments, tracking student progress, scheduling classes, communicating between students and educators, and much more. I developed the app frontend using React Native, ensuring an intuitive interface, real-time updates, and smooth performance. Firebase is integrated for authentication and database services.",
    technologies: ["React Native", "Redux", "Firebase"],
    screenshots: [], // Add screenshots as needed
    role: "Frontend Developer",
    clientRequirements:
      "The client wanted a comprehensive educational platform with user roles (Admin, Teacher, Student), assignment management, real-time updates, secure authentication, and a user-friendly design for educators and students.",
    myRole:
      "I am responsible for implementing new functionalities as discussed with the client for the frontend, communicating with the backend team to integrate necessary APIs, and ensuring smooth user experiences across all roles (Admin, Teacher, Student).",
    features: [
      "Admin dashboard for managing teachers, students, assignments, and communication",
      "Teacher account with tools for creating and grading assignments, managing classes",
      "Student account with access to assignments, progress tracking, and communication with teachers",
      "Real-time messaging and notifications for students and teachers",
      "Assignment submission, grading, and progress tracking",
      "User authentication and role-based access management using Firebase"
    ],
    keyChallenges: [
      "Managing different user roles (Admin, Teacher, Student) and ensuring role-based access control.",
      "Ensuring smooth real-time updates and communication between students and educators, especially in large organizations.",
      "Optimizing the app's performance while handling a large amount of data and user interactions in real-time."
    ],
    solutionsAndApproach: [
      "Implemented role-based access control to ensure each user (Admin, Teacher, Student) had appropriate permissions and functionality.",
      "Used Firebase's real-time database and Firebase Cloud Messaging for efficient real-time communication between users.",
      "Optimized performance with techniques like lazy loading, efficient data fetching, and state management using Redux to ensure smooth performance despite large data sets."
    ],
    results: [
      // "Successfully launched the app with over 10,000 active users within 3 months.",
      // "Received positive feedback from educators for the app's ease of use and helpful features."
    ]
  },
  {
    id: 4,
    title: "Criativcity: A Platform to Sell Courses",
    introduction:
      "An online platform designed for selling a single course with interactive features.",
    description:
      "Criativcity is a course-selling platform that allows users to purchase and complete a single course. The platform includes a comment section for discussions and interaction among users. After completing all the course modules, users can receive a certificate of completion. I developed the platform from scratch, focusing on user engagement, seamless certificate generation, and integration with Stripe for payment processing. The platform also allows users to resume the course from where they left off when they return.",
    technologies: ["Next.js", "MongoDB", "Node.js", "AWS",],
    screenshots: [],
    role: "Full Stack Developer",
    clientRequirements:
      "The client wanted an app where he could sell his course independently, with a smooth user experience, secure payment processing, and the ability for users to track their progress and earn a certificate upon completion.",
    myRole:
      "I single-handedly built the complete application, both frontend and backend, based on the client's requirements. Integrated Stripe for payment processing, developed user authentication and course tracking, and implemented a system for earning certificates upon course completion. The platform supports a user-friendly interface and progress tracking for a seamless learning experience.",
    keyChallenges: [
      "Implementing a course progress tracking system that allows users to resume from where they left off.",
      "Ensuring smooth integration with Stripe for secure payments.",
      "Handling user interactions and ensuring performance with multiple users accessing the platform simultaneously.",
    ],
    solutionsAndApproach: [
      "Developed a system to store users' progress and allow resuming of the course from where they left off.",
      "Integrated Stripe for handling secure payments, ensuring a seamless checkout experience for users.",
      "Optimized the platform's backend to support high user engagement while maintaining a responsive frontend.",
    ],
    results: [
      "Successfully launched a fully functional course-selling platform.",
      "Enabled the client to independently sell his course and track user progress.",
      "Gained positive feedback from users regarding the smooth user experience and the easy-to-use platform.",
    ],
    features: [
      "Course purchase and progress tracking.",
      "Resumable modules, allowing users to pick up where they left off.",
      "Certificate generation upon completing tests and course modules.",
      "Stripe integration for secure payments.",
      "Interactive comment section for user engagement.",
    ],
  },
  
  {
    id: 5,
    title: "Jyotish App: Personalized Astrology Consultations",
    introduction: "A comprehensive mobile app offering personalized astrology services, including live consultations, horoscopes, poojas, and interactive features, designed to enhance user engagement and provide seamless communication with astrologers.",
    description:
      "The Jyotish app connects users with astrologers for consultations via chat, audio call, video call, and live streaming. I developed both the user and astrologer apps, ensuring features such as live sessions, real-time communication, a wallet system, secure payments, and the ability to send gifts to astrologers. The app offers users the ability to choose an astrologer, book sessions, access free services like kundali matching, receive daily horoscopes, and participate in online poojas. Astrologers can manage earnings and withdrawals. We used Agora for audio, video, and live streaming features, and Socket for real-time communication.",
    features: [
      "Real-time communication with astrologers via chat, audio call, video call, and live streaming.",
      "Wallet system for astrologers to track earnings and make withdrawals.",
      "Secure transactions with Razorpay payment gateway for smooth payments.",
      "Free services like kundali matching and daily horoscopes for users.",
      "Live streaming feature for astrologers to broadcast sessions.",
      "Session booking system for users to select astrologers and schedule consultations.",
      "User profile management, allowing users to view past sessions, payment history, and account details.",
      "Astrologer profile management, including setting availability, earning reports, and withdrawal requests.",
      "Push notifications for users and astrologers for session reminders, new messages, and updates.",
      "Rating and review system for users to provide feedback on astrologer consultations.",
      "Integration with Agora for high-quality audio, video calls, and live streaming.",
      "Real-time updates and notifications via Socket to ensure instant communication.",
      "Access to daily horoscope and personalized astrological readings.",
      "Online pooja services where users can request and participate in pooja rituals.",
      "Detailed pooja booking system that allows users to choose from a variety of poojas based on their needs.",
      "Real-time pooja updates and live streaming of pooja events.",
      "Send gifts feature for users to send virtual gifts to astrologers during live sessions as tokens of appreciation.",
      "Option for users to purchase and send gifts to astrologers through the app, adding an interactive element to the sessions.",
    ],
    technologies: ["React Native", "Redux", "Firebase", "Agora", "Socket", "Razorpay"],
    screenshots: [],
    role: "Mobile App Developer",
    clientRequirements:
      "The client wanted an app with features similar to Astrotalk, including real-time communication, a wallet system for astrologers, a secure payment gateway, free services like kundali matching and daily horoscopes, the ability to send gifts to astrologers, and additional services such as pooja bookings.",
    myRole:
      "Developed both the user and astrologer mobile apps using React Native. Integrated Redux for state management and Firebase for real-time updates. Implemented communication modules (chat, audio call, video call, and live streaming) using Agora and Socket. Integrated Razorpay for secure transactions and developed a wallet system for astrologer earnings and withdrawals. Added pooja booking features for users to book online poojas and implemented the send gifts feature for users to send virtual gifts to astrologers.",
    keyChallenges: [
      "Managing real-time communication across different modules (chat, call, video, live streaming).",
      "Ensuring smooth wallet transactions and earnings withdrawal for astrologers.",
      "Integrating live streaming for astrologers with a seamless user experience.",
      "Implementing pooja booking system with live updates for rituals.",
      "Implementing a system for users to send gifts to astrologers in real-time during sessions.",
    ],
    solutionsAndApproach: [
      "Used Agora for implementing live audio, video calls, and live streaming for astrologers.",
      "Utilized Socket for real-time messaging and notifications to ensure instant communication.",
      "Integrated Razorpay for secure and reliable payments, and developed the wallet system for astrologers to track earnings and withdrawals.",
      "Offered free services like kundali matching and daily horoscopes to engage users and provide value.",
      "Developed a detailed pooja booking system allowing users to request and participate in poojas with live streaming.",
      "Integrated a send gifts feature that allows users to send virtual gifts to astrologers during live sessions, adding a fun and interactive element to the experience.",
    ],
    results: [
      "Successfully created two separate apps for users and astrologers, with seamless communication and wallet systems.",
      "Achieved high user engagement with live streaming, daily horoscopes, free services like kundali matching, online pooja participation, and the interactive send gifts feature.",
      "App received positive feedback for smooth communication, secure payments, easy pooja booking system, and the fun send gifts feature.",
    ],
  },  
  {
    id: 6,
    title: "Aahar App: US-based Indian Restaurant Ordering",
    introduction:
      "A mobile app for an Indian restaurant in the USA, allowing customers within a 10km radius to order food online with features like menu browsing, order customization, and scheduled delivery.",
    description:
      "Aahar is a mobile application developed for an Indian restaurant based in the USA, where customers within a 10km radius can browse menus, add items to the cart, adjust quantities, set delivery times, and place orders. I worked on both the mobile application (customer-facing) and the backend. The backend was built with Node.js and DynamoDB to handle real-time order tracking, secure transactions, and menu management. I also guided a junior developer throughout the development process.",
    technologies: ["React Native", "Node.js", "DynamoDB", "Firebase"],
    screenshots: ["/images/aahar-1.png", "/images/aahar-2.png"],
    role: "Mobile App Developer & Backend Developer Mentor",
    clientRequirements:
      "The client wanted an app that limits access to customers within a 10km radius, offering the ability to browse menus, customize orders, and select delivery times, all with a user-friendly design for a seamless online food ordering experience.",
    myRole:
      "I developed the mobile application frontend using React Native, ensuring that customers could access menus, modify order quantities, choose delivery times, and place orders. On the backend, I used Node.js and DynamoDB to implement features such as order tracking and menu management. I also guided a junior developer, providing mentorship and assistance with the backend coding and integration.",
    keyChallenges: [
      "Limiting access to users within a 10km radius.",
      "Managing real-time data updates with DynamoDB.",
      "Optimizing performance for a smooth user experience with large menu data.",
    ],
    solutionsAndApproach: [
      "Implemented geolocation features to restrict access to users within a 10km radius.",
      "Used DynamoDB to handle high scalability and real-time updates for menu and order data.",
      "Optimized app performance by caching menus and orders locally, reducing load times and improving user experience.",
    ],
    features: [
      "Menu browsing: Customers can browse the restaurant’s menu and view food items.",
      "Cart functionality: Add items to the cart, modify quantities, and remove items.",
      "Delivery time selection: Choose preferred delivery time for their order.",
      "Order placement: Secure order placement with payment options.",
      "Geolocation-based access: Only customers within a 10km radius can access the app.",
      "Real-time order tracking: Customers can track their orders in real-time.",
      "Promotions and discounts: Integration of restaurant offers and discounts.",
      "Payment integration: Secure online payments integrated with a third-party payment gateway.",
    ],
    results: [
      "Successfully launched the app, allowing local customers to place online orders seamlessly.",
      "Increased customer orders by 20% within the first month of launch.",
      "Mentored a junior developer, enabling them to enhance their backend skills with Node.js and DynamoDB.",
    ],
  },  
  {
    id: 7,
    title: "HealthSightTracker: US-based Healthcare Solution",
    introduction: "A mobile healthcare app designed for doctors, management, and attorneys.",
    description:
      "HealthSightTracker is a mobile healthcare app tailored to streamline patient management and provide secure access to medical data for doctors and attorneys. The app includes features like appointment scheduling, patient records management, and data visualization while ensuring compliance with healthcare regulations such as HIPAA.",
    technologies: ["React Native", "Node.js", "MySQL"],
    screenshots: ["/images/healthsighttracker-1.png", "/images/healthsighttracker-2.png"], // Add actual screenshots if available
    role: "Mobile App Developer, Backend Developer",
    clientRequirements:
      "The client required a mobile app for healthcare professionals with secure patient data handling, compliance with HIPAA regulations, and efficient database management.",
    myRole:
      "Developed the mobile app frontend using React Native, ensuring a seamless and responsive user experience. Designed backend APIs using Node.js and SQL to manage and retrieve medical data efficiently. Collaborated with the team to implement HIPAA-compliant security measures.",
    keyChallenges: [
      "Ensuring secure and HIPAA-compliant handling of sensitive patient data.",
      "Optimizing performance for large-scale medical record retrieval in mobile apps.",
      "Designing an intuitive and user-friendly mobile interface for healthcare professionals.",
    ],
    solutionsAndApproach: [
      "Implemented JWT-based authentication and encrypted data storage for secure access control.",
      "Utilized SQL database optimizations for faster query performance and scalability.",
      "Designed responsive UI components in React Native tailored for healthcare workflows.",
    ],
    results: [
      "Improved patient record access times by 30% through optimized database queries.",
      "Achieved full compliance with HIPAA standards, ensuring data privacy and security.",
      "Received positive feedback for the app's simplicity and ease of use from healthcare professionals.",
    ],
  },  
  {
    id: 8,
    title: "Indian Muslim Matrimony",
    introduction: "A matrimony app designed to help Muslims in India find life partners.",
    description:
      "Indian Muslim Matrimony is a platform that enables users to create profiles for themselves or their family members (e.g., siblings, children) and find suitable matches. The app ensures a secure and private matchmaking process with features such as detailed profiles, advanced search, and membership plans for enhanced functionality.",
    technologies: ["React Native", "Node.js", "Firebase"],
    screenshots: [],
    role: "Mobile App Developer",
    clientRequirements:
      "The client required a secure and privacy-focused platform tailored for the Muslim community to find suitable matches, including advanced profile features, match recommendations, and payment integration for premium plans.",
    myRole:
      "Developed the mobile app frontend using React Native, ensuring a seamless user experience. Integrated Redux for state management, implemented the PayUMoney payment gateway for memberships, and collaborated with backend developers to create an advanced search and matchmaking system.",
    features: [
      "Profile creation for self, siblings, or children.",
      "Detailed profile fields: DOB, age, height, skin tone, Shia/Sunni, state, city, occupation, income, and family details.",
      "Option to add 'Looking For' details in bio.",
      "Relevant match suggestions based on profile and preferences.",
      "Send requests to view communication details like contact numbers.",
      "Free users can send a limited number of requests.",
      "Membership plans for unlimited requests and enhanced features.",
      "Integration with PayUMoney for secure payment processing."
    ],
    keyChallenges: [
      "Ensuring secure handling of sensitive user information.",
      "Optimizing the matchmaking algorithm for accuracy and performance.",
      "Seamless integration of the PayUMoney payment gateway."
    ],
    solutionsAndApproach: [
      "Implemented robust encryption for sensitive user data.",
      "Optimized matchmaking using a weighted preference-based algorithm.",
      "Streamlined payment gateway integration with comprehensive testing."
    ],
    results: []
  }
  
];

export default ProjectsData;

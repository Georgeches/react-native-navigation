const data = {
    user: {
        name: 'George Chesire',
        image: require("./assets/images/pexels-photo-428364.webp"),
        followersCount: 5,
        followingCount: 6,
        followers: [
            {
                name: 'John Doe'
            },
            {
                name: 'Jane Smith'
            },
            {
                name: 'Alice Johnson'
            },
            {
                name: 'Bob Brown'
            },
            {
                name: 'Charlie Davis'
            }
        ],
        following: [
            {
                name: "John Doe"
            },
            {
                name: "Jane Smith"
            },
            {
                name: "Alice Johnson"
            },
            {
                name: "Bob Brown"
            },
            {
                name: "Charlie Davis"
            },
            {
                name: "Emily White"
            }
        ]
    },
    messages: [
        {
            sender: "John Doe",
            message: "Goodmorning, let's catch up today",
            date: '2 Jan 2024',
            time: '7:10PM',
            status: 'seen',
            image: require("./assets/images/pexels-photo-1264210.jpeg")
        },
        {
            sender: "Jane Smith",
            message: "Hey George, how are you?",
            date: '3 Jan 2024',
            time: '9:30AM',
            status: 'delivered',
            image: require("./assets/images/pexels-photo-1278566.jpeg")
        },
        {
            sender: "Alice Johnson",
            message: "Are you coming to the meeting?",
            date: '3 Jan 2024',
            time: '11:00AM',
            status: 'seen',
            image: require("./assets/images/pexels-photo-428364.webp")
        },
        {
            sender: "Bob Brown",
            message: "Don't forget about our lunch!",
            date: '3 Jan 2024',
            time: '1:15PM',
            status: 'seen',
            image: require("./assets/images/pexels-photo-432059.webp")
        },
        {
            sender: "Charlie Davis",
            message: "Can you send me the report?",
            date: '3 Jan 2024',
            time: '2:45PM',
            status: 'delivered',
            image: require("./assets/images/pexels-pixabay-415829.jpg")
        }
    ]
};

export default data;
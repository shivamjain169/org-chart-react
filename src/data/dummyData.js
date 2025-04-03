export const dummyOrgData = {
    currentUser: 3,
    rootUsers: [
        {
            id: 1,
            person: {
                avatar: "JS",
                name: "John Smith",
                title: "Chief Executive Officer (CEO)",
                totalReports: 2,
            },
            expanded: false,
            children: [
                {
                    id: 2,
                    person: {
                        avatar: "AD",
                        name: "Alice Doe",
                        title: "Chief Technology Officer (CTO)",
                        totalReports: 3,
                    },
                    expanded: false,
                    children: [
                        {
                            id: 5,
                            person: {
                                avatar: "RK",
                                name: "Raj Kapoor",
                                title: "Frontend Lead",
                                totalReports: 2,
                            },
                            expanded: false,
                            children: [
                                {
                                    id: 9,
                                    person: {
                                        avatar: "MN",
                                        name: "Meena Nair",
                                        title: "Frontend Dev",
                                        totalReports: 0,
                                    },
                                    children: [],
                                },
                                {
                                    id: 10,
                                    person: {
                                        avatar: "SR",
                                        name: "Sanjay Rao",
                                        title: "Frontend Dev",
                                        totalReports: 0,
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 6,
                            person: {
                                avatar: "VK",
                                name: "Vinay Khanna",
                                title: "Backend Lead",
                                totalReports: 1,
                            },
                            expanded: false,
                            children: [
                                {
                                    id: 11,
                                    person: {
                                        avatar: "NS",
                                        name: "Nisha Singh",
                                        title: "Backend Dev",
                                        totalReports: 0,
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 7,
                            person: {
                                avatar: "AA",
                                name: "Anita Agarwal",
                                title: "DevOps Engineer",
                                totalReports: 0,
                            },
                            children: [],
                        },
                    ],
                },
                {
                    id: 3,
                    person: {
                        avatar: "PK",
                        name: "Pooja Kumar",
                        title: "Chief Product Officer (CPO)",
                        totalReports: 2,
                    },
                    expanded: false,
                    children: [
                        {
                            id: 8,
                            person: {
                                avatar: "RS",
                                name: "Rohan Shah",
                                title: "Product Manager",
                                totalReports: 1,
                            },
                            expanded: false,
                            children: [
                                {
                                    id: 12,
                                    person: {
                                        avatar: "KT",
                                        name: "Kritika Thakur",
                                        title: "Product Analyst",
                                        totalReports: 0,
                                    },
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 4,
                            person: {
                                avatar: "MG",
                                name: "Manoj Gupta",
                                title: "UX Designer",
                                totalReports: 0,
                            },
                            children: [],
                        },
                    ],
                },
            ],
        },
    ],
};

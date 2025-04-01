

export const BreadcrumbConfig: Record<string, { title: string,paths: { path: string; link: string }[];}[]> = {
  "/absent-application": [
    {   
        title: "Absence Records",
        paths: [
            { path: "Request", link: "/absent-application" },
            { path: "Absence Records", link: "/absent-application" },
        ],
    },
  ],
  "/send-absent":[
    {   
        title: "Send Absent",
        paths: [
            { path: "Request", link: "/absent-application" },
            { path: "Absence Records", link: "/absent-application" },
            { path: "Send absent", link: "/send-absent" },
        ],
    },
  ]
};

// Giá trị mặc định nếu không có route khớp
export const defaultBreadcrumbItems = [
    {   
        title: "Absence Records",
        paths: [
            { path: "Request", link: "/absent-application" },
            { path: "Absence Records", link: "/absent-application" },
        ],
    },
];
export interface Lecture {
    title: string;
    description?: string;
    date?: string;
    url?: string;
}

export const lecturesData: Lecture[] = [
    {
        title: "Introduction to Machine Learning",
        description: "An overview of machine learning fundamentals.",
    },
    // Add more lecture entries as needed
];
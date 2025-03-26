export interface Lectures {
    title: string;
    description?: string;
    date?: string;
    url?: string;
}

export const lecturesData: Lectures[] = [
    {
        title: "Introduction to Machine Learning",
        description: "An overview of machine learning fundamentals.",
    },
    // Add more lecture entries as needed
];
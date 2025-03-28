export interface Lectures {
    course: string
    title?: string;
    description?: string;
    date?: string;
    url?: string;
}

export const lecturesData: Lectures[] = [
    {
        course: "IMT Mines Albi, Master 1 - option Data Science, Introduction to Machine Learning, 39h",
    },
    {
        course: "Data Analysis Course, Advanced Techniques for Statistical Data Analysis, 10h",
    },
    {
        course: "Production Management Workshop, Fundamentals of Production Systems, 15h",
    },
    // Add more lecture entries as needed
];
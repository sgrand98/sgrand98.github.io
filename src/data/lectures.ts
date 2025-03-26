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
    // Add more lecture entries as needed
];
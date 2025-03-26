export interface Lectures {
    place: string;
    class: string
    title: string;
    description?: string;
    date?: string;
    url?: string;
}

export const lecturesData: Lectures[] = [
    {
        place: "IMT Mines Albi",
        class: "Master 1, option Data Science",
        title: "Introduction to Machine Learning",
        description: "39h",
        
    },
    // Add more lecture entries as needed
];
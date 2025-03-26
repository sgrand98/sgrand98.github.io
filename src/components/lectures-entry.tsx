import React from "react";
import { Lecture } from "@/data/lectures";

interface LectureEntryProps {
  lecture: Lecture;
}

const LectureEntry: React.FC<LectureEntryProps> = ({ lecture }) => {
  return (
    <div className="lecture-entry p-4 border rounded mb-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{lecture.title}</h2>
      {lecture.date && (
        <p className="text-sm text-gray-600">Date: {lecture.date}</p>
      )}
      {lecture.description && (
        <p className="mt-2 text-base">{lecture.description}</p>
      )}
      {lecture.url && (
        <a
          href={lecture.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-500 hover:underline"
        >
          View Lecture
        </a>
      )}
    </div>
  );
};

export default LectureEntry;
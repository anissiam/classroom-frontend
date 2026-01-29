import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
};

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: "Student",
    icon: GraduationCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: "Teacher",
    icon: School,
  },
];

export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Economics",
  "Business Administration",
  "Engineering",
  "Psychology",
  "Sociology",
  "Political Science",
  "Philosophy",
  "Education",
  "Fine Arts",
  "Music",
  "Physical Education",
  "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

// --- Environment variables with validation ---
const getEnv = (value: string | undefined, name: string): string => {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`[ENV] Missing required environment variable: ${name}`);
  }
  return value;
};

const getUrlEnv = (value: string | undefined, name: string): string => {
  const v = getEnv(value, name);
  try {
    // Validate that it's a well-formed absolute URL
    new URL(v);
  } catch {
    throw new Error(`[ENV] ${name} must be a valid URL (received: ${v})`);
  }
  return v;
};

export const CLOUDINARY_UPLOAD_URL = getUrlEnv(
  import.meta.env.VITE_CLOUDINARY_UPLOAD_URL,
  "VITE_CLOUDINARY_UPLOAD_URL"
);
export const CLOUDINARY_CLOUD_NAME = getEnv(
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  "VITE_CLOUDINARY_CLOUD_NAME"
);
export const BACKEND_BASE_URL = getUrlEnv(
  import.meta.env.VITE_BACKEND_BASE_URL,
  "VITE_BACKEND_BASE_URL"
);

/*
export const BASE_URL = getUrlEnv(import.meta.env.VITE_API_URL, "VITE_API_URL");
export const ACCESS_TOKEN_KEY = getEnv(
  import.meta.env.VITE_ACCESS_TOKEN_KEY,
  "VITE_ACCESS_TOKEN_KEY"
);
export const REFRESH_TOKEN_KEY = getEnv(
  import.meta.env.VITE_REFRESH_TOKEN_KEY,
  "VITE_REFRESH_TOKEN_KEY"
);

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;
*/

export const CLOUDINARY_UPLOAD_PRESET = getEnv(
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  "VITE_CLOUDINARY_UPLOAD_PRESET"
);

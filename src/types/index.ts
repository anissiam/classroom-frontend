export type Subject = {
    id: number;
    name: string;
    code: string;
    description: string;
    department: { name: string } | string; // support both nested object and plain string for flexibility
    createdAt?: string;
};

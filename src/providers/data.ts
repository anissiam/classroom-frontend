import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

// Simple in-memory mock dataset for "subjects"
const SUBJECTS = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: { name: "Computer Science" },
    description: "Fundamentals of programming, algorithms, and problem solving.",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: { name: "Mathematics" },
    description: "Integration techniques, series, and applications in science and engineering.",
  },
  {
    id: 3,
    code: "ENG150",
    name: "Academic Writing",
    department: { name: "English" },
    description: "Principles of clear academic writing, argumentation, and research skills.",
  },
] as const satisfies ReadonlyArray<Record<string, unknown>>;

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord>({ resource, pagination, filters, sorters }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    // Start with all subjects
    let rows = [...(SUBJECTS as unknown as TData[])];

    // Apply filters (supports: name contains, department eq)
    if (filters && Array.isArray(filters)) {
      for (const f of filters as any[]) {
        const field = (f as any).field;
        const operator = (f as any).operator;
        const value = (f as any).value;

        if (field === "name" && (operator === "contains" || operator === "icontains")) {
          rows = rows.filter((r: any) => String(r.name ?? "").toLowerCase().includes(String(value ?? "").toLowerCase()));
        }
        if (field === "department" && operator === "eq") {
          rows = rows.filter((r: any) => {
            const deptName = typeof r.department === "string" ? r.department : r.department?.name;
            return String(deptName ?? "") === String(value ?? "");
          });
        }
      }
    }

    // Apply sorting (supports: id, name, code)
    if (sorters && Array.isArray(sorters) && sorters.length > 0) {
      const { field, order } = (sorters as any[])[0] ?? {};
      if (field) {
        rows.sort((a: any, b: any) => {
          const av = a[field];
          const bv = b[field];
          if (av === bv) return 0;
          const cmp = av > bv ? 1 : -1;
          return order === "desc" ? -cmp : cmp;
        });
      }
    }

    const total = rows.length;

    // Apply pagination
    const current = (pagination as any)?.current ?? 1;
    const pageSize = (pagination as any)?.pageSize ?? total;
    const start = (current - 1) * pageSize;
    const end = start + pageSize;
    const paged = rows.slice(start, end);

    return {
      data: paged as TData[],
      total,
    };
  },
  getOne: async () => {
    throw new Error("this function is not present in mock");
  },
  create: async () => {
    throw new Error("this function is not present in mock");
  },
  update: async () => {
    throw new Error("this function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("this function is not present in mock");
  },
  getApiUrl: () => "",
};


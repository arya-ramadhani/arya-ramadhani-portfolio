import type { Organization } from "@/data/organization";
import { organizations } from "@/data/organization";

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  locationUrl?: string;
  description?: string;
  organizations: Organization[];
}

export const education: Education = {
  institution: "Politeknik Manufaktur Negeri Bangka Belitung",
  degree: "Sarjana Terapan Komputer (S.Tr.Kom)",
  field: "Rekayasa Perangkat Lunak",
  period: "2023 – Present",
  location: "Sungailiat, Bangka Belitung",
  locationUrl:
    "https://www.google.com/maps/search/Politeknik+Manufaktur+Negeri+Bangka+Belitung",
  organizations,
};

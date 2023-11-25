import { Service } from "../utils/types";
import PIC1 from "../assets/Ellipse 3.png";
import PIC2 from "../assets/Ellipse 4.png";
import PIC3 from "../assets/Ellipse 5.png";

export const staticData: Service[] = [
  {
    image: [PIC1, PIC2],
    color: "#1181E6",
    role: "Fing & Commercial",
    KPIs: [
      "Partnership Development",
      "Funding Raised",
      "Investor Conversion Rate",
      "Acquisition Progress",
      "Acquisition Deal Value",
    ],
  },
  {
    image: [PIC3],
    color: "#444BE7",
    role: "Product Management",
    KPIs: [
      "User Satisfaction Score (Usability and Design)",
      "Employer of Choice Recognition",
      "Feedback Collection",
      "Feature Adoption",
      "4-Day Work Week Implementation",
    ],
  },
  {
    image: [PIC1, PIC2],
    color: "#9846ff",
    role: "Org + Corporate Development",
    KPIs: [
      "Market Expansion Progress",
      "Independently Verified Workforce + Op Model Value",
      "Enterprise Adoption",
      "B2B Sales Function Performance",
      "Marketing Leadership Impact",
      "Development and Hardening SOPs",
      "Markets & Customers",
      "Technical Development",
      "Feature Functional Operating Model",
      "International 'Place' Establishments",
    ],
  },
  {
    image: [PIC3],
    color: "#FE6363",
    role: "Markets & Customers",
    KPIs: [
      "Conversion Rate",
      "Customer Acquisition Cost (CAS)",
      "Market Penetration",
      "International Expansion",
      "Customer Satisfaction (CSAT)",
      "Feedback Collection",
    ],
  },
  {
    image: [PIC3],
    color: "#EF83F0",
    role: "Technical Development",
    KPIs: [
      "Technical Preview Adoption Rate",
      "Integration POC Success Rate",
      "AI Integration Progress",
      "Feature Delivery",
      "ERP + 365 Integration",
      "Ops Center Setup",
      "Scalability Testing",
      "Skill Development",
      "DevOps Scaling",
    ],
  },
];

export const colors: string[] = staticData.map((data) => data.color);

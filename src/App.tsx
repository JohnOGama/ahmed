import { useEffect, useState } from "react";
import CardTask from "./components/CardTask";
import PIC1 from "./assets/Ellipse 3.png";
import PIC2 from "./assets/Ellipse 4.png";
import PIC3 from "./assets/Ellipse 5.png";

interface DataProps {
  image: string[];
  role: string;
  KPIs: string[];
  color: string;
}

function App() {
  const [data, setData] = useState<DataProps[]>([
    {
      image: [PIC1, PIC2],
      color: "#1181E6",
      role: "Funding & Commercial",
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
  ]);

  const addKPI = (index: number, newKPI: string) => {
    if (!newKPI) {
      return;
    }
    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        KPIs: [...newData[index].KPIs, newKPI],
      };
      return newData;
    });
  };

  const setEditedTask = (index: number, editedTask: string) => {
    console.log("edited", editedTask, index);
    setData((prevData) => {
      const newData = [...prevData];

      console.log("prevData", newData[index]);

      if (editedTask === "") {
        console.log("newdata ", newData[index].KPIs, index);
        newData[index].KPIs.splice(index, 1);
      }

      return newData;
    });
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto ">
        <div className="px-5 grid grid-cols-1 md:grid-cols-3 mb-[40px] ">
          {data.map((item, index) => (
            <div className="md:mr-[60px] mt-10">
              <CardTask
                image={item.image}
                role={item.role}
                KPIs={item.KPIs}
                color={item.color}
                key={index}
                index={index}
                addService={addKPI}
                setEditedTask={setEditedTask}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

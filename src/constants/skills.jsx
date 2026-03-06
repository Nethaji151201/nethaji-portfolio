import { Code2, Database, Layout, Server, Settings, Smartphone } from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["Vue.js", "Vuetify", "React.js", "Nuxt.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Golang", "RESTful APIs", "Postman"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["MSSQL", "MySQL"]
  },
  {
    category: "Tools & DevOps",
    icon: <Settings className="w-6 h-6" />,
    items: ["Git", "Docker", "Kubernetes", "Linux", "Figma", "Canva"]
  }
];

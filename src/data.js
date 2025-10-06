import HeroImage from "/assets/hero-image.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/laravel.png";
import Tools3 from "/assets/tools/linux.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/reactjs.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Laravel",
    ket: "Framework",
    dad: "200",
  },
  
  {
    id: 3,
    gambar: Tools3,
    nama: "Linux",
    ket: "Operating System",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "CulturalTrip",
    desk: "Platform digital yang berfokus pada pemesanan tiket wisata budaya secara online.",
    tools: ["Typescript", "React", "PostgreSQL", "Supabase"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "AI-Powered Finance Tracker",
    desk: "Aplikasi manajemen keuangan pribadi berbasis Laravel dengan teknologi AI untuk otomatisasi input transaksi melalui pemrosesan foto struk belanja.",
    tools: ["Laravel 12", "PHP", "Tailwind CSS", "Vite", "Google Gemini AI", "Alpine.js"],
    dad: "300",
  },
  // {
  //   id: 3,
  //   gambar: Proyek3,
  //   nama: "Website Booking Lapangan",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Laravel 12", "PHP", "Filament", "Tailwind CSS"],
  //   dad: "400",
  // },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Marketplace",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  {
    id: 5,
    gambar: Proyek5,
    nama: "TravelEase",
    desk: "Platform digital yang memudahkan pengguna dalam merencanakan dan memesan perjalanan.",
    tools: ["Laravel", "PHP", "Python", "Gemini API"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "StudyShare",
    desk: "Platform digital untuk berbagi dan menemukan materi belajar.",
    tools: ["Laravel", "TailwindCSS", "PHP", "Vite"],
    dad: "700",
  },
];

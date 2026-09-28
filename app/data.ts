export type ProductGroup = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  subgroups: string[];
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
};

export const productGroups: ProductGroup[] = [
  {
    slug: "diagnostic-medical-equipment",
    name: "Diagnostic Medical Equipment & Products",
    summary: "Audiometry, electro-medical equipment, ophthalmology, optometry and diagnostic instruments.",
    description: "Medical diagnostic devices and equipment for monitoring, examination, imaging and laboratory work.",
    subgroups: ["Audiometry Tools & Instruments", "Electro Medical Equipment", "Ophtalmology & Optometry Instruments", "Diagnostic Laboratory Equipment & Tools & Products", "Medical Imaging Systems", "Micro Endoscopes & Endoscopic Video Systems"],
    image: "/products/diagnostic.png",
    imageAlt: "Diagnostic monitoring equipment shown by AGS Medical",
    imageFit: "contain",
  },
  {
    slug: "therapeutic-equipment",
    name: "Therapeutic Equipment & Products",
    summary: "Arthroscopy, airway management, home care, physiotherapy and occupational therapy equipment.",
    description: "Medical equipment and products for therapeutic procedures, rehabilitation, self care and home care.",
    subgroups: ["Arthroscopy", "Airway Management", "Self Care & Home Care", "Baby Care Equipment", "Physiotherapy Equipment", "Occupational Therapy Devices"],
    image: "/products/therapeutic.jpg",
    imageAlt: "Therapeutic medical imaging equipment shown by AGS Medical",
    imageFit: "cover",
  },
  {
    slug: "medical-veterinary-equipment",
    name: "Veterinary Medical Equipment & Products",
    summary: "Veterinary diagnostic, therapeutic, life-support and everyday-use equipment.",
    description: "Medical equipment adapted to the needs of animal patients, clinics and hospitals.",
    subgroups: ["Veterinary Diagnostic Equipment & Products", "Veterinary Therapeutic Equipment & Products", "Veterinary Life Support Equipment & Products", "Veterinary Everyday Use Equipment & Products"],
    image: "/products/veterinary.jpg",
    imageAlt: "Veterinary ultrasound equipment shown by AGS Medical",
    imageFit: "contain",
  },
  {
    slug: "life-support-equipment",
    name: "Life Support Equipment & Products",
    summary: "Emergency supplies, cold-chain equipment, airway management and electro-medical equipment.",
    description: "Medical devices and equipment used to maintain vital functions and support emergency care.",
    subgroups: ["Emergency Medical Products & Supplies", "Cold Chain Equipment", "Electro-Medical Equipment", "Medical Lasers", "Airway Management", "Suction Units", "Surgical Instruments"],
    image: "/products/life-support.jpg",
    imageAlt: "Life-support equipment shown by AGS Medical",
    imageFit: "contain",
  },
  {
    slug: "everyday-use-medical-equipment",
    name: "Everyday Use Medical Equipment, Products",
    summary: "Laboratory, storage, transport, disposable and medical waste-management products.",
    description: "Medical equipment and products used daily at home, in clinics and in hospitals.",
    subgroups: ["Self Care & Home Care", "Baby Care Products & Equipment", "Hospital Medical Furniture", "Laboratory Equipment & Products", "Medical Storage & Transport Equipment", "Medical Disposables", "Medical Waste Management Products", "Pathology Lab Items"],
    image: "/products/everyday.jpg",
    imageAlt: "Everyday-use surgical instruments shown by AGS Medical",
    imageFit: "contain",
  },
  {
    slug: "dental-implant-systems",
    name: "Implance Dental Implant Systems",
    summary: "Dental implants, prosthesis, surgical kits, restorations and related systems.",
    description: "Dental implant systems, surgical components and restorative products.",
    subgroups: ["Dental Implants", "Prosthesis", "Surgical Kits", "Bone and Tissue Level", "Aggressor Implant", "Short Implant", "Restorations"],
    image: "/products/dental.jpg",
    imageAlt: "Dental operating environment shown by AGS Medical",
    imageFit: "cover",
  },
];

export function findProductGroup(slug: string) {
  return productGroups.find((group) => group.slug === slug);
}

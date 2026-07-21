export interface Aspirant {
  id: string;
  name: string;
  office: string;
  constituency: string;
  photo: string;
  status: "Cleared" | "Pending" | "Confirmed";
  bio: string;
}

export const aspirants: Aspirant[] = [
  {
    id: "asp-001",
    name: "Engr. Sen. Kabiru Garba Marafa, OFR, CON",
    office: "Senate",
    constituency: "Zamfara Central Senatorial District",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Sen.+Marafa",
    status: "Confirmed",
    bio: "Former Governor of Zamfara State and seasoned Senator with a distinguished record of legislative excellence and community development. A champion of education, infrastructure, and security for all Zamfara people."
  },
  {
    id: "asp-002",
    name: "Alhaji Bello Gusau",
    office: "House of Representatives",
    constituency: "Gusau/Tsafe Federal Constituency",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Bello+Gusau",
    status: "Cleared",
    bio: "Community leader and businessman with a passion for youth empowerment and job creation in Gusau and Tsafe local government areas."
  },
  {
    id: "asp-003",
    name: "Hajiya Maryam Kaura Namoda",
    office: "House of Representatives",
    constituency: "Kaura Namoda/Birnin Magaji Federal Constituency",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Maryam+Kaura",
    status: "Cleared",
    bio: "Gender advocate and educator committed to improving access to quality education and healthcare for women and children across the constituency."
  },
  {
    id: "asp-004",
    name: "Malam Sani Anka",
    office: "House of Representatives",
    constituency: "Anka/Talata-Mafara Federal Constituency",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Sani+Anka",
    status: "Cleared",
    bio: "Agricultural reformist and rural development advocate with deep roots in Anka and Talata-Mafara communities, focused on food security and farmers' welfare."
  },
  {
    id: "asp-005",
    name: "Dr. Aliyu Shinkafi",
    office: "House of Representatives",
    constituency: "Shinkafi/Zurmi Federal Constituency",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Dr.+Shinkafi",
    status: "Pending",
    bio: "Medical doctor and public health expert dedicated to upgrading healthcare infrastructure and eliminating preventable diseases in underserved communities."
  },
  {
    id: "asp-006",
    name: "Barr. Fatima Maradun",
    office: "House of Representatives",
    constituency: "Maradun/Bakura Federal Constituency",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Barr.+Fatima",
    status: "Cleared",
    bio: "Human rights lawyer and women's rights advocate bringing legal expertise and community trust to champion the needs of Maradun and Bakura residents."
  },
  {
    id: "asp-007",
    name: "Alhaji Umar Bungudu",
    office: "House of Representatives",
    constituency: "Bungudu Federal Constituency",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Umar+Bungudu",
    status: "Pending",
    bio: "Experienced local government administrator with a track record of infrastructure development, youth engagement, and transparent governance in Bungudu."
  },
  {
    id: "asp-008",
    name: "Alhaji Lawal Maru",
    office: "Senate",
    constituency: "Zamfara West Senatorial District",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Lawal+Maru",
    status: "Cleared",
    bio: "Veteran party organiser and farmer-welfare champion who has spent decades building bridges between rural communities and legislative representation."
  },
  {
    id: "asp-009",
    name: "Hajiya Zulaihat Gummi",
    office: "Senate",
    constituency: "Zamfara East Senatorial District",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Zulaihat+Gummi",
    status: "Cleared",
    bio: "Educator and social entrepreneur renowned for founding community learning centres serving thousands of out-of-school children across eastern Zamfara."
  },
];

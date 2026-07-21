export interface PartyLeader {
  id: string;
  name: string;
  position: string;
  level: "National" | "State";
  state: string;
  photo: string;
  shortDescription: string;
}

export const partyLeaders: PartyLeader[] = [
  // National Leadership
  {
    id: "nl-001",
    name: "Alhaji Musa Ibrahim",
    position: "National Chairman",
    level: "National",
    state: "Abuja (FCT)",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=National+Chairman",
    shortDescription: "A seasoned political leader with over two decades of grassroots mobilisation experience across Nigeria."
  },
  {
    id: "nl-002",
    name: "Dr. Fatima Aliyu",
    position: "National Deputy Chairman (North)",
    level: "National",
    state: "Kano State",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Dep.+Chairman+North",
    shortDescription: "Renowned economist and community advocate committed to inclusive governance and northern development."
  },
  {
    id: "nl-003",
    name: "Chief Emeka Eze",
    position: "National Deputy Chairman (South)",
    level: "National",
    state: "Anambra State",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Dep.+Chairman+South",
    shortDescription: "A distinguished legal practitioner and champion of constitutional democracy and rule of law."
  },
  {
    id: "nl-004",
    name: "Hajiya Bilkisu Dankama",
    position: "National Secretary",
    level: "National",
    state: "Kaduna State",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=National+Secretary",
    shortDescription: "Dedicated administrator with a track record of transparent party management and organisational excellence."
  },
  {
    id: "nl-005",
    name: "Barr. Tunde Adeyemi",
    position: "National Legal Adviser",
    level: "National",
    state: "Lagos State",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Legal+Adviser",
    shortDescription: "Expert constitutional lawyer ensuring the party's compliance with electoral laws and democratic standards."
  },
  {
    id: "nl-006",
    name: "Dr. Amina Garba",
    position: "National Women Leader",
    level: "National",
    state: "Sokoto State",
    photo: "https://placehold.co/600x700/1a3a8f/ffffff?text=Women+Leader",
    shortDescription: "A tireless advocate for women's political participation and gender-inclusive policy-making in Nigeria."
  },

  // Zamfara State Leadership
  {
    id: "sl-001",
    name: "Alhaji Sani Gusau",
    position: "State Chairman",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/0a1f5c/ffffff?text=State+Chairman",
    shortDescription: "A respected community leader and party stalwart who has championed NDC's growth across all local government areas."
  },
  {
    id: "sl-002",
    name: "Hajiya Ramatu Maradun",
    position: "State Deputy Chairperson",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/0a1f5c/ffffff?text=Deputy+Chair",
    shortDescription: "Grassroots mobiliser and advocate for rural development and women's empowerment across Zamfara."
  },
  {
    id: "sl-003",
    name: "Malam Kabiru Talata-Mafara",
    position: "State Secretary",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/0a1f5c/ffffff?text=State+Secretary",
    shortDescription: "Meticulous administrator ensuring transparency and accountability in all party affairs statewide."
  },
  {
    id: "sl-004",
    name: "Hajiya Zainab Birnin-Magaji",
    position: "State Women Leader",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/0a1f5c/ffffff?text=Women+Leader",
    shortDescription: "Champion of female political inclusion, leading outreach initiatives for women across all 14 LGAs."
  },
  {
    id: "sl-005",
    name: "Ibrahim Anka",
    position: "State Youth Leader",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/0a1f5c/ffffff?text=Youth+Leader",
    shortDescription: "Dynamic youth organiser galvanising young people across Zamfara to participate actively in democratic governance."
  },
  {
    id: "sl-006",
    name: "Barr. Hauwa Shinkafi",
    position: "State Legal Adviser",
    level: "State",
    state: "Zamfara State",
    photo: "https://placehold.co/600x700/0a1f5c/ffffff?text=Legal+Adviser",
    shortDescription: "Experienced legal practitioner safeguarding the party's constitutional and electoral interests in Zamfara."
  },
];

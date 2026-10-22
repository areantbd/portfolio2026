export type Certification = {
  name: string;
  authority: string;
  // YYYY-MM-DD, or YYYY-MM when only the month is known
  date: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    name: "Angular + NextJS",
    authority: "SoloLearn",
    date: "2023-07-25",
    url: "https://res.cloudinary.com/dqzakvyfj/image/upload/v1690628739/Certificados/Angular%20%2B%20NextJS.png",
  },
  {
    name: "Scrum Fundamentals",
    authority: "ScrumStudy",
    date: "2023-06-12",
    url: "https://res.cloudinary.com/dqzakvyfj/image/upload/v1686603338/Certificados/Scrum_fundamentals_del7lp.png",
  },
  {
    name: "Introduction to SQL",
    authority: "SoloLearn",
    date: "2023-04-08",
    url: "https://res.cloudinary.com/dqzakvyfj/image/upload/v1681242159/Certificados/Introduction_to_SQL_tyfxi3.jpg",
  },
  {
    name: "JavaScript Intermediate",
    authority: "SoloLearn",
    date: "2023-04-05",
    url: "https://res.cloudinary.com/dqzakvyfj/image/upload/v1681242158/Certificados/JS_intermediate_euq0hk.jpg",
  },
  {
    name: "Responsive Web Design",
    authority: "SoloLearn",
    date: "2022-11-29",
    url: "https://www.sololearn.com/Certificate/CT-QAIIGMLT/jpg",
  },
  {
    name: "React + Redux",
    authority: "SoloLearn",
    date: "2022-11-10",
    url: "https://www.sololearn.com/Certificate/CT-VS9EMUNW/jpg",
  },
  {
    name: "JavaScript",
    authority: "SoloLearn",
    date: "2022-11-08",
    url: "https://www.sololearn.com/Certificate/CT-CAND3KS7/png",
  },
  {
    name: "Web Development",
    authority: "Ironhack",
    date: "2022-10",
    url: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/60922403",
  },
  {
    name: "HTML",
    authority: "SoloLearn",
    date: "2022-04-06",
    url: "https://www.sololearn.com/Certificate/1014-14600015/jpg",
  },
  {
    name: "CSS",
    authority: "SoloLearn",
    date: "2022-01-27",
    url: "https://www.sololearn.com/Certificate/1023-14600015/jpg",
  },
];

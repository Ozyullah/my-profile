import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ExternalLink, 
  Book, Briefcase, Languages, Smartphone, Monitor 
} from 'lucide-react';

// Animation settings
const pageEffect = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const Cv = () => {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 md:px-0 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* --- PAGE 1: HEADER & EXPERIENCE --- */}
        <motion.section {...pageEffect} className="bg-white p-10 shadow-xl rounded-sm border-t-4 border-slate-900">
          <header className="text-center border-b pb-8 mb-8">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">MD. OLYULLAH</h1>
            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2"><MapPin size={16}/> Jalalabad, West Khulshi ▪ Chattogram, Bangladesh</span>
              <span className="flex items-center gap-2"><Phone size={16}/> +8801642649077</span>
              <span className="flex items-center gap-2"><Mail size={16}/> olyalubayed@gmail.com</span>
            </div>
          </header>

          <SectionHeading icon={<Briefcase size={22}/>} title="Professional Experience" />
          
          <ExperienceBlock 
            role="Head of Admin & HR"
            company="Zaitoon Academy, Bangladesh"
            date="May 2023 – Present"
            url="https://www.zaitoonacademy.com/"
            bullets={[
              "Direct daily administrative and HR operations for staff, faculty, and students",
              "Oversee media production including photography and videography for academy events",
              "Manage digital marketing strategy and social media presence",
              "Provide IT infrastructure support and maintain institutional data",
              "Coordinate security operations including CCTV and attendance system integration",
              "Collaborate with the board on strategic planning and organizational growth"
            ]}
          />

          <ExperienceBlock 
            role="Volunteer Video Editor & Reviewer"
            company="Haramain.info, KSA (Remote)"
            date="October 2020 – May 2023"
            url="http://www.haramain.info/"
            bullets={[
              "Performed video editing and quality assurance for team productions",
              "Translated daily Salat videos from the Kaaba and Masjid An-Nabawi",
              "Reviewed Holy Qur’an translations for linguistic accuracy and faithfulness to text",
              "Processed recitations by Haramain Imams for digital distribution"
            ]}
          />
        </motion.section>

        {/* --- PAGE 2: FURTHER EXPERIENCE & EDUCATION --- */}
        <motion.section {...pageEffect} className="bg-white p-10 shadow-xl rounded-sm border-t-4 border-slate-700">
          <ExperienceBlock 
            role="HR & IT Officer"
            company="Safeer Academy, Bangladesh"
            date="April 2021 – February 2023"
            url="https://www.safeeracademy.org/"
            bullets={[
              "Managed full-cycle videography and photography projects",
              "Facilitated digital marketing consultancy and social media management",
              "Ensured smooth technical operations across all academy departments",
              "Issued and synchronized student/employee ID cards with attendance systems"
            ]}
          />

          <ExperienceBlock 
            role="Admin, Social Media Manager & Videographer"
            company="Academy of Quran & Arabic Studies"
            date="November 2020 – June 2021"
            url="https://aqasbd.com/"
            bullets={[
              "Developed digital marketing campaigns to promote educational courses",
              "Handled day-to-day administrative documentation and coordination",
              "Produced promotional and educational video content",
              "Tracked basic financial operations and departmental expenses"
            ]}
          />

          <div className="mt-12">
            <SectionHeading icon={<Book size={22}/>} title="Education" />
            <div className="grid md:grid-cols-2 gap-8">
              <EducationItem 
                degree="MA in Da'wah and Islamic Studies"
                school="International Islamic University Chittagong (IIUC)"
                date="2023"
                result="CGPA: 3.37 / 4.00"
              />
              <EducationItem 
                degree="BA (Hons.) in Da’wah and Islamic Studies"
                school="International Islamic University Chittagong (IIUC)"
                date="2018 – 2022"
                result="CGPA: 3.57 / 4.00"
              />
              <EducationItem 
                degree="Higher Secondary Certificate (Science)"
                school="Jhalokathi N S Kamil Madrasah"
                date="2015 – 2016"
                result="GPA: 5.00 / 5.00"
              />
            </div>
          </div>
        </motion.section>

        {/* --- PAGE 3: SKILLS & TRAININGS --- */}
        <motion.section {...pageEffect} className="bg-white p-10 shadow-xl rounded-sm border-t-4 border-slate-500">
          <SectionHeading icon={<Monitor size={22}/>} title="Professional Trainings" />
          <div className="space-y-6 mb-10">
            <TrainingItem 
              title="CareerX"
              org="Bangladesh Youth Leadership Center (BYLC)"
              desc="CareerX is an extensive month-long professional development program designed to help graduates and young professionals get the best start possible with their professional lives. The program covers essential topics pertinent for the modern workplace, including communication, management, operations, intrapreneurship, and more. Video-based online modules are supplemented with instructor-led, in-person, and virtual sessions, as well as weekly capstone projects to ensure a truly meaningful learning experience.
"
            />
            <TrainingItem 
              title="Digital Marketing"
              org="Learning & Earning Development Project (ICT Division)"
              desc="150 Hours of Extensive Training, It involved designing, measuring, analyzing, improving, and controlling Facebook content marketing and paid campaigns. Additionally, understanding the marketing strategies of Google Plus, YouTube, Twitter, and Instagram, and analyze the digital marketing KPI measurement tools."
            />
          </div>

          <SectionHeading icon={<Monitor size={22}/>} title="Technical Proficiencies" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator', 'MS Office', 'Google Workspace', 'CCTV Systems', 'Social Media Ads', 'Video Reviewing'].map(skill => (
              <div key={skill} className="p-2 border rounded text-center text-xs font-bold uppercase tracking-wider bg-slate-50">
                {skill}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <SectionHeading icon={<Languages size={22}/>} title="Languages" />
              <p className="text-sm font-medium text-slate-600 italic">
                 Bangla (native); English (proficient); Arabic (proficient); Urdu (proficient); Hindi (proficient)
              </p>
            </div>
            <div>
              <SectionHeading icon={<Smartphone size={22}/>} title="Other Skills" />
              <p className="text-sm font-medium text-slate-600 italic">
                Driving all sort of Cars & Motorcycles.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

// Sub-components
const SectionHeading = ({ icon, title }) => (
  <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-2 mb-6 mt-4">
    <span className="text-slate-900">{icon}</span>
    <h2 className="text-xl font-bold uppercase tracking-widest">{title}</h2>
  </div>
);

const ExperienceBlock = ({ role, company, date, bullets, url }) => (
  <div className="mb-10">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
      <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight">{role}</h3>
      <span className="text-sm font-bold text-slate-500">{date}</span>
    </div>
    <div className="flex items-center gap-2 mb-3">
      <span className="font-bold text-slate-700">{company}</span>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
        <ExternalLink size={14}/>
      </a>
    </div>
    <ul className="list-disc list-outside ml-5 space-y-1">
      {bullets.map((b, i) => <li key={i} className="text-sm text-slate-600 leading-relaxed">{b}</li>)}
    </ul>
  </div>
);

const EducationItem = ({ degree, school, date, result }) => (
  <div className="bg-slate-50 p-5 rounded">
    <h4 className="font-bold text-slate-900 leading-tight">{degree}</h4>
    <p className="text-sm text-slate-600 mt-1">{school}</p>
    <div className="mt-3 flex justify-between items-center border-t pt-2">
      <span className="text-xs font-bold text-slate-400">{date}</span>
      <span className="text-xs font-black text-blue-700">{result}</span>
    </div>
  </div>
);

const TrainingItem = ({ title, org, desc }) => (
  <div className="border-l-4 border-slate-200 pl-4 py-1">
    <h4 className="font-bold text-slate-900">{title} — <span className="text-slate-600 font-medium">{org}</span></h4>
    <p className="text-sm text-slate-500 mt-1 italic">{desc}</p>
  </div>
);

export default Cv;
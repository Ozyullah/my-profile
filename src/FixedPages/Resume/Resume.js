import React from 'react';
import { Mail, Phone, MapPin, Globe, ExternalLink, Award, Book, Briefcase, Languages } from 'lucide-react';
import img from "../../assets/images/OLYULLAH.png"

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 bg-white shadow-2xl flex flex-col md:flex-row border-t-8 border-slate-800">
      
      {/* Sidebar - Profile & Contact */}
      <aside className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-gray-200">
        <div className="flex flex-col items-center text-center mb-8">
          {/* Image Placeholder */}
          <div className="w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200 mb-4">
            <img 
              src={img}
              alt="MD. OLYULLAH" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">MD. OLYULLAH</h1>
          <p className="text-slate-600 font-medium">Head of Admin & HR</p>
        </div>

        <div className="space-y-4">
          <SectionTitle title="Contact" icon={<Phone size={18}/>} />
          <div className="text-sm space-y-3 text-slate-700">
            <p className="flex items-center gap-3"><Phone size={14} className="text-slate-500"/> +8801642649077</p>
            <p className="flex items-center gap-3"><Mail size={14} className="text-slate-500"/> olyalubayed@gmail.com</p>
            <p className="flex items-center gap-3"><MapPin size={14} className="text-slate-500"/> Jalalabad, West Khulshi ▪ Chattogram, Bangladesh</p>
          </div>

          <SectionTitle title="Education" icon={<Book size={18}/>} />
          <div className="space-y-4">
            <div>
              <p className="font-bold text-slate-800 text-sm">MA in Da'wah and Islamic Studies</p>
              <p className="text-xs text-slate-600">International Islamic University Chittagong (IIUC)</p>
              <p className="text-xs text-slate-600">2023</p>
              <p className="text-xs font-semibold text-slate-500">CGPA: 3.37 / 4.00</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">BA (Hons.) in Da’wah and Islamic Studies</p>
              <p className="text-xs text-slate-600">International Islamic University Chittagong (IIUC)</p>
              <p className="text-xs text-slate-600">2018 – 2022</p>
              <p className="text-xs font-semibold text-slate-500">CGPA: 3.57 / 4.00</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Higher Secondary Certificate (Science)</p>
              <p className="text-xs text-slate-600">Jhalokathi N S Kamil Madrasah</p>
              <p className="text-xs text-slate-600">2015 – 2016</p>
              <p className="text-xs font-semibold text-slate-500">GPA: 5.00 / 5.00</p>
            </div>
          </div>

          <SectionTitle title="Languages" icon={<Languages size={18}/>} />
          <div className="flex flex-wrap gap-2">
            {['Bangla (Native)', 'English', 'Arabic', 'Urdu', 'Hindi'].map(lang => (
              <span key={lang} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/3 p-10">
        <section>
          <SectionTitle title="Professional Experience" icon={<Briefcase size={20}/>} main />
          
          <ExperienceItem 
            title="Head of Admin & HR"
            company="Zaitoon Academy"
            date="May 2023 – Present"
            link="https://www.zaitoonacademy.com/"
            bullets={[
              "Oversee daily administrative and HR operations supporting staff and students.",
              "Lead media production including photography and videography.",
              "Manage digital marketing campaigns and online presence.",
              "Coordinate IT support and maintain academy data platforms."
            ]}
          />

          <ExperienceItem 
            title="Volunteer Video Editor & Reviewer"
            company="Haramain.info, KSA"
            date="Oct 2020 – May 2023"
            link="http://www.haramain.info/"
            bullets={[
              "Edited and reviewed videos from the Haramain (Kaaba and Masjid An-Nabawi).",
              "Translated daily Salat videos and Quranic recitations for global audiences.",
              "Ensured accuracy and faithfulness to original religious texts."
            ]}
          />

          <ExperienceItem 
            title="HR & IT Officer"
            company="Safeer Academy"
            date="April 2021 – Feb 2023"
            link="https://www.safeeracademy.org/"
            bullets={[
              "Managed full-cycle media production for academy events.",
              "Provided multi-departmental IT support and consultancy.",
              "Integrated ID card systems with attendance software."
            ]}
          />
        </section>

        <section className="mt-8">
          <SectionTitle title="Key Training" icon={<Award size={20}/>} main />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 text-sm italic underline">CareerX - BYLC</h4>
              <p className="text-xs text-slate-600 mt-1">Professional development covering communication, operations, and management.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 text-sm italic underline">Digital Marketing - LEDP</h4>
              <p className="text-xs text-slate-600 mt-1">150 hours of intensive training in social media marketing and KPI measurement.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <SectionTitle title="Technical Skills" icon={<Globe size={20}/>} main />
          <div className="flex flex-wrap gap-3">
            {['Adobe Premiere Pro', 'Photoshop', 'Illustrator', 'MS Office', 'Google Workspace', 'CCTV Operations', 'Content Strategy'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-800 text-white rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const SectionTitle = ({ title, icon, main }) => (
  <div className={`flex items-center gap-2 mb-4 ${main ? 'border-b-2 border-slate-100 pb-2' : ''}`}>
    <span className="text-slate-800">{icon}</span>
    <h2 className={`uppercase tracking-widest font-bold ${main ? 'text-lg' : 'text-sm'} text-slate-800`}>{title}</h2>
  </div>
);

const ExperienceItem = ({ title, company, date, bullets, link }) => (
  <div className="mb-6">
    <div className="flex justify-between items-start flex-wrap">
      <div>
        <h3 className="text-md font-bold text-slate-900">{title}</h3>
        <a href={link} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
          {company} <ExternalLink size={12}/>
        </a>
      </div>
      <span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-500">{date}</span>
    </div>
    <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
      {bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
    </ul>
  </div>
);

export default Resume;
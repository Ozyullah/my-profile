import React from 'react';
import './Resume.css'
import { ImLocation2 } from 'react-icons/im';
import { CgPhone } from 'react-icons/cg';
import { ImMail4 } from 'react-icons/im';
import { TbWorld } from 'react-icons/tb';
import { FcDownload } from 'react-icons/fc';
import imgs from '../../assets/images/top-r.png';
import bgtp from '../../assets/images/top-effect.png';
import bPattern from '../../assets/images/beautiful-pattern.png';


// import resume from '../../assets/images/Resume.pdf';
import img from '../../assets/images/owazy.jpg'
import generatePDF, { Resolution, Margin } from 'react-to-pdf';


const options = {
    filename: 'resume.pdf',
    method: 'save',

    resolution: Resolution.EXTREME,
    page: {
        margin: Margin.SMALL,
        format: 'letter',
        orientation: 'landscape'
    },

    canvas: {
        mimeType: 'image/png',
        qualityRatio: 1
    },

    overrides: {
        pdf: {
            compress: true
        },

        canvas: {
            useCORS: true
        }
    },
}

const getTargetElement = () => document.getElementById('content-id');

const downloadPDf = () => generatePDF(getTargetElement, options)

const Resume = () => {
    return (
        
        <div className='p-10 px-14' >
            <div className='flex justify-end'>
                <button onClick={downloadPDf} ><FcDownload /></button>
            </div>
            <div id='content-id' className='flex'>
                <div className=' bg-sky-100 w-1/2 pb-5'>
                    {/* <div className='pos-star w-72' style={{backgroundImage:`url(${profiStar})`}}>
                    <img src={profiStar} alt="" />
                </div> */}
                    {/* profile image section */}
                    <div className='flex  justify-center pt-12'>
                        <img src={img} className='border-design border border-solid p-1 border-x-8 border-spacing-px border-sky-200 w-48' alt="" />
                    </div>
                    {/* about section */}

                    <div className='pt-4'>
                        <h2 className='p-3 text-center w-36 bg-sky-700 text-white rounded-e font-serif font-semibold'>About me</h2>

                        <p className=' ps-9'>
                            I'm a student in Computer Science and Engneering at Daffodil International University.I'm specialist Full-Stack Web Development.I'm a dedicated person so I can complited any targeted word.
                        </p>

                    </div>
                    {/* Contact section */}

                    <div className='pt-4'>
                        <h2 className='p-3 text-center w-36 bg-sky-700 text-white rounded-e font-serif font-semibold'>Contacte</h2>

                        <div className='ps-9'>
                            <h4 className='pt-3 flex'><CgPhone />  +8801609-111813</h4>
                            <h4 className='pt-2 flex'><ImMail4 /> md.habibullah7520@gmail.com</h4>
                            <h4 className='pt-2 flex'><TbWorld />http://localhost:3000/</h4>
                            <h4 className='pt-2 flex text-justify'><ImLocation2 /> Mirpur, Dhaka</h4>
                        </div>

                    </div>

                    {/* Skills section */}

                    <div className='pt-4'>
                        <h2 className='p-3 text-center w-36 bg-sky-700 text-white rounded-e font-serif font-semibold'>Skills</h2>

                        <div className=' ps-9'>
                            {/* MERN stack */}
                            <div className='flex mt-3 justify-between'>
                                <h2 className='mr-2'>MERN stack</h2>
                                <progress className="progress mt-2 progress-info w-40" value={90} max="100"></progress>
                            </div>
                            {/* python */}
                            <div className='flex mt-3 justify-between'>
                                <h2 className='mr-2'>Python</h2>
                                <progress className="progress mt-2 progress-info w-40" value={50} max="100"></progress>
                            </div>
                            {/* Java */}
                            <div className='flex mt-3 justify-between'>
                                <h2 className='mr-2'>Java</h2>
                                <progress className="progress mt-2 progress-info w-40" value={60} max="100"></progress>
                            </div>

                            {/* JavaScript */}
                            <div className='flex mt-3 justify-between'>
                                <h2 className='mr-2'>JavaScript</h2>
                                <progress className="progress mt-2 progress-info w-40" value={70} max="100"></progress>
                            </div>
                        </div>

                    </div>

                </div>


                {/* second section start */}

                <div className='pb-5'>
                    <div className=' static'>
                        <img src={imgs} alt=''></img>

                        <div className='flex justify-between'>
                            <div>
                                <h3 className=' position-top text-5xl ps-10 text-cyan-800 font-semibold'>Md Habibullah</h3>
                                <h4 className='position-top ps-10 text-cyan-900'>Full-Stack Developer</h4>
                            </div>

                            <img id='posi-eff' className='position-top w-60' src={bgtp} alt="" />
                        </div>


                    </div>

                    {/* Education section */}
                    <div className=''>
                        <h2 className='p-3 text-center w-36 bg-sky-700 text-white rounded-e font-serif font-semibold'>Education</h2>

                        <div className=' ps-9'>
                            <h2 className='text-sky-300 font-bold'>( 2021-Now )</h2>
                            <h3 className=' font-semibold'>Daffodil International University</h3>
                            <h4>B.Sc. in Computer Science & Engineering</h4>
                        </div>


                        <div className=' ps-9 pt-2'>
                            <h2 className='text-sky-300 font-bold'>( 2018-2020 )</h2>
                            <h3 className=' font-semibold'>Jhalokathi NS kamil Madrasah</h3>
                            <h4>GPA-4.95</h4>
                        </div>

                    </div>

                    {/* projects section */}

                    <div className='pt-4'>
                        <h2 className='p-3 text-center w-36 bg-sky-700 text-white rounded-e font-serif font-semibold'>Projects</h2>

                        <div className=' ps-9'>
                            <h2 className='text-sky-300 font-bold'>Ecomerce webSite</h2>
                            <h3 className=' font-semibold'>Daffodil International University</h3>
                            <h4>B.Sc. in CSE</h4>
                        </div>


                        <div className=' ps-9 pt-2'>
                            <h2 className='text-sky-300 font-bold'>( 2018-2020 )</h2>
                            <h3 className=' font-semibold'>Jhalokathi NS kamil Madrasah</h3>
                            <h4>GPA-4.95</h4>
                        </div>

                    </div>

                    <div className='flex justify-end'>
                        <img src={bPattern} className='w-32' alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resume;
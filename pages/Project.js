import React from 'react'
 import styles from '@/styles/Project.module.css'
import Image from 'next/image'
 import Head from 'next/head'
 import Link from 'next/link'
 import { FaLinkedinIn,FaGithub} from 'react-icons/fa';
 import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

// data-aos="slide-right" data-aos-offset="300"  data-aos-duration="1000"
const Project = () => {
  return (
    <>
     <Head>
      <title>Project's section</title>
   <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=DynaPuff&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Figtree&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Oi&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap" rel="stylesheet"></link>
    </Head>
    <Navbar/>
    <div className={styles.full}  >
    <div className={styles.top}>
        <div className={styles.max}>
     <div className={styles.left}>
     <Image className={styles.myImg} src="/open.png" height={300} width={200}/>
     </div>
     <div className={styles.right}>
        <h3 className={styles.headd}>Unleash Projects</h3>
        <p className={styles.para}>Dive into the mind-blowing world of web development! My projects showcase innovative solutions, cutting-edge technologies, and mind-bending creativity. Get ready to be captivated by the art of programming.</p>
        <div className="ico">
         <Link href='https://www.linkedin.com/in/samarth-dhawan-a317821aa/' className={styles.one}><FaLinkedinIn/></Link>
        <Link href='https://github.com/samarth2812' className={styles.two}><FaGithub/></Link>
        </div>
     </div>
    </div>
    </div> 
    <div className={styles.bottom}>
    <section className={styles.articles}>
  <div className={styles.article} 
>
    <div className={styles.articlewrapper}>
      <figure className={styles.figure}>
        <Image src="/pro1.png" alt=""  width={400} height={400}/>
      </figure>
      <div className={styles.articlebody}>
        <h2 className={styles.he}>Genie's Advice Webapp</h2>
        <p className={styles.pa}>
        A React Advice App
This app uses Advice Slip JSON API to fetch the advice whenever you click the button.
Get your Advice from Genie...
        </p>
        <p className={styles.pa}>Tech Stack: Html,css,Bootstrap,Js,React Js</p>
        <a href="https://github.com/samarth2812/Genie-s-Advice-React" className={styles.readmore}>
          Github Link
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>

</section>
    <section className={styles.articles}>
  <div className={styles.article} >
    <div className={styles.articlewrapper}>
      <figure className={styles.figure}>
        <Image src="/projectno2.jpg" alt=""  width={400} height={400}/>
      </figure>
      <div className={styles.articlebody}>
        <h2 className={styles.he}>Just-breathe Webapp</h2>
        <p className={styles.pa}>
          Breathe In Excercise Tracker “Just breathe”...Taking the time to take a few deep breaths actually makes us feel more centered and calm. Deep breaths and concentrating on breathing signals your nervous system to calm down
        </p>
        <p className={styles.pa}>Tech Stack: Html,css,Js</p>
        <a href="https://github.com/samarth2812/-Just-breathe-..." className={styles.readmore}>
          Github Link
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
    <div className={styles.bottom}>
    <section className={styles.articles}>
  <div className={styles.article} 
>
    <div className={styles.articlewrapper}>
      <figure className={styles.figure}>
        <Image src="/projectno3.jpg" alt=""  width={400} height={400}/>
      </figure>
      <div className={styles.articlebody}>
        <h2 className={styles.he}>3JS portfolio website project</h2>
        <p className={styles.pa}>
        Three.js library, which is a popular JavaScript library used for creating 3D visualizations and animations in web applications. 
        </p>
        <p className={styles.pa}>Tech Stack: Html,css,Js,Three Js</p>
        <a href="" className={styles.readmore}>
          Github Link
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>

</section>
    <section className={styles.articles}>
  <div className={styles.article} >
    <div className={styles.articlewrapper}>
      <figure className={styles.figure}>
        <Image src="/projectno4.jpeg" alt=""  width={400} height={400}/>
      </figure>
      <div className={styles.articlebody}>
        <h2 className={styles.he}>NASA WildFire Tracker</h2>
        <p className={styles.pa}>  
A wildfire website is a web-based platform that provides information, resources, and real-time updates related to wildfires. NASA Api is used to fetch the data.
        </p>
        <p className={styles.pa}>Tech Stack: Html,css,Js,React Js</p>
        <a href="#" className={styles.readmore}>
          Github Link
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
    <div className={styles.bottom}>
    <section className={styles.articles}>
  <div className={styles.article} 
>
    <div className={styles.articlewrapper}>
      <figure className={styles.figure}>
        <Image src="/projectno5.jpeg" alt=""  width={400} height={400}/>
      </figure>
      <div className={styles.articlebody}>
        <h2 className={styles.he}>Optometry Project</h2>
        <p className={styles.pa}>
        This project distinguishes between patients with dry eye disease and normal subjects.
This instrument displays a unique capacity to assess the frequency of dry eye
symptoms and their effect on a patients vision-related functioning.
        </p>
        <p className={styles.pa}>Tech Stack: Python,Pandas,Numpy,Random Forest Classifier</p>
        <a href="https://github.com/samarth2812/Optometry-project" className={styles.readmore}>
          Github Link
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>

</section>
    <section className={styles.articles}>
  <div className={styles.article} >
    <div className={styles.articlewrapper}>
      <figure className={styles.figure}>
        <Image src="/projectno6.jpg" alt=""  width={400} height={400}/>
      </figure>
      <div className={styles.articlebody}>
        <h2 className={styles.he}>UWP CHATBOT</h2>
        <p className={styles.pa}>  
        Integrated a ChatBot using Pytorch forthe UWP SRM Portal.
• ChatBot APIs were created using flask and chatbot was made using pytorch.
        </p>
        <p className={styles.pa}>Tech Stack: Python,Pytorch,Flask</p>
        <a href="https://github.com/samarth2812/chat-bot" className={styles.readmore}>
          Github Link
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
    </div>
    <Footer/>





    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
    
    </>
     )
    }
    export default Project

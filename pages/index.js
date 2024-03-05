import { AboutMe } from "@/components/AboutMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home({ videoData }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#0e171e] ">
      <Head>
        <link rel="icon" href="/tano_logo_head.png" />
        <title>Santano McCalla</title>
      </Head>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutMe id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
        <ProjectsSection id="projects" videoData={videoData} />
      </div>
      <Footer id="contact" />
    </main>
  );
}

export async function getServerSideProps() {
  const accessToken = process.env.NEXT_PUBLIC_VIMEO_BEARER_TOKEN;
  const url =
    "https://api.vimeo.com/me/videos?page=1&per_page=100&sort=default";

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return {
      props: {
        videoData: data.data, // Pass the video data to the page component
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        videoData: [], //If there is an error
      },
    };
  }
}

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

const VIMEO_VIDEO_URL =
  "https://api.vimeo.com/me/videos?page=1&per_page=100&sort=alphabetical";
const VIMEO_REVALIDATE_SECONDS = 60 * 60 * 6;
const VIMEO_REQUEST_TIMEOUT_MS = 10000;

const getVimeoVideos = async () => {
  const accessToken = process.env.VIMEO_BEARER_TOKEN;

  if (!accessToken) {
    console.warn("Missing VIMEO_BEARER_TOKEN; skipping Vimeo videos.");
    return [];
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), VIMEO_REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(VIMEO_VIDEO_URL, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Vimeo request failed with ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data?.data)) {
      return [];
    }

    return data.data
      .map((video) => ({
        title: video?.name ?? "Untitled video",
        description: video?.description ?? "",
        previewUrl: video?.link ?? "",
        image: video?.pictures?.base_link ?? "",
      }))
      .filter((video) => video.previewUrl && video.image);
  } catch (error) {
    console.error("Unable to load Vimeo videos:", error);
    return [];
  } finally {
    clearTimeout(timeout);
  }
};

export async function getStaticProps() {
  return {
    props: {
      videoData: await getVimeoVideos(),
    },
    revalidate: VIMEO_REVALIDATE_SECONDS,
  };
}

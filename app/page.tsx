"use client";

import { useState, useEffect } from "react";
import { projs } from '@/data/projects'
import Link from 'next/link';
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures that theme only changes after the component has mounted (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or render a loader if you prefer
  }

  return (
    <>
      <div className="flex justify-between">
        <div className='text-[16px] font-semibold text-left text-black'>Abdulaziz Rakhmatullaev</div>
        <div className='flex gap-2'>
          <button onClick={() => setTheme("light")} className='flex gap-1 items-center'>
            {theme === "light" ? (
              <svg fill="none" height="13" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m2.43597 4.18404c-.43597.85565-.43597 1.97575-.43597 4.21596v7.2c0 2.2402 0 3.3603.43597 4.216.3835.7526.99542 1.3645 1.74807 1.748.85565.436 1.97575.436 4.21596.436h7.2c2.2402 0 3.3603 0 4.216-.436.7526-.3835 1.3645-.9954 1.748-1.748.436-.8557.436-1.9758.436-4.216v-7.2c0-2.24021 0-3.36031-.436-4.21596-.3835-.75265-.9954-1.36457-1.748-1.74807-.8557-.43597-1.9758-.43597-4.216-.43597h-7.2c-2.24021 0-3.36031 0-4.21596.43597-.75265.3835-1.36457.99542-1.74807 1.74807zm15.77113 5.02307c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-6.7929 6.79291-2.79289-2.7929c-.39053-.3905-1.02369-.3905-1.41422 0-.39052.3905-.39052 1.0237 0 1.4142l3.5 3.5c.39053.3905 1.02371.3905 1.41421 0z" fill="currentColor" fillRule="evenodd" /></svg>
            ) : (
              <svg fill="none" height="13" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m16.8722 2c1.7831 0 2.4296.18565 3.0815.53427.6518.34861 1.1634.86019 1.512 1.51204s.5343 1.29842.5343 3.08146v9.74443c0 1.7831-.1857 2.4296-.5343 3.0815-.3486.6518-.8602 1.1634-1.512 1.512-.6519.3486-1.2984.5343-3.0815.5343h-9.74443c-1.78304 0-2.42961-.1857-3.08146-.5343s-1.16343-.8602-1.51204-1.512c-.34862-.6519-.53427-1.2984-.53427-3.0815v-9.74443c0-1.78304.18565-2.42961.53427-3.08146.34861-.65185.86019-1.16343 1.51204-1.51204.65185-.34862 1.29842-.53427 3.08146-.53427zm.5639 2h-10.87221c-.89152 0-1.21481.09283-1.54074.26713-.32592.17431-.58171.4301-.75602.75602-.1743.32593-.26713.64922-.26713 1.54074v10.87221c0 .8915.09283 1.2148.26713 1.5407.17431.326.4301.5818.75602.7561.32593.1743.64922.2671 1.54074.2671h10.87221c.8915 0 1.2148-.0928 1.5407-.2671.326-.1743.5818-.4301.7561-.7561.1743-.3259.2671-.6492.2671-1.5407v-10.87221c0-.89152-.0928-1.21481-.2671-1.54074-.1743-.32592-.4301-.58171-.7561-.75602-.3259-.1743-.6492-.26713-1.5407-.26713z" fill="currentColor" /></svg>
            )}
            <div>Light</div>
          </button>
          <button onClick={() => setTheme("dark")} className='flex gap-1 items-center'>
            {theme === "dark" ? (
              <svg fill="none" height="13" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m2.43597 4.18404c-.43597.85565-.43597 1.97575-.43597 4.21596v7.2c0 2.2402 0 3.3603.43597 4.216.3835.7526.99542 1.3645 1.74807 1.748.85565.436 1.97575.436 4.21596.436h7.2c2.2402 0 3.3603 0 4.216-.436.7526-.3835 1.3645-.9954 1.748-1.748.436-.8557.436-1.9758.436-4.216v-7.2c0-2.24021 0-3.36031-.436-4.21596-.3835-.75265-.9954-1.36457-1.748-1.74807-.8557-.43597-1.9758-.43597-4.216-.43597h-7.2c-2.24021 0-3.36031 0-4.21596.43597-.75265.3835-1.36457.99542-1.74807 1.74807zm15.77113 5.02307c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-6.7929 6.79291-2.79289-2.7929c-.39053-.3905-1.02369-.3905-1.41422 0-.39052.3905-.39052 1.0237 0 1.4142l3.5 3.5c.39053.3905 1.02371.3905 1.41421 0z" fill="currentColor" fillRule="evenodd" /></svg>
            ) : (
              <svg fill="none" height="13" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m16.8722 2c1.7831 0 2.4296.18565 3.0815.53427.6518.34861 1.1634.86019 1.512 1.51204s.5343 1.29842.5343 3.08146v9.74443c0 1.7831-.1857 2.4296-.5343 3.0815-.3486.6518-.8602 1.1634-1.512 1.512-.6519.3486-1.2984.5343-3.0815.5343h-9.74443c-1.78304 0-2.42961-.1857-3.08146-.5343s-1.16343-.8602-1.51204-1.512c-.34862-.6519-.53427-1.2984-.53427-3.0815v-9.74443c0-1.78304.18565-2.42961.53427-3.08146.34861-.65185.86019-1.16343 1.51204-1.51204.65185-.34862 1.29842-.53427 3.08146-.53427zm.5639 2h-10.87221c-.89152 0-1.21481.09283-1.54074.26713-.32592.17431-.58171.4301-.75602.75602-.1743.32593-.26713.64922-.26713 1.54074v10.87221c0 .8915.09283 1.2148.26713 1.5407.17431.326.4301.5818.75602.7561.32593.1743.64922.2671 1.54074.2671h10.87221c.8915 0 1.2148-.0928 1.5407-.2671.326-.1743.5818-.4301.7561-.7561.1743-.3259.2671-.6492.2671-1.5407v-10.87221c0-.89152-.0928-1.21481-.2671-1.54074-.1743-.32592-.4301-.58171-.7561-.75602-.3259-.1743-.6492-.26713-1.5407-.26713z" fill="currentColor" /></svg>
            )}
            <div>Dark</div>
          </button>
        </div>
      </div>
      <div className='text-left my-6'>
        I&lsquo;m a Data Engineer & Software Engineer crafting sleek, high-performing websites and robust database solutions. I specialize in creating seamless user experiences through efficient code, clean designs, and optimized systems. I bring precision, creativity, and efficiency to every project.
      </div>
      <div className='text-left border-b-[1px] pb-6 border-[#e1e4e8]'>Previously worked at <Link href="https://maab.uz/" className='text-[#1e7fff] hover:underline'>MAAB ↗</Link> primarily as a Data engineer.</div>
      <div className='procon mt-6 flex items-start'>
        <div className="projs w-1/2">
          <div className='w-full flex items-center gap-1'>
            <svg className='mr-[-2px]' xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8 13.5c3.0376 0 5.5-2.4624 5.5-5.5S11.0376 2.5 8 2.5 2.5 4.9624 2.5 8s2.4624 5.5 5.5 5.5ZM15 8c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Z M8 12a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5A.75.75 0 0 1 8 12Z M7.1 4.9a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0Z" /></svg>
            <div className='font-depMon uppercase text-[11px] leading-none'>Projects</div>
          </div>
          <div className='mt-3 flex flex-col text-black lnks'>
            {projs.map((proj) => (
              <Link key={proj.slug} href={`projects/${proj.slug}`} className='flex justify-between items-center hover:opacity-50 w-full h-full top-0 left-0'>
                <div>{proj.name}</div>
                <div>↗</div>
              </Link>
            ))}
          </div>
        </div>
        <div className='vh h-[110px] w-[1px] bg-[#e1e4e8] mx-5'></div>
        <div className='hh my-5 none'></div>
        <div className="cont w-1/2">
          <div className='w-full flex items-center gap-1'>
            <svg className='mr-[-2px]' xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8 13.5c3.0376 0 5.5-2.4624 5.5-5.5S11.0376 2.5 8 2.5 2.5 4.9624 2.5 8s2.4624 5.5 5.5 5.5ZM15 8c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Z M8 12a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5A.75.75 0 0 1 8 12Z M7.1 4.9a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0Z" /></svg>
            <div className='font-depMon uppercase text-[11px] leading-none'>Contact</div>
          </div>
          <div className='mt-3 flex flex-col text-black lnks'>
            <Link href="mailto:rakhmatullaevabdulaziz@gmail.com" className='flex justify-between items-center hover:opacity-50'>
              <div>Email</div>
              <div>↗</div>
            </Link>
            <Link href="https://www.linkedin.com/in/abdulaziz-rakhmatullaev/" className='flex justify-between items-center hover:opacity-50'>
              <div>Linkedin</div>
              <div>↗</div>
            </Link>
            <Link href="https://t.me/AbdulazizRakhmatullaev" className='flex justify-between items-center hover:opacity-50'>
              <div>Telegram</div>
              <div>↗</div>
            </Link>
            <a
              href="/resume.pdf"
              download="AbdulazizR"
              className="flex justify-between items-center hover:opacity-50"
            >
              <div>Resume</div>
              <div>↗</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

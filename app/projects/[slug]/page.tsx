import { notFound } from 'next/navigation'; // To handle invalid slugs
import { projs } from '../../../data/projects';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const project = projs.find((p) => p.slug === slug)

  if (!project) {
    notFound();
  }

  return (
    <div className={`flex flex-col gap-[15px] ${project.images ? "" : "justify-center"} h-screen w-full py-8`}>
      <div className='flex justify-between items-center'>
        <Link href="/" className='flex gap-1 items-center cursor-pointer hover:opacity-50'>
          <svg width="13" height="13" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="back_24">
                <polygon id="Bounds" points="24 0 0 0 0 24 24 24"></polygon>
                <path d="M7.8,11 L12.7,6.1 C13.0865993,5.71340068 13.0865993,5.08659932 12.7,4.7 L12.7,4.7 C12.3134007,4.31340068 11.6865993,4.31340068 11.3,4.7 L4.70710678,11.2928932 C4.31658249,11.6834175 4.31658249,12.3165825 4.70710678,12.7071068 L11.3,19.3 C11.6865993,19.6865993 12.3134007,19.6865993 12.7,19.3 L12.7,19.3 C13.0865993,18.9134007 13.0865993,18.2865993 12.7,17.9 L7.8,13 L20,13 C20.5522847,13 21,12.5522847 21,12 L21,12 C21,11.4477153 20.5522847,11 20,11 L7.8,11 Z" id="Mask" fill="currentColor"></path>
              </g>
            </g>
          </svg>
          <div>Back</div>
        </Link>
        <div className='text-[16px] font-bold'>{project.name}</div>

      </div>
      <div className="abt">
        <div className='text-left border-b-[1px] mt-5 pb-6 border-[#e1e4e8]'>
          <div className='flex flex-col mt-1'>{project.description}</div>
        </div>

        <div className='flex justify-between items-center my-6'>
          {project.role ? (
            <div className='flex flex-col'>
              <div className='font-depMon uppercase text-[11px] leading-none'>role</div>
              <div className='flex flex-col mt-1'>{project?.role}</div>
            </div>
          ) : null}

          {project.emp_type ? (
            <div className='flex flex-col'>
              <div className='font-depMon uppercase text-[11px] leading-none'>Emp.Type</div>
              <div className='flex flex-col mt-1'>{project?.emp_type}</div>
            </div>
          ) : null}

          {project.date ? (
            <div className='flex flex-col'>
              <div className='font-depMon uppercase text-[11px] leading-none'>duration</div>
              <div className='flex flex-col mt-1'>{project.date}</div>
            </div>
          ) : null}

          {project.url ? (
            <Link href={project.url} className='mwb px-5 py-2 text-center rounded-md font-depMon hover:opacity-80'>Main website</Link>
          ) : null}
        </div>
      </div>
      {project.images ? (
        <div className={`w-full flex ${project.device === "phone" ? "imgGrid" : "flex-col"} gap-[10px] pb-8`}>
          {project?.images?.map((image, index) => (
            project.device === "phone" ? (
              <img key={index} src={image} alt={`${project.name} image ${index + 1}`} className="w-auto object-cover rounded-[6px]" />
            ) : (
              <img key={index} src={image} alt={`${project.name} image ${index + 1}`} className="w-full object-cover rounded-[6px]" />
            )
          ))}
        </div>
      ) : null}
    </div>
  )
}
'use client';

import { useRouter } from "next/navigation";
import {
  UserCircleIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
} from '@heroicons/react/20/solid';
import { FaXTwitter, FaTelegram, FaDiscord, FaYoutube, FaRedditAlien, FaGithub } from "react-icons/fa6";

const KycClient = ({ post }) => {
  const router = useRouter();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] py-12 sm:py-16 lg:py-24 mx-auto px-4 lg:px-8 pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
        <div className="flex items-stretch h-full">
          <div className="flex justify-between w-full rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 border dark:border-neutral-800">
            <dl className="flex flex-wrap">
              <div className="flex justify-between items-center px-6 pt-6">
                <div className="flex items-center gap-4">
                  {post.logo && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.logo}`}
                      alt="Project Logo"
                      className="w-8 h-8 object-contain"
                    />
                  )}

                  <div className="text-sm font-semibold leading-6 dark:text-white-800">{post.name}</div>
                </div>

                <div className="ml-auto px-6">
                  <div className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    KYC
                  </div>
                </div>
              </div>

              <div className="mt-6 flex w-full flex-none gap-x-4 border-t dark:border-neutral-800 border-gray-900/5 px-6 pt-6">
                <dt className="flex-none">
                  <UserCircleIcon className="h-6 w-5 dark:text-white-800" />
                </dt>
                <dd className="text-sm font-medium leading-6 dark:text-white-800">
                  Verified Member(s): {post.members}
                </dd>
              </div>

              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <GlobeAltIcon className="h-6 w-5 text-gray-400" />
                </dt>
                <a href={post.website} target="_blank" rel="noopener noreferrer" className="text-sm leading-6 hover:text-blue-500">
                  {post.website}
                </a>
              </div>

              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <CalendarDaysIcon className="h-6 w-5 text-gray-400" />
                </dt>
                <dd className="text-sm leading-6">{formatDate(post.kycAt)}</dd>
              </div>

              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <div className="flex gap-4">
                  {post.twitter && (
                    <a href={post.twitter} target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                    </a>
                  )}
                  {post.telegram && (
                    <a href={post.telegram} target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                    </a>
                  )}
                  {post.github && (
                    <a href={post.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    </a>
                  )}
                  {post.discord && (
                    <a href={post.discord} target="_blank" rel="noopener noreferrer">
                      <FaDiscord className="h-5 w-5 text-gray-400 hover:text-indigo-500" />
                    </a>
                  )}
                  {post.youtube && (
                    <a href={post.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="h-5 w-5 text-gray-400 hover:text-red-500" />
                    </a>
                  )}
                  {post.reddit && (
                    <a href={post.reddit} target="_blank" rel="noopener noreferrer">
                      <FaRedditAlien className="h-5 w-5 text-gray-400 hover:text-orange-500" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 border-t dark:border-neutral-800 border-gray-900/5 px-6 py-6 w-full">
                <a
                  alt={`${post.name} PDF`}
                  href={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 dark:text-neutral-100 hover:text-blue-500"
                >
                  Download pdf <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex items-stretch h-full">
          <img
            alt={`${post.name} Certificate`}
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.certificate}`}
            className="w-full rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
   
  );
};

export default KycClient;

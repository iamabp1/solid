'use client';

import React, { useState } from 'react';
import { createDirectus, rest, createItem } from '@directus/sdk';
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa6";

// Initialize Directus client
const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL || '').with(rest());

// Form configuration constants
const FORM_ID = '36493b64-2bad-4c58-9d70-785ccb12ee26';
const FIELD_IDS = {
  firstName: 'eef0eb77-ecab-4fba-9903-c46d6ad6d85b',
  lastName: 'bbc7b1c6-304e-4ee1-9afa-c5cffda6af27',
  email: 'a3d87bc0-f143-44ca-bea0-9eaf56b67783',
  subject: 'a5222af8-f9a2-4d1a-9713-7ce0e2d5edc5',
  message: '56c64efd-520f-4578-acca-e0565e247681'
} as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    [FIELD_IDS.firstName]: '',
    [FIELD_IDS.lastName]: '',
    [FIELD_IDS.email]: '',
    [FIELD_IDS.subject]: '',
    [FIELD_IDS.message]: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    try {
      const valuesArray = Object.entries(formData).map(([fieldId, fieldValue]) => ({
        field: fieldId, // Ensure this matches the schema in your Directus `values` table
        value: fieldValue,
      }));
  
      const submissionData = {
        form: FORM_ID,
        values: valuesArray,
      };
 
  
  
      const response = await client.request(
        createItem('form_submissions', submissionData)
      );
  
  
      setSubmitStatus('success');
      setFormData({
        [FIELD_IDS.firstName]: '',
        [FIELD_IDS.lastName]: '',
        [FIELD_IDS.email]: '',
        [FIELD_IDS.subject]: '',
        [FIELD_IDS.message]: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
              <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
              <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">

          <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
               <h2 className="mb-12.5 text-xl font-bold text-black dark:text-white ">
                Send us a message
              </h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
          <input
            type="text"
            name={FIELD_IDS.firstName}
            value={formData[FIELD_IDS.firstName]}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            required
          />
 <input
            type="email"
            name={FIELD_IDS.email}
            value={formData[FIELD_IDS.email]}
            onChange={handleInputChange}
            placeholder="Email address"
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            required
          />
         
        </div>

        <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
         

          <input
            type="text"
            name={FIELD_IDS.subject}
            value={formData[FIELD_IDS.subject]}
            onChange={handleInputChange}
            placeholder="Subject"
            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          />
        </div>

        <div className="mb-11.5 flex">
          <textarea
            name={FIELD_IDS.message}
            value={formData[FIELD_IDS.message]}
            onChange={handleInputChange}
            placeholder="Message"
            rows={4}
            className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Submit"}
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
          </svg>
        </button>

        {submitStatus === 'success' && (
          <div className="mt-4 text-green-500">Message sent successfully!</div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 text-red-500">Failed to send message. Please try again.</div>
        )}
      </form>
      </motion.div>
  <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-xl font-bold text-black dark:text-white ">
                Contact us
              </h2>

              <div className="5 mb-7">
                               <a
                                 href="#"
                                 className=" font-medium text-black dark:text-white"
                               >
                                 business@codeum.org
                               </a>
                               <p className="mb-4 w-[90%]">
                         
                                 
                         </p>
               
                         <a href="https://t.me/mike_codeum" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
  >
    <FaTelegram />
    <span className="mr-1"> </span>
    Contact in Telegram
  </button>
</a>

              </div>

            </motion.div>
            </div>
      </div>
    </section>
  );
};

export default Contact;
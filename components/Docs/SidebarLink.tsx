"use client";

import { useEffect, useState } from "react";

const SidebarLink = ({ activeSection, onSelect }) => {
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const [isClient, setIsClient] = useState(false); // Track if the component is on the client side

  // Update the active section based on the URL hash (on initial load or when hash changes)
  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== "undefined") {
      setIsClient(true); // Set state to indicate we're on the client side
    }
  }, []);
  useEffect(() => {
    // Update the active section when the hash changes
    if (isClient) {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
      // You may also want to call onSelect here if you need to trigger any other logic
      const newActiveSection = window.location.hash.slice(1); // Remove the '#' from the hash
      onSelect(newActiveSection);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }
  }, [isClient, onSelect]);

  const sections = [
    {
      title: "",  // No title for the first section
      links: [
        { id: "codeum", label: "Codeum" },
      ],
    },
    {
      title: "Services",
      links: [
        { id: "audit", label: "Audit" },
        { id: "kyc", label: "KYC" },
        { id: "development", label: "Development" },
      ],
    },
    {
      title: "Other",
      links: [
        { id: "assets", label: "Media Assets" },
        { id: "partnership", label: "Partnership" },
        { id: "contact", label: "Contact" },
      ],
    },
  ];
  if (!isClient) {
    return null; // Prevent rendering of content during SSR
  }
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">
          {/* Render title if it exists */}
          {section.title && (
            <div id={section.title.toLowerCase()} className="font-extrabold text-xs px-3 mb-2">
              {section.title}
            </div>
          )}
          <ul>
            {section.links.map((link) => (
              <li key={link.id} className="block">
                <a
                  href={`#${link.id}`}  // Create an anchor link pointing to the section id
                  onClick={() => onSelect(link.id)}
                  className={`flex w-full rounded px-3 py-2 text-xs ${
                    activeHash === `#${link.id}` || activeSection === link.id
                      ? "bg-gray-200 dark:bg-gray-800 font-bold"
                      : "bg-transparent"
                  } text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SidebarLink;
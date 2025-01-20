'use client';
import React, { useState, useEffect } from 'react';
import Pagination from '@/components/StyleGuide/StyleSections/Pagination';
import { readItems, aggregate } from '@directus/sdk';
import directus from "@/lib/directus";

const tableStyles = {
  borderSpacing: 0,
  borderCollapse: 'collapse',
};

const cellStyles = {
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid rgb(81, 86, 83)',
};

// Fetch the total number of audits
const getTotalAuditCount = async (network) => {
  const totalCount = await directus.request(
    aggregate("audits", {
      aggregate: { count: "*" },
      query: {
        filter:{ network: { _contains: network } }
    }
      
    })
  );
  return totalCount[0].count;
}
// Fetch audits with pagination
async function getAudits(currentPage, itemsPerPage , network) {
  const filter = network ? { filter: { network: { _contains: network } } } : {};
  const offset = (currentPage - 1) * itemsPerPage;

  return await directus.request(
    readItems('audits', {
      fields: ['name', 'logo', 'category', 'network', 'slug', 'auditedAt', 'score'],
      sort: ['-auditedAt'],
      limit: itemsPerPage,
      offset,
      ...filter,
    })
  );

}

const AuditTable = ({ activeNetwork }) => {
  const [audits, setAudits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10; // Set items per page

  useEffect(() => {
    const fetchAudits = async () => {
      try {
        const fetchedAudits = await getAudits(currentPage, itemsPerPage, activeNetwork);
        const processedData = fetchedAudits.map(item => ({
          ...item,
          network: Array.isArray(item.network) ? item.network : [item.network || 'Unknown'],
        }));
        setAudits(processedData);

        const totalCount = await getTotalAuditCount(activeNetwork);
        // console.log('Total audit count:', totalCount);

        setTotalPages(Math.ceil(totalCount / itemsPerPage));


      } catch (error) {
        console.error('Error fetching audits:', error);
      }
    };

    fetchAudits();
  }, [activeNetwork, currentPage]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="audit-table w-full" style={tableStyles}>
          <thead>
            <tr>
              <th className="p-4" style={cellStyles}>#</th>
              <th className="p-4" style={cellStyles}>Name</th>
              <th className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>Score</th>
              <th className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>Audited At</th>
              <th className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>Category</th>
              <th className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>Network</th>
            </tr>
          </thead>
          <tbody>
              {audits.length === 0 ? (
    <tr>
      <td colSpan="6" className="text-center">No audits available</td>
    </tr>
  ) : (audits.map((audit, index) => (
              <tr key={audit.id || audit.name}>
                <td className="p-4" style={cellStyles}>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="p-4" style={cellStyles}>
                  <a href={`/audits/${audit.slug}`}>
                  <div className="flex items-center gap-2">
                    <img
                      src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${audit.logo}`}
                      alt="Project Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <span>{audit.name || 'N/A'}</span>
                  </div>
                  </a>
                </td>
                <td className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>
                  {audit.score || 'N/A'}
                </td>
                <td className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>
                  {formatDate(audit.auditedAt) || 'N/A'}
                </td>
                <td className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>
                  {audit.category}
                </td>
                <td className="p-4" style={{ ...cellStyles, textAlign: 'center' }}>
                  {audit.network || 'Unknown'}
                </td>
              </tr>
             ))
            )}
          </tbody>
        </table>
      </div>
      {audits.length === 0 ? (
      <div colSpan="6" className="text-center"></div>
  ) : <div className="p-4">
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
  />
</div>}
      
    </div>
  );
};

export default AuditTable;
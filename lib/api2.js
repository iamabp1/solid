const axios = require("axios");

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}`,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`
  }
});

const getAllKycs = async (page = 1, searchQuery = "") => {
  try {
    const offset = (page - 1) * process.env.NEXT_PUBLIC_PAGE_LIMIT;
    const filter = searchQuery 
      ? `&filter[name][_contains]=${searchQuery}` 
      : '';
      
    const response = await api.get(
      `items/kycs?limit=${process.env.NEXT_PUBLIC_PAGE_LIMIT}&offset=${offset}${filter}`
    );
    
    return {
      kycs: response.data.data,
      pagination: {
        page,
        pageSize: Number(process.env.NEXT_PUBLIC_PAGE_LIMIT),
        total: response.data.meta.total_count
      }
    };
  } catch (error) {
    console.error("Error fetching KYCs:", error);
    throw new Error("Server error");
  }
};

const getKycById = async (id) => {
  try {
    const response = await api.get(`items/kycs/${id}`);
    if (response.data.data) {
      return response.data.data;
    }
    throw new Error("KYC not found.");
  } catch (error) {
    console.error("Error fetching KYC:", error);
    throw new Error("Server error");
  }
};

const getKycBySlug = async (slug) => {
  try {
    const response = await api.get(
      `items/kycs?filter[slug][_eq]=${slug}`
    );
    if (response.data.data.length > 0) {
      return response.data.data[0];
    }
    throw new Error("KYC not found.");
  } catch (error) {
    console.error("Error fetching KYC:", error);
    throw new Error("Server error");
  }
};

const getAllAudits = async (page = 1, searchQuery = "", category = "", network = "") => {
  try {
    const offset = (page - 1) * 8;
    const filters = [];

    if (searchQuery) {
      filters.push(`filter[name][_contains]=${searchQuery}`);
    }

    if (category && category !== 'All') {
      filters.push(`filter[type][name][_eq]=${category}`);
    }

    if (network) {
      filters.push(`filter[network][_eq]=${network}`);
    }

    const queryString = filters.length > 0 ? `&${filters.join('&')}` : '';

    const response = await api.get(
      `items/audits?limit=8&offset=${offset}${queryString}&fields=*,type.*,network.*`
    );

    return {
      audits: response.data.data,
      pagination: {
        page,
        pageSize: 8,
        total: response.data.meta.total_count
      }
    };
  } catch (error) {
    console.error("Error fetching audits:", error);
    throw new Error("Server error while fetching audits");
  }
};

// getExploreAudits can use the same function as getAllAudits
const getExploreAudits = getAllAudits;

const getAllNetworks = async () => {
  try {
    const response = await api.get(`items/networks`);
    return response.data.data.map((network) => ({
      rank: network.rank || 'N/A',
      name: network.name || 'N/A',
      score: network.score || 'N/A',
      auditedAt: network.auditedAt || 'N/A',
      rankedBy: network.rankedBy || 'N/A',
    }));
  } catch (error) {
    console.error("Error fetching networks:", error);
    throw new Error("Server error while fetching networks");
  }
};

const getAuditById = async (id) => {
  try {
    const response = await api.get(
      `items/audits/${id}?fields=*,type.*,network.*`
    );
    if (response.data.data) {
      return response.data.data;
    }
    throw new Error("Audit not found.");
  } catch (error) {
    console.error("Error fetching audit:", error);
    throw new Error("Server error");
  }
};

const getAuditBySlug = async (slug) => {
  try {
    const response = await api.get(
      `items/audits?filter[slug][_eq]=${slug}&fields=*,type.*,network.*`
    );
    if (response.data.data.length > 0) {
      return response.data.data[0];
    }
    throw new Error("Audit not found.");
  } catch (error) {
    console.error("Error fetching audit:", error);
    throw new Error("Server error");
  }
};

const getAuditByCat = async (cat) => {
  try {
    const response = await api.get(
      `items/audits?filter[type][_eq]=${cat}&fields=*,type.*`
    );
    if (response.data.data.length > 0) {
      return response.data.data[0];
    }
    throw new Error("Audit not found.");
  } catch (error) {
    console.error("Error fetching audit:", error);
    throw new Error("Server error");
  }
};

const createKyc = async (kycData) => {
  try {
    const response = await api.post("items/kycs", kycData);
    return response.data.data;
  } catch (error) {
    console.error("Error creating KYC:", error);
    throw new Error("Failed to create KYC");
  }
};

const createAudit = async (auditData) => {
  try {
    const response = await api.post("items/audits", auditData);
    return response.data.data;
  } catch (error) {
    console.error("Error creating audit:", error);
    throw new Error("Failed to create audit");
  }
};

const getAllAuditCategories = async () => {
  try {
    const response = await api.get("items/types");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching audit categories:", error);
    throw new Error("Server error");
  }
};

const getAllCategories = async () => {
  try {
    const response = await api.get("items/categories");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching post categories:", error);
    throw new Error("Server error");
  }
};

const fetchPostsByCategory = async (filter) => {
  try {
    const response = await api.get(`items/posts`, {
      params: {
        sort: '-date_created',
        filter: {
          category: {
            slug: {
              _eq: filter
            }
          }
        },
        fields: ['*', 'cover.*', 'category.*', 'authors_bio.*']
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts by category");
  }
};

const updateAuditWebsiteScan = async (auditId, scanData) => {
  try {
    const response = await api.patch(
      `items/audits/${auditId}`,
      {
        websiteScan: {
          ...scanData,
          scanDate: new Date().toISOString()
        }
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error updating audit website scan:", error);
    throw new Error("Failed to update audit website scan");
  }
};

module.exports = {
  getAllKycs,
  getKycById,
  getKycBySlug,
  createKyc,
  getAllAudits,
  getAuditById,
  getAuditBySlug,
  createAudit,
  updateAuditWebsiteScan,
  getAllAuditCategories,
  fetchPostsByCategory,
  getAllNetworks,
  getExploreAudits,
  getAllCategories
};
const axios = require("axios");

const api = axios.create({
 baseURL: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}`,
 headers: {
   'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DIRECTUS_TOKEN}`
 }
});

const getAllPosts = async (page = 1, searchQuery = "") => {
 try {
   const offset = (page - 1) * process.env.NEXT_PUBLIC_PAGE_LIMIT;
   const filter = searchQuery 
     ? `&filter[title][_contains]=${searchQuery}` 
     : '';
     
   const response = await api.get(
     `items/posts?fields=*,author.*,category.*&limit=${process.env.NEXT_PUBLIC_PAGE_LIMIT}&offset=${offset}${filter}`
   );
   
   return {
     posts: response.data.data,
     pagination: {
       page,
       pageSize: Number(process.env.NEXT_PUBLIC_PAGE_LIMIT),
       total: response.data.meta.total_count
     }
   };
 } catch (error) {
   console.error("Error fetching posts:", error);
   throw new Error("Server error");
 }
};

const getPostBySlug = async (slug) => {
 try {
   const response = await api.get(
     `items/posts?filter[slug][_eq]=${slug}&fields=*,author.*,category.*`
   );
   if (response.data.data.length > 0) {
     return response.data.data[0];
   }
   throw new Error("Post not found.");
 } catch (error) {
   console.error("Error fetching post:", error);
   throw new Error("Server error");
 }
};

const getAllCategories = async () => {
 try {
   const response = await api.get("items/categories");
   return response.data.data;
 } catch (error) {
   console.error("Error fetching categories:", error);
   throw new Error("Server error");
 }
};

const uploadImage = async (image, collectionId) => {
 try {
   const formData = new FormData();
   formData.append('file', image);
   
   // First upload the file
   const uploadResponse = await api.post('files', formData, {
     headers: {
       'Content-Type': 'multipart/form-data'
     }
   });
   
   // Then link it to the article
   if (collectionId) {
     await api.patch(`items/posts/${collectionId}`, {
       cover: uploadResponse.data.data.id
     });
   }
   
   return uploadResponse.data.data;
 } catch (err) {
   console.error("Error uploading image:", err);
   throw err;
 }
};

const createPost = async (postData) => {
 try {
   const response = await api.post("items/posts", postData);
   return response.data.data;
 } catch (error) {
   console.error("Error creating post:", error);
   throw new Error("Failed to create post");
 }
};

module.exports = {
 api,
 getAllPosts,
 getPostBySlug,
 getAllCategories,
 uploadImage,
 createPost,
};
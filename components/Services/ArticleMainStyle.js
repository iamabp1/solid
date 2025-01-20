"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import ServiceData from "../../data/serviceStyle.json";

import bg from "../../public/images/service/bg.png";
import bgHover from "../../public/images/service/bg-hover.png";
import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

async function getPosts() {
  const response = await directus.request(
    readItems('posts', {
      fields: ['*'],
      sort: ['-published_at'],
    })
  );
  
  return response;
}
const ArticleMainStyle = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1); // Track total number of pages

  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the search query and page from the URL params
  const searchQuery = searchParams.get("search") ?? "";
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1; // Default to page 1 if not present

  useEffect(() => {
    const fetchPosts = async (page) => {
      try {
        const fetchedPosts = await getPosts();

        setPosts(fetchedPosts);
      } catch (error) {
        setError("Error fetching posts.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(currentPage);
  }, [currentPage, searchQuery]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider
              {...settings}
              className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows"
            >
              {posts &&
                posts.map((post, index) => (
                  <div className="slide-single-layout" key={index}>
 <div className="rainbow-card undefined">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link className="image" href={`/articles/${post.slug}`}>
                        <Image
                           src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.cover.url}`}
                           alt={post.title}
                          width={413}
                          height={281}
                         
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <ul className="rainbow-meta-list">
                        <li>
                          <i className="fa-sharp fa-regular fa-calendar-days icon-left"></i>{" "}
                          {post.createdAt}

                        </li>
                        <li className="separator"></li>
                        <li className="catagory-meta">
                          {/* <a href="#">{post.category.name}</a> */}
                        </li>
                      </ul>
                     
                      <h4 className="title">
                        <Link href={`/articles/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>
                      <div className="d-flex">{post.description}</div>
                      <a className="btn-read-more border-transparent" href="#">
                        <span>
                        <Link href={`/articles/${post.slug}`}>
                         Read More{" "}
                        </Link>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleMainStyle;
import Image from "next/image";
import React from "react";
import imgPlaceholder from "@/public/assets/images/img-placeholder.webp";
import Link from "next/link";
import {  WEBSITE_PRODUCT_DETAILS } from "@/routes/WebsiteRoute";

const ProductBox = ({ product }) => {
  return (
    <div className="rounded-[26px] bg-white/80 backdrop-blur-sm p-2
shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <div className="group bg-white rounded-2xl overflow-hidden
        shadow-[0_10px_25px_rgba(0,0,0,0.08)]
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]
        transition-all duration-300 hover:-translate-y-2"
        >
          <Link href={WEBSITE_PRODUCT_DETAILS(product.slug)}>
          {/* Image Section */}

          <div className="relative overflow-hidden">
              <Image
                  src={product?.media[0]?.secure_url || imgPlaceholder.src}
                  width={400}
                  height={400}
                  alt={product?.media[0]?.alt || product?.name}
                  title={product?.media[0]?.title || product?.name}
                  className="w-full lg:h-[260px] md:h-[230px] h-[180px]
                    object-cover transition-transform duration-500
                    group-hover:scale-110"
                />

              
          </div>

            <div className="p-4  border-t">
              {/* product name */}
              <h4 className="text-lg font-semibold text-gray-800">{product?.name}</h4>

              {/* Price row */}
              <div className="flex gap-2 mt-3 flex-wrap items-center">
                <span className="text-lg font-bold text-red-700">
                  {product?.sellingPrice.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </span>
                <span className="line-through text-sm  text-gray-500">
                  {product?.mrp.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </span>
                <br />
                <span
                  className="ml-auto text-xs font-semibold text-white
                      bg-red-700 px-3 py-1 rounded-full"
                  
                >
                  {product?.discountPercentage}% off
                </span>
              </div>

              {/* CTA */}
                <button
                  className="w-full mt-4 py-2.5 rounded-xl
                  text-white font-medium
                  bg-gradient-to-r from-amber-700 to-amber-900
                  hover:opacity-90 transition"
                >
                  View Product

                  
                </button>

                 

            </div>
          </Link>

                  
        </div>
    </div>
  );
};

export default ProductBox;

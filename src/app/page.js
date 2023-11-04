// Home.js

import React from "react";
import json from "../app/categories.json";
import Image from "next/image";

export default function Home() {
    console.log("this is json", json.categories);

    return (
        <div className="my-8 md:mx-[100px] lg:mx-[200px]">
            <h1 className="text-center lg:text-7xl text-5xl font-[700] ">
                Welcome to Our Website
            </h1>
            <p className="text-center my-4 font-[500] lg:text-lg text-sm">
                We are excited to have you here. Explore our content and
                discover amazing things!
            </p>

            <div>
                <p className="my-3 font-[600] text-xl border-b-2 border-black inline-block ">
                    Explore amazing Categories
                </p>
                <div className=" mx-[50px] grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 gap-2 ">
                    {json.categories.map((item) => (
                        <div key={item.id} className=" text-center  mx-auto ">
                            <div className="bg-white rounded-full border-2 border-gray-300 shadow-md hover:shadow-2xl inline-block p-5 w-[100px] h-[100px] overflow-hidden flex justify-center items-center">
                                <Image
                                    src={item.image_url}
                                    width={60}
                                    height={60}
                                    alt={item.name}
                                />
                            </div>
                            <p className="mt-2">{item.cloth_category}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="my-3 font-[600] text-xl border-b-2 border-black inline-block ">
                    Explore Our Trending Products
                </p>
                <div className=" mx-[50px] grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-2">
                    {json.categories.map((item) => (
                        <div key={item.id} className=" p-4  text-center ">
                            <div className="bg-white shadow border-2 border-gray-250 inline-block p-2 w-[250px] h-[250px] overflow-hidden">
                                <Image
                                    src={item.image_url}
                                    width={500}
                                    height={500}
                                    alt={item.name}
                                />
                            </div>
                            <p className="mt-2">{item.cloth_category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

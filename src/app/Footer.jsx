"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  const [adminToken, setAdminToken] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAdminToken(localStorage.getItem("adminAuthToken"));
    }
  }, []);
  return (
    <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white font-semibold font-cambria">
      <p className="py-4">
        2024 Components Ort, LLC. Todos los derechos reservados
      </p>
      <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
        {items.map((x, index) => (
          <a
            key={index}
            href={x.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <x.icon className="hover:text-cyan-600" />
          </a>
        ))}
      </div>

      {!adminToken ? (
        <div className="text-center py-4">
          <a
            href="/admin/login"
            className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
          >
            ADMIN
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Footer;

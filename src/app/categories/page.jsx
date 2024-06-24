"use client"

import React, { useState } from "react";
import NavSidebar from "../ui/NavSidebar";
import AddCategorie from "../ui/AddCategorie";
import DeleteCategorie from "../ui/DeleteCategorie";
import GetCategorie from "../ui/GetCategorie";
import EditCategorie from "../ui/EditCategorie";
import GetCategories from "../ui/GetCategories";

export default function Categories() {

    return (
        <section className="section">
            <NavSidebar />
            <div className="titleSection">
                <h2>Categories</h2>
                <div className="breadcrumbs">
                    <p><span>Admin</span> &gt; <span>Categories</span></p>
                </div>
            </div>
            <div className="crud">
                <AddCategorie />
                <DeleteCategorie />
                <GetCategorie />
                <EditCategorie />
                <GetCategories />
            </div>
        </section>
    );
}

"use client"

import React, { useState } from "react";
import NavSidebar from "../ui/NavSidebar";
import GetUsers from "../ui/GetUsers";
import DeleteUser from "../ui/DeleteUser";
import EditUser from "../ui/EditUser";
import AddUser from "../ui/AddUser";
import GetUser from "../ui/GetUser";

export default function Categories() {

    return (
        <section className="section">
            <NavSidebar />
            <div className="titleSection">
                <h2>Users</h2>
                <div className="breadcrumbs">
                    <p><span>Admin</span> &gt; <span>Users</span></p>
                </div>
            </div>
            <div className="crud">

                <AddUser />
                <DeleteUser />
                <GetUser />
                <EditUser />
                <GetUsers />
            </div>
        </section>
    );
}

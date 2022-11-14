import React from "react";
import { createSearchParams, Link } from "react-router-dom";

export default function Browse() {
    return (
        <div>
            <Link className="navbarLink" to={"/search?" + createSearchParams({
                query: "",
                filters: "00"
            }).toString()}>Browse Catalog</Link>
        </div>
    )
}
import React from "react";
import appwriteservices from "../appwrite/configure";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 ">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteservices.getFilePreview(featuredimage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

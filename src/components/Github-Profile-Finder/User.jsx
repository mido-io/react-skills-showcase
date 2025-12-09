import React from "react";
import { FaMapMarkerAlt, FaTwitter, FaLink, FaCalendarAlt } from "react-icons/fa";

const User = ({ user }) => {
  if (!user) return null;

  const createdDate = new Date(user.created_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
      <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      <div className="px-8 pb-8">
        <div className="relative flex justify-between items-end -mt-12 mb-6">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
          />
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-blue-500/30"
          >
            Follow
          </a>
        </div>

        <div className="space-y-1 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name || user.login}</h2>
          <p className="text-blue-600 dark:text-blue-400">@{user.login}</p>
        </div>

        {user.bio && (
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {user.bio}
          </p>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.public_repos}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Repos</p>
          </div>
          <div className="text-center border-l border-gray-200 dark:border-gray-700">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.followers}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Followers</p>
          </div>
          <div className="text-center border-l border-gray-200 dark:border-gray-700">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.following}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Following</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
          {user.location && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-400" /> {user.location}
            </div>
          )}
          {user.twitter_username && (
            <div className="flex items-center gap-2">
              <FaTwitter className="text-gray-400" /> {user.twitter_username}
            </div>
          )}
          {user.blog && (
            <div className="flex items-center gap-2">
              <FaLink className="text-gray-400" />
              <a href={user.blog} target="_blank" rel="noreferrer" className="hover:text-blue-500 truncate max-w-[150px]">
                {user.blog}
              </a>
            </div>
          )}
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-400" /> Joined {createdDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

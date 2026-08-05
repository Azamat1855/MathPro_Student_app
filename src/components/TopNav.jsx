import { useTelegram } from "./useTelegram";

const TopNav = () => {
  const { user } = useTelegram();

  // Replace this with data from your backend later
  const group = "WIUT-24-07";

  const initials = user?.first_name
    ? user.first_name.charAt(0).toUpperCase()
    : "?";

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <div className="flex items-center justify-between rounded-full border border-t-white/50 border-r-white/30 border-b-black/10 border-l-black/10 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
        {/* Left Side */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="h-12 w-12 overflow-hidden rounded-full border border-white/60 bg-white shadow">
            {user?.photo_url ? (
              <img
                src={user.photo_url}
                alt={user.first_name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-blue-500 text-lg font-semibold text-white">
                {initials}
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="ml-3 flex flex-col">
            <span className="text-xs text-gray-500">
              Welcome back
            </span>

            <span className="text-base font-semibold text-gray-900">
              {user
                ? `${user.first_name}${
                    user.last_name ? ` ${user.last_name}` : ""
                  }`
                : "Loading..."}
            </span>
          </div>
        </div>

        {/* Group */}
        <div className="rounded-full bg-white/30 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur-md">
          {group}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
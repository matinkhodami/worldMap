import { NavLink } from "react-router";

export function Navigation() {
  const tabs = [
    { path: "/app/cities", label: "Cities" },
    { path: "/app/countries", label: "Countries" },
    { path: "/app/form", label: "Form" },
  ];

  return (
    <div className="flex gap-2 p-1 bg-water-deep rounded-full mx-auto">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => `
            relative px-4 py-2 text-sm font-medium rounded-md
            transition-all duration-300 ease-out
            ${isActive ? "text-white" : "text-gray-600 hover:text-gray-900"}
          `}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute inset-0 bg-blue-500 rounded-full z-0 animate-in fade-in zoom-in-95" />
              )}
              <span className="relative z-10">{tab.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}

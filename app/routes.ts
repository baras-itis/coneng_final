  import { type RouteConfig, index, route } from "@react-router/dev/routes";

  export default [
    index("routes/home.tsx"),
    
    route("services", "routes/services.tsx"),
  route("services/:id", "routes/services.$id.tsx"),
    route("markets", "routes/markets.tsx"),
    route("projects", "routes/projets.tsx"),
    route("self-perform", "routes/self-perform.tsx"),
    route("about", "routes/about.tsx"),
    route("locations", "routes/locations.tsx"),
    route("contact", "routes/contact.tsx"),
  ] satisfies RouteConfig;

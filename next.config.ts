import withVercelToolbar from "@vercel/toolbar/plugins/next";

/** @type {import("next").NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/:locale(en|nl)/partners/edit",
        destination: "/:locale/partners",
        permanent: false,
      },
    ];
  },
};

export default withVercelToolbar()(nextConfig);

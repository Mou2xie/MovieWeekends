/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'bkimg.cdn.bcebos.com',
      '7465-test-8ge5fk4n968c9c45-1258274191.tcb.qcloud.la',
      'img1.doubanio.com',
      'img2.doubanio.com',
      'img9.doubanio.com',

    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig;

module.exports = {
  title: 'Hướng Nghiệp Alpha',
  tagline: 'Đồng hành cùng Teen và Phụ huynh',
  url: 'https://huongnghiepalpha-dev.github.io',
  baseUrl: '/bantin/', // Sửa từ /hoso/ thành /bantin/ cho đúng đường dẫn web của bạn
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'huongnghiepalpha-dev',
  projectName: 'bantin', // Sửa từ hoso thành bantin để đồng bộ với kho lưu trữ

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Đặt bài viết làm trang chủ luôn cho tiện theo dõi
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Hướng Nghiệp Alpha',
      items: [
        {to: '/01-nhan-dien-ban-than/bai-mo-dau', label: '👤 Nhận diện bản thân', position: 'left'},
        {to: '/03-dinh-huong-nghe-nghiep/bai-mo-dau', label: '🧭 Định hướng nghề', position: 'left'},
        {to: '/04-chon-nganh-chon-truong/bai-mo-dau', label: '🎓 Chọn ngành - trường', position: 'left'},
        {to: '/07-phu-huynh-dong-hanh/bai-mo-dau', label: '👨‍👩‍👧 Góc Phụ huynh', position: 'right'},
        {to: '/09-cong-cu-va-bieu-mau/bai-mo-dau', label: '🛠️ Công cụ', position: 'right'},
      ],
    },
  },
};

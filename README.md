# Về ứng dụng


1 Version nuxt 3.8 latest + thư viện ui gồm Bootrap 5.3.2 latest + Element-ui plus + môi trường node >=18
    - Nuxtjs docs: https://nuxt.com/docs/getting-started/introduction
    - Bootstrap 5 docs: https://getbootstrap.com/docs/5.0/getting-started/introduction/
    - Element-ui plus: https://element-plus.org/en-US/

2 Cài đặt:
    - npm i && npm run dev

3 Cấu trúc thư mục dự án
    - assets: Chứa font chữ,ảnh,css chung của dự án
    - components: Các thành phần chia nhỏ từ các page để tái sử dụng
    - composables: Chứa các file custom hook
    - constans: Chứa các tham số config(rule validation,...)
    - middleware: chứa các file middleware bảo vệ,điều hướng web,
    - pages: Chứa các page của SPA (tự nhận route theo đường dẫn folder)
    - plugins: Các file bên trong luôn chạy runtime khi nuxt chạy - hiện đang cấu hình pinia tại đây
    - services: Chứa các service api - bên trong các file là các hàm call api.
    - server: chứa file api.ts gồm các instance service api
    - store: Nơi lưu,quản lý trạng thái state
    - ultil: Gồm các file mà bên trong là các hàm helper dùng chung

4 Lưu ý:
    - Code theo cú pháp vue 3 update mới (Đối với các màn hình làm mới)
    - Sử dụng arrow function (các code mới)
    - Ui kết hợp linh hoạt bootstrap và element ui

5 Luồng hoạt động:
    - Mô tả sơ bộ: Sau khi các config được import,setup ở file nuxt.config -> app.vue -> pages/index.js (Mặc định đường dẫn http://your_url sẽ đi vào file pages/index.vue)
    - Vd tạo 1 page pages/users/list.vue thì đường dẫn sẽ là http://your_url/users/list

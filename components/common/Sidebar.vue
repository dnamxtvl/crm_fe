<template>
  <ul class="menu-inner py-1">
    <!-- Apps & Pages -->
    <li class="menu-header small text-uppercase">
      <span class="menu-header-text">Apps &amp; Pages</span>
    </li>
    <nuxt-link class="menu-item" to="/" exact-active-class="active">
      <div class="menu-link">
        <i class="menu-icon tf-icons ti ti-mail"></i>
        <div data-i18n="Email">Email</div>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/chat" exact-active-class="active">
      <div class="menu-link">
        <i class="menu-icon tf-icons ti ti-mail"></i>
        <div data-i18n="Email">Chat</div>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/calender" exact-active-class="active">
      <div class="menu-link">
        <i class="menu-icon tf-icons ti ti-mail"></i>
        <div data-i18n="Email">Calender</div>
      </div>
    </nuxt-link>
  </ul>
</template>

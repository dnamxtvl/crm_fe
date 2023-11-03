<template>
    <div class="navbar-user d-lg-none">
        <div class="dropdown">
            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="avatar-parent-child">
                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle">
                    <span class="avatar-child avatar-badge bg-success"></span>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                <a href="#" class="dropdown-item">Profile</a>
                <a href="#" class="dropdown-item">Settings</a>
                <a href="#" class="dropdown-item">Billing</a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">Logout</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'SidebarMobile'
}
</script>
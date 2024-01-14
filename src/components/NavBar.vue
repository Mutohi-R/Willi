<template>
    <header class="primary-header content-grid">
        <div class="breakout | flex justify-between items-center">
            <div class="logo">
                <router-link to="/">
                    <LogoDark />
                </router-link>
            </div>
            <nav class="primary-nav | flex justify-between items-center grow">
                <ul role="list" class="flex gap-8 mx-auto fs-500 text-clr-purple-600">
                    <li><router-link to="/">Products</router-link></li>
                    <li><router-link to="/">Solutions</router-link></li>
                    <li><router-link to="/contact">Customers</router-link></li>
                    <li><router-link to="/pricing">Pricing</router-link></li>
                    <li><router-link to="/">Company</router-link></li>
                </ul>
                <ul role="list" class="flex gap-4">
                    <li><button class="button" data-type="primary" @click="emitOpenSignup">Sign Up</button></li>
                    <li><button class="button" data-type="secondary" @click="emitOpenLogin">Log In</button></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    import LogoDark from '../components/icons/LogoDark.vue'

    // const props = defineProps(['isRegister', 'toggleIsRegister']);
    const emit = defineEmits(['openSignup', 'openLogin']);

    const emitOpenSignup = () => {
        emit('openSignup');
    }
    
    const emitOpenLogin = () => {
        emit('openLogin');
    }
</script> 

<style scoped>
    .primary-header {
        padding: 0.75rem 0;
        box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

        position: relative;
    }
</style>
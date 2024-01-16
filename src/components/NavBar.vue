<template>
    <header class="primary-header content-grid">
        <div class="breakout | flex justify-between items-center">
            <div class="logo">
                <router-link to="/">
                    <LogoDark />
                </router-link>
            </div>
            <Hamburger class="hamburger | hidden" @click="toggleNav"/>
            <nav id="primaryNav" class="primary-nav | flex justify-between items-center grow">
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

    import Hamburger from './icons/Hamburger.vue';
    import LogoDark from '../components/icons/LogoDark.vue'

    // const props = defineProps(['isRegister', 'toggleIsRegister']);
    const emit = defineEmits(['openSignup', 'openLogin']);

    const emitOpenSignup = () => {
        emit('openSignup');
    }
    
    const emitOpenLogin = () => {
        emit('openLogin');
    }

    const toggleNav = () => {
        primaryNav.toggleAttribute('data-visible');
    }
</script> 

<style scoped>
    .primary-header {
        padding: 0.75rem 0;
        box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

        position: relative;
    }

    @media screen and (max-width: 960px) {
        .primary-nav {
            display: none;
        }

        .hamburger {
            display: block;
            position: fixed;
            inset: 1rem 1rem auto auto;
            z-index: 10;

            &:hover {
                cursor: pointer;
            }
        }

        .primary-nav[data-visible] {
            background-color: burlywood;
            display: grid;
            position: fixed;
            inset: 0 0 0 30%;
        }

        ul[ role='list'] {
            display: grid;
        }
    }
</style>
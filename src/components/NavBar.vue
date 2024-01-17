<template>
    <header class="primary__header content-grid">
        <div class="breakout | flex justify-between items-center">
            <div class="logo">
                <router-link to="/">
                    <LogoDark />
                </router-link>
            </div>
            <Hamburger class="hamburger | hidden" @click="toggleNav"/>
            <nav id="primaryNav" class="primary__nav | flex justify-between items-center grow">
                <ul role="list" class="nav__links | flex gap-8 mx-auto fs-500 text-clr-purple-600">
                    <li><router-link to="/">Products</router-link></li>
                    <li><router-link to="/">Solutions</router-link></li>
                    <li><router-link to="/contact">Customers</router-link></li>
                    <li><router-link to="/pricing">Pricing</router-link></li>
                    <li><router-link to="/">Company</router-link></li>
                </ul>
                <ul role="list" class="nav__actions flex gap-4">
                    <li><button class="button" data-type="primary" @click="emitOpenSignup">Sign Up</button></li>
                    <li><button class="button" data-type="secondary" @click="emitOpenLogin">Log In</button></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { defineEmits } from 'vue';

    import Hamburger from './icons/Hamburger.vue';
    import LogoDark from '../components/icons/LogoDark.vue'

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
    .primary__header {
        padding: 0.75rem 0;
        box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);

        position: fixed;
        top: 0;
        z-index: 10;
        background-color: var(--clr-neutral-100);
        width: 100%;
    }

    @media screen and (max-width: 960px) {
        .primary__nav {
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

        .primary__nav[data-visible] {
            background-color: var(--clr-yellow-100-opaque);
            padding-block: 4rem;
            display: grid;
            justify-content: center;
            align-content: start;
            gap: 3rem;
            position: fixed;
            inset: 0 0 0 30%;
            
        }

        .nav__actions * {
            width: 100%;
        }

        @supports (backdrop-filter: blur(.4em)) {
            .primary__nav[data-visible] {
                backdrop-filter: blur(.3em);
            }
        }

        ul[ role='list'] {
            display: grid;
        }
    }
</style>
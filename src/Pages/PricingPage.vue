<template>
    <nav-bar></nav-bar>
    <main>
        <section>
            <p>Pricing</p>
            <h1>Easily Organize Your work. Start free.</h1>
            <p>Choose the best plan to fit your team’s needs. Get started for free. No credit card required.</p>
        </section>

        <section class="price">
            <div class="price__card">
                <h2>Basic</h2>
                <p>For individuals or teams just getting started with project management.</p>
                <p>$0</p>
                <button class="button" data-type="secondary">Get Started</button>
                <h3>Manage tasks and personal to-dos:</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="price__card">
                <h2>Basic</h2>
                <p>For individuals or teams just getting started with project management.</p>
                <p>$0</p>
                <button class="button" data-type="secondary">Get Started</button>
                <h3>Manage tasks and personal to-dos:</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="price__card">
                <h2>Basic</h2>
                <p>For individuals or teams just getting started with project management.</p>
                <p>$0</p>
                <button class="button" data-type="secondary">Get Started</button>
                <h3>Manage tasks and personal to-dos:</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>

        <section>
            <select name="" id=""></select>
            <option value=""></option>

            <p>Not sure which plan is right for you?</p>
            <p>Get in touch with our tean for more information or take a look at our <span>Walkthrough video</span> for an overview of the most common workflow</p>
        </section>

        <section>
            <img src="" alt="">
            <div>
                <h2>Willi Enterprise</h2>
                <p>For organizations that need centralized visibility, control, and support. Get Willi's powerful, intuitive work management platform with advanced admin features and security at scale.</p>
                <div>
                    <button class="button" data-type="primary">Contact Us</button>
                    <button class="button" data-type="secondary">Learn More</button>
                </div>
            </div>
        </section>

        <section class="faq">
            <h2>Frequently Asked Questions</h2>
        </section>

        <section>
            <p>Join more than 70,000+ companies that manage projects together</p>
            <Companies />
        </section>
    </main>
    <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Companies from '@/components/Companies.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>

</style>
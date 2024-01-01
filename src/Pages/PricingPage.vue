<template>
    <nav-bar></nav-bar>
    <main>
        <section class="pricing__hero | content-grid | grid gap-2 justify-center bg-clr-yellow-100">
            <p class="fs-300 fw-bold text-clr-purple-600 text-center">PRICING</p>
            <h1 class="ff-accent fw-bold fs-2xl text-clr-purple-700 text-center">Easily Organize Your work. Start free.</h1>
            <p class="hero__text text-center mx-auto">Choose the best plan to fit your team’s needs. Get started for free. No credit card required.</p>
        </section>

        <section class="plans | content-grid | bg-clr-neutral-500">
            <div class="price | card__container | breakout even-columns | gap-2">
                <PricingBasic />
                <PricingPremium />
                <PricingBusiness />
            </div>

            <div class="breakout">
                <div class="features | flex justify-between items-center">
                    <p class="fs-600 text-clr-purple-600">Compare all features</p>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5505 0.949491C16.0386 1.43765 16.0386 2.2291 15.5505 2.71726L8.8838 9.38392C8.39565 9.87208 7.60419 9.87208 7.11603 9.38392L0.449369 2.71726C-0.0387869 2.2291 -0.0387869 1.43765 0.449368 0.949491C0.937524 0.461336 1.72898 0.461336 2.21714 0.949491L7.99992 6.73227L13.7827 0.949491C14.2709 0.461335 15.0623 0.461335 15.5505 0.949491Z" fill="#705772"/>
                    </svg>
                </div>

                <p class="fs-400 text-center">Not sure which plan is right for you?</p>
                <p class="connect | fs-400 text-center mx-auto"><button class="button" data-type="tertiary">Get in touch</button> with our team for more information or take a look at our <button class="button" data-type="tertiary">Walkthrough video</button> for an overview of the most common workflow</p>
            </div>
            <article class="breakout">
                <img src="" alt="">
                <div>
                    <h2>Willi Enterprise</h2>
                    <p>For organizations that need centralized visibility, control, and support. Get Willi's powerful, intuitive work management platform with advanced admin features and security at scale.</p>
                    <div>
                        <button class="button" data-type="primary">Contact Us</button>
                        <button class="button" data-type="secondary">Learn More</button>
                    </div>
                </div>
            </article>
        </section>

        

        

        <section class="faq">
            <h2>Frequently Asked Questions</h2>
        </section>

        <section class="content-grid">
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
import PricingBasic from '@/components/PricingBasic.vue';
import PricingPremium from '@/components/PricingPremium.vue';
import PricingBusiness from '@/components/PricingBusiness.vue';

</script>

<style scoped>
.pricing__hero {
    padding-block: 9.8rem;
}

.hero__text {
    max-width: 45ch;
}

.plans {
    padding-block: 6rem;
}

.features {
    border: 1px solid var(--clr-purple-600);
    border-radius: .25rem;
    padding: 1.5rem 2rem;
}

.connect {
    max-width: 60ch;
}

</style>
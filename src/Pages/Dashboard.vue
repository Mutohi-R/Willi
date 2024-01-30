<template>
  <main class="">
    <div class="">
      <div class="dashboard__layout | grid bg-clr-neutral-500">
        <section class="sidebar | grid gap-14 content-start bg-clr-purple-600">
          <div class="toggle | flex justify-start items-center gap-4">
            <HamburgerLight class="hamburger" />
            <LogoWhite class="logo" />
          </div>
          <div class="tabs | grid">
            <div class="flex items-center gap-2 bg-clr-neutral-100">
              <img src="@/assets/images/dashboard.svg" alt="" />
              <p class="text-clr-purple-600">Dashboard</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="@/assets/images/projects.svg" alt="" />
              <p class="text-clr-neutral-100">My Projects</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="@/assets/images/tasks.svg" alt="" />
              <p class="text-clr-neutral-100">Tasks</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="@/assets/images/calendar.svg" alt="" />
              <p class="text-clr-neutral-100">Calendar</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="@/assets/images/teams.svg" alt="" />
              <p class="text-clr-neutral-100">Team Members</p>
            </div>
          </div>
        </section>
        <section class="">
          <dashboard-nav-bar></dashboard-nav-bar>
          <div class="content">
            <div class="content__left | grid gap-4">
              <div class="flex justify-between">
                <h2 class="fw-semibold">Onboarding Projects</h2>
                <p class="fs-300 text-clr-purple-600">View all</p>
              </div>
              <div class="even-columns | gap-6">
                <div
                  class="project__card | grid gap-4 fs-300 text-clr-grey-300 bg-clr-neutral-100"
                >
                  <h2 class="fs-500 text-clr-purple-600">
                    Zara Website Project
                  </h2>
                  <div>
                    <p class="">Task Completed: 0/10</p>
                    <div class="line"></div>
                  </div>
                  <div class="project__users | flex">
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                  </div>
                  <div>
                    <p>Client: <span class="text-clr-error-400">Zara</span></p>
                    <p>Deadline: Mon, 9th May.</p>
                  </div>
                  <button class="button" data-type="tertiary">
                    View Project
                  </button>
                </div>
                <div
                  class="project__card | grid gap-4 fs-300 text-clr-grey-300 bg-clr-neutral-100"
                >
                  <h2 class="fs-500 text-clr-purple-600">Kuda Web Page</h2>
                  <div>
                    <p class="">Task Completed: 10/10</p>
                    <div class="line"></div>
                  </div>
                  <div class="project__users | flex">
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                  </div>
                  <div>
                    <p>
                      Client: <span class="text-clr-success-400">Kuda MFB</span>
                    </p>
                    <p>Deadline: Mon, 9th May.</p>
                  </div>
                  <button class="button" data-type="tertiary">
                    View Project
                  </button>
                </div>
                <div
                  class="project__card | grid gap-4 fs-300 text-clr-grey-300 bg-clr-neutral-100"
                >
                  <h2 class="fs-500 text-clr-purple-600">Fintech App UI</h2>
                  <div>
                    <p class="">Task Completed: 6/10</p>
                    <div class="line"></div>
                  </div>
                  <div class="project__users | flex">
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                    <img src="@/assets/images/hadizah.png" alt="" />
                  </div>
                  <div>
                    <p>
                      Client: <span class="text-clr-info-400">Flutterwave</span>
                    </p>
                    <p>Deadline: Mon, 9th May.</p>
                  </div>
                  <button class="button" data-type="tertiary">
                    View Project
                  </button>
                </div>
              </div>
              <div class="flex justify-between">
                <h2 class="fw-semibold">Tasks</h2>
                <p class="fs-300 text-clr-purple-600">View all</p>
              </div>
              <div class="tasks">
                <div class="task__card | bg-clr-neutral-100">
                  <div class="flex items-start gap-4">
                    <div class="box"></div>
                    <div class="grid items-center gap-2">
                      <p class="fs-400 text-clr-purple-600">
                        Handover Design to Front-end Guys
                      </p>
                      <p class="fs-200 text-clr-grey-300">
                        Deadline: 2nd August 21
                      </p>
                    </div>
                  </div>
                </div>
                <div class="task__card | bg-clr-neutral-100">
                  <div class="flex items-start gap-4">
                    <div class="box"></div>
                    <div class="grid items-center gap-2">
                      <p class="fs-400 text-clr-purple-600">Kippa Dashboard</p>
                      <p class="fs-200 text-clr-grey-300">
                        Deadline: 2nd August 21
                      </p>
                    </div>
                  </div>
                </div>
                <div class="task__card | bg-clr-neutral-100">
                  <div class="flex items-start gap-4">
                    <div class="box"></div>
                    <div class="grid items-center gap-2">
                      <p class="fs-400 text-clr-purple-600">
                        Zuri Landing Page
                      </p>
                      <p class="fs-200 text-clr-grey-300">
                        Deadline: 2nd August 21
                      </p>
                    </div>
                  </div>
                </div>
                <div class="task__card | bg-clr-neutral-100">
                  <div class="flex items-start gap-4">
                    <div class="box"></div>
                    <div class="grid items-center gap-2">
                      <p class="fs-400 text-clr-purple-600">
                        Project Compare Website
                      </p>
                      <p class="fs-200 text-clr-grey-300">
                        Deadline: 2nd August 21
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content__right |">
              <div class="calendar">Calendar to be here</div>
              <div class="grid gap-4">
                <h2 class="fs-300 fw-bold">Schedules</h2>
                <div class="schedules | grid gap-4">
                  <div class="schedule__card | bg-clr-neutral-100">
                    <p class="fs-400">Client Meeting</p>
                    <p class="fs-200">09:00am - 11:30am</p>
                  </div>
                  <div class="schedule__card | bg-clr-neutral-100">
                    <p class="fs-400">Project Presentation</p>
                    <p class="fs-200">09:00am - 11:30am</p>
                  </div>
                  <div class="schedule__card | bg-clr-neutral-100">
                    <p class="fs-400">Design Briefing</p>
                    <p class="fs-200">09:00am - 11:30am</p>
                  </div>
                  <div class="schedule__card | bg-clr-neutral-100">
                    <p class="fs-400">User Interview</p>
                    <p class="fs-200">09:00am - 11:30am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";

import dashboardNavBar from "@/components/DashboardNavBar.vue";
import LogoWhite from "@/components/icons/LogoWhite.vue";
import HamburgerLight from "@/components/icons/HamburgerLight.vue";

const authStore = useAuthStore();
</script>

<style scoped>
.dashboard__layout {
  grid-template-columns: 12rem 1fr;
}

.toggle {
  padding-inline: 1.3rem;
}

.logo {
  width: 5rem;
}

.sidebar {
  padding-block: 0.5rem;
  height: 100%;
  /* position: fixed; */
  left: 0;
  z-index: 10;
}

.tabs > div {
  padding: 1.3rem;
}

.content {
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  gap: 3rem;
  padding: 4rem 2rem;
}

.project__card {
  padding: 2rem 1rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 6px 12px 0px hsla(230, 7%, 78%, 0.3);
}

.project__users > img {
  width: 2.5rem;
}

.project__users > img + img {
  margin-left: -0.5rem;
}

.tasks {
  display: grid;
  gap: 1.5rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "first second"
    "third fourth";
}

.task__card {
  padding: 1.125rem;
  box-shadow: 0px 2px 4px 0px hsla(230, 7%, 87%, 0.6);
  border-radius: 0.5rem;
}

.box {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--clr-purple-600);
  border-radius: 0.25rem;
}

.task__card:first-child {
  grid-area: first;
}

.task__card:nth-child(2) {
  grid-area: second;
}

.task__card:nth-child(3) {
  grid-area: third;
}

.task__card:nth-child(4) {
  grid-area: fourth;
}

.calendar {
    height: 300px;
}

.schedule__card {
    padding: .5rem;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 8px 0px hsla(230, 7%, 78%, 0.4);
}
</style>

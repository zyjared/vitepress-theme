<script setup lang='ts'>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout style="position: relative; z-index: 1;" />
  <ClientOnly>
    <vue-particles
      id="tsparticles" :options="{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.3,
            },
          },
        },
        particles: {
          color: {
            value: [
              '#FAF9F6',
              '#aa73ff',
              '#f8c210',
              '#83d238',
              '#8ED2FF',
              '#33b1f8',
            ],
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: true,
            speed: 0.3,
          },
          number: {
            density: {
              enable: true,
            },
            value: 390,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
            },
            value: { min: 0.2, max: 1 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.6, max: 2 },
          },
          links: {
            color: {
              value: '#FAF9F6',
            },
            enable: true,
            distance: 39,
            width: 0.75,
            opacity: 0.5,
          },
        },
      }"
    />
  </ClientOnly>
</template>

<style>
:root {
  --vp-nav-bg-color: #f6f6f7aa;
  --vp-local-nav-bg-color: #f6f6f7aa;
  --vp-sidebar-bg-color: #f6f6f7;
}

.dark {
  --vp-nav-bg-color: #161618aa;
  --vp-local-nav-bg-color: #161618aa;
  --vp-sidebar-bg-color: #161618;
}

@media (min-width: 960px) {
  :root {
    --vp-sidebar-bg-color: #f6f6f7aa;
  }

  .dark {
    --vp-sidebar-bg-color: #161618aa;
  }
}

.is-home ~ .VPFooter,
.VPLocalNav,

.VPNavBar:not(.home.top) .content-body {
  background-color: unset !important;
}

.VPSidebar .curtain,
.VPLocalNav .container {
  background-color: var(--vp-nav-bg-color);
  backdrop-filter: blur(2px);
}

.VPLocalNav {
  border-bottom: unset !important;
}

.VPLocalNav .container {
  border-bottom: 1px solid var(--vp-c-gutter);
}
</style>

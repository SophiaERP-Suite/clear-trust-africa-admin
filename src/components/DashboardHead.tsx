// src/components/DashboardHead.tsx
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'

const settingsConfig = {
  saveLocal: "sessionStorage",
  storeKey: "quisetting-tailwind",
  setting: {
    app_name: "Qompac UI",
    theme_scheme_direction: "ltr",
    theme_scheme: "light",
    theme_style_appearance: [],
    theme_font_size: "theme-fs-md",
    page_layout: "container",
    sidebar_color: "sidebar-white",
    sidebar_type: [],
    sidebar_menu_style: "sidebar-default navs-rounded-all"
  }
}

function DashboardHead() {
  useEffect(() => {
    // Load template scripts after component mounts
    const scripts = [
      '/assets/js/core/libs.min.js',
      '/assets/js/core/external.min.js',
      '/assets/js/plugins/alpine.js',
      '/assets/js/qompac-ui.js',
      '/assets/vendor/choicejs/script/choices.min.js',
    ]

    const loadedScripts: HTMLScriptElement[] = []

    scripts.forEach(src => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
      loadedScripts.push(script)
    })

    // Cleanup
    return () => {
      loadedScripts.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      })
    }
  }, [])

  return (
    <Helmet>
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Heebo&display=swap" rel="stylesheet" />
      
      {/* Settings Meta */}
      <meta 
        name="setting_options" 
        content={JSON.stringify(settingsConfig).replace(/"/g, '&quot;')} 
      />
      
      {/* Favicon */}
      <link rel="shortcut icon" href="/assets/images/favicon.ico" />
      
      {/* Vendor CSS */}
      <link rel="stylesheet" href="/assets/vendor/swiper-slider/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/vendor/sweetalert2/dist/sweetalert2.min.css" />
      <link rel="stylesheet" href="/assets/vendor/uppy/uppy.min.css" />
      <link rel="stylesheet" href="/assets/vendor/quill/quill.snow.css" />
      <link rel="stylesheet" href="/assets/vendor/flatpickr/dist/flatpickr.min.css" />
      <link rel="stylesheet" href="/assets/vendor/choicejs/style/choices.min.css" />
      <link rel="stylesheet" href="/assets/vendor/sheperd/dist/css/sheperd.css" />
      
      {/* Core CSS */}
      <link rel="stylesheet" href="/assets/css/core/libs.min.css" />
      <link rel="stylesheet" href="/assets/css/tailwind.css?v=1.0.0" />
      <link rel="stylesheet" href="/assets/css/responsive.css?v=1.0.0" />
    </Helmet>
  )
}

export default DashboardHead
🚀 Automatización de Login, OTP y Redención – Terpel (Playwright + TypeScript)
📌 Descripción general

Este repositorio contiene un ejercicio de automatización E2E desarrollado con Playwright y TypeScript, cuyo objetivo es validar el flujo principal de un usuario en una página de pruebas de Terpel.

El flujo automatizado incluye:

Inicio de sesión

Ingreso de código OTP

Acceso exitoso a la aplicación

Redención de un producto

Proyecto desarrollado con fines técnicos y demostrativos.

🧪 Flujo automatizado

Acceso a la página de pruebas de Terpel

Login con usuario y contraseña

Ingreso y validación del código OTP

Navegación interna de la aplicación

Redención de un producto

Validación de la confirmación del proceso

🛠️ Tecnologías utilizadas

Playwright

TypeScript

Node.js

NPM

📁 Estructura del proyecto
├── tests/                  # Casos de prueba automatizados
├── pages/                  # Page Objects
├── utils/                  # Utilidades y helpers
├── playwright.config.ts    # Configuración de Playwright
├── tsconfig.json           # Configuración TypeScript
├── package.json            # Dependencias y scripts
└── README.md               # Documentación

⚙️ Requisitos previos

Node.js (v18 o superior)

NPM

📥 Instalación
npm install

▶️ Ejecución de pruebas

Ejecutar todas las pruebas:

npx playwright test


Ejecutar en modo UI:

npx playwright test --ui


Ejecutar en un navegador específico:

npx playwright test --project=chromium

📊 Reportes
npx playwright show-report

⚠️ Consideraciones

Proyecto diseñado para ambiente de pruebas

Credenciales y OTP no productivos

Flujo sujeto a datos de prueba

Uso exclusivamente demostrativo

👤 Autor

Edgar Guzmán
QA Automation Engineer | Playwright

# Automatización de Pruebas E2E con Playwright

## Integrantes

| Nombre                           | No. de Control |
| -------------------------------- | -------------- |
| Joel Josafat Hernández Saucedo   | 20121000       |
| Kevin Alejandro Cuevas Crisantos | 21121503       |
| Cristian Mercado Martin          | 22120694       |
| Cristian David Nuñez Cambron     | 22120701       |
| Dylan Barranco Vargas            | 22120632       |

---

## Descripción

Este proyecto implementa pruebas End-to-End (E2E) utilizando Playwright y TypeScript sobre la plataforma de práctica para automatización web Automation Exercise.

El objetivo es validar distintos flujos funcionales de una aplicación de comercio electrónico mediante pruebas automatizadas, aplicando el patrón de diseño Page Object Model (POM) para mejorar la mantenibilidad, reutilización y organización del código.

Automation Exercise es una plataforma diseñada para la práctica de automatización de pruebas web y API Testing para ingenieros QA.

---

## Tecnologías Utilizadas

- Node.js
- TypeScript
- Playwright
- Page Object Model (POM)
- Git
- GitHub

---

## Arquitectura del Proyecto

```text
e2e-automation/
│
├── fixtures/
│   └── users.json
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── SignupPage.ts
│   ├── ProductsPage.ts
│   └── CartPage.ts
│
├── tests/
│   ├── home.spec.ts
│   ├── signup.spec.ts
│   ├── login.spec.ts
│   ├── invalid-login.spec.ts
│   ├── search-product.spec.ts
│   ├── cart.spec.ts
│   └── remove-from-cart.spec.ts
│
├── utils/
│   ├── constants.ts
│   └── generateUser.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Patrón de Diseño Utilizado

### Page Object Model (POM)

Se implementó el patrón Page Object Model para encapsular la lógica de interacción con cada página del sistema.

Beneficios:

- Reutilización de código
- Mayor mantenibilidad
- Menor duplicación
- Separación entre lógica de negocio y pruebas
- Escalabilidad del proyecto

---

## Casos de Prueba Implementados

### 1. Verificación de Página Principal

Archivo:

```text
tests/home.spec.ts
```

Objetivo:

- Verificar que la página principal cargue correctamente.
- Confirmar que el título del sitio sea visible.

---

### 2. Registro de Usuario

Archivo:

```text
tests/signup.spec.ts
```

Objetivo:

- Crear un usuario nuevo.
- Completar el formulario de registro.
- Verificar la creación exitosa de la cuenta.

Este escenario corresponde al Test Case 1 de Automation Exercise.

---

### 3. Inicio de Sesión Correcto

Archivo:

```text
tests/login.spec.ts
```

Objetivo:

- Iniciar sesión con credenciales válidas.
- Verificar autenticación exitosa.

Corresponde al Test Case 2.

---

### 4. Inicio de Sesión Incorrecto

Archivo:

```text
tests/invalid-login.spec.ts
```

Objetivo:

- Intentar autenticación con credenciales inválidas.
- Validar mensaje de error.

Corresponde al Test Case 3.

---

### 5. Búsqueda de Productos

Archivo:

```text
tests/search-product.spec.ts
```

Objetivo:

- Buscar productos mediante el buscador.
- Verificar resultados relacionados con la búsqueda.

Corresponde al Test Case 9.

---

### 6. Agregar Producto al Carrito

Archivo:

```text
tests/cart.spec.ts
```

Objetivo:

- Agregar un producto al carrito.
- Verificar que el producto aparezca en el carrito.

Basado en los escenarios de Add Products in Cart.

---

### 7. Eliminar Producto del Carrito

Archivo:

```text
tests/remove-from-cart.spec.ts
```

Objetivo:

- Eliminar un producto agregado previamente.
- Confirmar que desaparezca del carrito.

Corresponde al Test Case 17.

---

## Instalación

### Clonar repositorio

```bash
git clone <url-del-repositorio>
cd e2e-automation
```

### Instalar dependencias

```bash
npm install
```

### Instalar navegador Chromium

```bash
npx playwright install chromium
```

---

## Ejecución de Pruebas

### Ejecutar toda la suite

```bash
npm run test:e2e
```

### Ejecutar interfaz gráfica

```bash
npm run test:ui
```

### Mostrar reporte HTML

```bash
npm run report
```

---

## Resultados Esperados

La suite completa ejecuta siete pruebas automatizadas:

- Home
- Registro
- Login correcto
- Login incorrecto
- Búsqueda de productos
- Agregar al carrito
- Eliminar del carrito

Resultado esperado:

```text
7 passed
```

---

## Sitio Bajo Prueba

Automation Exercise

[https://automationexercise.com](https://automationexercise.com)

Plataforma utilizada para la práctica de automatización de pruebas web y API Testing.

---

## Conclusiones

Mediante la utilización de Playwright y TypeScript se automatizaron diversos flujos funcionales de una aplicación de comercio electrónico.

La implementación del patrón Page Object Model permitió desarrollar una solución modular, mantenible y escalable, facilitando la automatización de procesos de autenticación, búsqueda de productos y gestión de carrito de compras mediante pruebas End-to-End.

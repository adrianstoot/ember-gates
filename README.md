# Ember Gates · Arena de duelos

> *Duelos de estrategia en tiempo real. Cinco cartas. Una fortaleza. Tu decisión.*

Juego de estrategia y arena táctica 1v1 en 3D en tiempo real (estilo Clash Royale) desarrollado con **Three.js** y renderizado WebGL/WebGPU.

---

## 🎮 Características

* **Arena de combate 3D**: Renderizado isométrico / cenital cinemático con iluminación en tiempo real y efectos de partículas.
* **Cinco Cartas Tácticas**:
  - Arquero (distancia)
  - Lancero (cuerpo a cuerpo)
  - Caballería (ataque rápido a estructuras)
  - Mago (daño mágico de área)
  - Guardia (tanque defensivo)
* **Torres y Fortaleza**: Sistema de dos torres defensivas laterales y fortaleza central.
* **Economía de Elixir**: Barra de recarga en tiempo real para despliegue estratégico.
* **IA Competitiva**: Oponente autónomo con despliegue reactivo en carriles.
* **PWA**: Soporte como Progressive Web App (`manifest.webmanifest`).

---

## 🚀 Cómo ejecutar en local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir la URL que muestre la terminal (por defecto `http://localhost:5173`).

*(También se puede abrir directamente el archivo `index.html` en un navegador web o servir con cualquier servidor estático).*

---

## 📁 Estructura del Proyecto

* `index.html`: Punto de entrada del juego y contenedor de la arena.
* `favicon.svg`: Icono del juego.
* `manifest.webmanifest`: Configuración PWA para instalación móvil.
* `assets/`:
  - `index-Bz_NFXVk.js`: Bundle de ejecución del juego.
  - `index-readable.js`: Código fuente JavaScript formateado y legible para extender y modificar la lógica.
  - `three-CD3myJm5.js`: Motor Three.js.
  - `index-5rHjN1hB.css`: Estilos visuales de la interfaz de usuario (HUD, cartas, elixir, diálogos).
  - `arena-reference.png`: Textura de la arena de combate.
  - `cards-reference.png`: Ilustraciones y texturas de las cartas.

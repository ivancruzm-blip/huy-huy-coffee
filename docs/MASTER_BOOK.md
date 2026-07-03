# HUY HUY COFFEE
# MASTER_BOOK.md

**Versión:** 1.0 Oficial
**Estado:** Documento Rector del Proyecto

---

# 1. PROPÓSITO

Este documento es la fuente oficial de verdad para HUY HUY Coffee.

Toda decisión de diseño, desarrollo, contenido o arquitectura deberá respetar este documento.

---

# 2. VISIÓN

Construir una marca peruana de café de especialidad reconocida por:

- Origen
- Calidad
- Transparencia
- Diseño
- Experiencia

La marca vende una historia antes que un producto.

---

# 3. FILOSOFÍA

Principios inmutables:

- El origen siempre será el protagonista.
- La calidad prevalece sobre el volumen.
- La landing cuenta una historia antes de vender.
- Menos es más.
- Cada sección aporta información nueva.
- No se duplica contenido.

---

# 4. BRAND BOOK

## Personalidad

- Cercana
- Premium
- Honesta
- Humana
- Serena

## Voz

Comunicar con calma y confianza.

Evitar exageraciones, urgencia artificial y mensajes agresivos.

---

# 5. PÚBLICO OBJETIVO

Consumidores que valoran:

- Café de especialidad
- Productos de origen
- Calidad
- Experiencias auténticas

---

# 6. ARQUITECTURA DEL SITIO

/
├── Landing
├── Productos
├── Historia
├── Blog
├── Contacto
├── Carrito
├── Checkout
└── Dashboard (futuro)

---

# 7. LANDING OFICIAL

Orden aprobado:

1. Header
2. Hero
3. Trust Bar
4. Nuestra Historia
5. Variedades
6. Proceso
7. Testimonios
8. Call To Action
9. Footer

## Decisión oficial

La sección "Featured Collection" queda descartada por duplicar el contenido de "Variedades".

---

# 8. SISTEMA DE DISEÑO

- Inter como tipografía base.
- Diseño minimalista.
- Espaciado consistente.
- Componentes reutilizables.
- Mobile First.
- Sombras suaves.
- Bordes redondeados.
- Fotografías reales como prioridad.

---

# 9. COMPONENTES

Implementados

- Header
- Hero
- TrustBar
- Story
- CoffeeVarieties
- CoffeeProcess
- Testimonials
- CTA

Pendientes

- Footer
- ProductCard
- Cart
- Checkout
- Dashboard

---

# 10. UX

Recorrido emocional:

Curiosidad
→ Confianza
→ Conexión
→ Descubrimiento
→ Convicción
→ Compra

Cada sección responde una única pregunta del usuario.

---

# 11. E-COMMERCE

Flujo:

Landing
→ Catálogo
→ Producto
→ Carrito
→ Checkout
→ Confirmación

Cada producto deberá incluir:

- Historia
- Perfil sensorial
- Altitud
- Proceso
- Notas de cata
- Precio
- Disponibilidad

---

# 12. DASHBOARD

Módulos previstos:

- Productos
- Inventario
- Pedidos
- Clientes
- Blog
- Reportes

---

# 13. QR FOUNDER EDITION

Objetivo:

Permitir que cada bolsa conecte con información del lote y la historia del origen mediante un código QR.

---

# 14. ARQUITECTURA TÉCNICA

Stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- pnpm

Reglas:

- Un componente por archivo.
- Componentes reutilizables.
- Page.tsx solo compone.

---

# 15. BUILD PROCESS

Cada BUILD debe:

1. Leer MASTER_BOOK.md
2. Implementar un único objetivo.
3. No rediseñar componentes aprobados.
4. Verificar compilación.
5. No hacer commit.
6. No hacer push.

---

# 16. CONTROL DE CALIDAD

Checklist:

- Compila.
- Responsive.
- Sin errores de consola.
- Sin contenido duplicado.
- Consistencia visual.
- Documentación actualizada.

---

# 17. ROADMAP

FASE 1
✔ Landing

FASE 2
□ Footer
□ Catálogo
□ Productos

FASE 3
□ Carrito
□ Checkout

FASE 4
□ Dashboard
□ Inventario
□ QR

---

# 18. DEFINICIÓN DE MVP

El MVP estará listo cuando existan:

- Landing completa.
- Footer.
- Catálogo.
- Geisha.
- Típica.
- Compra funcional.
- Responsive.
- SEO básico.

---

# 19. GOBIERNO DEL PROYECTO

Toda decisión seguirá este flujo:

1. Aprobar.
2. Actualizar MASTER_BOOK.md.
3. Implementar.
4. Revisar.
5. Liberar.

Nunca al revés.

---

# 20. PRINCIPIO FINAL

Las conversaciones sirven para explorar ideas.

Las decisiones oficiales viven únicamente en este documento.

Todo desarrollo futuro comienza leyendo este archivo.

FIN.

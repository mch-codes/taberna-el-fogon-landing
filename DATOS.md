# DATOS.md

Textos y datos placeholder del negocio ficticio. Todos los componentes deben
leer sus contenidos conceptualmente de aquí (en la práctica, de
`src/data/textos.ts`, que tiene la versión ES/EN), para mantener
consistencia. Cliente ficticio con fines de portfolio — no es un negocio
real.

## Negocio

- **Nombre:** Taberna El Fogón
- **Eslogan:** Cocina castellana en el corazón de La Latina
- **Propietarios:** Rocío y Jaime, matrimonio, 12 años al frente del
  negocio. Ella lleva la sala, él la cocina.
- **Tipo de cocina:** Cocina tradicional castellana con toque moderno:
  torreznos, croquetas de rabo de toro, cochinillo asado los domingos,
  tarta de queso al horno
- **Aforo:** 40 plazas en sala + terraza en la calle
- **Precio medio:** 25-35 € por persona
- **Objetivo de la página:** conseguir reservas de mesa
- **Dirección (ficticia):** Calle de la Cava Baja, 22, 28005 Madrid (La
  Latina)
- **Teléfono (ficticio):** 911 22 33 44
- **Email (ficticio):** hola@tabernaelfogon.es
- **Instagram (ficticio):** @tabernaelfogon
- **Horario:** Martes a domingo de 12:30 a 16:30 y de 20:00 a 23:30.
  Lunes cerrado.
- **Metro más cercano:** La Latina (Línea 5), a 3 min andando
- **Link de reservas:** https://covermanager.com/placeholder (simula
  integración con CoverManager)
- **Idiomas:** la página es bilingüe ES/EN con un toggle en el header
  (estado en cliente vía `LanguageContext`, sin librerías de i18n ni
  rutas separadas). Español por defecto.

## Carta (14 platos en 3 categorías)

### Entrantes (5)

1. **Torreznos de Soria** — 9,50 €
2. **Croquetas de rabo de toro** — 10,50 € (plato estrella de la casa)
3. **Pimientos de Padrón** — 7,00 €
4. **Morcilla de Burgos con piñones** — 8,50 €
5. **Ensalada de perdiz escabechada** — 11,00 €

### Principales (5)

1. **Cochinillo asado** (solo domingos) — 26,00 €
2. **Rabo de toro estofado al vino tinto** — 19,50 €
3. **Cordero lechal al horno de leña** — 22,00 €
4. **Bacalao confitado con migas** — 18,00 €
5. **Solomillo de ternera a la parrilla** — 21,00 €

### Postres (4)

1. **Tarta de queso al horno** — 6,50 €
2. **Torrija caramelizada** — 6,00 €
3. **Arroz con leche a la antigua** — 5,50 €
4. **Leche frita crujiente** — 5,50 €

Descripciones completas (ES/EN) en `src/data/textos.ts`.

## Reseñas (3, estilo Google)

1. **Marisa G.** (5★) — sobre las croquetas de rabo de toro
2. **Álvaro T.** (5★) — sobre el cochinillo asado de domingo
3. **Nuria P.** (4★) — sobre la tarta de queso al horno

## Ubicación

- Dirección: Calle de la Cava Baja, 22, 28005 Madrid (La Latina)
- Metro: La Latina (Línea 5)
- Horario: Ma-D 12:30-16:30 y 20:00-23:30, lunes cerrado
- Terraza en la calle

## CTAs

- Botón principal: "Reservar mesa" / "Book a table" → link externo de
  reservas (CoverManager placeholder)
- Botón secundario del hero: "Ver la carta" / "See the menu" → ancla a
  `#carta`

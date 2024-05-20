# YouDesign 🎨🕶
<div aling="center">

![Turso Badge](https://img.shields.io/badge/Turso-4FF8D2?logo=turso&logoColor=000&style=flat)

![Next.js Badge](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=whitee)

</div>

Tecnologias utilizadas:
- [**Next.js 14 App Router**](https://nextjs.org/) 
- [**Auth.js v4**](https://authjs.dev/) 
- [**Prisma**](https://prisma.io) 
- [**Turso**](https://turso.tech/) + [**libSQL**](https://github.com/tursodatabase/libsql) - SQLite para producción.
- [**TailwindCSS**](https://tailwindcss.com) + [**shadcn/ui**](https://ui.shadcn.com) & [**Radix Primitives**](https://www.radix-ui.com) - Design System.
- [**Prettier**](https://prettier.io) con [**prettier-plugin-tailwindcss**](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - Formateador de código.



Integrantes:
- 🐉 Irving Geyler Cupul Uc
- 👾 Joar Honorio Ruiz Peraza
- 🐹 Didier Andrey Tec Esquivel



Asesor:
- 👩‍💻 Dr. José Luis López Martínez 

Fecha de entrega
- 20/05/2024

## Introducción


En el siempre cambiante mundo del desarrollo web, la eficiencia en la gestión del diseño es fundamental para el éxito de los proyectos. Los programadores enfrentan el desafío constante de crear sitios web atractivos y funcionales que cumplan con las expectativas de los usuarios y los clientes. En este contexto, la necesidad de herramientas especializadas que faciliten la gestión del diseño se vuelve crucial. La aplicación youDesign surge como una respuesta innovadora a esta necesidad, proporcionando una solución digital integral para la gestión de diseño web.


YouDesign está diseñada para facilitar el flujo de trabajo de los programadores, ofreciendo una plataforma que integra diversas herramientas y funcionalidades para la gestión de datos de diseño. Esta aplicación no solo permite acceder a instrumentos utilizados en proyectos anteriores, sino que también agiliza el acceso a información relevante, fomenta el uso de soluciones digitales y promueve un enfoque más eficiente en el diseño web. Al organizar estos recursos, youDesign busca mejorar la calidad y la eficiencia del proceso de desarrollo web.

## Objetivo del proyecto


El objetivo principal de este proyecto es desarrollar una aplicación web innovadora que sirva de apoyo integral a los programadores en la gestión del diseño web. Esta herramienta tiene como propósito principal facilitar el uso y acceso a instrumentos y datos de proyectos web anteriores, permitiendo a los programadores reutilizar y adaptar soluciones probadas, lo que se traduce en un ahorro significativo de tiempo y esfuerzo.
Además, la aplicación está diseñada para ser ejecutada en cualquier navegador web, asegurando su accesibilidad y usabilidad desde diferentes dispositivos y plataformas. 
Con YouDesign, se espera impulsar a los programadores a adoptar prácticas de diseño más eficientes y efectivas, mejorando la calidad de los proyectos y la satisfacción de los clientes. Al integrar soluciones digitales avanzadas, la aplicación no solo optimiza el proceso de diseño, sino que también promueve un entorno de trabajo más organizado y productivo. Este objetivo central se complementa con el compromiso de mantener la aplicación, garantizando su relevancia y utilidad a largo plazo.

## Diagrama de caso de uso


Este diseño ilustra la interacción entre el actor y casos de uso, resaltando cómo el usuario interactúa con la aplicación web.

![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/UseCase_Diagram0_bueno.jpg)


## Arquitectura Utilizada


4.1 Diagrama de despliegue
 Este diseño ilustra la interacción entre el cliente, el servidor web que alberga la aplicación y la base de datos. Desplegando la aplicación con una arquitectura de tipo monolito con el framework full-stack de React, Nextjs. Ofreciendo los React Server Componentes para renderizado del lado del servidor y la exposición de endpoints para una implementar  la arquitectura REST para manejar solicitudes del lado del cliente. Esto ofrece los beneficios de consultar la base de datos y renderizar de inmediato al cliente. El servicio de base de datos utilizado es Turso, que utiliza SQLite en el Edge para almacenar y recuperar datos con una latencia muy baja.

![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/diagramaDespliegue.png)

## Vistas del proyecto

- Página principal
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/home-web.png)

- Inicio de sesión 
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/login-web.png)

- Registro de usuario
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/registrar-web.png)

- Dashboard de gestión de proyectos
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/dashboar-web.png)

- Página de ajustes de perfil
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/ajustes-cuenta-web.png)

- Creación de proyecto
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/crear-proyecto-web.png)

- Se actualiza la página con los proyectos creados recientemente 
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/proyectos-creados-web.png)

- Venta para la actualización del  proyecto
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/update-proyecto-web.png)

- Página principal de edición del proyecto
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/home-proyecto-web.png)

- Gestión de tipografía del proyecto 
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/proyecto-web-tipografia.png)

- Consulta de recomendación tipográfica basada en Material UI
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/proyecto-web-tipografia-recomendaciones.png)

- Gestión de paleta de colores y verificación con parámetros de la WCAG 
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/proyecto-web-colores.png)

- Gestión de la  accesibilidad del proyecto
![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/proyecto-web-accesibilidad.png)
  
__Casos de uso en acción:__
1. Comprobando las áreas de gestión del proyecto

![Demostración del diseño](https://github.com/Irving-8man/you-design/raw/main/public/final.gif)

2. Completando la checklist de accesibilidad

![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/targests-select.gif)
   
3. Comprobando el contraste de la paleta de colores

![Demostración del diseño](https://github.com/Irving-8man/you-design/blob/main/public/colorCheck.gif) 

## Conclusiones

El desarrollo de youDesign representa un avance significativo en la gestión del diseño web, proporcionando una herramienta integral que  mejora la eficiencia y la calidad del trabajo de los programadores. Al integrar una variedad de funcionalidades en una plataforma accesible desde cualquier navegador, youDesign no solo facilita el acceso y la reutilización de recursos de proyectos anteriores, sino que también optimiza el flujo de trabajo mediante la automatización de tareas clave, como la gestión de tipografías y paletas de colores, y la comprobación de pautas  de accesibilidad.


Los requisitos funcionales definidos aseguran que la aplicación sea completa y centrada en las necesidades del usuario, desde la gestión de cuentas hasta la creación y modificación de proyectos, y la visualización de elementos críticos del diseño. La capacidad de exportar configuraciones de CSS y la visualización de contrastes de color conforme a las pautas W3C son características que resaltan el compromiso de la aplicación con las mejores prácticas de diseño web.


La arquitectura cliente-servidor empleada, con una base de datos eficiente y una aplicación desarrollada en Next.js y alojada en Vercel, asegura que youDesign sea escalable y robusta. Esto garantiza que los programadores puedan confiar en una herramienta que no solo satisface las demandas actuales sino que también está preparada para adaptarse a futuras necesidades.


## Planes a futuros
**YouDesign** como aplicación de escritorio con [**Tauri**](https://tauri.app/) hecha en Rust.  

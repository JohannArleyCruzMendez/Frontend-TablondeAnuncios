# Frontend - Tablón de Anuncios 🖥️

Este es el repositorio del frontend para la aplicación de Tablón de Anuncios. Es una **Single Page Application (SPA)** construida con **React** que consume la API REST para mostrar, crear, editar y eliminar publicaciones.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)



## ✨ Características

* **Visualización de Anuncios:** Muestra todas las publicaciones obtenidas desde el backend en una interfaz limpia.
* **Creación de Nuevos Anuncios:** Un formulario modal permite a los usuarios añadir nuevos títulos, descripciones e imágenes.
* **Edición y Eliminación:** Funcionalidad completa para actualizar y borrar anuncios existentes.
* **Componentes Reutilizables:** La interfaz está construida con componentes modulares de React.
* **Paginación:** Si la lista de anuncios es muy larga, la paginación permite una navegación más cómoda.

---

## 📸 Muestra Visual

<img width="1267" height="782" alt="image" src="https://github.com/user-attachments/assets/2e171f3a-e294-4a62-814f-019faaafb5d1" />
<img width="1445" height="780" alt="image" src="https://github.com/user-attachments/assets/d037ec7d-f5ae-4685-8f85-18ce69b2cc2b" />
<img width="859" height="797" alt="image" src="https://github.com/user-attachments/assets/98d43a4d-60f2-4d2f-864a-3ca3f38c5b45" />
<img width="1101" height="467" alt="image" src="https://github.com/user-attachments/assets/8cb295fb-0878-4196-8462-5bd1bd5138a5" />
<img width="1" height="10" alt="image" src="https://github.com/user-attachments/assets/b40a0094-cd7c-418b-8ee2-9c4bf7957bb4" />
<img width="749" height="681" alt="image" src="https://github.com/user-attachments/assets/42f33703-f0bb-4973-a583-445994bd8478" />
<img width="599" height="693" alt="image" src="https://github.com/user-attachments/assets/66b59cbd-4554-4c0d-bd74-bb7aa0b9ce7a" />
<img width="964" height="384" alt="image" src="https://github.com/user-attachments/assets/6012d7de-877c-4517-b47d-1173f18a901f" />














---

## 🛠️ Stack Tecnológico

* **Librería Principal:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Lenguaje:** JavaScript (JSX)
* **Estilos:** CSS (o especifica si usaste alguna librería como Styled Components, etc.)

---

## ⚙️ Configuración y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina.

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/FrontendaplicacionAvisos.git](https://github.com/tu-usuario/FrontendaplicacionAvisos.git)
    ```

2.  **Navega al directorio:**
    ```bash
    cd FrontendaplicacionAvisos
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Conexión con el Backend:**
    Este proyecto necesita que la [API del backend](URL_DEL_REPOSITORIO_BACKEND) esté corriendo para funcionar. Asegúrate de que el backend esté ejecutándose localmente.

    *Opcional: Si necesitas cambiar la URL a la que apunta el frontend, busca en el código (probablemente en un archivo de configuración o servicio) la URL base de la API y ajústala si es necesario.*

5.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación se abrirá automáticamente en tu navegador, generalmente en `http://localhost:5173`.

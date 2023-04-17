---
title: Taller de React Native con Expo
date: 2023-03
author: Irwing Naranjo <khalisser@gmail.com>
category: Workshops
---

### Introducción

Expo es una plataforma de código abierto para hacer aplicaciones nativas para Android, iOS y la web con JavaScript y React. Expo se basa en React Native, pero agrega funcionalidades y herramientas que hacen más fácil el desarrollo de aplicaciones.

¿Por qué usar Expo? Porque nos permite crear aplicaciones nativas para Android e iOS sin tener que instalar y configurar Xcode o Android Studio. Además, nos permite crear aplicaciones web con React Native para Android, iOS y la web con una sola base de código.

Principales caracteristicas que encontramos en Expo: 

- Live Reload: permite ver los cambios realizados en el código en tiempo real, sin necesidad de reiniciar la aplicación.

- Biblioteca de componentes: Expo cuenta con una amplia variedad de componentes predefinidos que se pueden utilizar en la construcción de la interfaz de usuario de la aplicación.

- Soporte para notificaciones push: Expo facilita la integración de notificaciones push en las aplicaciones para iOS y Android.

- Integración con servicios de terceros: Expo se integra con servicios de terceros, como por ejemplo Google Maps, Facebook o Twitter, lo que simplifica la integración de estas funcionalidades en las aplicaciones.

- Expo Snack: permite probar y compartir rápidamente fragmentos de código de la aplicación a través de un navegador web.

Algunos de los casos de uso en los que se puede implementar son: 

- Proyectos que requieren una implementación rápida en múltiples plataformas.

- Proyectos que requieren una funcionalidad específica que está disponible en Expo, como la geolocalización, la realidad aumentada o las notificaciones push.

- Proyectos en los que no se dispone de un equipo de desarrollo nativo para cada plataforma.

- Proyectos con un alcance limitado y un presupuesto ajustado.

Sin embargo Expo no es la mejor opción si son:

- Proyectos con un nivel de complejidad alto en cuanto a funcionalidades.

- Proyectos que necesiten un control más granular sobre la configuración de la aplicación.

- Proyectos en los que se necesite acceder a características específicas de la plataforma que no están disponibles en Expo.

- Proyectos que requieren el máximo rendimiento y optimización.

<br />

### Instalación

La instalación de Expo es un proceso sencillo y rápido. Sigue estos pasos:

> Asegúrate de tener Node.js instalado en tu sistema. Puedes verificar si tienes Node.js instalado escribiendo `node -v` en tu terminal. Si no lo tienes instalado, descárgalo desde el sitio web oficial de [Node.js](https://nodejs.org) e instálalo en tu sistema.

- Crea una nueva aplicación con Expo. Esto creará una nueva carpeta llamada `expo-store` en tu directorio actual.

```bash
npx create-expo-app expo-store
```

- Inicia la aplicación. Esto iniciará el servidor de desarrollo de Expo y te permitirá seleccionar el dispositivo en el que quieres ejecutar la aplicación.

```bash
cd expo-store
expo start
```

- También puedes iniciar la aplicación en un dispositivo específico. Esto iniciará el servidor de desarrollo de Expo y te permitirá seleccionar el dispositivo en el que quieres ejecutar la aplicación.

```bash
expo start --ios
expo start --android
```

<br />

### Estructura del proyecto

```
expo-store/
  ├── assets/
  │   └── images/
  │       ├── adaptive-icon.png
  │       ├── favicon.png
  │       ├── icon.png
  │       └── splash.png
  ├── node_modules/
  ├── App.js
  ├── app.json
  ├── package.json
  ├── README.md
  ├── babel.config.js
  └── .gitignore
```

A continuación, se detalla la función de cada directorio y archivo:

`assets/`: Este directorio contiene los recursos multimedia utilizados en la aplicación, como imágenes. En este caso, incluye diferentes variantes de los iconos y splash screens de la aplicación.

> Para mas información de la configuración de los iconos y splash screens de la aplicación, puedes consultar la documentación oficial de Expo. [Ver documentación](https://docs.expo.dev/guides/splash-screens/)

`node_modules/`: Este directorio contiene todas las dependencias y módulos necesarios para que funcione el proyecto. No se debe modificar ni eliminar manualmente.

`App.js`: Este es el archivo principal de la aplicación, que contiene el código fuente en JavaScript de la misma.

`app.json`: Este archivo es utilizado por Expo para la configuración de la aplicación, y puede incluir información como el nombre de la aplicación, la descripción, el autor, las dependencias y otras opciones de configuración.

> Hay muchas configuraciones que se pueden realizar en este archivo, te recomendamos consultar la documentación oficial de Expo para conocer todas las opciones disponibles. [Ver documentación](https://docs.expo.dev/versions/latest/config/app/)

`package.json`: Este archivo contiene la información sobre las dependencias del proyecto, así como los scripts de construcción, testeo y ejecución de la aplicación.

`README.md`: Este es un archivo de texto plano que contiene información sobre el proyecto, como instrucciones de instalación y uso.

`babel.config.js`: Este archivo es utilizado por Babel, una herramienta de compilación de JavaScript, para configurar cómo se deben transformar los archivos fuente de la aplicación.

`.gitignore`: Este archivo indica a Git, el sistema de control de versiones utilizado por el proyecto, qué archivos y directorios se deben ignorar durante el proceso de seguimiento de cambios. En este caso, se ignoran los archivos y directorios generados automáticamente por Expo y otros entornos de desarrollo.

<br />

### Configurando editor

Agregamos una configuración básica para que nuestro editor de código nos ayude a escribir código de la mejor manera posible. Principalmente para mantener una buena indentación y posterior instalaremos un linter para que nos ayude a mantener menos errores en nuestro código.

Crea un fichero en la raíz del proyecto llamado `.editorconfig` y agrega la siguiente configuración:

```
root = true
[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 2
```

<br /

### Configuración test estáticos

Los tests estáticos son utilizados para identificar y corregir errores de sintaxis, estilo y otros problemas en el código fuente en tiempo de programación. Los test estáticos analizan el código fuente y ofrecen sugerencias para mejorar su calidad, legibilidad y mantenibilidad.

En nuestro caso instalaremos Eslint el cual nos ayudará a mantener un código limpio y ordenado. Es una buena práctica que utilices linters en todos tus proyectos así te darás cuenta de muchos errores mucho antes de ir a producción o ejecutar el código.

***Instalación de Eslint***

```
npx eslint --init
```

Durante el proceso de instalación, se te pedirá que selecciones las opciones de configuración de Eslint. Puedes utilizar las opciones predeterminadas, o personalizarlas según tus necesidades.

```
Need to install the following packages: eslint Ok to proceed? (y)

You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages: @eslint/create-config Ok to proceed? (y)

How would you like to use ESLint?
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

What type of modules does your project use?
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

Which framework does your project use?
❯ React
  Vue.js
  None of these

Does your project use TypeScript? › No / Yes
❯ No
  Yes

Where does your code run?  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

How would you like to define a style for your project?
❯ Use a popular style guide
  Answer questions about your style

Which style guide do you want to follow?
  Airbnb: https://github.com/airbnb/javascript
❯ Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo

What format do you want your config file to be in?
❯ JavaScript
  YAML
  JSON

Would you like to install them now? › No / Yes
  No
❯ Yes

Which package manager do you want to use? …
❯ npm
  yarn
  pnpm
```

Instalamos una dependencia extra como plugin de Eslint.

```
npm install eslint-plugin-react-native@latest --save-dev
```

***Agregarndo algunas reglas de Eslint***

En el archivo `.eslintrc.js` agregamos las siguientes reglas:

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
```

Hay dos formas de correr los test estáticos, la primera es desde la terminal y es principalmente usada para los pipelines de integración continua, la segunda es desde el editor de código, en este caso usaremos VSCode. Así que veremos las dos configuraciones:

***Configuración del comando `lint` para uso en la terminal***

Configuración del comando `lint` en el `package.json`, en caso de que no se encuentren los comandos en el archivo, agregarlos.

```
"scripts": {
  ...,
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

> Si te preguntas cual es la diferencia entre `lint` y `lint:fix`, la primera es para correr los test estáticos y la segunda es para correr los test estáticos y corregir de forma automática los errores que linter pueda resolver.

***Configuración del linter en VSCode***

Para configurar el linter en VSCode, debemos instalar la extensión de ESLint, la cual nos ayudará a correr los test estáticos desde el editor de código.

Una vez instalada la extensión, podemos mejorar su funcionamiento agregando algunas configuraciones al editor, para ello debemos abrir el archivo de configuración de de usuario, en Mac es `CMD + p` y escribir `>>Preferences: Open User Settings (JSON)`.

```
{
  ...
  "eslint.format.enable": true,
  "eslint.debug": true,
  "eslint.codeActionsOnSave.rules": null,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript", // Enable .ts
    "typescriptreact" // Enable .tsx
  ],
  ...
}
```

> Esta configuración es opcional

Y como extensión de complemento puedes instalar Error Lens, la cual nos ayudará a identificar los errores de sintaxis y estilo en el código de una forma más visual.

<br />


### Estilos

Para la estilización de la aplicación usaremos [NativeWind](https://www.nativewind.dev/quick-starts/expo), una librería que nos permite utilizar los estilos de [Tailwind CSS](https://tailwindcss.com/) en React Native.

Para instalar NativeWind, debemos ejecutar el siguiente comando:

```
npm install nativewind
npm install -D tailwindcss
```

Una vez instalada la librería, debemos configurar Tailwind CSS, para ello debemos ejecutar el siguiente comando:

```
npx tailwindcss init
```

Este comando creará un archivo `tailwind.config.js` en la raíz del proyecto, el cual debemos configurar de la siguiente manera:

```
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Ahora debemos agregar nativeWind a nuestro archivo `babel.config.js`:

```
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"]
  };
};
```

Listo, ahora podemos usar los estilos de Tailwind CSS en nuestro proyecto.

<br />

### Screens y componentes de la aplicación

| Fichero          | Tipo        | Descripción                                                                                       |
| ---------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| banner.jsx       | Componente  | Componente que muestra una imagen publicitaria                                                    |
| header.jsx       | Componente  | Componente de encabezado de la aplicación                                                          |
| card.jsx         | Componente  | Componente que muestra la información de un producto en una tarjeta                                |
| empty-products.jsx | Componente | Componente que se muestra cuando no hay productos que mostrar en la lista                         |
| config.js        | Archivo     | Archivo de configuración que contiene variables y constantes utilizadas en toda la aplicación     |
| productsHook.js  | Hook (custom)        | Hook personalizado que maneja la lógica relacionada con los productos en la aplicación            |
| home-screen.js   | Pantalla    | Pantalla principal de la aplicación, que muestra la lista de productos y el banner publicitario   |
| product-screen.js| Pantalla    | Pantalla que muestra información detallada sobre un producto seleccionado por el usuario         |
| AppStack.js      | Stack       | Componente que define la navegación entre pantallas de la aplicación mediante un stack de pantallas |

<br />

### Navegación

Para la navegación entre pantallas de la aplicación usaremos [React Navigation](https://reactnavigation.org/), una librería que nos permite crear navegación entre pantallas de una forma sencilla y rápida.

Para instalar React Navigation, debemos ejecutar el siguiente comando:

```
npm install @react-navigation/native @react-navigation/native-stack
```

En nuestro caso usaremos los stacks pero también podemos usar otros tipos de navegación como tabs, drawer, etc. puedes ver más información en la [documentación](https://reactnavigation.org/docs/stack-navigator).

Ya configurado React Navigation, vamos a explicar como funciona la navegación en nuestra aplicación.

```
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home-screen';
import ProductScreen from '../screens/product-screen';

const Stack = createNativeStackNavigator();

export default AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animation: 'none' }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

En el código anterior podemos ver que tenemos un componente `AppStack` que es el que se encarga de manejar la navegación entre pantallas, este componente se encuentra dentro de la carpeta `src/components` y es importado en el archivo `App.js`.

En el componente `AppStack` tenemos un componente `NavigationContainer` que es el que se encarga de manejar la navegación entre pantallas, este componente es el que se encarga de mostrar la pantalla actual y de realizar los cambios.

En el componente `NavigationContainer` tenemos un componente `Stack.Navigator` que es el que se encarga de manejar el stack de pantallas, en este caso tenemos dos pantallas, la pantalla principal `Home` y la pantalla de detalle de producto `Product`.

En el componente `Stack.Navigator` tenemos dos componentes `Stack.Screen` que son los que se encargan de mostrar las pantallas, en este caso tenemos dos pantallas, la pantalla principal `Home` y la pantalla de detalle de producto `Product`.

***Enviando parámetros entre pantallas***

Algo muy importante a tener en cuenta es que podemos enviar parámetros entre pantallas, ahora veremos como al seleccionar un producto en la pantalla principal, en vez de ahcer un fetch para obtener la información del producto, podemos enviar la información del producto como parámetro a la pantalla de detalle de producto.

> No estamos evaluando la eficiencia de esta solución, solo estamos mostrando como se puede enviar parámetros entre pantallas.

```
import ...
import { useNavigation } from '@react-navigation/native'

export default ProductCard = ({ product }) => {

  const navigation = useNavigation();
  
  ...
  
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product })}>
      ...
    </TouchableWithoutFeedback>
  );
};
```

Podemos ver que en el componente `ProductCard` tenemos un componente `TouchableWithoutFeedback` que es el que se encarga de manejar el evento de toque sobre el componente, cuando el usuario toca el componente, se ejecuta la función `onPress` que se encarga de navegar a la pantalla de detalle de producto. En este caso estamos enviando el producto como parámetro a la pantalla de detalle de producto.

```
import ...
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.product;

  return (
    ...
  );
}

...
```

En el componente `ProductScreen` podemos ver que tenemos un componente `useRoute` que es el que se encarga de obtener los parámetros que se envían a la pantalla, en este caso estamos obteniendo el producto que se envía como parámetro a la pantalla de detalle de producto.

De esta forma podemos enviar parámetros entre pantallas.

<br />

### Fetching

Para realizar las peticiones a la API usaremos el API Fetch de JavaScript, analizaremos el código de la función `getProducts` que se encuentra en el archivo `productsHook.js`:

```
import { useState, useEffect } from 'react';
import config from '../config.js';

export default productsHook = () => {
  
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    fetch(`${config.URL_WEB}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  
  return products;
}
```

En el código anterior podemos ver que tenemos una función `productsHook` que es la que se encarga de manejar la lógica relacionada con los productos, en este caso tenemos una función `getProducts` que es la que se encarga de realizar la petición a la API para obtener los productos.

Esta función es utilizada en el componente `HomeScreen`:

```
import ...
import productsHook from '../hooks/productsHook';

const HomeScreen = () => {

  const products = productsHook();

  if (products == null) {
    return (
      ...
    )
  }

  return (
    ...
  );
}

...
```

> Es importante destacar que usar un custom hook permite reutilizar la lógica relacionada con los productos en toda la aplicación. Pero se pudo realizar la petición a la API directamente en el componente `HomeScreen` sin necesidad de crear un custom hook.

<br />

### Repositorio

Después de haber leído la guía, puedes descargar el proyecto completo desde el siguiente enlace: [Descargar proyecto](https://github.com/hackaboss-irwing/expo-app) y empezar a analizar todo el código.

Para instalar el proyecto debes:

1. Clonar el repositorio

```
git clone https://github.com/hackaboss-irwing/expo-app
```

2. Instalar las dependencias

```
npm install
```

3. Ejecutar el proyecto

```
expo start
```

<br />

### Recomendaciones

1 - Antes de empezar a hacer código lee la guía completa, esto te ayudará a entender mejor el proyecto.

2 - Analiza el código de la aplicación creada, y haz cambios para que puedas entender mejor como funciona, intenta crear otra pantalla o agregar un filtro de busqueda.

3 - Cuando tengas la recomendación 1 y 2 hechas, intenta crear una aplicación desde cero, y usa el proyecto como referencia.

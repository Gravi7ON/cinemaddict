# Руководство по работе с проектом

## Структура проекта

---

_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`, `package.json`._

---

### Клонируйте репозиторий на свой компьютер

<img width="769" alt="SSH" src="https://cloud.githubusercontent.com/assets/259739/20264180/42704126-aa7b-11e6-9ab4-73372b812a53.png">

Клонировать репозиторий можно так:

```
git clone SSH-адрес_вашего_форка
```

Команда клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

```bash
npm install
```

Команда запустит процесс установки зависимостей проекта из **npm**.

### public

Директория для размещения статичных ресурсов (шрифты, стили, изображения и так далее). Корневая директория проекта.

### src

В директории размещаются исходный код проекта: компоненты, файлы с тестами, модули и так далее.

## Сценарии

После создания проекта вам доступны следующие сценарии.

### Запуск проекта

```bash
npm start
```

После запуска, приложение доступно для просмотра в браузере по адресу [http://localhost:3000](http://localhost:3000).

При сохранении изменений, проект перезапускается и обновляется в браузере. Таким образом, вы можете следить за разработкой проекта в режиме реального времени.

### Проверка линтером

```bash
npm run lint
```

Запуск проверки проекта статическим анализатором кода **ESLint**.

Анализ кода производится только в файлах, которые находятся в директории `src`.

### Сборка проекта

```bash
npm run build
```

Запуск сборки приложения в продакшен режиме.

В процессе сборки приложения, код приложения оптимизируется и минимизируется, для достижения наилучшей производительности.

Во время выполнения инструкций по сборке проекта, в корне проекта создается директория `build`, в которую будут помещены результирующие файлы. После сборки проект готов к публикации.

```bash
npm run dev
```

Запуск сборки приложения в режиме разработки.

В процессе сборки приложения, код приложения не оптимизируется и не минимизируется.

Во время выполнения инструкций по сборке проекта, в корне проекта создается директория `build`, в которую будут помещены результирующие файлы.

```bash
npm run observe
```

Запуск сборки приложения в режиме разработки, работает также как `npm run dev`, но при каждом сохранении кода производит самостоятельную пересборку проекта.

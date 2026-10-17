# Наше меню

Семейный планировщик: предпочтения и кухонная техника, рецепты, меню на неделю (завтрак, обед, ужин), список покупок на выбранные дни и учёт трат в лари.

Сайт состоит из обычных файлов и работает на GitHub Pages. Данные семьи хранятся в бесплатной базе Firebase (Google), вход через Google-аккаунт.

## Первоначальная настройка (один раз)

1. Зайдите на https://console.firebase.google.com, нажмите «Создать проект», назовите его, например, `nashe-menu`. Google Analytics можно отключить.
2. В проекте откройте **Build → Firestore Database → Create database**, выберите регион `europe-west` и режим **production**.
3. Там же во вкладке **Rules** вставьте содержимое файла `firestore.rules`, впишите Google-почты всех членов семьи и нажмите **Publish**.
4. Откройте **Build → Authentication → Get started → Sign-in method → Google** и включите его.
5. В **Authentication → Settings → Authorized domains** добавьте адрес сайта, например `ваш-логин.github.io`.
6. Откройте **Project settings (шестерёнка) → General → Your apps → Web (`</>`)**, зарегистрируйте приложение и скопируйте объект `firebaseConfig`.
7. Вставьте эти значения в `firebase-config.js` вместо `null`.

## Публикация

В репозитории на GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, ветка `main`, папка `/ (root)`. Через минуту сайт будет доступен по адресу `https://ваш-логин.github.io/nashe-menu/`.

## Установка на телефон

- iPhone: откройте сайт в Safari → «Поделиться» → «На экран Домой».
- Android: откройте сайт в Chrome → меню → «Установить приложение».

## Первый запуск

Войдите через Google и нажмите «Загрузить стартовые рецепты»: в базу добавятся 42 рецепта из `data/recipes.json`. Предпочтения, технику и бюджет нужно задать заново во вкладке «Предпочтения».
